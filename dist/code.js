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
var annotationWidth = 60;
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
        var prevNum = msg.prevNumber;
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
        var rect = figma.createRectangle();
        rect.resize(annotationWidth, annotationWidth);
        rect.cornerRadius = 4;
        rect.strokeWeight = 2;
        rect.strokes = [{
                color: { r: 1, g: 1, b: 1 },
                opacity: 1,
                type: "SOLID",
                visible: true
            }];
        rect.x = parentX - rect.width;
        rect.y = parentY;
        rect.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
        rect.name = "Background";
        var text = figma.createText();
        yield figma.loadFontAsync(text.fontName);
        text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        text.fontSize = 28;
        text.x = rect.x + 9;
        text.y = rect.y + 5;
        text.characters = msg.number.toString();
        text.name = "Order";
        var arrow = figma.createVector();
        arrow.strokeWeight = 2;
        arrow.strokes = [
            { type: "SOLID",
                visible: true,
                opacity: 1,
                color: { r: 1, g: 1, b: 1 } }
        ];
        arrow.vectorNetwork = {
            regions: [],
            segments: [{ start: 0, end: 1 }],
            vertices: [
                { x: 0, y: 0, strokeCap: "ROUND", strokeJoin: "MITER" },
                { x: 41, y: 0, strokeCap: "ARROW_LINES", strokeJoin: "MITER" }
            ]
        };
        arrow.x = rect.x + 10;
        arrow.y = rect.y + 45;
        arrow.name = "arrow";
        var arrow2 = figma.createLine();
        arrow2.strokeWeight = 2;
        arrow2.strokes = [
            { type: "SOLID",
                visible: true,
                opacity: 1,
                color: { r: 1, g: 1, b: 1 } }
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
        nodeToAnnotate.setSharedPluginData("a11y", "tabindex", msg.number.toString());
        annotation.setSharedPluginData("a11y", "type", "annotation");
        annotation.setSharedPluginData("a11y", "source", msg.id);
        return annotation;
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGlDQUFpQyxFQUFFO0FBQzVGLHlEQUF5RCxrQkFBa0IsRUFBRTtBQUM3RSw0RUFBNEUsb0JBQW9CLEVBQUU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QixtQkFBbUIsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCLG1CQUFtQixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBLGlCQUFpQixzREFBc0Q7QUFDdkUsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2xhc3MgQ2FudmFzVXBkYXRlciB7XG4gICAgc3RhcnQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5pZCA9IHNldEludGVydmFsKGNhbGxiYWNrLCAxMDAwIC8gMTUpO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaWQpO1xuICAgIH1cbn1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8gIFJFQ0VJVkUgQ0FMTFMgICAvLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5sZXQgY2FudmFzVXBkYXRlciA9IG5ldyBDYW52YXNVcGRhdGVyKCk7XG52YXIgYW5ub3RhdGlvbldpZHRoID0gNjA7XG52YXIgbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlEID0gW107XG52YXIgYW5ub3RhdGlvbk5vZGVzID0gW107XG52YXIgYW5ub3RhdGlvbkxheWVyTmFtZSA9IFwiKip+fiBGb2N1cy1vcmRlciBhbm5vdGF0aW9ucyB+fioqXCI7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDM3NSwgaGVpZ2h0OiA0ODAgfSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSB7fTtcbiAgICBpZiAobXNnLnR5cGUgPT09ICdhZGQtZm9jdXMnKSB7XG4gICAgICAgIHZhciBuYW1lcyA9IFtdO1xuICAgICAgICB2YXIgaWRzID0gW107XG4gICAgICAgIHZhciBzZWxlY3Rpb25zID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzZWxlY3Rpb24gb2Ygc2VsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24uZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIpICE9IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goc2VsZWN0aW9uLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZHMucHVzaChzZWxlY3Rpb24uaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbmFtZXM6IG5hbWVzLFxuICAgICAgICAgICAgICAgIGlkczogaWRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2NyZWF0ZS1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBub2RlVG9Bbm5vdGF0ZSA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5pZCk7XG4gICAgICAgIC8vIGRvdWJsZSBjcmVhdGlvbiBvZiBhbm5vdGF0aW9ucyBpc24ndCBhbGxvd2VkXG4gICAgICAgIGlmIChub2RlVG9Bbm5vdGF0ZS5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIikgIT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgYW5ub3RhdGlvbiA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25VSShtc2csIG5vZGVUb0Fubm90YXRlKTtcbiAgICAgICAgICAgIG5vZGVUb0Fubm90YXRlLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiLCBcIm9iamVjdFwiKTtcbiAgICAgICAgICAgIG5vZGVUb0Fubm90YXRlLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwiYW5ub3RhdGlvblwiLCBhbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgICAgIGFubm90YXRpb25Ob2Rlcy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICAgICAgbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELnB1c2goW21zZy5pZCwgYW5ub3RhdGlvbi5pZF0pO1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbik7XG4gICAgICAgICAgICBncm91cEFubm90YXRpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdyZW51bWJlci1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBwcmV2TnVtID0gbXNnLnByZXZOdW1iZXI7XG4gICAgICAgIHZhciBuZXh0TnVtID0gbXNnLm5leHROdW1iZXI7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGdldEFubm90YXRpb25Ob2RlKG1zZy5pZCk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9uTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS5uYW1lID0gbmV4dE51bS50b1N0cmluZygpO1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gYW5ub3RhdGlvbk5vZGUuY2hpbGRyZW5bMV07XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGNoaWxkLmZvbnROYW1lKTtcbiAgICAgICAgICAgIGNoaWxkLmNoYXJhY3RlcnMgPSBuZXh0TnVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBmaWdtYS5nZXROb2RlQnlJZChtc2cuaWQpLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidGFiaW5kZXhcIiwgbmV4dE51bS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGdyb3VwQW5ub3RhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3JlbW92ZS1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBpZCA9IG1zZy5pZDtcbiAgICAgICAgdmFyIGt2UGFpciA9IG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5maWx0ZXIoKGt2UGFpcikgPT4ga3ZQYWlyWzBdID09IGlkKTtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlSUQgPSBrdlBhaXJbMF1bMV07XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb25Ob2RlSUQpO1xuICAgICAgICBpZiAoYW5ub3RhdGlvbk5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBhbm5vdGF0aW9uTm9kZXMgPSBhbm5vdGF0aW9uTm9kZXMuZmlsdGVyKChhKSA9PiB7IHJldHVybiBhLmlkICE9IGFubm90YXRpb25Ob2RlSUQ7IH0pO1xuICAgICAgICBhbm5vdGF0aW9uTm9kZXMgPSBhbm5vdGF0aW9uTm9kZXMuZmlsdGVyKChhKSA9PiB7IHJldHVybiBhICE9IG51bGw7IH0pO1xuICAgICAgICBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQgPSBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQuZmlsdGVyKChrdikgPT4geyByZXR1cm4ga3ZbMF0gIT0gaWQ7IH0pO1xuICAgICAgICB2YXIgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGlkKTtcbiAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdyZWZyZXNoLWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIGlkID0gbXNnLmlkO1xuICAgICAgICB2YXIga3ZQYWlyID0gbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELmZpbHRlcigoa3ZQYWlyKSA9PiBrdlBhaXJbMF0gPT0gaWQpO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbk5vZGVJRCA9IGt2UGFpclswXVsxXTtcbiAgICAgICAgdmFyIG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChpZCk7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb25Ob2RlSUQpO1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsIHx8IGFubm90YXRpb25Ob2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJub2RlLXJlbW92ZVwiLFxuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBhbm5vdGF0aW9uIHBvc2l0aW9uIFxuICAgICAgICAgICAgdmFyIG5vZGVYID0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXTtcbiAgICAgICAgICAgIHZhciBub2RlWSA9IG5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl07XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS54ID0gbm9kZVggLSBhbm5vdGF0aW9uV2lkdGg7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS55ID0gbm9kZVk7XG4gICAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibm9kZS1yZW5hbWVcIixcbiAgICAgICAgICAgICAgICBub2RlTmFtZTogbm9kZS5uYW1lLFxuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3Rlc3QtYW5ub3RhdGlvblVJJykge1xuICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQga3Ygb2Ygbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlEKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBrdlswXTtcbiAgICAgICAgICAgIHZhciBub2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoaWQpO1xuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZXMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3NlbGVjdC1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBub2RlVG9TZWxlY3QgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuaWQpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbbm9kZVRvU2VsZWN0XTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICdsb2FkLWFubm90YXRpb25zJykge1xuICAgICAgICBhbm5vdGF0aW9uTGF5ZXJOYW1lID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLm5hbWU7XG4gICAgICAgIHZhciBhbm5vdGF0aW9ucyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5jaGlsZHJlbjtcbiAgICAgICAgdmFyIG5hbWVzID0gbmV3IEFycmF5KGFubm90YXRpb25zLmxlbmd0aCAtIDEpO1xuICAgICAgICB2YXIgaWRzID0gbmV3IEFycmF5KGFubm90YXRpb25zLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAoYW5ub3RhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgYW5ub3RhdGlvbiBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiKSAhPSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBFcnJvcignU29tZXRoaW5nIGlzIHZlcnkgd3JvbmcsIHRoaXMgcHJvYmFibHkgaXMgbm90IGFuIGFubm90YXRpb24gbGF5ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJRCA9IGFubm90YXRpb24uZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJzb3VyY2VcIik7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChub2RlSUQpO1xuICAgICAgICAgICAgICAgIHZhciBvcmRlciA9IHBhcnNlSW50KGFubm90YXRpb24ubmFtZSk7XG4gICAgICAgICAgICAgICAgbmFtZXNbb3JkZXIgLSAxXSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgICAgICBpZHNbb3JkZXIgLSAxXSA9IG5vZGUuaWQ7XG4gICAgICAgICAgICAgICAgbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELnB1c2goW25vZGUuaWQsIGFubm90YXRpb24uaWRdKTtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uTm9kZXMucHVzaChhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGQtZm9jdXNcIixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWVzOiBuYW1lcyxcbiAgICAgICAgICAgICAgICBpZHM6IGlkcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICd3aW5kb3ctYmx1cicpIHtcbiAgICAgICAgb25DYW52YXNGb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3dpbmRvdy1mb2N1cycpIHtcbiAgICAgICAgb25XaW5kb3dGb2N1cygpO1xuICAgIH1cbiAgICA7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG59KTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8gIEhFTFBFUiBGWE5TICAgLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gb25DYW52YXNGb2N1cygpIHtcbiAgICBjYW52YXNVcGRhdGVyLnN0YXJ0KHVwZGF0ZUJ1dHRvbnMpO1xufVxuZnVuY3Rpb24gb25XaW5kb3dGb2N1cygpIHtcbiAgICBjYW52YXNVcGRhdGVyLnN0b3AoKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbnMoKSB7XG4gICAgdmFyIGxvYWRCdXR0b24gPSBmYWxzZTtcbiAgICB2YXIgYWRkQnV0dG9uID0gZmFsc2U7XG4gICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT0gMSkge1xuICAgICAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiKSA9PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgbG9hZEJ1dHRvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRCdXR0b24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICAgIGFkZEJ1dHRvbiA9IHRydWU7XG4gICAgfVxuICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICB0eXBlOiBcInVwZGF0ZS1idXR0b25zXCIsXG4gICAgICAgIGlzRGlzYWJsZWQ6ICFhZGRCdXR0b24sXG4gICAgICAgIGxvYWRCdXR0b25EaXNhYmxlZDogIWxvYWRCdXR0b25cbiAgICB9O1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gZ2V0QW5ub3RhdGlvbk5vZGUoaWQpIHtcbiAgICB2YXIga3ZQYWlyID0gbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELmZpbHRlcigoa3ZQYWlyKSA9PiBrdlBhaXJbMF0gPT0gaWQpO1xuICAgIHZhciBhbm5vdGF0aW9uTm9kZUlEID0ga3ZQYWlyWzBdWzFdO1xuICAgIHZhciBhbm5vdGF0aW9uTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb25Ob2RlSUQpO1xuICAgIHJldHVybiBhbm5vdGF0aW9uTm9kZTtcbn1cbmZ1bmN0aW9uIGdyb3VwQW5ub3RhdGlvbnMoKSB7XG4gICAgdmFyIGdyb3VwID0gZmlnbWEuZ3JvdXAoYW5ub3RhdGlvbk5vZGVzLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgZ3JvdXAubmFtZSA9IGFubm90YXRpb25MYXllck5hbWU7XG4gICAgZ3JvdXAuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIsIFwiYW5ub3RhdGlvblwiKTtcbn1cbjtcbmZ1bmN0aW9uIGNyZWF0ZUFubm90YXRpb25VSShtc2csIG5vZGVUb0Fubm90YXRlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHBhcmVudFggPSBub2RlVG9Bbm5vdGF0ZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXTtcbiAgICAgICAgdmFyIHBhcmVudFkgPSBub2RlVG9Bbm5vdGF0ZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXTtcbiAgICAgICAgdmFyIHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgcmVjdC5yZXNpemUoYW5ub3RhdGlvbldpZHRoLCBhbm5vdGF0aW9uV2lkdGgpO1xuICAgICAgICByZWN0LmNvcm5lclJhZGl1cyA9IDQ7XG4gICAgICAgIHJlY3Quc3Ryb2tlV2VpZ2h0ID0gMjtcbiAgICAgICAgcmVjdC5zdHJva2VzID0gW3tcbiAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgfV07XG4gICAgICAgIHJlY3QueCA9IHBhcmVudFggLSByZWN0LndpZHRoO1xuICAgICAgICByZWN0LnkgPSBwYXJlbnRZO1xuICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH1dO1xuICAgICAgICByZWN0Lm5hbWUgPSBcIkJhY2tncm91bmRcIjtcbiAgICAgICAgdmFyIHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmModGV4dC5mb250TmFtZSk7XG4gICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAyODtcbiAgICAgICAgdGV4dC54ID0gcmVjdC54ICsgOTtcbiAgICAgICAgdGV4dC55ID0gcmVjdC55ICsgNTtcbiAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gbXNnLm51bWJlci50b1N0cmluZygpO1xuICAgICAgICB0ZXh0Lm5hbWUgPSBcIk9yZGVyXCI7XG4gICAgICAgIHZhciBhcnJvdyA9IGZpZ21hLmNyZWF0ZVZlY3RvcigpO1xuICAgICAgICBhcnJvdy5zdHJva2VXZWlnaHQgPSAyO1xuICAgICAgICBhcnJvdy5zdHJva2VzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XG4gICAgICAgIF07XG4gICAgICAgIGFycm93LnZlY3Rvck5ldHdvcmsgPSB7XG4gICAgICAgICAgICByZWdpb25zOiBbXSxcbiAgICAgICAgICAgIHNlZ21lbnRzOiBbeyBzdGFydDogMCwgZW5kOiAxIH1dLFxuICAgICAgICAgICAgdmVydGljZXM6IFtcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDAsIHN0cm9rZUNhcDogXCJST1VORFwiLCBzdHJva2VKb2luOiBcIk1JVEVSXCIgfSxcbiAgICAgICAgICAgICAgICB7IHg6IDQxLCB5OiAwLCBzdHJva2VDYXA6IFwiQVJST1dfTElORVNcIiwgc3Ryb2tlSm9pbjogXCJNSVRFUlwiIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgYXJyb3cueCA9IHJlY3QueCArIDEwO1xuICAgICAgICBhcnJvdy55ID0gcmVjdC55ICsgNDU7XG4gICAgICAgIGFycm93Lm5hbWUgPSBcImFycm93XCI7XG4gICAgICAgIHZhciBhcnJvdzIgPSBmaWdtYS5jcmVhdGVMaW5lKCk7XG4gICAgICAgIGFycm93Mi5zdHJva2VXZWlnaHQgPSAyO1xuICAgICAgICBhcnJvdzIuc3Ryb2tlcyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfVxuICAgICAgICBdO1xuICAgICAgICBhcnJvdzIucmVzaXplKDE0LCAwKTtcbiAgICAgICAgYXJyb3cyLnN0cm9rZUNhcCA9IFwiUk9VTkRcIjtcbiAgICAgICAgYXJyb3cyLnJvdGF0aW9uID0gLTkwO1xuICAgICAgICBhcnJvdzIueCA9IGFycm93LnggKyA0MTtcbiAgICAgICAgYXJyb3cyLnkgPSBhcnJvdy55IC0gNztcbiAgICAgICAgdmFyIHRhYlN0b3AgPSBmaWdtYS5ncm91cChbYXJyb3csIGFycm93Ml0sIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGFiU3RvcC5uYW1lID0gXCJUYWIgc3RvcCBpY29uXCI7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uID0gZmlnbWEuZ3JvdXAoW3RhYlN0b3AsIHRleHQsIHJlY3RdLCBmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgIGFubm90YXRpb24ubmFtZSA9IG1zZy5udW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgbm9kZVRvQW5ub3RhdGUuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0YWJpbmRleFwiLCBtc2cubnVtYmVyLnRvU3RyaW5nKCkpO1xuICAgICAgICBhbm5vdGF0aW9uLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiLCBcImFubm90YXRpb25cIik7XG4gICAgICAgIGFubm90YXRpb24uc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJzb3VyY2VcIiwgbXNnLmlkKTtcbiAgICAgICAgcmV0dXJuIGFubm90YXRpb247XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9