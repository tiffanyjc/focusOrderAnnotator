/*
To get the TypeScript compiler working:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Install the TypeScript compiler globally: `sudo npm install -g typescript`.
3. Open this directory in Visual Studio Code.
4. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "tsc: watch - tsconfig.json". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
*/

/* 
/////////////// 
//// TODO ////
//////////////

1. attach all focus orders in metadata 

*/ 


/////////////////////////
//// CANVAS-WATCHER  ////
/////////////////////////

class CanvasWatcher {

  private id: number;
  private fps = 1000 / 15; // number of times you want to check and update objects per second
  private stopCallback: Function = null;

  public start(callback: Function, stopCallback?: Function) {
    this.id = setInterval(callback, this.fps);
    if (stopCallback) {
      this.stopCallback = stopCallback;
    }
  }

  public stop() {
    clearInterval(this.id);
    if (this.stopCallback) {
      this.stopCallback();
    }
    this.stopCallback = null;
  }
}

/////////////////////////
//// FEATURES        ////
/////////////////////////

let canvasWatcher = new CanvasWatcher();
var annotationWidth = 60; 
var nodeIDToAnnotationNodeID = []; 
var annotationNodes = []; 

figma.showUI(__html__, {width: 350, height: 480 });
figma.ui.onmessage = async (msg) => {


  var message = {}; 
 
  if (msg.type === 'add-focus') {
    var names = []; 
    var ids = []; 
    var selections = figma.currentPage.selection; 
    
    if (selections.length > 0) {
      for (let selection of selections) {
        names.push(selection.name); 
        ids.push(selection.id); 
      }
  
      message = { 
        type: msg.type, 
        names: names,
        ids: ids
      }; 
    }
  } else if (msg.type === 'create-annotationUI') {
    
    var nodeToAnnotate = <FrameNode> figma.getNodeById(msg.id); 

    var rect = figma.createRectangle(); 
    rect.resize(annotationWidth, annotationWidth); 
    rect.cornerRadius = 4; 
    rect.strokeWeight = 2; 
    rect.strokes = [{
      color: {r: 1, g: 1, b: 1},
      opacity: 1,
      type: "SOLID",
      visible: true}]
    
    rect.x = nodeToAnnotate.x - rect.width; 
    rect.y = nodeToAnnotate.y; 
    rect.fills = [{type: 'SOLID', color: {r: .7, g: 0.06, b: 0.46}}];
    rect.name = "Background"; 

    var text = figma.createText(); 
    await figma.loadFontAsync(text.fontName as FontName); 
    text.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
    text.fontSize = 28;
    text.x = rect.x + 9; 
    text.y = rect.y + 5;  
    text.characters = msg.number.toString(); 
    text.name = "Order"; 

    var arrow = figma.createVector(); 
    arrow.strokeWeight = 2;
    arrow.strokes = [
      {type: "SOLID",
      visible: true,
      opacity: 1, 
      color: {r: 1, g: 1, b: 1}}
    ]; 
    arrow.vectorNetwork = {
      regions: [],
      segments: [{start: 0, end: 1}], 
      vertices: [
        {x: 0, y: 0, strokeCap: "ROUND", strokeJoin: "MITER"},
        {x: 41, y: 0, strokeCap: "ARROW_LINES", strokeJoin: "MITER"}
      ]
    }; 
    arrow.x = rect.x + 10; 
    arrow.y = rect.y + 45;  
    arrow.name = "arrow"; 

    var arrow2 = figma.createLine(); 
    arrow2.strokeWeight = 2;
    arrow2.strokes = [
      {type: "SOLID",
      visible: true,
      opacity: 1, 
      color: {r: 1, g: 1, b: 1}}
    ]; 
    arrow2.resize(14, 0); 
    arrow2.strokeCap = "ROUND"; 
    arrow2.rotation = -90; 
    arrow2.x = arrow.x + 41; 
    arrow2.y = arrow.y - 7; 

    var tabStop = figma.group([arrow, arrow2], figma.currentPage); 
    tabStop.name = "Tab stop icon"; 

    var annotation = figma.group([tabStop, text, rect], figma.currentPage); 
    annotation.name = msg.number.toString(); 

    annotationNodes.push(annotation); 
    nodeIDToAnnotationNodeID.push([msg.id, annotation.id]); 

    // group all annotation nodes together
    figma.currentPage.appendChild(annotation); 
    groupAnnotations(); 

  } else if (msg.type === 'renumber-annotationUI') {

    var id = msg.id; 
    var prevNum = msg.prevNumber;  
    var nextNum = msg.nextNumber;  
    var kvPair = nodeIDToAnnotationNodeID.filter((kvPair) => kvPair[0] == id);
    var annotationNodeID = kvPair[0][1]; 
    var annotationNode = <FrameNode> figma.getNodeById(annotationNodeID); 
    annotationNode.name = nextNum.toString(); 
    var child = <TextNode> annotationNode.children[1];
    child.characters = nextNum.toString(); 

    groupAnnotations(); 
  } else if (msg.type === 'remove-annotationUI') {
    var id = msg.id; 
    var kvPair = nodeIDToAnnotationNodeID.filter((kvPair) => kvPair[0] == id);
    var annotationNodeID = kvPair[0][1]; 
    var annotationNode = <FrameNode> figma.getNodeById(annotationNodeID); 
    annotationNode.remove(); 
    annotationNodes = annotationNodes.filter((node) => {return node.id != annotationNode.id}); 
  } else if (msg.type === 'refresh-annotationUI') {
    var id = msg.id; 
    var kvPair = nodeIDToAnnotationNodeID.filter((kvPair) => kvPair[0] == id);
    var annotationNodeID = kvPair[0][1]; 
    var node = <FrameNode> figma.getNodeById(id);
    var annotationNode = <FrameNode> figma.getNodeById(annotationNodeID); 

    if (node == null) {
      message = { 
        type: "node-remove", 
        id: id
      }; 
    } else {
      // update annotation position 
      annotationNode.x = node.x - annotationWidth; 
      annotationNode.y = node.y; 

      message = { 
        type: "node-rename", 
        nodeName: node.name,
        id: id
      }; 
    }

/////////// 
// TODO: not receiving on parent end for some reason
  } else if (msg.type === 'select-annotationUI') {
    var nodeToSelect = figma.getNodeById(msg.id); 
    figma.currentPage.selection = [nodeToSelect]; 
  }; 

  figma.ui.postMessage(message); 
};

function groupAnnotations() {
  var group = figma.group(annotationNodes, figma.currentPage); 
  group.name = "**~~ Focus-order annotations ~~**"; 
}; 