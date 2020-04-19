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
            var child = annotationNode.children[1];
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
        var circle = figma.createEllipse();
        circle.resize(annotationWidth, annotationWidth);
        circle.strokeWeight = 2;
        circle.strokes = [{
                color: { r: 1, g: 1, b: 1 },
                opacity: 1,
                type: "SOLID",
                visible: true
            }];
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
        // var focusBorder = figma.group([ border, border2 ], figma.currentPage); 
        // focusBorder.name = "Borders"
        var annotation = figma.group([circle, text], figma.currentPage);
        annotation.name = msg.number.toString();
        annotation.constraints = { horizontal: 'MIN', vertical: 'MIN' };
        //frame code
        const tab = figma.createFrame();
        tab.backgrounds = [];
        tab.clipsContent = false;
        tab.appendChild(border);
        tab.appendChild(border2);
        tab.appendChild(annotation);
        nodeToAnnotate.setSharedPluginData("a11y", "tabindex", msg.number.toString());
        annotation.setSharedPluginData("a11y", "type", "annotation");
        annotation.setSharedPluginData("a11y", "source", msg.id);
        return annotation;
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGlDQUFpQyxFQUFFO0FBQzVGLHlEQUF5RCxrQkFBa0IsRUFBRTtBQUM3RSw0RUFBNEUsb0JBQW9CLEVBQUU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCLHlCQUF5QixFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0IsbUJBQW1CLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNsYXNzIENhbnZhc1VwZGF0ZXIge1xuICAgIHN0YXJ0KGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbChjYWxsYmFjaywgMTAwMCAvIDE1KTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcbiAgICB9XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vICBSRUNFSVZFIENBTExTICAgLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xubGV0IGNhbnZhc1VwZGF0ZXIgPSBuZXcgQ2FudmFzVXBkYXRlcigpO1xudmFyIGFubm90YXRpb25XaWR0aCA9IDI4O1xudmFyIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRCA9IFtdO1xudmFyIGFubm90YXRpb25Ob2RlcyA9IFtdO1xudmFyIGFubm90YXRpb25MYXllck5hbWUgPSBcIioqfn4gRm9jdXMtb3JkZXIgYW5ub3RhdGlvbnMgfn4qKlwiO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAzNzUsIGhlaWdodDogNDgwIH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgaWYgKG1zZy50eXBlID09PSAnYWRkLWZvY3VzJykge1xuICAgICAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICAgICAgdmFyIGlkcyA9IFtdO1xuICAgICAgICB2YXIgc2VsZWN0aW9ucyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgc2VsZWN0aW9uIG9mIHNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiKSAhPSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKHNlbGVjdGlvbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWRzLnB1c2goc2VsZWN0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5hbWVzOiBuYW1lcyxcbiAgICAgICAgICAgICAgICBpZHM6IGlkcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdjcmVhdGUtYW5ub3RhdGlvblVJJykge1xuICAgICAgICB2YXIgbm9kZVRvQW5ub3RhdGUgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuaWQpO1xuICAgICAgICAvLyBkb3VibGUgY3JlYXRpb24gb2YgYW5ub3RhdGlvbnMgaXNuJ3QgYWxsb3dlZFxuICAgICAgICBpZiAobm9kZVRvQW5ub3RhdGUuZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIpICE9PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgdmFyIGFubm90YXRpb24gPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uVUkobXNnLCBub2RlVG9Bbm5vdGF0ZSk7XG4gICAgICAgICAgICBub2RlVG9Bbm5vdGF0ZS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIiwgXCJvYmplY3RcIik7XG4gICAgICAgICAgICBub2RlVG9Bbm5vdGF0ZS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcImFubm90YXRpb25cIiwgYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZXMucHVzaChhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5wdXNoKFttc2cuaWQsIGFubm90YXRpb24uaWRdKTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGFubm90YXRpb24pO1xuICAgICAgICAgICAgZ3JvdXBBbm5vdGF0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAncmVudW1iZXItYW5ub3RhdGlvblVJJykge1xuICAgICAgICAvLyB2YXIgcHJldk51bSA9IG1zZy5wcmV2TnVtYmVyOyAgXG4gICAgICAgIHZhciBuZXh0TnVtID0gbXNnLm5leHROdW1iZXI7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGdldEFubm90YXRpb25Ob2RlKG1zZy5pZCk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9uTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS5uYW1lID0gbmV4dE51bS50b1N0cmluZygpO1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gYW5ub3RhdGlvbk5vZGUuY2hpbGRyZW5bMV07XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGNoaWxkLmZvbnROYW1lKTtcbiAgICAgICAgICAgIGNoaWxkLmNoYXJhY3RlcnMgPSBuZXh0TnVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBmaWdtYS5nZXROb2RlQnlJZChtc2cuaWQpLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidGFiaW5kZXhcIiwgbmV4dE51bS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGdyb3VwQW5ub3RhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3JlbW92ZS1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBpZCA9IG1zZy5pZDtcbiAgICAgICAgdmFyIGt2UGFpciA9IG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5maWx0ZXIoKGt2UGFpcikgPT4ga3ZQYWlyWzBdID09IGlkKTtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlSUQgPSBrdlBhaXJbMF1bMV07XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb25Ob2RlSUQpO1xuICAgICAgICBpZiAoYW5ub3RhdGlvbk5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBhbm5vdGF0aW9uTm9kZXMgPSBhbm5vdGF0aW9uTm9kZXMuZmlsdGVyKChhKSA9PiB7IHJldHVybiBhLmlkICE9IGFubm90YXRpb25Ob2RlSUQ7IH0pO1xuICAgICAgICBhbm5vdGF0aW9uTm9kZXMgPSBhbm5vdGF0aW9uTm9kZXMuZmlsdGVyKChhKSA9PiB7IHJldHVybiBhICE9IG51bGw7IH0pO1xuICAgICAgICBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQgPSBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQuZmlsdGVyKChrdikgPT4geyByZXR1cm4ga3ZbMF0gIT0gaWQ7IH0pO1xuICAgICAgICB2YXIgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGlkKTtcbiAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdyZWZyZXNoLWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIGlkID0gbXNnLmlkO1xuICAgICAgICB2YXIga3ZQYWlyID0gbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELmZpbHRlcigoa3ZQYWlyKSA9PiBrdlBhaXJbMF0gPT0gaWQpO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbk5vZGVJRCA9IGt2UGFpclswXVsxXTtcbiAgICAgICAgdmFyIG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChpZCk7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb25Ob2RlSUQpO1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsIHx8IGFubm90YXRpb25Ob2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJub2RlLXJlbW92ZVwiLFxuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBhbm5vdGF0aW9uIHBvc2l0aW9uIFxuICAgICAgICAgICAgdmFyIG5vZGVYID0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXTtcbiAgICAgICAgICAgIHZhciBub2RlWSA9IG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl07XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS54ID0gbm9kZVggLSBhbm5vdGF0aW9uV2lkdGg7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS55ID0gbm9kZVk7XG4gICAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibm9kZS1yZW5hbWVcIixcbiAgICAgICAgICAgICAgICBub2RlTmFtZTogbm9kZS5uYW1lLFxuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3Rlc3QtYW5ub3RhdGlvblVJJykge1xuICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQga3Ygb2Ygbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlEKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBrdlswXTtcbiAgICAgICAgICAgIHZhciBub2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoaWQpO1xuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZXMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3NlbGVjdC1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBub2RlVG9TZWxlY3QgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuaWQpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbbm9kZVRvU2VsZWN0XTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdsb2FkLWFubm90YXRpb25zJykge1xuICAgICAgICBhbm5vdGF0aW9uTGF5ZXJOYW1lID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLm5hbWU7XG4gICAgICAgIHZhciBhbm5vdGF0aW9ucyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5jaGlsZHJlbjtcbiAgICAgICAgdmFyIG5hbWVzID0gbmV3IEFycmF5KGFubm90YXRpb25zLmxlbmd0aCAtIDEpO1xuICAgICAgICB2YXIgaWRzID0gbmV3IEFycmF5KGFubm90YXRpb25zLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAoYW5ub3RhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgYW5ub3RhdGlvbiBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiKSAhPSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBFcnJvcignU29tZXRoaW5nIGlzIHZlcnkgd3JvbmcsIHRoaXMgcHJvYmFibHkgaXMgbm90IGFuIGFubm90YXRpb24gbGF5ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJRCA9IGFubm90YXRpb24uZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJzb3VyY2VcIik7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChub2RlSUQpO1xuICAgICAgICAgICAgICAgIHZhciBvcmRlciA9IHBhcnNlSW50KGFubm90YXRpb24ubmFtZSk7XG4gICAgICAgICAgICAgICAgbmFtZXNbb3JkZXIgLSAxXSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgICAgICBpZHNbb3JkZXIgLSAxXSA9IG5vZGUuaWQ7XG4gICAgICAgICAgICAgICAgbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELnB1c2goW25vZGUuaWQsIGFubm90YXRpb24uaWRdKTtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uTm9kZXMucHVzaChhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGQtZm9jdXNcIixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWVzOiBuYW1lcyxcbiAgICAgICAgICAgICAgICBpZHM6IGlkcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICd3aW5kb3ctYmx1cicpIHtcbiAgICAgICAgb25DYW52YXNGb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3dpbmRvdy1mb2N1cycpIHtcbiAgICAgICAgb25XaW5kb3dGb2N1cygpO1xuICAgIH1cbiAgICA7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG59KTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8gIEhFTFBFUiBGWE5TICAgLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuZnVuY3Rpb24gb25DYW52YXNGb2N1cygpIHtcbiAgICBjYW52YXNVcGRhdGVyLnN0YXJ0KHVwZGF0ZUJ1dHRvbnMpO1xufVxuZnVuY3Rpb24gb25XaW5kb3dGb2N1cygpIHtcbiAgICBjYW52YXNVcGRhdGVyLnN0b3AoKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbnMoKSB7XG4gICAgdmFyIGxvYWRCdXR0b24gPSBmYWxzZTtcbiAgICB2YXIgYWRkQnV0dG9uID0gZmFsc2U7XG4gICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT0gMSkge1xuICAgICAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiKSA9PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgbG9hZEJ1dHRvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRCdXR0b24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICAgIGFkZEJ1dHRvbiA9IHRydWU7XG4gICAgfVxuICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICB0eXBlOiBcInVwZGF0ZS1idXR0b25zXCIsXG4gICAgICAgIGlzRGlzYWJsZWQ6ICFhZGRCdXR0b24sXG4gICAgICAgIGxvYWRCdXR0b25EaXNhYmxlZDogIWxvYWRCdXR0b25cbiAgICB9O1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gZ2V0QW5ub3RhdGlvbk5vZGUoaWQpIHtcbiAgICB2YXIga3ZQYWlyID0gbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELmZpbHRlcigoa3ZQYWlyKSA9PiBrdlBhaXJbMF0gPT0gaWQpO1xuICAgIHZhciBhbm5vdGF0aW9uTm9kZUlEID0ga3ZQYWlyWzBdWzFdO1xuICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb25Ob2RlSUQpO1xuICAgIHJldHVybiBhbm5vdGF0aW9uTm9kZTtcbn1cbmZ1bmN0aW9uIGdyb3VwQW5ub3RhdGlvbnMoKSB7XG4gICAgdmFyIGdyb3VwID0gZmlnbWEuZ3JvdXAoYW5ub3RhdGlvbk5vZGVzLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgZ3JvdXAubmFtZSA9IGFubm90YXRpb25MYXllck5hbWU7XG4gICAgZ3JvdXAuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIsIFwiYW5ub3RhdGlvblwiKTtcbn1cbjtcbmZ1bmN0aW9uIGNyZWF0ZUFubm90YXRpb25VSShtc2csIG5vZGVUb0Fubm90YXRlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHBhcmVudFggPSBub2RlVG9Bbm5vdGF0ZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXTtcbiAgICAgICAgdmFyIHBhcmVudFkgPSBub2RlVG9Bbm5vdGF0ZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXTtcbiAgICAgICAgdmFyIGJvcmRlclcgPSBub2RlVG9Bbm5vdGF0ZS53aWR0aDtcbiAgICAgICAgdmFyIGJvcmRlckggPSBub2RlVG9Bbm5vdGF0ZS5oZWlnaHQ7XG4gICAgICAgIHZhciBib3JkZXIgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgYm9yZGVyLnggPSBwYXJlbnRYO1xuICAgICAgICBib3JkZXIueSA9IHBhcmVudFk7XG4gICAgICAgIGJvcmRlci5yZXNpemUoYm9yZGVyVywgYm9yZGVySCk7XG4gICAgICAgIGJvcmRlci5zdHJva2VXZWlnaHQgPSAyO1xuICAgICAgICBib3JkZXIuc3Ryb2tlQWxpZ24gPSAnT1VUU0lERSc7XG4gICAgICAgIGJvcmRlci5jb3JuZXJSYWRpdXMgPSA0O1xuICAgICAgICBib3JkZXIuc3Ryb2tlcyA9IFt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogLjc2LCBnOiAuMTUsIGI6IC44NyB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH1dO1xuICAgICAgICBib3JkZXIuZmlsbHMgPSBbXTtcbiAgICAgICAgYm9yZGVyLm5hbWUgPSBcIkJvcmRlciAxXCI7XG4gICAgICAgIGJvcmRlci5jb25zdHJhaW50cyA9IHsgaG9yaXpvbnRhbDogJ1NUUkVUQ0gnLCB2ZXJ0aWNhbDogJ1NUUkVUQ0gnIH07XG4gICAgICAgIHZhciBib3JkZXIyID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgIGJvcmRlcjIueCA9IHBhcmVudFg7XG4gICAgICAgIGJvcmRlcjIueSA9IHBhcmVudFk7XG4gICAgICAgIGJvcmRlcjIucmVzaXplKGJvcmRlclcsIGJvcmRlckgpO1xuICAgICAgICBib3JkZXIyLnN0cm9rZVdlaWdodCA9IDI7XG4gICAgICAgIGJvcmRlcjIuY29ybmVyUmFkaXVzID0gNDtcbiAgICAgICAgYm9yZGVyMi5zdHJva2VzID0gW3tcbiAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgfV07XG4gICAgICAgIGJvcmRlcjIuZmlsbHMgPSBbXTtcbiAgICAgICAgYm9yZGVyMi5uYW1lID0gXCJCb3JkZXIgMlwiO1xuICAgICAgICBib3JkZXIyLmNvbnN0cmFpbnRzID0geyBob3Jpem9udGFsOiAnU1RSRVRDSCcsIHZlcnRpY2FsOiAnU1RSRVRDSCcgfTtcbiAgICAgICAgdmFyIGNpcmNsZSA9IGZpZ21hLmNyZWF0ZUVsbGlwc2UoKTtcbiAgICAgICAgY2lyY2xlLnJlc2l6ZShhbm5vdGF0aW9uV2lkdGgsIGFubm90YXRpb25XaWR0aCk7XG4gICAgICAgIGNpcmNsZS5zdHJva2VXZWlnaHQgPSAyO1xuICAgICAgICBjaXJjbGUuc3Ryb2tlcyA9IFt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH1dO1xuICAgICAgICBjaXJjbGUueCA9IHBhcmVudFggLSBjaXJjbGUud2lkdGggLyAyICsgMjtcbiAgICAgICAgY2lyY2xlLnkgPSBwYXJlbnRZIC0gY2lyY2xlLndpZHRoIC8gMiArIDI7XG4gICAgICAgIGNpcmNsZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IC43NiwgZzogLjE1LCBiOiAuODcgfSB9XTtcbiAgICAgICAgY2lyY2xlLm5hbWUgPSBcIkVsbGlwc2UgYmFja2dyb3VuZFwiO1xuICAgICAgICB2YXIgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh0ZXh0LmZvbnROYW1lKTtcbiAgICAgICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDEyO1xuICAgICAgICB0ZXh0LnggPSBjaXJjbGUueCArIDEwO1xuICAgICAgICB0ZXh0LnkgPSBjaXJjbGUueSArIDY7XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IG1zZy5udW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgdGV4dC5uYW1lID0gXCJPcmRlclwiO1xuICAgICAgICAvLyB2YXIgZm9jdXNCb3JkZXIgPSBmaWdtYS5ncm91cChbIGJvcmRlciwgYm9yZGVyMiBdLCBmaWdtYS5jdXJyZW50UGFnZSk7IFxuICAgICAgICAvLyBmb2N1c0JvcmRlci5uYW1lID0gXCJCb3JkZXJzXCJcbiAgICAgICAgdmFyIGFubm90YXRpb24gPSBmaWdtYS5ncm91cChbY2lyY2xlLCB0ZXh0XSwgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICBhbm5vdGF0aW9uLm5hbWUgPSBtc2cubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIGFubm90YXRpb24uY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6ICdNSU4nLCB2ZXJ0aWNhbDogJ01JTicgfTtcbiAgICAgICAgLy9mcmFtZSBjb2RlXG4gICAgICAgIGNvbnN0IHRhYiA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIHRhYi5iYWNrZ3JvdW5kcyA9IFtdO1xuICAgICAgICB0YWIuY2xpcHNDb250ZW50ID0gZmFsc2U7XG4gICAgICAgIHRhYi5hcHBlbmRDaGlsZChib3JkZXIpO1xuICAgICAgICB0YWIuYXBwZW5kQ2hpbGQoYm9yZGVyMik7XG4gICAgICAgIHRhYi5hcHBlbmRDaGlsZChhbm5vdGF0aW9uKTtcbiAgICAgICAgbm9kZVRvQW5ub3RhdGUuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0YWJpbmRleFwiLCBtc2cubnVtYmVyLnRvU3RyaW5nKCkpO1xuICAgICAgICBhbm5vdGF0aW9uLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiLCBcImFubm90YXRpb25cIik7XG4gICAgICAgIGFubm90YXRpb24uc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJzb3VyY2VcIiwgbXNnLmlkKTtcbiAgICAgICAgcmV0dXJuIGFubm90YXRpb247XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9