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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/*
///////////////
//// TODO ////
//////////////

1. attach all focus orders in metadata

*/
/////////////////////////
//// CANVAS-WATCHER  ////
/////////////////////////
var CanvasWatcher = /** @class */ (function () {
    function CanvasWatcher() {
        this.fps = 1000 / 15; // number of times you want to check and update objects per second
        this.stopCallback = null;
    }
    CanvasWatcher.prototype.start = function (callback, stopCallback) {
        this.id = setInterval(callback, this.fps);
        if (stopCallback) {
            this.stopCallback = stopCallback;
        }
    };
    CanvasWatcher.prototype.stop = function () {
        clearInterval(this.id);
        if (this.stopCallback) {
            this.stopCallback();
        }
        this.stopCallback = null;
    };
    return CanvasWatcher;
}());
/////////////////////////
//// FEATURES        ////
/////////////////////////
var canvasWatcher = new CanvasWatcher();
var annotationWidth = 60;
var nodeIDToAnnotationNodeID = [];
var annotationNodes = [];
figma.showUI(__html__, { width: 350, height: 480 });
figma.ui.onmessage = function (msg) { return __awaiter(_this, void 0, void 0, function () {
    var message, names, ids, selections, _i, selections_1, selection, nodeToAnnotate, rect, text, arrow, arrow2, tabStop, annotation, id, prevNum, nextNum, kvPair, annotationNodeID, annotationNode, child, id, kvPair, annotationNodeID, annotationNode, id, kvPair, annotationNodeID, node, annotationNode, nodeToSelect;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                message = {};
                if (!(msg.type === 'add-focus')) return [3 /*break*/, 1];
                names = [];
                ids = [];
                selections = figma.currentPage.selection;
                if (selections.length > 0) {
                    for (_i = 0, selections_1 = selections; _i < selections_1.length; _i++) {
                        selection = selections_1[_i];
                        names.push(selection.name);
                        ids.push(selection.id);
                    }
                    message = {
                        type: msg.type,
                        names: names,
                        ids: ids
                    };
                }
                return [3 /*break*/, 4];
            case 1:
                if (!(msg.type === 'create-annotationUI')) return [3 /*break*/, 3];
                nodeToAnnotate = figma.getNodeById(msg.id);
                rect = figma.createRectangle();
                rect.resize(annotationWidth, annotationWidth);
                rect.cornerRadius = 4;
                rect.strokeWeight = 2;
                rect.strokes = [{
                        color: { r: 1, g: 1, b: 1 },
                        opacity: 1,
                        type: "SOLID",
                        visible: true
                    }];
                rect.x = nodeToAnnotate.x - rect.width;
                rect.y = nodeToAnnotate.y;
                rect.fills = [{ type: 'SOLID', color: { r: .7, g: 0.06, b: 0.46 } }];
                rect.name = "Background";
                text = figma.createText();
                return [4 /*yield*/, figma.loadFontAsync(text.fontName)];
            case 2:
                _a.sent();
                text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                text.fontSize = 28;
                text.x = rect.x + 9;
                text.y = rect.y + 5;
                text.characters = msg.number.toString();
                text.name = "Order";
                arrow = figma.createVector();
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
                arrow2 = figma.createLine();
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
                tabStop = figma.group([arrow, arrow2], figma.currentPage);
                tabStop.name = "Tab stop icon";
                annotation = figma.group([tabStop, text, rect], figma.currentPage);
                annotation.name = msg.number.toString();
                annotationNodes.push(annotation);
                nodeIDToAnnotationNodeID.push([msg.id, annotation.id]);
                // group all annotation nodes together
                figma.currentPage.appendChild(annotation);
                groupAnnotations();
                return [3 /*break*/, 4];
            case 3:
                if (msg.type === 'renumber-annotationUI') {
                    id = msg.id;
                    prevNum = msg.prevNumber;
                    nextNum = msg.nextNumber;
                    kvPair = nodeIDToAnnotationNodeID.filter(function (kvPair) { return kvPair[0] == id; });
                    annotationNodeID = kvPair[0][1];
                    annotationNode = figma.getNodeById(annotationNodeID);
                    annotationNode.name = nextNum.toString();
                    child = annotationNode.children[1];
                    child.characters = nextNum.toString();
                    groupAnnotations();
                }
                else if (msg.type === 'remove-annotationUI') {
                    id = msg.id;
                    kvPair = nodeIDToAnnotationNodeID.filter(function (kvPair) { return kvPair[0] == id; });
                    annotationNodeID = kvPair[0][1];
                    annotationNode = figma.getNodeById(annotationNodeID);
                    annotationNode.remove();
                    annotationNodes = annotationNodes.filter(function (node) { return node.id != annotationNode.id; });
                }
                else if (msg.type === 'refresh-annotationUI') {
                    id = msg.id;
                    kvPair = nodeIDToAnnotationNodeID.filter(function (kvPair) { return kvPair[0] == id; });
                    annotationNodeID = kvPair[0][1];
                    node = figma.getNodeById(id);
                    annotationNode = figma.getNodeById(annotationNodeID);
                    if (node == null) {
                        message = {
                            type: "node-remove",
                            id: id
                        };
                    }
                    else {
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
                }
                else if (msg.type === 'select-annotationUI') {
                    nodeToSelect = figma.getNodeById(msg.id);
                    figma.currentPage.selection = [nodeToSelect];
                }
                _a.label = 4;
            case 4:
                ;
                figma.ui.postMessage(message);
                return [2 /*return*/];
        }
    });
}); };
function groupAnnotations() {
    var group = figma.group(annotationNodes, figma.currentPage);
    group.name = "**~~ Focus-order annotations ~~**";
}
;
