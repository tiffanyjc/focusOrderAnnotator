/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CanvasUpdater {
    start(callback) {
        this.id = setInterval(callback, 1000 / 15);
    }
    stop() {
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
figma.showUI(__html__, { width: 375, height: 480 });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
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
    }
    else if (msg.type === 'create-annotationUI') {
        var nodeToAnnotate = figma.getNodeById(msg.id);
        // double creation of annotations isn't allowed
        if (nodeToAnnotate.getSharedPluginData("a11y", "type") !== "annotation") {
            var annotation = yield createAnnotationUI(msg, nodeToAnnotate);
            nodeToAnnotate.setSharedPluginData("a11y", "type", "object");
            nodeToAnnotate.setSharedPluginData("a11y", "annotation", annotation.id);
            annotationNodes.push(annotation);
            nodeIDToAnnotationNodeID.push([msg.id, annotation.id]);
            figma.currentPage.appendChild(annotation);
            groupAnnotations();
        }
    }
    else if (msg.type === 'renumber-annotationUI') {
        // var prevNum = msg.prevNumber;  
        var nextNum = msg.nextNumber;
        var annotationNode = getAnnotationNode(msg.id);
        if (annotationNode != null) {
            annotationNode.name = nextNum.toString();
            var child = annotationNode.children[2];
            yield figma.loadFontAsync(child.fontName);
            child.characters = nextNum.toString();
            figma.getNodeById(msg.id).setSharedPluginData("a11y", "tabindex", nextNum.toString());
            groupAnnotations();
        }
    }
    else if (msg.type === 'remove-annotationUI') {
        var id = msg.id;
        var kvPair = nodeIDToAnnotationNodeID.filter((kvPair) => kvPair[0] == id);
        var annotationNodeID = kvPair[0][1];
        var annotationNode = figma.getNodeById(annotationNodeID);
        if (annotationNode != null) {
            annotationNode.remove();
        }
        ;
        annotationNodes = annotationNodes.filter((a) => { return a.id != annotationNodeID; });
        annotationNodes = annotationNodes.filter((a) => { return a != null; });
        nodeIDToAnnotationNodeID = nodeIDToAnnotationNodeID.filter((kv) => { return kv[0] != id; });
        var node = figma.getNodeById(id);
        if (node != null) {
            node.setSharedPluginData("a11y", "tabindex", "-1");
        }
    }
    else if (msg.type === 'refresh-annotationUI') {
        var id = msg.id;
        var kvPair = nodeIDToAnnotationNodeID.filter((kvPair) => kvPair[0] == id);
        var annotationNodeID = kvPair[0][1];
        var node = figma.getNodeById(id);
        var annotationNode = figma.getNodeById(annotationNodeID);
        if (node == null || annotationNode == null) {
            message = {
                type: "node-remove",
                id: id
            };
        }
        else {
            // update annotation position 
            var nodeX = node.absoluteTransform[0][2];
            var nodeY = node.absoluteTransform[1][2];
            annotationNode.x = nodeX - annotationWidth / 2;
            annotationNode.y = nodeY - annotationWidth / 2;
            message = {
                type: "node-rename",
                nodeName: node.name,
                id: id
            };
        }
    }
    else if (msg.type === 'test-annotationUI') {
        var nodes = [];
        for (let kv of nodeIDToAnnotationNodeID) {
            var id = kv[0];
            var node = figma.getNodeById(id);
            nodes.push(node);
        }
        figma.viewport.scrollAndZoomIntoView(nodes);
    }
    else if (msg.type === 'select-annotationUI') {
        var nodeToSelect = figma.getNodeById(msg.id);
        figma.currentPage.selection = [nodeToSelect];
    }
    else if (msg.type === 'load-annotations') {
        annotationLayerName = figma.currentPage.selection[0].name;
        var annotations = figma.currentPage.selection[0].children;
        var names = new Array(annotations.length - 1);
        var ids = new Array(annotations.length - 1);
        if (annotations.length > 0) {
            for (let annotation of annotations) {
                if (annotation.getSharedPluginData("a11y", "type") != "annotation") {
                    Error('Something is very wrong, this probably is not an annotation layer');
                }
                var nodeID = annotation.getSharedPluginData("a11y", "source");
                var node = figma.getNodeById(nodeID);
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
    }
    else if (msg.type === 'window-blur') {
        onCanvasFocus();
    }
    else if (msg.type === 'window-focus') {
        onWindowFocus();
    }
    ;
    figma.ui.postMessage(message);
});
/////////////////////////
////  HELPER FXNS   ////
/////////////////////////
const selection = figma.currentPage.selection[0];
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
        }
        else {
            addButton = true;
        }
    }
    else if (figma.currentPage.selection.length > 1) {
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
    var annotationNode = figma.getNodeById(annotationNodeID);
    return annotationNode;
}
function groupAnnotations() {
    var group = figma.group(annotationNodes, figma.currentPage);
    group.name = annotationLayerName;
    group.setSharedPluginData("a11y", "type", "annotation");
}
;
function createAnnotationUI(msg, nodeToAnnotate) {
    return __awaiter(this, void 0, void 0, function* () {
        var parentX = nodeToAnnotate.absoluteTransform[0][2];
        var parentY = nodeToAnnotate.absoluteTransform[1][2];
        var borderW = nodeToAnnotate.width;
        var borderH = nodeToAnnotate.height;
        var border = figma.createRectangle();
        border.x = parentX;
        border.y = parentY;
        border.resize(borderW, borderH);
        border.strokeWeight = 2;
        border.strokeAlign = 'OUTSIDE';
        border.cornerRadius = 4;
        border.strokes = [{
                color: { r: .76, g: .15, b: .87 },
                opacity: 1,
                type: "SOLID",
                visible: true
            }];
        border.fills = [];
        border.name = "Border 1";
        border.constraints = { horizontal: 'STRETCH', vertical: 'STRETCH' };
        var border2 = figma.createRectangle();
        border2.x = parentX;
        border2.y = parentY;
        border2.resize(borderW, borderH);
        border2.strokeWeight = 2;
        border2.cornerRadius = 4;
        border2.strokes = [{
                color: { r: 1, g: 1, b: 1 },
                opacity: 1,
                type: "SOLID",
                visible: true
            }];
        border2.fills = [];
        border2.name = "Border 2";
        border2.constraints = { horizontal: 'STRETCH', vertical: 'STRETCH' };
        var focusBorder = figma.group([border, border2], figma.currentPage);
        focusBorder.name = "Borders";
        var circle = figma.createEllipse();
        circle.resize(annotationWidth, annotationWidth);
        circle.strokeWeight = 2;
        circle.strokes = [{
                color: { r: 1, g: 1, b: 1 },
                opacity: 1,
                type: "SOLID",
                visible: true
            }];
        circle.constraints = { horizontal: 'CENTER', vertical: 'CENTER' };
        circle.x = parentX - circle.width / 2 + 2;
        circle.y = parentY - circle.width / 2 + 2;
        circle.fills = [{ type: 'SOLID', color: { r: .76, g: .15, b: .87 } }];
        circle.name = "Ellipse background";
        var text = figma.createText();
        yield figma.loadFontAsync(text.fontName);
        text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        text.fontSize = 12;
        text.x = circle.x + 10;
        text.y = circle.y + 6;
        text.characters = msg.number.toString();
        text.name = "Order";
        text.constraints = { horizontal: 'CENTER', vertical: 'CENTER' };
        var annotation = figma.group([circle, text, focusBorder], figma.currentPage);
        annotation.name = msg.number.toString();
        // annotation.constraints = {horizontal: 'MIN', vertical: 'MIN'}; 
        //frame code - USE THIS WHEN REORDER GETS FIXED
        // const tab = figma.createFrame();
        // tab.backgrounds = []
        // tab.clipsContent = false
        // tab.appendChild(border)
        // tab.appendChild(border2)
        // tab.appendChild(annotation)
        nodeToAnnotate.setSharedPluginData("a11y", "tabindex", msg.number.toString());
        annotation.setSharedPluginData("a11y", "type", "annotation");
        annotation.setSharedPluginData("a11y", "source", msg.id);
        return annotation;
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGlDQUFpQyxFQUFFO0FBQzVGLHlEQUF5RCxrQkFBa0IsRUFBRTtBQUM3RSw0RUFBNEUsb0JBQW9CLEVBQUU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLHlCQUF5Qix3QkFBd0IseUJBQXlCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QixtQkFBbUIsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxxQ0FBcUMsb0M7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgQ2FudmFzVXBkYXRlciB7XG4gICAgc3RhcnQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5pZCA9IHNldEludGVydmFsKGNhbGxiYWNrLCAxMDAwIC8gMTUpO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaWQpO1xuICAgIH1cbn1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8gIFJFQ0VJVkUgQ0FMTFMgICAvLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5sZXQgY2FudmFzVXBkYXRlciA9IG5ldyBDYW52YXNVcGRhdGVyKCk7XG52YXIgYW5ub3RhdGlvbldpZHRoID0gMjg7XG52YXIgbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlEID0gW107XG52YXIgYW5ub3RhdGlvbk5vZGVzID0gW107XG52YXIgYW5ub3RhdGlvbkxheWVyTmFtZSA9IFwiKip+fiBGb2N1cy1vcmRlciBhbm5vdGF0aW9ucyB+fioqXCI7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDM3NSwgaGVpZ2h0OiA0ODAgfSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSB7fTtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdhZGQtZm9jdXMnKSB7XG4gICAgICAgIHZhciBuYW1lcyA9IFtdO1xuICAgICAgICB2YXIgaWRzID0gW107XG4gICAgICAgIHZhciBzZWxlY3Rpb25zID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzZWxlY3Rpb24gb2Ygc2VsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24uZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIpICE9IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goc2VsZWN0aW9uLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZHMucHVzaChzZWxlY3Rpb24uaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbmFtZXM6IG5hbWVzLFxuICAgICAgICAgICAgICAgIGlkczogaWRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2NyZWF0ZS1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBub2RlVG9Bbm5vdGF0ZSA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5pZCk7XG4gICAgICAgIC8vIGRvdWJsZSBjcmVhdGlvbiBvZiBhbm5vdGF0aW9ucyBpc24ndCBhbGxvd2VkXG4gICAgICAgIGlmIChub2RlVG9Bbm5vdGF0ZS5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIikgIT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgYW5ub3RhdGlvbiA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25VSShtc2csIG5vZGVUb0Fubm90YXRlKTtcbiAgICAgICAgICAgIG5vZGVUb0Fubm90YXRlLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiLCBcIm9iamVjdFwiKTtcbiAgICAgICAgICAgIG5vZGVUb0Fubm90YXRlLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwiYW5ub3RhdGlvblwiLCBhbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgICAgIGFubm90YXRpb25Ob2Rlcy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICAgICAgbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELnB1c2goW21zZy5pZCwgYW5ub3RhdGlvbi5pZF0pO1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbik7XG4gICAgICAgICAgICBncm91cEFubm90YXRpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdyZW51bWJlci1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIC8vIHZhciBwcmV2TnVtID0gbXNnLnByZXZOdW1iZXI7ICBcbiAgICAgICAgdmFyIG5leHROdW0gPSBtc2cubmV4dE51bWJlcjtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlID0gZ2V0QW5ub3RhdGlvbk5vZGUobXNnLmlkKTtcbiAgICAgICAgaWYgKGFubm90YXRpb25Ob2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFubm90YXRpb25Ob2RlLm5hbWUgPSBuZXh0TnVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBhbm5vdGF0aW9uTm9kZS5jaGlsZHJlblsyXTtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoY2hpbGQuZm9udE5hbWUpO1xuICAgICAgICAgICAgY2hpbGQuY2hhcmFjdGVycyA9IG5leHROdW0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpZ21hLmdldE5vZGVCeUlkKG1zZy5pZCkuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0YWJpbmRleFwiLCBuZXh0TnVtLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgZ3JvdXBBbm5vdGF0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAncmVtb3ZlLWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIGlkID0gbXNnLmlkO1xuICAgICAgICB2YXIga3ZQYWlyID0gbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELmZpbHRlcigoa3ZQYWlyKSA9PiBrdlBhaXJbMF0gPT0gaWQpO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbk5vZGVJRCA9IGt2UGFpclswXVsxXTtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoYW5ub3RhdGlvbk5vZGVJRCk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9uTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGFubm90YXRpb25Ob2RlcyA9IGFubm90YXRpb25Ob2Rlcy5maWx0ZXIoKGEpID0+IHsgcmV0dXJuIGEuaWQgIT0gYW5ub3RhdGlvbk5vZGVJRDsgfSk7XG4gICAgICAgIGFubm90YXRpb25Ob2RlcyA9IGFubm90YXRpb25Ob2Rlcy5maWx0ZXIoKGEpID0+IHsgcmV0dXJuIGEgIT0gbnVsbDsgfSk7XG4gICAgICAgIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRCA9IG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5maWx0ZXIoKGt2KSA9PiB7IHJldHVybiBrdlswXSAhPSBpZDsgfSk7XG4gICAgICAgIHZhciBub2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoaWQpO1xuICAgICAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3JlZnJlc2gtYW5ub3RhdGlvblVJJykge1xuICAgICAgICB2YXIgaWQgPSBtc2cuaWQ7XG4gICAgICAgIHZhciBrdlBhaXIgPSBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQuZmlsdGVyKChrdlBhaXIpID0+IGt2UGFpclswXSA9PSBpZCk7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZUlEID0ga3ZQYWlyWzBdWzFdO1xuICAgICAgICB2YXIgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGlkKTtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoYW5ub3RhdGlvbk5vZGVJRCk7XG4gICAgICAgIGlmIChub2RlID09IG51bGwgfHwgYW5ub3RhdGlvbk5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm5vZGUtcmVtb3ZlXCIsXG4gICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdXBkYXRlIGFubm90YXRpb24gcG9zaXRpb24gXG4gICAgICAgICAgICB2YXIgbm9kZVggPSBub2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdO1xuICAgICAgICAgICAgdmFyIG5vZGVZID0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXTtcbiAgICAgICAgICAgIGFubm90YXRpb25Ob2RlLnggPSBub2RlWCAtIGFubm90YXRpb25XaWR0aCAvIDI7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS55ID0gbm9kZVkgLSBhbm5vdGF0aW9uV2lkdGggLyAyO1xuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm5vZGUtcmVuYW1lXCIsXG4gICAgICAgICAgICAgICAgbm9kZU5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICd0ZXN0LWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGt2IG9mIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRCkge1xuICAgICAgICAgICAgdmFyIGlkID0ga3ZbMF07XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGlkKTtcbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdzZWxlY3QtYW5ub3RhdGlvblVJJykge1xuICAgICAgICB2YXIgbm9kZVRvU2VsZWN0ID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmlkKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW25vZGVUb1NlbGVjdF07XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnbG9hZC1hbm5vdGF0aW9ucycpIHtcbiAgICAgICAgYW5ub3RhdGlvbkxheWVyTmFtZSA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5uYW1lO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbnMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0uY2hpbGRyZW47XG4gICAgICAgIHZhciBuYW1lcyA9IG5ldyBBcnJheShhbm5vdGF0aW9ucy5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIGlkcyA9IG5ldyBBcnJheShhbm5vdGF0aW9ucy5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGFubm90YXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGFubm90YXRpb24gb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbi5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIikgIT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgRXJyb3IoJ1NvbWV0aGluZyBpcyB2ZXJ5IHdyb25nLCB0aGlzIHByb2JhYmx5IGlzIG5vdCBhbiBhbm5vdGF0aW9uIGxheWVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBub2RlSUQgPSBhbm5vdGF0aW9uLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwic291cmNlXCIpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobm9kZUlEKTtcbiAgICAgICAgICAgICAgICB2YXIgb3JkZXIgPSBwYXJzZUludChhbm5vdGF0aW9uLm5hbWUpO1xuICAgICAgICAgICAgICAgIG5hbWVzW29yZGVyIC0gMV0gPSBub2RlLm5hbWU7XG4gICAgICAgICAgICAgICAgaWRzW29yZGVyIC0gMV0gPSBub2RlLmlkO1xuICAgICAgICAgICAgICAgIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5wdXNoKFtub2RlLmlkLCBhbm5vdGF0aW9uLmlkXSk7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGVzLnB1c2goYW5ub3RhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkLWZvY3VzXCIsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lczogbmFtZXMsXG4gICAgICAgICAgICAgICAgaWRzOiBpZHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnd2luZG93LWJsdXInKSB7XG4gICAgICAgIG9uQ2FudmFzRm9jdXMoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICd3aW5kb3ctZm9jdXMnKSB7XG4gICAgICAgIG9uV2luZG93Rm9jdXMoKTtcbiAgICB9XG4gICAgO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vICBIRUxQRVIgRlhOUyAgIC8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbmZ1bmN0aW9uIG9uQ2FudmFzRm9jdXMoKSB7XG4gICAgY2FudmFzVXBkYXRlci5zdGFydCh1cGRhdGVCdXR0b25zKTtcbn1cbmZ1bmN0aW9uIG9uV2luZG93Rm9jdXMoKSB7XG4gICAgY2FudmFzVXBkYXRlci5zdG9wKCk7XG59XG5mdW5jdGlvbiB1cGRhdGVCdXR0b25zKCkge1xuICAgIHZhciBsb2FkQnV0dG9uID0gZmFsc2U7XG4gICAgdmFyIGFkZEJ1dHRvbiA9IGZhbHNlO1xuICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09IDEpIHtcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIikgPT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgIGxvYWRCdXR0b24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID4gMSkge1xuICAgICAgICBhZGRCdXR0b24gPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgdHlwZTogXCJ1cGRhdGUtYnV0dG9uc1wiLFxuICAgICAgICBpc0Rpc2FibGVkOiAhYWRkQnV0dG9uLFxuICAgICAgICBsb2FkQnV0dG9uRGlzYWJsZWQ6ICFsb2FkQnV0dG9uXG4gICAgfTtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbn1cbmZ1bmN0aW9uIGdldEFubm90YXRpb25Ob2RlKGlkKSB7XG4gICAgdmFyIGt2UGFpciA9IG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5maWx0ZXIoKGt2UGFpcikgPT4ga3ZQYWlyWzBdID09IGlkKTtcbiAgICB2YXIgYW5ub3RhdGlvbk5vZGVJRCA9IGt2UGFpclswXVsxXTtcbiAgICB2YXIgYW5ub3RhdGlvbk5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChhbm5vdGF0aW9uTm9kZUlEKTtcbiAgICByZXR1cm4gYW5ub3RhdGlvbk5vZGU7XG59XG5mdW5jdGlvbiBncm91cEFubm90YXRpb25zKCkge1xuICAgIHZhciBncm91cCA9IGZpZ21hLmdyb3VwKGFubm90YXRpb25Ob2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgIGdyb3VwLm5hbWUgPSBhbm5vdGF0aW9uTGF5ZXJOYW1lO1xuICAgIGdyb3VwLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiLCBcImFubm90YXRpb25cIik7XG59XG47XG5mdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uVUkobXNnLCBub2RlVG9Bbm5vdGF0ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBwYXJlbnRYID0gbm9kZVRvQW5ub3RhdGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl07XG4gICAgICAgIHZhciBwYXJlbnRZID0gbm9kZVRvQW5ub3RhdGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl07XG4gICAgICAgIHZhciBib3JkZXJXID0gbm9kZVRvQW5ub3RhdGUud2lkdGg7XG4gICAgICAgIHZhciBib3JkZXJIID0gbm9kZVRvQW5ub3RhdGUuaGVpZ2h0O1xuICAgICAgICB2YXIgYm9yZGVyID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGJvcmRlci54ID0gcGFyZW50WDtcbiAgICAgICAgYm9yZGVyLnkgPSBwYXJlbnRZO1xuICAgICAgICBib3JkZXIucmVzaXplKGJvcmRlclcsIGJvcmRlckgpO1xuICAgICAgICBib3JkZXIuc3Ryb2tlV2VpZ2h0ID0gMjtcbiAgICAgICAgYm9yZGVyLnN0cm9rZUFsaWduID0gJ09VVFNJREUnO1xuICAgICAgICBib3JkZXIuY29ybmVyUmFkaXVzID0gNDtcbiAgICAgICAgYm9yZGVyLnN0cm9rZXMgPSBbe1xuICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IC43NiwgZzogLjE1LCBiOiAuODcgfSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgYm9yZGVyLmZpbGxzID0gW107XG4gICAgICAgIGJvcmRlci5uYW1lID0gXCJCb3JkZXIgMVwiO1xuICAgICAgICBib3JkZXIuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6ICdTVFJFVENIJywgdmVydGljYWw6ICdTVFJFVENIJyB9O1xuICAgICAgICB2YXIgYm9yZGVyMiA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICBib3JkZXIyLnggPSBwYXJlbnRYO1xuICAgICAgICBib3JkZXIyLnkgPSBwYXJlbnRZO1xuICAgICAgICBib3JkZXIyLnJlc2l6ZShib3JkZXJXLCBib3JkZXJIKTtcbiAgICAgICAgYm9yZGVyMi5zdHJva2VXZWlnaHQgPSAyO1xuICAgICAgICBib3JkZXIyLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgIGJvcmRlcjIuc3Ryb2tlcyA9IFt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH1dO1xuICAgICAgICBib3JkZXIyLmZpbGxzID0gW107XG4gICAgICAgIGJvcmRlcjIubmFtZSA9IFwiQm9yZGVyIDJcIjtcbiAgICAgICAgYm9yZGVyMi5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogJ1NUUkVUQ0gnLCB2ZXJ0aWNhbDogJ1NUUkVUQ0gnIH07XG4gICAgICAgIHZhciBmb2N1c0JvcmRlciA9IGZpZ21hLmdyb3VwKFtib3JkZXIsIGJvcmRlcjJdLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgIGZvY3VzQm9yZGVyLm5hbWUgPSBcIkJvcmRlcnNcIjtcbiAgICAgICAgdmFyIGNpcmNsZSA9IGZpZ21hLmNyZWF0ZUVsbGlwc2UoKTtcbiAgICAgICAgY2lyY2xlLnJlc2l6ZShhbm5vdGF0aW9uV2lkdGgsIGFubm90YXRpb25XaWR0aCk7XG4gICAgICAgIGNpcmNsZS5zdHJva2VXZWlnaHQgPSAyO1xuICAgICAgICBjaXJjbGUuc3Ryb2tlcyA9IFt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH1dO1xuICAgICAgICBjaXJjbGUuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6ICdDRU5URVInLCB2ZXJ0aWNhbDogJ0NFTlRFUicgfTtcbiAgICAgICAgY2lyY2xlLnggPSBwYXJlbnRYIC0gY2lyY2xlLndpZHRoIC8gMiArIDI7XG4gICAgICAgIGNpcmNsZS55ID0gcGFyZW50WSAtIGNpcmNsZS53aWR0aCAvIDIgKyAyO1xuICAgICAgICBjaXJjbGUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAuNzYsIGc6IC4xNSwgYjogLjg3IH0gfV07XG4gICAgICAgIGNpcmNsZS5uYW1lID0gXCJFbGxpcHNlIGJhY2tncm91bmRcIjtcbiAgICAgICAgdmFyIHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmModGV4dC5mb250TmFtZSk7XG4gICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAxMjtcbiAgICAgICAgdGV4dC54ID0gY2lyY2xlLnggKyAxMDtcbiAgICAgICAgdGV4dC55ID0gY2lyY2xlLnkgKyA2O1xuICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBtc2cubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIHRleHQubmFtZSA9IFwiT3JkZXJcIjtcbiAgICAgICAgdGV4dC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogJ0NFTlRFUicsIHZlcnRpY2FsOiAnQ0VOVEVSJyB9O1xuICAgICAgICB2YXIgYW5ub3RhdGlvbiA9IGZpZ21hLmdyb3VwKFtjaXJjbGUsIHRleHQsIGZvY3VzQm9yZGVyXSwgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICBhbm5vdGF0aW9uLm5hbWUgPSBtc2cubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIGFubm90YXRpb24uY29uc3RyYWludHMgPSB7aG9yaXpvbnRhbDogJ01JTicsIHZlcnRpY2FsOiAnTUlOJ307IFxuICAgICAgICAvL2ZyYW1lIGNvZGUgLSBVU0UgVEhJUyBXSEVOIFJFT1JERVIgR0VUUyBGSVhFRFxuICAgICAgICAvLyBjb25zdCB0YWIgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAvLyB0YWIuYmFja2dyb3VuZHMgPSBbXVxuICAgICAgICAvLyB0YWIuY2xpcHNDb250ZW50ID0gZmFsc2VcbiAgICAgICAgLy8gdGFiLmFwcGVuZENoaWxkKGJvcmRlcilcbiAgICAgICAgLy8gdGFiLmFwcGVuZENoaWxkKGJvcmRlcjIpXG4gICAgICAgIC8vIHRhYi5hcHBlbmRDaGlsZChhbm5vdGF0aW9uKVxuICAgICAgICBub2RlVG9Bbm5vdGF0ZS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInRhYmluZGV4XCIsIG1zZy5udW1iZXIudG9TdHJpbmcoKSk7XG4gICAgICAgIGFubm90YXRpb24uc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIsIFwiYW5ub3RhdGlvblwiKTtcbiAgICAgICAgYW5ub3RhdGlvbi5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInNvdXJjZVwiLCBtc2cuaWQpO1xuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbjtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=