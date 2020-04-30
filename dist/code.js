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
        text.textAlignHorizontal = 'CENTER';
        text.fontSize = 12;
        text.x = circle.x + 13;
        text.y = circle.y + 7;
        text.characters = msg.number.toString();
        text.name = "Order";
        text.constraints = { horizontal: 'CENTER', vertical: 'CENTER' };
        var numberCircle = figma.group([circle, text], figma.currentPage);
        var annotation = figma.group([numberCircle, focusBorder], figma.currentPage);
        annotation.name = msg.number.toString();
        nodeToAnnotate.setSharedPluginData("a11y", "tabindex", msg.number.toString());
        annotation.setSharedPluginData("a11y", "type", "annotation");
        annotation.setSharedPluginData("a11y", "source", msg.id);
        return annotation;
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGlDQUFpQyxFQUFFO0FBQzVGLHlEQUF5RCxrQkFBa0IsRUFBRTtBQUM3RSw0RUFBNEUsb0JBQW9CLEVBQUU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLHlCQUF5Qix3QkFBd0IseUJBQXlCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QixtQkFBbUIsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNsYXNzIENhbnZhc1VwZGF0ZXIge1xuICAgIHN0YXJ0KGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbChjYWxsYmFjaywgMTAwMCAvIDE1KTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcbiAgICB9XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vICBSRUNFSVZFIENBTExTICAgLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xubGV0IGNhbnZhc1VwZGF0ZXIgPSBuZXcgQ2FudmFzVXBkYXRlcigpO1xudmFyIGFubm90YXRpb25XaWR0aCA9IDI4O1xudmFyIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRCA9IFtdO1xudmFyIGFubm90YXRpb25Ob2RlcyA9IFtdO1xudmFyIGFubm90YXRpb25MYXllck5hbWUgPSBcIioqfn4gRm9jdXMtb3JkZXIgYW5ub3RhdGlvbnMgfn4qKlwiO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAzNzUsIGhlaWdodDogNDgwIH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgaWYgKG1zZy50eXBlID09PSAnYWRkLWZvY3VzJykge1xuICAgICAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICAgICAgdmFyIGlkcyA9IFtdO1xuICAgICAgICB2YXIgc2VsZWN0aW9ucyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgc2VsZWN0aW9uIG9mIHNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiKSAhPSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKHNlbGVjdGlvbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWRzLnB1c2goc2VsZWN0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5hbWVzOiBuYW1lcyxcbiAgICAgICAgICAgICAgICBpZHM6IGlkcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdjcmVhdGUtYW5ub3RhdGlvblVJJykge1xuICAgICAgICB2YXIgbm9kZVRvQW5ub3RhdGUgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuaWQpO1xuICAgICAgICAvLyBkb3VibGUgY3JlYXRpb24gb2YgYW5ub3RhdGlvbnMgaXNuJ3QgYWxsb3dlZFxuICAgICAgICBpZiAobm9kZVRvQW5ub3RhdGUuZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIpICE9PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgdmFyIGFubm90YXRpb24gPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uVUkobXNnLCBub2RlVG9Bbm5vdGF0ZSk7XG4gICAgICAgICAgICBub2RlVG9Bbm5vdGF0ZS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIiwgXCJvYmplY3RcIik7XG4gICAgICAgICAgICBub2RlVG9Bbm5vdGF0ZS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcImFubm90YXRpb25cIiwgYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZXMucHVzaChhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5wdXNoKFttc2cuaWQsIGFubm90YXRpb24uaWRdKTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGFubm90YXRpb24pO1xuICAgICAgICAgICAgZ3JvdXBBbm5vdGF0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAncmVudW1iZXItYW5ub3RhdGlvblVJJykge1xuICAgICAgICAvLyB2YXIgcHJldk51bSA9IG1zZy5wcmV2TnVtYmVyOyAgXG4gICAgICAgIHZhciBuZXh0TnVtID0gbXNnLm5leHROdW1iZXI7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGdldEFubm90YXRpb25Ob2RlKG1zZy5pZCk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9uTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS5uYW1lID0gbmV4dE51bS50b1N0cmluZygpO1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gYW5ub3RhdGlvbk5vZGUuY2hpbGRyZW5bMl07XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGNoaWxkLmZvbnROYW1lKTtcbiAgICAgICAgICAgIGNoaWxkLmNoYXJhY3RlcnMgPSBuZXh0TnVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBmaWdtYS5nZXROb2RlQnlJZChtc2cuaWQpLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidGFiaW5kZXhcIiwgbmV4dE51bS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGdyb3VwQW5ub3RhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3JlbW92ZS1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBpZCA9IG1zZy5pZDtcbiAgICAgICAgdmFyIGt2UGFpciA9IG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5maWx0ZXIoKGt2UGFpcikgPT4ga3ZQYWlyWzBdID09IGlkKTtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlSUQgPSBrdlBhaXJbMF1bMV07XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb25Ob2RlSUQpO1xuICAgICAgICBpZiAoYW5ub3RhdGlvbk5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBhbm5vdGF0aW9uTm9kZXMgPSBhbm5vdGF0aW9uTm9kZXMuZmlsdGVyKChhKSA9PiB7IHJldHVybiBhLmlkICE9IGFubm90YXRpb25Ob2RlSUQ7IH0pO1xuICAgICAgICBhbm5vdGF0aW9uTm9kZXMgPSBhbm5vdGF0aW9uTm9kZXMuZmlsdGVyKChhKSA9PiB7IHJldHVybiBhICE9IG51bGw7IH0pO1xuICAgICAgICBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQgPSBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQuZmlsdGVyKChrdikgPT4geyByZXR1cm4ga3ZbMF0gIT0gaWQ7IH0pO1xuICAgICAgICB2YXIgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGlkKTtcbiAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdyZWZyZXNoLWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIGlkID0gbXNnLmlkO1xuICAgICAgICB2YXIga3ZQYWlyID0gbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELmZpbHRlcigoa3ZQYWlyKSA9PiBrdlBhaXJbMF0gPT0gaWQpO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbk5vZGVJRCA9IGt2UGFpclswXVsxXTtcbiAgICAgICAgdmFyIG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChpZCk7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb25Ob2RlSUQpO1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsIHx8IGFubm90YXRpb25Ob2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJub2RlLXJlbW92ZVwiLFxuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBhbm5vdGF0aW9uIHBvc2l0aW9uIFxuICAgICAgICAgICAgdmFyIG5vZGVYID0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXTtcbiAgICAgICAgICAgIHZhciBub2RlWSA9IG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl07XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS54ID0gbm9kZVggLSBhbm5vdGF0aW9uV2lkdGggLyAyO1xuICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGUueSA9IG5vZGVZIC0gYW5ub3RhdGlvbldpZHRoIC8gMjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJub2RlLXJlbmFtZVwiLFxuICAgICAgICAgICAgICAgIG5vZGVOYW1lOiBub2RlLm5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAndGVzdC1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBub2RlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBrdiBvZiBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGt2WzBdO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChpZCk7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnc2VsZWN0LWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIG5vZGVUb1NlbGVjdCA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5pZCk7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtub2RlVG9TZWxlY3RdO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2xvYWQtYW5ub3RhdGlvbnMnKSB7XG4gICAgICAgIGFubm90YXRpb25MYXllck5hbWUgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0ubmFtZTtcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLmNoaWxkcmVuO1xuICAgICAgICB2YXIgbmFtZXMgPSBuZXcgQXJyYXkoYW5ub3RhdGlvbnMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHZhciBpZHMgPSBuZXcgQXJyYXkoYW5ub3RhdGlvbnMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBhbm5vdGF0aW9uIG9mIGFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFubm90YXRpb24uZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIpICE9IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIEVycm9yKCdTb21ldGhpbmcgaXMgdmVyeSB3cm9uZywgdGhpcyBwcm9iYWJseSBpcyBub3QgYW4gYW5ub3RhdGlvbiBsYXllcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbm9kZUlEID0gYW5ub3RhdGlvbi5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInNvdXJjZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKG5vZGVJRCk7XG4gICAgICAgICAgICAgICAgdmFyIG9yZGVyID0gcGFyc2VJbnQoYW5ub3RhdGlvbi5uYW1lKTtcbiAgICAgICAgICAgICAgICBuYW1lc1tvcmRlciAtIDFdID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgIGlkc1tvcmRlciAtIDFdID0gbm9kZS5pZDtcbiAgICAgICAgICAgICAgICBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQucHVzaChbbm9kZS5pZCwgYW5ub3RhdGlvbi5pZF0pO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Ob2Rlcy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFkZC1mb2N1c1wiLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZXM6IG5hbWVzLFxuICAgICAgICAgICAgICAgIGlkczogaWRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3dpbmRvdy1ibHVyJykge1xuICAgICAgICBvbkNhbnZhc0ZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnd2luZG93LWZvY3VzJykge1xuICAgICAgICBvbldpbmRvd0ZvY3VzKCk7XG4gICAgfVxuICAgIDtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbn0pO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLyAgSEVMUEVSIEZYTlMgICAvLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG5mdW5jdGlvbiBvbkNhbnZhc0ZvY3VzKCkge1xuICAgIGNhbnZhc1VwZGF0ZXIuc3RhcnQodXBkYXRlQnV0dG9ucyk7XG59XG5mdW5jdGlvbiBvbldpbmRvd0ZvY3VzKCkge1xuICAgIGNhbnZhc1VwZGF0ZXIuc3RvcCgpO1xufVxuZnVuY3Rpb24gdXBkYXRlQnV0dG9ucygpIHtcbiAgICB2YXIgbG9hZEJ1dHRvbiA9IGZhbHNlO1xuICAgIHZhciBhZGRCdXR0b24gPSBmYWxzZTtcbiAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0uZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIpID09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICBsb2FkQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZEJ1dHRvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgYWRkQnV0dG9uID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6IFwidXBkYXRlLWJ1dHRvbnNcIixcbiAgICAgICAgaXNEaXNhYmxlZDogIWFkZEJ1dHRvbixcbiAgICAgICAgbG9hZEJ1dHRvbkRpc2FibGVkOiAhbG9hZEJ1dHRvblxuICAgIH07XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG59XG5mdW5jdGlvbiBnZXRBbm5vdGF0aW9uTm9kZShpZCkge1xuICAgIHZhciBrdlBhaXIgPSBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQuZmlsdGVyKChrdlBhaXIpID0+IGt2UGFpclswXSA9PSBpZCk7XG4gICAgdmFyIGFubm90YXRpb25Ob2RlSUQgPSBrdlBhaXJbMF1bMV07XG4gICAgdmFyIGFubm90YXRpb25Ob2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoYW5ub3RhdGlvbk5vZGVJRCk7XG4gICAgcmV0dXJuIGFubm90YXRpb25Ob2RlO1xufVxuZnVuY3Rpb24gZ3JvdXBBbm5vdGF0aW9ucygpIHtcbiAgICB2YXIgZ3JvdXAgPSBmaWdtYS5ncm91cChhbm5vdGF0aW9uTm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICBncm91cC5uYW1lID0gYW5ub3RhdGlvbkxheWVyTmFtZTtcbiAgICBncm91cC5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIiwgXCJhbm5vdGF0aW9uXCIpO1xufVxuO1xuZnVuY3Rpb24gY3JlYXRlQW5ub3RhdGlvblVJKG1zZywgbm9kZVRvQW5ub3RhdGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgcGFyZW50WCA9IG5vZGVUb0Fubm90YXRlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdO1xuICAgICAgICB2YXIgcGFyZW50WSA9IG5vZGVUb0Fubm90YXRlLmFic29sdXRlVHJhbnNmb3JtWzFdWzJdO1xuICAgICAgICB2YXIgYm9yZGVyVyA9IG5vZGVUb0Fubm90YXRlLndpZHRoO1xuICAgICAgICB2YXIgYm9yZGVySCA9IG5vZGVUb0Fubm90YXRlLmhlaWdodDtcbiAgICAgICAgdmFyIGJvcmRlciA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICBib3JkZXIueCA9IHBhcmVudFg7XG4gICAgICAgIGJvcmRlci55ID0gcGFyZW50WTtcbiAgICAgICAgYm9yZGVyLnJlc2l6ZShib3JkZXJXLCBib3JkZXJIKTtcbiAgICAgICAgYm9yZGVyLnN0cm9rZVdlaWdodCA9IDI7XG4gICAgICAgIGJvcmRlci5zdHJva2VBbGlnbiA9ICdPVVRTSURFJztcbiAgICAgICAgYm9yZGVyLmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgIGJvcmRlci5zdHJva2VzID0gW3tcbiAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAuNzYsIGc6IC4xNSwgYjogLjg3IH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgfV07XG4gICAgICAgIGJvcmRlci5maWxscyA9IFtdO1xuICAgICAgICBib3JkZXIubmFtZSA9IFwiQm9yZGVyIDFcIjtcbiAgICAgICAgYm9yZGVyLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiAnU1RSRVRDSCcsIHZlcnRpY2FsOiAnU1RSRVRDSCcgfTtcbiAgICAgICAgdmFyIGJvcmRlcjIgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgYm9yZGVyMi54ID0gcGFyZW50WDtcbiAgICAgICAgYm9yZGVyMi55ID0gcGFyZW50WTtcbiAgICAgICAgYm9yZGVyMi5yZXNpemUoYm9yZGVyVywgYm9yZGVySCk7XG4gICAgICAgIGJvcmRlcjIuc3Ryb2tlV2VpZ2h0ID0gMjtcbiAgICAgICAgYm9yZGVyMi5jb3JuZXJSYWRpdXMgPSA0O1xuICAgICAgICBib3JkZXIyLnN0cm9rZXMgPSBbe1xuICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgYm9yZGVyMi5maWxscyA9IFtdO1xuICAgICAgICBib3JkZXIyLm5hbWUgPSBcIkJvcmRlciAyXCI7XG4gICAgICAgIGJvcmRlcjIuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6ICdTVFJFVENIJywgdmVydGljYWw6ICdTVFJFVENIJyB9O1xuICAgICAgICB2YXIgZm9jdXNCb3JkZXIgPSBmaWdtYS5ncm91cChbYm9yZGVyLCBib3JkZXIyXSwgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICBmb2N1c0JvcmRlci5uYW1lID0gXCJCb3JkZXJzXCI7XG4gICAgICAgIHZhciBjaXJjbGUgPSBmaWdtYS5jcmVhdGVFbGxpcHNlKCk7XG4gICAgICAgIGNpcmNsZS5yZXNpemUoYW5ub3RhdGlvbldpZHRoLCBhbm5vdGF0aW9uV2lkdGgpO1xuICAgICAgICBjaXJjbGUuc3Ryb2tlV2VpZ2h0ID0gMjtcbiAgICAgICAgY2lyY2xlLnN0cm9rZXMgPSBbe1xuICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgY2lyY2xlLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiAnQ0VOVEVSJywgdmVydGljYWw6ICdDRU5URVInIH07XG4gICAgICAgIGNpcmNsZS54ID0gcGFyZW50WCAtIGNpcmNsZS53aWR0aCAvIDIgKyAyO1xuICAgICAgICBjaXJjbGUueSA9IHBhcmVudFkgLSBjaXJjbGUud2lkdGggLyAyICsgMjtcbiAgICAgICAgY2lyY2xlLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogLjc2LCBnOiAuMTUsIGI6IC44NyB9IH1dO1xuICAgICAgICBjaXJjbGUubmFtZSA9IFwiRWxsaXBzZSBiYWNrZ3JvdW5kXCI7XG4gICAgICAgIHZhciB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHRleHQuZm9udE5hbWUpO1xuICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgICAgICB0ZXh0LnRleHRBbGlnbkhvcml6b250YWwgPSAnQ0VOVEVSJztcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDEyO1xuICAgICAgICB0ZXh0LnggPSBjaXJjbGUueCArIDEzO1xuICAgICAgICB0ZXh0LnkgPSBjaXJjbGUueSArIDc7XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IG1zZy5udW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgdGV4dC5uYW1lID0gXCJPcmRlclwiO1xuICAgICAgICB0ZXh0LmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiAnQ0VOVEVSJywgdmVydGljYWw6ICdDRU5URVInIH07XG4gICAgICAgIHZhciBudW1iZXJDaXJjbGUgPSBmaWdtYS5ncm91cChbY2lyY2xlLCB0ZXh0XSwgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbiA9IGZpZ21hLmdyb3VwKFtudW1iZXJDaXJjbGUsIGZvY3VzQm9yZGVyXSwgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICBhbm5vdGF0aW9uLm5hbWUgPSBtc2cubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIG5vZGVUb0Fubm90YXRlLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidGFiaW5kZXhcIiwgbXNnLm51bWJlci50b1N0cmluZygpKTtcbiAgICAgICAgYW5ub3RhdGlvbi5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIiwgXCJhbm5vdGF0aW9uXCIpO1xuICAgICAgICBhbm5vdGF0aW9uLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwic291cmNlXCIsIG1zZy5pZCk7XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9uO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==