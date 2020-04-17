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
var annotationWidth = 26;
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
        var rect = figma.createEllipse();
        rect.resize(annotationWidth, annotationWidth);
        rect.strokeWeight = 2;
        rect.strokes = [{
                color: { r: 1, g: 1, b: 1 },
                opacity: 1,
                type: "SOLID",
                visible: true
            }];
        rect.x = parentX - rect.width / 2;
        rect.y = parentY - rect.width / 2;
        rect.fills = [{ type: 'SOLID', color: { r: .76, g: .15, b: .87 } }];
        rect.name = "Background";
        var text = figma.createText();
        yield figma.loadFontAsync(text.fontName);
        text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        text.fontSize = 12;
        text.x = rect.x + 9;
        text.y = rect.y + 5;
        text.characters = msg.number.toString();
        text.name = "Order";
        var annotation = figma.group([text, rect], figma.currentPage);
        annotation.name = msg.number.toString();
        nodeToAnnotate.setSharedPluginData("a11y", "tabindex", msg.number.toString());
        annotation.setSharedPluginData("a11y", "type", "annotation");
        annotation.setSharedPluginData("a11y", "source", msg.id);
        return annotation;
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGlDQUFpQyxFQUFFO0FBQzVGLHlEQUF5RCxrQkFBa0IsRUFBRTtBQUM3RSw0RUFBNEUsb0JBQW9CLEVBQUU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0IseUJBQXlCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QixtQkFBbUIsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jbGFzcyBDYW52YXNVcGRhdGVyIHtcbiAgICBzdGFydChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIDEwMDAgLyAxNSk7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XG4gICAgfVxufVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLyAgUkVDRUlWRSBDQUxMUyAgIC8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmxldCBjYW52YXNVcGRhdGVyID0gbmV3IENhbnZhc1VwZGF0ZXIoKTtcbnZhciBhbm5vdGF0aW9uV2lkdGggPSAyNjtcbnZhciBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQgPSBbXTtcbnZhciBhbm5vdGF0aW9uTm9kZXMgPSBbXTtcbnZhciBhbm5vdGF0aW9uTGF5ZXJOYW1lID0gXCIqKn5+IEZvY3VzLW9yZGVyIGFubm90YXRpb25zIH5+KipcIjtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMzc1LCBoZWlnaHQ6IDQ4MCB9KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgbWVzc2FnZSA9IHt9O1xuICAgIGlmIChtc2cudHlwZSA9PT0gJ2FkZC1mb2N1cycpIHtcbiAgICAgICAgdmFyIG5hbWVzID0gW107XG4gICAgICAgIHZhciBpZHMgPSBbXTtcbiAgICAgICAgdmFyIHNlbGVjdGlvbnMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGlmIChzZWxlY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNlbGVjdGlvbiBvZiBzZWxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIikgIT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZXMucHVzaChzZWxlY3Rpb24ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlkcy5wdXNoKHNlbGVjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuYW1lczogbmFtZXMsXG4gICAgICAgICAgICAgICAgaWRzOiBpZHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlLWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIG5vZGVUb0Fubm90YXRlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmlkKTtcbiAgICAgICAgLy8gZG91YmxlIGNyZWF0aW9uIG9mIGFubm90YXRpb25zIGlzbid0IGFsbG93ZWRcbiAgICAgICAgaWYgKG5vZGVUb0Fubm90YXRlLmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiKSAhPT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uID0geWllbGQgY3JlYXRlQW5ub3RhdGlvblVJKG1zZywgbm9kZVRvQW5ub3RhdGUpO1xuICAgICAgICAgICAgbm9kZVRvQW5ub3RhdGUuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIsIFwib2JqZWN0XCIpO1xuICAgICAgICAgICAgbm9kZVRvQW5ub3RhdGUuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJhbm5vdGF0aW9uXCIsIGFubm90YXRpb24uaWQpO1xuICAgICAgICAgICAgYW5ub3RhdGlvbk5vZGVzLnB1c2goYW5ub3RhdGlvbik7XG4gICAgICAgICAgICBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQucHVzaChbbXNnLmlkLCBhbm5vdGF0aW9uLmlkXSk7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIGdyb3VwQW5ub3RhdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3JlbnVtYmVyLWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIHByZXZOdW0gPSBtc2cucHJldk51bWJlcjtcbiAgICAgICAgdmFyIG5leHROdW0gPSBtc2cubmV4dE51bWJlcjtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlID0gZ2V0QW5ub3RhdGlvbk5vZGUobXNnLmlkKTtcbiAgICAgICAgaWYgKGFubm90YXRpb25Ob2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFubm90YXRpb25Ob2RlLm5hbWUgPSBuZXh0TnVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBhbm5vdGF0aW9uTm9kZS5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoY2hpbGQuZm9udE5hbWUpO1xuICAgICAgICAgICAgY2hpbGQuY2hhcmFjdGVycyA9IG5leHROdW0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpZ21hLmdldE5vZGVCeUlkKG1zZy5pZCkuc2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0YWJpbmRleFwiLCBuZXh0TnVtLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgZ3JvdXBBbm5vdGF0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAncmVtb3ZlLWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIGlkID0gbXNnLmlkO1xuICAgICAgICB2YXIga3ZQYWlyID0gbm9kZUlEVG9Bbm5vdGF0aW9uTm9kZUlELmZpbHRlcigoa3ZQYWlyKSA9PiBrdlBhaXJbMF0gPT0gaWQpO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbk5vZGVJRCA9IGt2UGFpclswXVsxXTtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoYW5ub3RhdGlvbk5vZGVJRCk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9uTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGFubm90YXRpb25Ob2RlcyA9IGFubm90YXRpb25Ob2Rlcy5maWx0ZXIoKGEpID0+IHsgcmV0dXJuIGEuaWQgIT0gYW5ub3RhdGlvbk5vZGVJRDsgfSk7XG4gICAgICAgIGFubm90YXRpb25Ob2RlcyA9IGFubm90YXRpb25Ob2Rlcy5maWx0ZXIoKGEpID0+IHsgcmV0dXJuIGEgIT0gbnVsbDsgfSk7XG4gICAgICAgIG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRCA9IG5vZGVJRFRvQW5ub3RhdGlvbk5vZGVJRC5maWx0ZXIoKGt2KSA9PiB7IHJldHVybiBrdlswXSAhPSBpZDsgfSk7XG4gICAgICAgIHZhciBub2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoaWQpO1xuICAgICAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3JlZnJlc2gtYW5ub3RhdGlvblVJJykge1xuICAgICAgICB2YXIgaWQgPSBtc2cuaWQ7XG4gICAgICAgIHZhciBrdlBhaXIgPSBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQuZmlsdGVyKChrdlBhaXIpID0+IGt2UGFpclswXSA9PSBpZCk7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uTm9kZUlEID0ga3ZQYWlyWzBdWzFdO1xuICAgICAgICB2YXIgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGlkKTtcbiAgICAgICAgdmFyIGFubm90YXRpb25Ob2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoYW5ub3RhdGlvbk5vZGVJRCk7XG4gICAgICAgIGlmIChub2RlID09IG51bGwgfHwgYW5ub3RhdGlvbk5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm5vZGUtcmVtb3ZlXCIsXG4gICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdXBkYXRlIGFubm90YXRpb24gcG9zaXRpb24gXG4gICAgICAgICAgICB2YXIgbm9kZVggPSBub2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdO1xuICAgICAgICAgICAgdmFyIG5vZGVZID0gbm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXTtcbiAgICAgICAgICAgIGFubm90YXRpb25Ob2RlLnggPSBub2RlWCAtIGFubm90YXRpb25XaWR0aDtcbiAgICAgICAgICAgIGFubm90YXRpb25Ob2RlLnkgPSBub2RlWTtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJub2RlLXJlbmFtZVwiLFxuICAgICAgICAgICAgICAgIG5vZGVOYW1lOiBub2RlLm5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAndGVzdC1hbm5vdGF0aW9uVUknKSB7XG4gICAgICAgIHZhciBub2RlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBrdiBvZiBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGt2WzBdO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChpZCk7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnc2VsZWN0LWFubm90YXRpb25VSScpIHtcbiAgICAgICAgdmFyIG5vZGVUb1NlbGVjdCA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5pZCk7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtub2RlVG9TZWxlY3RdO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2xvYWQtYW5ub3RhdGlvbnMnKSB7XG4gICAgICAgIGFubm90YXRpb25MYXllck5hbWUgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0ubmFtZTtcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLmNoaWxkcmVuO1xuICAgICAgICB2YXIgbmFtZXMgPSBuZXcgQXJyYXkoYW5ub3RhdGlvbnMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHZhciBpZHMgPSBuZXcgQXJyYXkoYW5ub3RhdGlvbnMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBhbm5vdGF0aW9uIG9mIGFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFubm90YXRpb24uZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIpICE9IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIEVycm9yKCdTb21ldGhpbmcgaXMgdmVyeSB3cm9uZywgdGhpcyBwcm9iYWJseSBpcyBub3QgYW4gYW5ub3RhdGlvbiBsYXllcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbm9kZUlEID0gYW5ub3RhdGlvbi5nZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInNvdXJjZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKG5vZGVJRCk7XG4gICAgICAgICAgICAgICAgdmFyIG9yZGVyID0gcGFyc2VJbnQoYW5ub3RhdGlvbi5uYW1lKTtcbiAgICAgICAgICAgICAgICBuYW1lc1tvcmRlciAtIDFdID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgIGlkc1tvcmRlciAtIDFdID0gbm9kZS5pZDtcbiAgICAgICAgICAgICAgICBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQucHVzaChbbm9kZS5pZCwgYW5ub3RhdGlvbi5pZF0pO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Ob2Rlcy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFkZC1mb2N1c1wiLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZXM6IG5hbWVzLFxuICAgICAgICAgICAgICAgIGlkczogaWRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3dpbmRvdy1ibHVyJykge1xuICAgICAgICBvbkNhbnZhc0ZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAnd2luZG93LWZvY3VzJykge1xuICAgICAgICBvbldpbmRvd0ZvY3VzKCk7XG4gICAgfVxuICAgIDtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbn0pO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLyAgSEVMUEVSIEZYTlMgICAvLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiBvbkNhbnZhc0ZvY3VzKCkge1xuICAgIGNhbnZhc1VwZGF0ZXIuc3RhcnQodXBkYXRlQnV0dG9ucyk7XG59XG5mdW5jdGlvbiBvbldpbmRvd0ZvY3VzKCkge1xuICAgIGNhbnZhc1VwZGF0ZXIuc3RvcCgpO1xufVxuZnVuY3Rpb24gdXBkYXRlQnV0dG9ucygpIHtcbiAgICB2YXIgbG9hZEJ1dHRvbiA9IGZhbHNlO1xuICAgIHZhciBhZGRCdXR0b24gPSBmYWxzZTtcbiAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0uZ2V0U2hhcmVkUGx1Z2luRGF0YShcImExMXlcIiwgXCJ0eXBlXCIpID09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICBsb2FkQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZEJ1dHRvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgYWRkQnV0dG9uID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6IFwidXBkYXRlLWJ1dHRvbnNcIixcbiAgICAgICAgaXNEaXNhYmxlZDogIWFkZEJ1dHRvbixcbiAgICAgICAgbG9hZEJ1dHRvbkRpc2FibGVkOiAhbG9hZEJ1dHRvblxuICAgIH07XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG59XG5mdW5jdGlvbiBnZXRBbm5vdGF0aW9uTm9kZShpZCkge1xuICAgIHZhciBrdlBhaXIgPSBub2RlSURUb0Fubm90YXRpb25Ob2RlSUQuZmlsdGVyKChrdlBhaXIpID0+IGt2UGFpclswXSA9PSBpZCk7XG4gICAgdmFyIGFubm90YXRpb25Ob2RlSUQgPSBrdlBhaXJbMF1bMV07XG4gICAgdmFyIGFubm90YXRpb25Ob2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoYW5ub3RhdGlvbk5vZGVJRCk7XG4gICAgcmV0dXJuIGFubm90YXRpb25Ob2RlO1xufVxuZnVuY3Rpb24gZ3JvdXBBbm5vdGF0aW9ucygpIHtcbiAgICB2YXIgZ3JvdXAgPSBmaWdtYS5ncm91cChhbm5vdGF0aW9uTm9kZXMsIGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICBncm91cC5uYW1lID0gYW5ub3RhdGlvbkxheWVyTmFtZTtcbiAgICBncm91cC5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIiwgXCJhbm5vdGF0aW9uXCIpO1xufVxuO1xuZnVuY3Rpb24gY3JlYXRlQW5ub3RhdGlvblVJKG1zZywgbm9kZVRvQW5ub3RhdGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgcGFyZW50WCA9IG5vZGVUb0Fubm90YXRlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdO1xuICAgICAgICB2YXIgcGFyZW50WSA9IG5vZGVUb0Fubm90YXRlLmFic29sdXRlVHJhbnNmb3JtWzFdWzJdO1xuICAgICAgICB2YXIgcmVjdCA9IGZpZ21hLmNyZWF0ZUVsbGlwc2UoKTtcbiAgICAgICAgcmVjdC5yZXNpemUoYW5ub3RhdGlvbldpZHRoLCBhbm5vdGF0aW9uV2lkdGgpO1xuICAgICAgICByZWN0LnN0cm9rZVdlaWdodCA9IDI7XG4gICAgICAgIHJlY3Quc3Ryb2tlcyA9IFt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH1dO1xuICAgICAgICByZWN0LnggPSBwYXJlbnRYIC0gcmVjdC53aWR0aCAvIDI7XG4gICAgICAgIHJlY3QueSA9IHBhcmVudFkgLSByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IC43NiwgZzogLjE1LCBiOiAuODcgfSB9XTtcbiAgICAgICAgcmVjdC5uYW1lID0gXCJCYWNrZ3JvdW5kXCI7XG4gICAgICAgIHZhciB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHRleHQuZm9udE5hbWUpO1xuICAgICAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgICAgICB0ZXh0LmZvbnRTaXplID0gMTI7XG4gICAgICAgIHRleHQueCA9IHJlY3QueCArIDk7XG4gICAgICAgIHRleHQueSA9IHJlY3QueSArIDU7XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IG1zZy5udW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgdGV4dC5uYW1lID0gXCJPcmRlclwiO1xuICAgICAgICB2YXIgYW5ub3RhdGlvbiA9IGZpZ21hLmdyb3VwKFt0ZXh0LCByZWN0XSwgZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICBhbm5vdGF0aW9uLm5hbWUgPSBtc2cubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIG5vZGVUb0Fubm90YXRlLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidGFiaW5kZXhcIiwgbXNnLm51bWJlci50b1N0cmluZygpKTtcbiAgICAgICAgYW5ub3RhdGlvbi5zZXRTaGFyZWRQbHVnaW5EYXRhKFwiYTExeVwiLCBcInR5cGVcIiwgXCJhbm5vdGF0aW9uXCIpO1xuICAgICAgICBhbm5vdGF0aW9uLnNldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwic291cmNlXCIsIG1zZy5pZCk7XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9uO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==