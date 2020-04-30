import './ui.css'

var exports = {}; 
var totalFocus = 0; 
var focusedIDs: string[] = []; 
var curTabID = ""; 

// instructions when pane is empty
function checkZeroState() {
  var divs = document.getElementsByClassName("focus-object"); 
  document.getElementById("about").hidden = true; 
  document.getElementById("link-instructions").style.color = "black";
  document.getElementById("link-about").style.color = "#929292";
  document.getElementById("zero-state").hidden = (divs.length > 0); 

  document.getElementById("zero-state-nav").style.visibility = (divs.length > 0) ? "hidden" : "visible"; 
  document.getElementById("button-load").hidden = (divs.length > 0); 
  document.getElementById("order").innerHTML = (divs.length > 0) ? "Order" : ""; 
  document.getElementById("name").innerHTML = (divs.length > 0) ? "Name" : ""; 
  document.getElementById("container-labels").style.visibility = (divs.length <= 0) ? "hidden" : "visible"; 
  document.getElementById("button-refresh").hidden = (divs.length <= 0); 
  document.getElementById("button-add").style.width = (divs.length > 0) ? "calc(100% - 25px)" : "calc((100% - 25px)/2)" ;
}


// styling for affordances on drag over
function dragOver(ev) {
  ev.preventDefault();
  var topY = ev.currentTarget.getBoundingClientRect().top; 
  var bottomY = ev.currentTarget.getBoundingClientRect().bottom; 
  var midY = (topY + bottomY) / 2; 
  var hoverPoint = ev.clientY < midY; 

  ev.currentTarget.style.borderTopColor = hoverPoint ? "#1DA0FB" : "#FFFFFF"; 
  ev.currentTarget.style.borderTopWidth = hoverPoint ? "3px" : "1px"; 
  ev.currentTarget.style.borderBottomColor = hoverPoint ? "#EFEFEF" : "#1DA0FB"; 
  ev.currentTarget.style.borderBottomWidth = hoverPoint ? "1px" : "3px"; 
}

// determine where focus annotation gets dropped
function drop(ev) {
  ev.preventDefault(); 
  var data = ev.dataTransfer.getData("text");
  var toDrop = document.getElementById(data); 
  var topY = ev.currentTarget.getBoundingClientRect().top; 
  var bottomY = ev.currentTarget.getBoundingClientRect().bottom; 
  var midY = (topY + bottomY) / 2; 
  var hoverPoint = ev.clientY < midY; 
  
  (document.getElementById("app")).insertBefore(toDrop, (hoverPoint) ? ev.currentTarget : ev.currentTarget.nextSibling); 

  toDrop.style.borderTopColor = "#FFFFFF"; 
  ev.currentTarget.style.borderTopColor = "#FFFFFF"; 
  ev.currentTarget.style.borderTopWidth = "1px"; 
  toDrop.style.borderBottomColor = "#EFEFEF"; 
  ev.currentTarget.style.borderBottomColor = "#EFEFEF"; 
  ev.currentTarget.style.borderBottomWidth = "1px"; 

  resort(); 
}

function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id); 
}

// styling reset
function dragLeave(ev) {
  ev.preventDefault(); 
  var curTarget = ev.currentTarget; 
  curTarget.style.borderTopColor = "#FFFFFF"; 
  curTarget.style.borderTopWidth = "1px"; 
  curTarget.style.borderBottomColor = "#EFEFEF"; 
  curTarget.style.borderBottomWidth = "1px"; 
}

// resort when objects are removed, moved, or added 
function resort() {
  focusedIDs = []; 
  var focusObjects : any = document.getElementsByClassName("focus-object"); 
  var focusOrder = 1; 

  // iterate through all objects 

  for (let obj of focusObjects) {
    var objElements = obj.getElementsByTagName("div"); 
    focusedIDs.push(obj.id); 

    // iterate through div tags
    for (let div of objElements) {
      if (div.className == "order") {
        var prevNumber = div.innerHTML; 
        div.innerHTML = focusOrder.toString(); 
        reannotateFocus(obj.id, prevNumber, focusOrder); 
        focusOrder += 1; 
      }
    }
  }
}

