
class CanvasUpdater {

  private id: number;

  public start(callback: Function) {
    this.id = setInterval(callback, 1000 / 15);
  }

  public stop() {
    clearInterval(this.id);
  }
}

/////////////////////////
////  RECEIVE CALLS   ////
/////////////////////////

let canvasUpdater = new CanvasUpdater();
var annotationWidth = 28; 
var nodeIDToAnnotationNodeID = []; 
var annotationNodes = []; 
var annotationLayerName = "**~~ Focus-order annotations ~~**"; 

figma.showUI(__html__, {width: 375, height: 480 });
figma.ui.onmessage = async (msg) => {

  var message = {}; 
 
  if (msg.type === 'add-focus') {
    var names = []; 
    var ids = []; 
    var selections = figma.currentPage.selection; 
    
    if (selections.length > 0) {
      for (let selection of selections) {
        if (selection.getSharedPluginData("a11y", "type") != "annotation") {
          names.push(selection.name); 
          ids.push(selection.id); 
        } 
      }
  
      message = { 
        type: msg.type, 
        loading: false,
        names: names,
        ids: ids,
      }; 
    }
  } else if (msg.type === 'create-annotationUI') {
    var nodeToAnnotate = <FrameNode> figma.getNodeById(msg.id); 
    // double creation of annotations isn't allowed
    if (nodeToAnnotate.getSharedPluginData("a11y", "type") !== "annotation") {
      var annotation = await createAnnotationUI(msg, nodeToAnnotate); 
      nodeToAnnotate.setSharedPluginData("a11y", "type", "object"); 
      nodeToAnnotate.setSharedPluginData("a11y", "annotation", annotation.id); 
      annotationNodes.push(annotation); 
      nodeIDToAnnotationNodeID.push([msg.id, annotation.id]); 
      figma.currentPage.appendChild(annotation); 
      groupAnnotations(); 
    }
  } else if (msg.type === 'renumber-annotationUI') {

    var prevNum = msg.prevNumber;  
    var nextNum = msg.nextNumber;  
    var annotationNode = getAnnotationNode(msg.id); 

    if (annotationNode != null) {
      annotationNode.name = nextNum.toString(); 
      var child = <TextNode> annotationNode.children[1];
      await figma.loadFontAsync(child.fontName as FontName); 
      child.characters = nextNum.toString();   
      figma.getNodeById(msg.id).setSharedPluginData("a11y", "tabindex", nextNum.toString()); 
      groupAnnotations(); 
    }

  } else if (msg.type === 'remove-annotationUI') {
    var id = msg.id; 
    var kvPair = nodeIDToAnnotationNodeID.filter((kvPair) => kvPair[0] == id);
    var annotationNodeID = kvPair[0][1]; 
    var annotationNode = <FrameNode> figma.getNodeById(annotationNodeID); 

    if (annotationNode != null) { annotationNode.remove(); }; 
    annotationNodes = annotationNodes.filter((a) => {return a.id != annotationNodeID}); 
    annotationNodes = annotationNodes.filter((a) => {return a != null}); 
    nodeIDToAnnotationNodeID = nodeIDToAnnotationNodeID.filter((kv) => {return kv[0] != id});
    
    var node = <FrameNode> figma.getNodeById(id); 
    if (node != null) {
      node.setSharedPluginData("a11y", "tabindex", "-1"); 
    }
  } else if (msg.type === 'refresh-annotationUI') {
    var id = msg.id; 
    var kvPair = nodeIDToAnnotationNodeID.filter((kvPair) => kvPair[0] == id);
    var annotationNodeID = kvPair[0][1]; 
    var node = <FrameNode> figma.getNodeById(id);
    var annotationNode = <FrameNode> figma.getNodeById(annotationNodeID); 

    if (node == null || annotationNode == null) {
      message = { 
        type: "node-remove", 
        id: id
      }; 
    } else {
      // update annotation position 
      var nodeX = node.absoluteTransform[0][2];
      var nodeY = node.absoluteTransform[1][2];
      annotationNode.x = nodeX - annotationWidth; 
      annotationNode.y = nodeY; 

      message = { 
        type: "node-rename", 
        nodeName: node.name,
        id: id
      }; 
    }
  } else if (msg.type === 'test-annotationUI') {
    var nodes = []; 
    for (let kv of nodeIDToAnnotationNodeID) {
      var id = kv[0]; 
      var node = <FrameNode> figma.getNodeById(id); 
      nodes.push(node); 
    }
    figma.viewport.scrollAndZoomIntoView(nodes); 
  } else if (msg.type === 'select-annotationUI') {
    var nodeToSelect : any = figma.getNodeById(msg.id); 
    figma.currentPage.selection = [nodeToSelect];
  } else if (msg.type === 'load-annotations') {
    annotationLayerName = figma.currentPage.selection[0].name; 
    var annotations = (<FrameNode> figma.currentPage.selection[0]).children; 
    var names = new Array(annotations.length - 1); 
    var ids = new Array(annotations.length - 1); 
    
    if (annotations.length > 0) {
      for (let annotation of annotations) {
        if (annotation.getSharedPluginData("a11y", "type") != "annotation") {
          Error('Something is very wrong, this probably is not an annotation layer'); 
        }
        
        var nodeID = annotation.getSharedPluginData("a11y", "source"); 
        var node =  <FrameNode> figma.getNodeById(nodeID); 
        var order = parseInt(annotation.name); 
        names[order - 1] = node.name; 
        ids[order - 1] = node.id; 

        nodeIDToAnnotationNodeID.push([node.id, annotation.id]); 
        annotationNodes.push(annotation); 
      }
  
      message = { 
        type: "add-focus", 
        loading: true,
        names: names,
        ids: ids,
      }; 
    }
  } else if (msg.type === 'window-blur') {
    onCanvasFocus();
  } else if (msg.type === 'window-focus') {
    onWindowFocus();
  }; 

  figma.ui.postMessage(message); 
};

