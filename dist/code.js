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
            console.log(annotationNode);
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
            annotationNode.x = nodeX - annotationWidth;
            annotationNode.y = nodeY;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsaUNBQWlDLEVBQUU7QUFDNUYseURBQXlELGtCQUFrQixFQUFFO0FBQzdFLDRFQUE0RSxvQkFBb0IsRUFBRTtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3Qix5QkFBeUIsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCLG1CQUFtQixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLHFDQUFxQyxvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBDYW52YXNVcGRhdGVyIHtcbiAgICBzdGFydChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIDEwMDAgLyAxNSk7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XG4gICAgfVxufVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLyAgUkVDRUlWRSBDQUxMUyAgIC8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmxldCBjYW52YXNVcGRhdGVyID0gbmV3IENhbnZhc1VwZGF0ZXIoKTtcbnZhciBhbm5vdGF0aW9uV2lkdGggPSAyODtcbnZhciBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQgPSBbXTtcbnZhciBhbm5vdGF0aW9uTm9kZXMgPSBbXTtcbnZhciBhbm5vdGF0aW9uTGF5ZXJOYW1lID0gXCIqKn5+IEZvY3VzLW9yZGVyIGFubm90YXRpb25zIH5+KipcIjtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzc1LCBoZWlnaHQ6IDQ4MCB9KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgbWVzc2FnZSA9IHt9O1xuICAgIGlmIChtc2cudHlwZSA9PT0gJ2FkZC1mb2N1cycpIHtcbiAgICAgICAgdmFyIG5hbWVzID0gW107XG4gICAgICAgIHZhciBpZHMgPSBbXTtcbiAgICAgICAgdmFyIHNlbGVjdGlvbnMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGlmIChzZWxlY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNlbGVjdGlvbiBvZiBzZWxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIikgIT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZXMucHVzaChzZWxlY3Rpb24ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlkcy5wdXNoKHNlbGVjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuYW1lczogbmFtZXMsXG4gICAgICAgICAgICAgICAgaWRzOiBpZHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlLWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIG5vZGVUb0Fubm90YXRlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmlkKTtcbiAgICAgICAgLy8gZG91YmxlIGNyZWF0aW9uIG9mIGFubm90YXRpb25zIGlzbid0IGFsbG93ZWRcbiAgICAgICAgaWYgKG5vZGVUb0Fubm90YXRlLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiKSAhPT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uID0geWllbGQgY3JlYXRlQW5ub3RhdGlvblVJKG1zZywgbm9kZVRvQW5ub3RhdGUpO1xuICAgICAgICAgICAgbm9kZVRvQW5ub3RhdGUuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIsIFwib2JqZWN0XCIpO1xuICAgICAgICAgICAgbm9kZVRvQW5ub3RhdGUuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJhbm5vdGF0aW9uXCIsIGFubm90YXRpb24uaWQpO1xuICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGVzLnB1c2goYW5ub3RhdGlvbik7XG4gICAgICAgICAgICBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQucHVzaChbbXNnLmlkLCBhbm5vdGF0aW9uLmlkXSk7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIGdyb3VwQW5ub3RhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3JlbnVtYmVyLWFubm90YXRpb25VSScpIHtcbiAgICAgICAgLy8gdmFyIHByZXZOdW0gPSBtc2cucHJldk51bWJlcjsgIFxuICAgICAgICB2YXIgbmV4dE51bSA9IG1zZy5uZXh0TnVtYmVyO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbk5vZGUgPSBnZXRBbm5vdGF0aW9uTm9kZShtc2cuaWQpO1xuICAgICAgICBpZiAoYW5ub3RhdGlvbk5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGUubmFtZSA9IG5leHROdW0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFubm90YXRpb25Ob2RlKTtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGFubm90YXRpb25Ob2RlLmNoaWxkcmVuWzJdO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhjaGlsZC5mb250TmFtZSk7XG4gICAgICAgICAgICBjaGlsZC5jaGFyYWN0ZXJzID0gbmV4dE51bS50b1N0cmluZygpO1xuICAgICAgICAgICAgZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmlkKS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInRhYmluZGV4XCIsIG5leHROdW0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBncm91cEFubm90YXRpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdyZW1vdmUtYW5ub3RhdGlvblVJJykge1xuICAgICAgICB2YXIgaWQgPSBtc2cuaWQ7XG4gICAgICAgIHZhciBrdlBhaXIgPSBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQuZmlsdGVyKChrdlBhaXIpID0+IGt2UGFpclswXSA9PSBpZCk7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZUlEID0ga3ZQYWlyWzBdWzFdO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbk5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChhbm5vdGF0aW9uTm9kZUlEKTtcbiAgICAgICAgaWYgKGFubm90YXRpb25Ob2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFubm90YXRpb25Ob2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgYW5ub3RhdGlvbk5vZGVzID0gYW5ub3RhdGlvbk5vZGVzLmZpbHRlcigoYSkgPT4geyByZXR1cm4gYS5pZCAhPSBhbm5vdGF0aW9uTm9kZUlEOyB9KTtcbiAgICAgICAgYW5ub3RhdGlvbk5vZGVzID0gYW5ub3RhdGlvbk5vZGVzLmZpbHRlcigoYSkgPT4geyByZXR1cm4gYSAhPSBudWxsOyB9KTtcbiAgICAgICAgbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlEID0gbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELmZpbHRlcigoa3YpID0+IHsgcmV0dXJuIGt2WzBdICE9IGlkOyB9KTtcbiAgICAgICAgdmFyIG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChpZCk7XG4gICAgICAgIGlmIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAncmVmcmVzaC1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBpZCA9IG1zZy5pZDtcbiAgICAgICAgdmFyIGt2UGFpciA9IG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5maWx0ZXIoKGt2UGFpcikgPT4ga3ZQYWlyWzBdID09IGlkKTtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlSUQgPSBrdlBhaXJbMF1bMV07XG4gICAgICAgIHZhciBub2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoaWQpO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbk5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChhbm5vdGF0aW9uTm9kZUlEKTtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCB8fCBhbm5vdGF0aW9uTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibm9kZS1yZW1vdmVcIixcbiAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgYW5ub3RhdGlvbiBwb3NpdGlvbiBcbiAgICAgICAgICAgIHZhciBub2RlWCA9IG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl07XG4gICAgICAgICAgICB2YXIgbm9kZVkgPSBub2RlLmFic29sdXRlVHJhbnNmb3JtWzFdWzJdO1xuICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGUueCA9IG5vZGVYIC0gYW5ub3RhdGlvbldpZHRoO1xuICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGUueSA9IG5vZGVZO1xuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm5vZGUtcmVuYW1lXCIsXG4gICAgICAgICAgICAgICAgbm9kZU5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICd0ZXN0LWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGt2IG9mIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRCkge1xuICAgICAgICAgICAgdmFyIGlkID0ga3ZbMF07XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGlkKTtcbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdzZWxlY3QtYW5ub3RhdGlvblVJJykge1xuICAgICAgICB2YXIgbm9kZVRvU2VsZWN0ID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmlkKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW25vZGVUb1NlbGVjdF07XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnbG9hZC1hbm5vdGF0aW9ucycpIHtcbiAgICAgICAgYW5ub3RhdGlvbkxheWVyTmFtZSA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5uYW1lO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbnMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0uY2hpbGRyZW47XG4gICAgICAgIHZhciBuYW1lcyA9IG5ldyBBcnJheShhbm5vdGF0aW9ucy5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIGlkcyA9IG5ldyBBcnJheShhbm5vdGF0aW9ucy5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKGFubm90YXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGFubm90YXRpb24gb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbi5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIikgIT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgRXJyb3IoJ1NvbWV0aGluZyBpcyB2ZXJ5IHdyb25nLCB0aGlzIHByb2JhYmx5IGlzIG5vdCBhbiBhbm5vdGF0aW9uIGxheWVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBub2RlSUQgPSBhbm5vdGF0aW9uLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwic291cmNlXCIpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobm9kZUlEKTtcbiAgICAgICAgICAgICAgICB2YXIgb3JkZXIgPSBwYXJzZUludChhbm5vdGF0aW9uLm5hbWUpO1xuICAgICAgICAgICAgICAgIG5hbWVzW29yZGVyIC0gMV0gPSBub2RlLm5hbWU7XG4gICAgICAgICAgICAgICAgaWRzW29yZGVyIC0gMV0gPSBub2RlLmlkO1xuICAgICAgICAgICAgICAgIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5wdXNoKFtub2RlLmlkLCBhbm5vdGF0aW9uLmlkXSk7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGVzLnB1c2goYW5ub3RhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkLWZvY3VzXCIsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lczogbmFtZXMsXG4gICAgICAgICAgICAgICAgaWRzOiBpZHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnd2luZG93LWJsdXInKSB7XG4gICAgICAgIG9uQ2FudmFzRm9jdXMoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICd3aW5kb3ctZm9jdXMnKSB7XG4gICAgICAgIG9uV2luZG93Rm9jdXMoKTtcbiAgICB9XG4gICAgO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vICBIRUxQRVIgRlhOUyAgIC8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbmZ1bmN0aW9uIG9uQ2FudmFzRm9jdXMoKSB7XG4gICAgY2FudmFzVXBkYXRlci5zdGFydCh1cGRhdGVCdXR0b25zKTtcbn1cbmZ1bmN0aW9uIG9uV2luZG93Rm9jdXMoKSB7XG4gICAgY2FudmFzVXBkYXRlci5zdG9wKCk7XG59XG5mdW5jdGlvbiB1cGRhdGVCdXR0b25zKCkge1xuICAgIHZhciBsb2FkQnV0dG9uID0gZmFsc2U7XG4gICAgdmFyIGFkZEJ1dHRvbiA9IGZhbHNlO1xuICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09IDEpIHtcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIikgPT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgIGxvYWRCdXR0b24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID4gMSkge1xuICAgICAgICBhZGRCdXR0b24gPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgdHlwZTogXCJ1cGRhdGUtYnV0dG9uc1wiLFxuICAgICAgICBpc0Rpc2FibGVkOiAhYWRkQnV0dG9uLFxuICAgICAgICBsb2FkQnV0dG9uRGlzYWJsZWQ6ICFsb2FkQnV0dG9uXG4gICAgfTtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbn1cbmZ1bmN0aW9uIGdldEFubm90YXRpb25Ob2RlKGlkKSB7XG4gICAgdmFyIGt2UGFpciA9IG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5maWx0ZXIoKGt2UGFpcikgPT4ga3ZQYWlyWzBdID09IGlkKTtcbiAgICB2YXIgYW5ub3RhdGlvbk5vZGVJRCA9IGt2UGFpclswXVsxXTtcbiAgICB2YXIgYW5ub3RhdGlvbk5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChhbm5vdGF0aW9uTm9kZUlEKTtcbiAgICByZXR1cm4gYW5ub3RhdGlvbk5vZGU7XG59XG5mdW5jdGlvbiBncm91cEFubm90YXRpb25zKCkge1xuICAgIHZhciBncm91cCA9IGZpZ21hLmdyb3VwKGFubm90YXRpb25Ob2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgIGdyb3VwLm5hbWUgPSBhbm5vdGF0aW9uTGF5ZXJOYW1lO1xuICAgIGdyb3VwLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiLCBcImFubm90YXRpb25cIik7XG59XG47XG5mdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uVUkobXNnLCBub2RlVG9Bbm5vdGF0ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBwYXJlbnRYID0gbm9kZVRvQW5ub3RhdGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl07XG4gICAgICAgIHZhciBwYXJlbnRZID0gbm9kZVRvQW5ub3RhdGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl07XG4gICAgICAgIHZhciBib3JkZXJXID0gbm9kZVRvQW5ub3RhdGUud2lkdGg7XG4gICAgICAgIHZhciBib3JkZXJIID0gbm9kZVRvQW5ub3RhdGUuaGVpZ2h0O1xuICAgICAgICB2YXIgYm9yZGVyID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGJvcmRlci54ID0gcGFyZW50WDtcbiAgICAgICAgYm9yZGVyLnkgPSBwYXJlbnRZO1xuICAgICAgICBib3JkZXIucmVzaXplKGJvcmRlclcsIGJvcmRlckgpO1xuICAgICAgICBib3JkZXIuc3Ryb2tlV2VpZ2h0ID0gMjtcbiAgICAgICAgYm9yZGVyLnN0cm9rZUFsaWduID0gJ09VVFNJREUnO1xuICAgICAgICBib3JkZXIuY29ybmVyUmFkaXVzID0gNDtcbiAgICAgICAgYm9yZGVyLnN0cm9rZXMgPSBbe1xuICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IC43NiwgZzogLjE1LCBiOiAuODcgfSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgYm9yZGVyLmZpbGxzID0gW107XG4gICAgICAgIGJvcmRlci5uYW1lID0gXCJCb3JkZXIgMVwiO1xuICAgICAgICBib3JkZXIuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6ICdTVFJFVENIJywgdmVydGljYWw6ICdTVFJFVENIJyB9O1xuICAgICAgICB2YXIgYm9yZGVyMiA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICBib3JkZXIyLnggPSBwYXJlbnRYO1xuICAgICAgICBib3JkZXIyLnkgPSBwYXJlbnRZO1xuICAgICAgICBib3JkZXIyLnJlc2l6ZShib3JkZXJXLCBib3JkZXJIKTtcbiAgICAgICAgYm9yZGVyMi5zdHJva2VXZWlnaHQgPSAyO1xuICAgICAgICBib3JkZXIyLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgIGJvcmRlcjIuc3Ryb2tlcyA9IFt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH1dO1xuICAgICAgICBib3JkZXIyLmZpbGxzID0gW107XG4gICAgICAgIGJvcmRlcjIubmFtZSA9IFwiQm9yZGVyIDJcIjtcbiAgICAgICAgYm9yZGVyMi5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogJ1NUUkVUQ0gnLCB2ZXJ0aWNhbDogJ1NUUkVUQ0gnIH07XG4gICAgICAgIHZhciBmb2N1c0JvcmRlciA9IGZpZ21hLmdyb3VwKFtib3JkZXIsIGJvcmRlcjJdLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgIGZvY3VzQm9yZGVyLm5hbWUgPSBcIkJvcmRlcnNcIjtcbiAgICAgICAgdmFyIGNpcmNsZSA9IGZpZ21hLmNyZWF0ZUVsbGlwc2UoKTtcbiAgICAgICAgY2lyY2xlLnJlc2l6ZShhbm5vdGF0aW9uV2lkdGgsIGFubm90YXRpb25XaWR0aCk7XG4gICAgICAgIGNpcmNsZS5zdHJva2VXZWlnaHQgPSAyO1xuICAgICAgICBjaXJjbGUuc3Ryb2tlcyA9IFt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH1dO1xuICAgICAgICBjaXJjbGUuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6ICdDRU5URVInLCB2ZXJ0aWNhbDogJ0NFTlRFUicgfTtcbiAgICAgICAgY2lyY2xlLnggPSBwYXJlbnRYIC0gY2lyY2xlLndpZHRoIC8gMiArIDI7XG4gICAgICAgIGNpcmNsZS55ID0gcGFyZW50WSAtIGNpcmNsZS53aWR0aCAvIDIgKyAyO1xuICAgICAgICBjaXJjbGUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAuNzYsIGc6IC4xNSwgYjogLjg3IH0gfV07XG4gICAgICAgIGNpcmNsZS5uYW1lID0gXCJFbGxpcHNlIGJhY2tncm91bmRcIjtcbiAgICAgICAgdmFyIHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmModGV4dC5mb250TmFtZSk7XG4gICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAxMjtcbiAgICAgICAgdGV4dC54ID0gY2lyY2xlLnggKyAxMDtcbiAgICAgICAgdGV4dC55ID0gY2lyY2xlLnkgKyA2O1xuICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBtc2cubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIHRleHQubmFtZSA9IFwiT3JkZXJcIjtcbiAgICAgICAgdGV4dC5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogJ0NFTlRFUicsIHZlcnRpY2FsOiAnQ0VOVEVSJyB9O1xuICAgICAgICB2YXIgYW5ub3RhdGlvbiA9IGZpZ21hLmdyb3VwKFtjaXJjbGUsIHRleHQsIGZvY3VzQm9yZGVyXSwgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICBhbm5vdGF0aW9uLm5hbWUgPSBtc2cubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIGFubm90YXRpb24uY29uc3RyYWludHMgPSB7aG9yaXpvbnRhbDogJ01JTicsIHZlcnRpY2FsOiAnTUlOJ307IFxuICAgICAgICAvL2ZyYW1lIGNvZGUgLSBVU0UgVEhJUyBXSEVOIFJFT1JERVIgR0VUUyBGSVhFRFxuICAgICAgICAvLyBjb25zdCB0YWIgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAvLyB0YWIuYmFja2dyb3VuZHMgPSBbXVxuICAgICAgICAvLyB0YWIuY2xpcHNDb250ZW50ID0gZmFsc2VcbiAgICAgICAgLy8gdGFiLmFwcGVuZENoaWxkKGJvcmRlcilcbiAgICAgICAgLy8gdGFiLmFwcGVuZENoaWxkKGJvcmRlcjIpXG4gICAgICAgIC8vIHRhYi5hcHBlbmRDaGlsZChhbm5vdGF0aW9uKVxuICAgICAgICBub2RlVG9Bbm5vdGF0ZS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInRhYmluZGV4XCIsIG1zZy5udW1iZXIudG9TdHJpbmcoKSk7XG4gICAgICAgIGFubm90YXRpb24uc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIsIFwiYW5ub3RhdGlvblwiKTtcbiAgICAgICAgYW5ub3RhdGlvbi5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInNvdXJjZVwiLCBtc2cuaWQpO1xuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbjtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=