// remove an item from the focus list 
function removeFocusUI(ID) {
  focusedIDs = focusedIDs.filter((id) => {return id != ID}); 
  document.getElementById(ID).remove(); 
  totalFocus -= 1;
  removeFocusAnnotation(ID); 
  checkZeroState(); 
  resort(); 
}

function createFocusUI(selectionName, selectionID, loading) {
  // you can only add a node once 
  if (focusedIDs.includes(selectionID)) {
    return; 
  }

  focusedIDs.push(selectionID); 

  // create the new object 
  var newFocus = document.createElement("div"); 
  newFocus.className = "focus-object"; 
  newFocus.id = selectionID; 
  newFocus.draggable = true; 
  newFocus.ondragstart = () => {dragStart(event)}; 
  newFocus.ondragleave = () => {dragLeave(event)}; 
  newFocus.ondragover = () => {dragOver(event)}; 
  newFocus.ondrop = () => {drop(event)}; 
  newFocus.onclick = () => {showFocus(selectionID)}; 
  newFocus.onfocus = () => {showFocus(selectionID)}; 

  // create order number
  var orderNumber = document.createElement("div"); 
  orderNumber.className = "order";
  orderNumber.innerHTML = (totalFocus + 1).toString(); 
  
  // create name
  var name = document.createElement("div"); 
  name.className = "name"; 
  name.innerHTML = selectionName; 
  
  // create remove button
  var removeButton = document.createElement("button"); 
  removeButton.className = "button-remove"; 
  removeButton.innerHTML = "Remove"; 
  removeButton.onclick = () => { removeFocusUI(selectionID) }; 

  // create tab-help button 
  var tabContainer = document.createElement("div"); 
  tabContainer.id = "tab-help"; 
  tabContainer.innerHTML = "<div id='tab-help'> &#8593; <span class='keyboard-mini'>Shift</span> <span class='keyboard-mini'>Tab</span> <br /> &darr; <span class='keyboard-mini'>Tab</span> </div> "; 
  
  // add everything into the larger div
  newFocus.appendChild(orderNumber);  
  newFocus.appendChild(name);
  newFocus.appendChild(removeButton);  
  newFocus.appendChild(tabContainer); 
  
  // add larger div into the plugin pane, annotate and check for zero state 
  document.getElementById('app').appendChild(newFocus); 
  if (!loading) {annotateFocus(selectionID, totalFocus+1); }; 
  showFocus(selectionID); 
  checkZeroState(); 
  totalFocus += 1; 
}

//////////////////////////////
////// calls to parent //////
//////////////////////////////

function annotateFocus(selectionID, orderNumber) {
  parent.postMessage({ pluginMessage: {type: 'create-annotationUI', id: selectionID, number: orderNumber}}, '*'); 
}

function reannotateFocus(selectionID, prevOrderNumber, nextOrderNumber) {
  parent.postMessage({ pluginMessage: {type: 'renumber-annotationUI', id: selectionID, prevNumber: prevOrderNumber, nextNumber: nextOrderNumber}}, '*'); 
}

function removeFocusAnnotation(selectionID) {
  parent.postMessage({ pluginMessage: {type: 'remove-annotationUI', id: selectionID}}, '*'); 
}


function showFocus(selectionID) {
  // revert previous selected tab
  var curTab = document.getElementById(curTabID); 
  if (curTab != null) {
    curTab.className = "focus-object"; 
  }

  var selected = document.getElementById(selectionID); 
  if (selected != null) {
    var classNew = selected.className.concat(" tab-on"); 
    document.getElementById(selectionID).className = classNew; 
    curTabID = selectionID; 
    parent.postMessage({ pluginMessage: {type: 'select-annotationUI', id: selectionID}}, '*'); 
  }
}


// initiatialization 

document.getElementById("about").hidden = true; 

document.getElementById("link-instructions").onclick = () => {
  document.getElementById("link-instructions").style.color = "black";
  document.getElementById("link-about").style.color = "#929292";
  document.getElementById("zero-state").hidden = false; 
  document.getElementById("about").hidden = true;  
}