/////////////////////////
////  HELPER FXNS   ////
/////////////////////////

const selection = figma.currentPage.selection[0]

function onCanvasFocus() {
  canvasUpdater.start(updateButtons);
}

function onWindowFocus() {
  canvasUpdater.stop();
}

function updateButtons() {
    var loadButton = false; 
    var addButton = false; 
    if (figma.currentPage.selection.length == 1) {
      if (figma.currentPage.selection[0].getSharedPluginData("a11y", "type") == "annotation") {
        loadButton = true; 
      } else {
        addButton = true; 
      }
    } else if (figma.currentPage.selection.length > 1) {
      addButton = true; 
    }

    var message = { 
      type: "update-buttons", 
      isDisabled: !addButton,
      loadButtonDisabled: !loadButton
    }; 
  figma.ui.postMessage(message); 
}

function getAnnotationNode(id) {
  var kvPair = nodeIDToAnnotationNodeID.filter((kvPair) => kvPair[0] == id);
  var annotationNodeID = kvPair[0][1]; 
  var annotationNode = <FrameNode> figma.getNodeById(annotationNodeID); 
  return annotationNode; 
}

function groupAnnotations() {
  var group = figma.group(annotationNodes, figma.currentPage); 
  group.name = annotationLayerName; 
  group.setSharedPluginData("a11y", "type", "annotation"); 
}; 

async function createAnnotationUI(msg, nodeToAnnotate) {
  var parentX = nodeToAnnotate.absoluteTransform[0][2]; 
  var parentY = nodeToAnnotate.absoluteTransform[1][2]; 

    var rect = figma.createEllipse(); 
    rect.resize(annotationWidth, annotationWidth); 
    rect.strokeWeight = 2; 
    rect.strokes = [{
      color: {r: 1, g: 1, b: 1},
      opacity: 1,
      type: "SOLID",
      visible: true}]
  
  rect.x = parentX - rect.width/2 + 2; 
  rect.y = parentY - rect.width/2 + 2; 
  rect.fills = [{type: 'SOLID', color: {r: .76, g: .15, b: .87}}];
  rect.name = "Background"; 

  var text = figma.createText(); 
  await figma.loadFontAsync(text.fontName as FontName); 
  text.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
  text.fontSize = 12;
  text.x = rect.x + 10; 
  text.y = rect.y + 6;  
  text.characters = msg.number.toString(); 
  text.name = "Order"; 

  var border = figma.createRectangle();
  ///////////FIX
  border.x = parentX
  border.y = parentY
  border.resize(200, 200)
  ///////////FIX
  border.strokeWeight = 2;
  border.cornerRadius = 4;
  border.strokes = [{ 
    color: {r: .76, g: .15, b: .87},
    opacity: 1,
    type: "SOLID",
    visible: true}]
    border.fills = []

    var border2 = figma.createRectangle();
    ///////////FIX
    border2.x = parentX + 2
    border2.y = parentY + 2
    border2.resize(196, 196)
    ///////////FIX
    border2.strokeWeight = 2;
    border2.cornerRadius = 4;
    border2.strokes = [{ 
      color: {r: 1, g: 1, b: 1},
      opacity: 1,
      type: "SOLID",
      visible: true}]
      border2.fills = []

  var focusBorder = figma.group([ border, border2 ], figma.currentPage); 
  var annotation = figma.group([ text, rect, focusBorder ], figma.currentPage); 
  annotation.name = msg.number.toString(); 
 
  nodeToAnnotate.setSharedPluginData("a11y", "tabindex", msg.number.toString()); 
  annotation.setSharedPluginData("a11y", "type", "annotation"); 
  annotation.setSharedPluginData("a11y", "source", msg.id); 

  return annotation; 
}