document.getElementById("link-about").onclick = () => {
  document.getElementById("link-about").style.color = "black";
  document.getElementById("link-instructions").style.color = "#929292";
  document.getElementById("zero-state").hidden = true; 
  document.getElementById("about").hidden = false; 
}


document.getElementById("order").innerHTML = ""; 
document.getElementById("name").innerHTML = ""; 
document.getElementById("container-labels").style.visibility = "hidden";  
document.getElementById('button-refresh').hidden = true;
document.getElementById('button-add').onclick = () => {
  parent.postMessage({ pluginMessage: {type: 'add-focus'}}, '*'); 
}
document.getElementById('button-load').onclick = () => {
  parent.postMessage({ pluginMessage: {type: 'load-annotations'}}, '*'); 
}

document.getElementById('button-refresh').onclick = () => {

  if (focusedIDs.length > 0) {
    var buttonRefresh = document.getElementById('button-refresh'); 
    var removeButtons : any = document.getElementsByClassName('button-remove'); 
    var foci : any = document.getElementsByClassName('focus-object'); 
    switch (buttonRefresh.innerHTML) {
      case "Tab test":
        parent.postMessage({ pluginMessage: {type: 'test-annotationUI'}}, '*'); 
        buttonRefresh.innerHTML = "Exit test"; 
        buttonRefresh.className = "button-refresh-exit"; 
        document.getElementById('button-add').hidden = true; 
        for (let b of removeButtons) {b.hidden = true;}; 
        var i = 1; 
        for (let f of foci) {
          f.tabIndex = i; 
          f.className = "focus-object"; 
          if (i == 1) {
            f.focus(); 
          }
          i++; 
        }
        break; 
      case "Exit test": 
        buttonRefresh.innerHTML = "Tab test"; 
        buttonRefresh.className = ""; 
        document.getElementById('button-add').hidden = false; 
        for (let b of removeButtons) {b.hidden = false;}
        for (let f of foci) {
          f.removeAttribute("tabIndex"); 
          f.className = "focus-object"; 
        }
        break; 
    }
  }; 

}

if (!document.hasFocus()) { 
  parent.postMessage({ pluginMessage: { type: 'window-blur' } }, '*');
  for (let selectionID of focusedIDs) {
    parent.postMessage({ pluginMessage: {type: 'refresh-annotationUI', id: selectionID}}, '*'); 
  }
}

window.addEventListener('focus', () => {
  parent.postMessage({ pluginMessage: { type: 'window-focus' } }, '*');
  for (let selectionID of focusedIDs) {
    parent.postMessage({ pluginMessage: {type: 'refresh-annotationUI', id: selectionID}}, '*'); 
  }
});

window.addEventListener('blur', () => {
  parent.postMessage({ pluginMessage: { type: 'window-blur' } }, '*');
});

//////////////////////////////////
////// messages from parent //////
//////////////////////////////////

onmessage = (event) => {
  var message = event.data.pluginMessage; 
  if (message.type === 'add-focus') {
    var names = message.names; 
    var ids = message.ids; 

    while (names.length > 0) {
      var name = names.shift(); 
      var id = ids.shift(); 
      createFocusUI(name, id, message.loading); 
    } 

    if (message.loading) {
      for (let selectionID of focusedIDs) {
        parent.postMessage({ pluginMessage: {type: 'refresh-annotationUI', id: selectionID}}, '*'); 
      }
    }
  } else if (message.type === 'node-rename') {
    var divs : any= document.getElementById(message.id).getElementsByTagName("div"); 

    for (let div of divs) {
      if (div.className == "name") {
        div.innerHTML = message.nodeName; 
      }
    }
  } else if (message.type === 'node-remove') {
    removeFocusUI(message.id); 
  } else if (message.type === 'update-buttons') {
    (<HTMLInputElement> document.getElementById('button-add')).disabled = message.isDisabled; 
    (<HTMLInputElement> document.getElementById('button-load')).disabled = message.loadButtonDisabled; 
  }
}