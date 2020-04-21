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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n  body {\n    overflow-x: hidden; \n  }\n  #app {\n    width: 100%; \n    position: absolute; \n    /* top: 0px;  */\n    left: 0px; \n    padding-bottom: 50px; \n    font-family: \"Segoe UI\"; \n    font-size: 12px; \n    /* overflow-x: hidden; */\n  }\n\n  #container-header {\n      background-color: #222222; \n      padding: 10px 0px; \n      color: white; \n      text-transform: 'uppercase'; \n      text-align: center; \n      font-weight: 500; \n  }\n\n  #container-labels {\n    position: sticky; \n    top: 0; \n    background-color: white; \n    padding: 10px 15px; \n    /* margin: 0px 15px;  */\n    border-bottom: 1px solid #EFEFEF; \n    display: grid; \n    grid-template-columns: 20px 60px auto 70px; \n    color: #2C2C2C; \n    font-weight: bold;  \n  }\n\n  #order, #name {\n    display: flex; \n    flex-direction: row; \n    align-items: center; \n  }\n\n\n  #order {\n    grid-column-start: 1; \n  }\n  #name {\n    grid-column-start: 3; \n  }\n\n  #tab-help {\n    grid-column-start: 4; \n    width: 80px; \n    line-height: 20px; \n    display: none; \n    \n  }\n\n  .keyboard-mini {\n    padding: 1px 3px 2px 3px; \n    border-radius: 4px; \n    background-color: #D5D5D5; \n    color: 2C2C2C; \n    font-weight: 300; \n    font-size: 10px; \n  }\n\n /* ///////////////////////// */\n  /* // ZERO STATE STYLING ////*/\n  /* ///////////////////////// */\n\n  #zero-state {\n    /* width: 100%;    */\n    /* height: 100%;  */\n    line-height: 19px; \n    padding: 55px 50px; \n    position: absolute;   \n    /* top: 10px;  */\n    left: 0px;\n    /* border: 1px solid blue;  */\n    visibility: visible; \n  }\n\n  #zero-state p {\n    padding-bottom: 8px; \n    border-bottom: 1px solid #E4E3E3; \n  }\n  #zero-state p:nth-child(4) {\n    border-bottom: none; \n  }\n\n  #add-mini { \n    padding: 2px 10px 3px 10px; \n    border-radius: 4px; \n    background-color: #1DA0FB; \n    color: white; \n    margin-right: 3px; \n  }\n\n  #load-mini {\n    padding: 2px 7px 3px 7px; \n    border-radius: 4px; \n    color: #1DA0FB; \n    background-color: white; \n    border: 1px solid #1DA0FB; \n    margin-right: 3px; \n  }\n\n  #update-mini {\n    background-color: #2C2C2C; \n    padding: 2px 10px 3px 10px; \n    border-radius: 4px; \n    color: white; \n    margin-right: 3px; \n  }\n\n  #annotation-mini {\n    padding: 2px 9px 3px 9px; \n    border-radius: 4px; \n    background-color: #F36969; \n    color: white; \n    margin-right: 3px; \n  }\n\n  #zero-state-nav {\n    display: flex; \n    flex-direction: row ; \n    border-bottom: 1px solid #E4E3E3; \n    padding-left: 6px; \n    position: absolute; \n    top: 0px; \n    left: 0px; \n    width: 100%; \n    height: 25px; \n  }\n\n  #zero-state-nav span {\n    font-size: 12px; \n    font-weight: 600; \n    padding: 5px 10px; \n    color: #929292; \n    text-decoration: none; \n    cursor: pointer; \n    width: 65px; \n  }\n\n  #about {\n    position: absolute; \n    /* top: 50px;  */\n    left: 0px; \n    /* border: 1px solid red;  */\n    height: 100%;  \n    padding: 75px 50px; \n    text-align: center; \n    /* visibility: hidden;  */\n  }\n\n   /* //////////////////////////////// */\n  /* // ANNOTATION OBJECT STYLING ////*/\n  /* //////////////////////////////// */\n\n\n  .focus-object {\n    padding: 10px 0px; \n    margin: 0px 15px; \n    border-bottom: 1px solid #EFEFEF; \n    border-top: 1px solid #ffffff; \n    font-weight: normal; \n    display: grid; \n    grid-template-columns: 20px 60px auto 70px; \n  }\n\n  .focus-object:focus {\n    padding: 10px 15px; \n    margin: 0px; \n    outline: none; \n    color: #2c2c2c; \n    border: 2px solid #1DA0FB; \n    border-top: 2px solid #1DA0FB; \n  }\n\n\n.focus-object:focus #tab-help {\n  display: block; \n}\n\n  .focus-object:hover {\n    cursor: move; \n  }\n\n  .tab-on {\n     font-weight: bold; \n  }\n\n  .move-icon {\n    width: 20px; \n    grid-column-start: 1; \n    max-height: 36px; \n  \n    display: flex; \n    flex-direction: row;\n    flex-wrap: wrap; \n    justify-content: space-between; \n  }\n\n  .move-icon:hover {\n    cursor: move; \n  }\n  \n  .move-icon-dot {\n    width: 4px; \n    height: 4px; \n    margin: 3px;\n    border-radius: 300px; \n    background-color: #C4C4C4; \n  }\n\n  .order, .name {\n    display: flex; \n    flex-direction: row; \n    align-items: center; \n  }\n\n  .order {\n    grid-column-start: 1; \n  }\n\n  .name {\n    grid-column-start: 3; \n  }\n\n  /* /////////////////////// */\n  /* // BUTTON STYLING ////*/\n  /* /////////////////////// */\n\n\n  #button-refresh:focus, #button-add:focus, #button-load:focus, .button-remove:focus {\n    border: 3px solid \"red\"; \n  }\n\n  #button-refresh, #button-add, #button-load,#button-refresh:disabled:hover, .button-remove {\n    color: white; \n    font-weight: 400; \n    border-radius: 10px; \n    box-shadow: none; \n    cursor: pointer; \n    border: 1px solid white; \n    height: 30px; \n  }\n\n  #button-refresh:disabled:hover, #button-add:disabled:hover, #button-load:disabled:hover {\n    cursor: default; \n  }\n\n  #button-add:disabled, #button-add:disabled:hover{\n    background-color: #929292;  \n    border:1px solid white; \n  }\n\n  #button-load:disabled, #button-load:disabled:hover {\n    border-color: #929292; \n    color: #929292; \n  }\n\n  #button-back {\n    grid-column-start: 1; \n    padding-left: 5px; \n    background-color: #2C2C2C; \n    color: white; \n    border: 1px solid white; \n    font-weight: 500; \n    border-radius: 999px; \n    margin: 2px 2px 1px 2px; \n    width: 21px; \n  }\n\n\n  #button-load {\n    grid-column-start: 1; \n    margin: 10px; \n    height: 35px; \n    width:calc((100% - 25px)/2); \n    position: fixed; \n    bottom: 0px; \n    right: 0px; \n    background-color: white; \n    color: #1DA0FB; \n    border: 1px solid #1DA0FB; \n  }\n  #button-add {\n    grid-column-start: 1; \n    margin: 10px; \n    height: 35px; \n    width:calc((100% - 25px)/2); \n    position: fixed; \n    bottom: 0px; \n  }\n  #button-add{\n    background-color: #1DA0FB; \n  }\n  .button-refresh-exit {\n    background-color: #F36969 !important; \n    border: 1px solid #F36969 !important; \n  }\n\n  #button-refresh, #button-refresh:disabled:hover {\n    grid-column-start: 4; \n    background-color: #2C2C2C; \n    margin: 2px 2px 1px 2px; \n  }\n\n  #button-refresh:disabled {\n    opacity: .45; \n  }\n\n  #button-refresh:hover, #button-back:hover {\n    color: #2C2C2C; \n    border-color: #2C2C2C; \n    background-color: white; \n    outline: none; \n    cursor: pointer; \n  }\n\n  .button-remove {\n    grid-column-start: 4; \n    background-color: #F36969; \n    border: 1px solid #F36969; \n  }\n  #button-load:hover {\n    color: #1DA0FB; \n    border: 1px solid #1DA0FB; \n  }\n  #button-add:hover {\n    background-color: #1DA0FB; \n    border-color: #1DA0FB; \n    outline: none; \n  }\n\n  .button-refresh-exit:hover, .button-remove:hover {\n    background-color: #E45353 !important; \n    border-color: #E45353 !important; \n    color: white !important; \n  }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/ui.css":
/*!********************!*\
  !*** ./src/ui.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_0__);

var exports = {};
var totalFocus = 0;
var focusedIDs = [];
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
    document.getElementById("button-add").style.width = (divs.length > 0) ? "calc(100% - 25px)" : "calc((100% - 25px)/2)";
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
    var focusObjects = document.getElementsByClassName("focus-object");
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
    focusedIDs = focusedIDs.filter((id) => { return id != ID; });
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
    newFocus.ondragstart = () => { dragStart(event); };
    newFocus.ondragleave = () => { dragLeave(event); };
    newFocus.ondragover = () => { dragOver(event); };
    newFocus.ondrop = () => { drop(event); };
    newFocus.onclick = () => { showFocus(selectionID); };
    newFocus.onfocus = () => { showFocus(selectionID); };
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
    removeButton.onclick = () => { removeFocusUI(selectionID); };
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
    if (!loading) {
        annotateFocus(selectionID, totalFocus + 1);
    }
    ;
    showFocus(selectionID);
    checkZeroState();
    totalFocus += 1;
}
//////////////////////////////
////// calls to parent //////
//////////////////////////////
function annotateFocus(selectionID, orderNumber) {
    parent.postMessage({ pluginMessage: { type: 'create-annotationUI', id: selectionID, number: orderNumber } }, '*');
}
function reannotateFocus(selectionID, prevOrderNumber, nextOrderNumber) {
    parent.postMessage({ pluginMessage: { type: 'renumber-annotationUI', id: selectionID, prevNumber: prevOrderNumber, nextNumber: nextOrderNumber } }, '*');
}
function removeFocusAnnotation(selectionID) {
    parent.postMessage({ pluginMessage: { type: 'remove-annotationUI', id: selectionID } }, '*');
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
        parent.postMessage({ pluginMessage: { type: 'select-annotationUI', id: selectionID } }, '*');
    }
}
// initiatialization 
document.getElementById("about").hidden = true;
document.getElementById("link-instructions").onclick = () => {
    document.getElementById("link-instructions").style.color = "black";
    document.getElementById("link-about").style.color = "#929292";
    document.getElementById("zero-state").hidden = false;
    document.getElementById("about").hidden = true;
};
document.getElementById("link-about").onclick = () => {
    document.getElementById("link-about").style.color = "black";
    document.getElementById("link-instructions").style.color = "#929292";
    document.getElementById("zero-state").hidden = true;
    document.getElementById("about").hidden = false;
};
document.getElementById("order").innerHTML = "";
document.getElementById("name").innerHTML = "";
document.getElementById("container-labels").style.visibility = "hidden";
document.getElementById('button-refresh').hidden = true;
document.getElementById('button-add').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'add-focus' } }, '*');
};
document.getElementById('button-load').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'load-annotations' } }, '*');
};
document.getElementById('button-refresh').onclick = () => {
    if (focusedIDs.length > 0) {
        var buttonRefresh = document.getElementById('button-refresh');
        var removeButtons = document.getElementsByClassName('button-remove');
        var foci = document.getElementsByClassName('focus-object');
        switch (buttonRefresh.innerHTML) {
            case "Tab test":
                parent.postMessage({ pluginMessage: { type: 'test-annotationUI' } }, '*');
                buttonRefresh.innerHTML = "Exit test";
                buttonRefresh.className = "button-refresh-exit";
                document.getElementById('button-add').hidden = true;
                for (let b of removeButtons) {
                    b.hidden = true;
                }
                ;
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
                for (let b of removeButtons) {
                    b.hidden = false;
                }
                for (let f of foci) {
                    f.removeAttribute("tabIndex");
                    f.className = "focus-object";
                }
                break;
        }
    }
    ;
};
if (!document.hasFocus()) {
    parent.postMessage({ pluginMessage: { type: 'window-blur' } }, '*');
    for (let selectionID of focusedIDs) {
        parent.postMessage({ pluginMessage: { type: 'refresh-annotationUI', id: selectionID } }, '*');
    }
}
window.addEventListener('focus', () => {
    parent.postMessage({ pluginMessage: { type: 'window-focus' } }, '*');
    for (let selectionID of focusedIDs) {
        parent.postMessage({ pluginMessage: { type: 'refresh-annotationUI', id: selectionID } }, '*');
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
                parent.postMessage({ pluginMessage: { type: 'refresh-annotationUI', id: selectionID } }, '*');
            }
        }
    }
    else if (message.type === 'node-rename') {
        var divs = document.getElementById(message.id).getElementsByTagName("div");
        for (let div of divs) {
            if (div.className == "name") {
                div.innerHTML = message.nodeName;
            }
        }
    }
    else if (message.type === 'node-remove') {
        removeFocusUI(message.id);
    }
    else if (message.type === 'update-buttons') {
        document.getElementById('button-add').disabled = message.isDisabled;
        document.getElementById('button-load').disabled = message.loadButtonDisabled;
    }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGFBQWEseUJBQXlCLE1BQU0sVUFBVSxrQkFBa0IsMEJBQTBCLG1CQUFtQixvQkFBb0IsNEJBQTRCLGlDQUFpQyx1QkFBdUIsNkJBQTZCLFFBQVEseUJBQXlCLGtDQUFrQywyQkFBMkIsc0JBQXNCLHFDQUFxQyw0QkFBNEIsMEJBQTBCLE1BQU0seUJBQXlCLHVCQUF1QixjQUFjLCtCQUErQiwwQkFBMEIsMkJBQTJCLDJDQUEyQyxxQkFBcUIsa0RBQWtELHNCQUFzQix5QkFBeUIsT0FBTyxxQkFBcUIsb0JBQW9CLDJCQUEyQiwyQkFBMkIsTUFBTSxnQkFBZ0IsMkJBQTJCLE1BQU0sV0FBVywyQkFBMkIsTUFBTSxpQkFBaUIsMkJBQTJCLG1CQUFtQix5QkFBeUIscUJBQXFCLFlBQVksc0JBQXNCLCtCQUErQiwwQkFBMEIsaUNBQWlDLHFCQUFxQix3QkFBd0IsdUJBQXVCLE1BQU0sNkhBQTZILHFCQUFxQiw0QkFBNEIsNEJBQTRCLDBCQUEwQiwwQkFBMEIsc0JBQXNCLG9CQUFvQixnQ0FBZ0MsOEJBQThCLE1BQU0scUJBQXFCLDBCQUEwQix3Q0FBd0MsTUFBTSxnQ0FBZ0MsMEJBQTBCLE1BQU0saUJBQWlCLGtDQUFrQywwQkFBMEIsaUNBQWlDLG9CQUFvQix5QkFBeUIsTUFBTSxrQkFBa0IsK0JBQStCLDBCQUEwQixzQkFBc0IsK0JBQStCLGlDQUFpQyx5QkFBeUIsTUFBTSxvQkFBb0IsZ0NBQWdDLGtDQUFrQywwQkFBMEIsb0JBQW9CLHlCQUF5QixNQUFNLHdCQUF3QiwrQkFBK0IsMEJBQTBCLGlDQUFpQyxvQkFBb0IseUJBQXlCLE1BQU0sdUJBQXVCLG9CQUFvQiw0QkFBNEIsd0NBQXdDLHlCQUF5QiwwQkFBMEIsZ0JBQWdCLGlCQUFpQixtQkFBbUIsb0JBQW9CLE1BQU0sNEJBQTRCLHNCQUFzQix3QkFBd0IseUJBQXlCLHNCQUFzQiw2QkFBNkIsdUJBQXVCLG1CQUFtQixNQUFNLGNBQWMseUJBQXlCLG9CQUFvQixvQkFBb0IsZ0NBQWdDLHVCQUF1QiwyQkFBMkIsMEJBQTBCLDZCQUE2QixTQUFTLHdKQUF3Six3QkFBd0Isd0JBQXdCLHdDQUF3QyxxQ0FBcUMsMkJBQTJCLHFCQUFxQixrREFBa0QsTUFBTSwyQkFBMkIseUJBQXlCLG1CQUFtQixxQkFBcUIsc0JBQXNCLGlDQUFpQyxxQ0FBcUMsTUFBTSxxQ0FBcUMsbUJBQW1CLElBQUksMkJBQTJCLG1CQUFtQixNQUFNLGVBQWUseUJBQXlCLE1BQU0sa0JBQWtCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHlCQUF5QiwyQkFBMkIsc0JBQXNCLHNDQUFzQyxNQUFNLHdCQUF3QixtQkFBbUIsTUFBTSx3QkFBd0IsaUJBQWlCLG1CQUFtQixtQkFBbUIsMkJBQTJCLGlDQUFpQyxNQUFNLHFCQUFxQixvQkFBb0IsMkJBQTJCLDJCQUEyQixNQUFNLGNBQWMsMkJBQTJCLE1BQU0sYUFBYSwyQkFBMkIsTUFBTSwrTEFBK0wsZ0NBQWdDLE1BQU0saUdBQWlHLG1CQUFtQix3QkFBd0IsMkJBQTJCLHdCQUF3Qix1QkFBdUIsK0JBQStCLG9CQUFvQixNQUFNLCtGQUErRixzQkFBc0IsTUFBTSx1REFBdUQsZ0NBQWdDLCtCQUErQixNQUFNLDBEQUEwRCw0QkFBNEIsc0JBQXNCLE1BQU0sb0JBQW9CLDJCQUEyQix5QkFBeUIsaUNBQWlDLG9CQUFvQiwrQkFBK0Isd0JBQXdCLDRCQUE0QiwrQkFBK0IsbUJBQW1CLE1BQU0sc0JBQXNCLDJCQUEyQixvQkFBb0Isb0JBQW9CLG1DQUFtQyx1QkFBdUIsbUJBQW1CLGtCQUFrQiwrQkFBK0Isc0JBQXNCLGlDQUFpQyxNQUFNLGlCQUFpQiwyQkFBMkIsb0JBQW9CLG9CQUFvQixtQ0FBbUMsdUJBQXVCLG1CQUFtQixNQUFNLGdCQUFnQixnQ0FBZ0MsTUFBTSwwQkFBMEIsMkNBQTJDLDRDQUE0QyxNQUFNLHVEQUF1RCwyQkFBMkIsaUNBQWlDLCtCQUErQixNQUFNLGdDQUFnQyxtQkFBbUIsTUFBTSxpREFBaUQscUJBQXFCLDZCQUE2QiwrQkFBK0IscUJBQXFCLHVCQUF1QixNQUFNLHNCQUFzQiwyQkFBMkIsaUNBQWlDLGlDQUFpQyxNQUFNLHdCQUF3QixxQkFBcUIsaUNBQWlDLE1BQU0sdUJBQXVCLGdDQUFnQyw2QkFBNkIscUJBQXFCLE1BQU0sd0RBQXdELDJDQUEyQyx3Q0FBd0MsK0JBQStCLE1BQU07QUFDdjhOO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVRQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDRHQUFtRDs7QUFFckY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpQkFBaUIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRCxrQ0FBa0Msa0JBQWtCO0FBQ3BELGlDQUFpQyxpQkFBaUI7QUFDbEQsNkJBQTZCLGFBQWE7QUFDMUMsOEJBQThCLHdCQUF3QjtBQUN0RCw4QkFBOEIsd0JBQXdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EseURBQXlELDhGQUE4RjtBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUIsb0VBQW9FLEVBQUU7QUFDL0c7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUIsMkdBQTJHLEVBQUU7QUFDdEo7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUIsK0NBQStDLEVBQUU7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQiwrQ0FBK0MsRUFBRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCLG9CQUFvQixFQUFFO0FBQy9EO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCLDJCQUEyQixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCLDRCQUE0QixFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQixzQkFBc0IsRUFBRTtBQUNqRTtBQUNBLDRCQUE0QixpQkFBaUIsZ0RBQWdELEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQix1QkFBdUIsRUFBRTtBQUNsRTtBQUNBLDRCQUE0QixpQkFBaUIsZ0RBQWdELEVBQUU7QUFDL0Y7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx3QkFBd0IsaUJBQWlCLHNCQUFzQixFQUFFO0FBQ2pFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCLGdEQUFnRCxFQUFFO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InVpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdWkudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcXG4gIH1cXG4gICNhcHAge1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIC8qIHRvcDogMHB4OyAgKi9cXG4gICAgbGVmdDogMHB4OyBcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7IFxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIjsgXFxuICAgIGZvbnQtc2l6ZTogMTJweDsgXFxuICAgIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cXG4gIH1cXG5cXG4gICNjb250YWluZXItaGVhZGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyOyBcXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDsgXFxuICAgICAgY29sb3I6IHdoaXRlOyBcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogJ3VwcGVyY2FzZSc7IFxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgXFxuICB9XFxuXFxuICAjY29udGFpbmVyLWxhYmVscyB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7IFxcbiAgICB0b3A6IDA7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgXFxuICAgIC8qIG1hcmdpbjogMHB4IDE1cHg7ICAqL1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRUZFRjsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNjBweCBhdXRvIDcwcHg7IFxcbiAgICBjb2xvcjogIzJDMkMyQzsgXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgXFxuICB9XFxuXFxuICAjb3JkZXIsICNuYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIH1cXG5cXG5cXG4gICNvcmRlciB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxOyBcXG4gIH1cXG4gICNuYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7IFxcbiAgfVxcblxcbiAgI3RhYi1oZWxwIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7IFxcbiAgICB3aWR0aDogODBweDsgXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4OyBcXG4gICAgZGlzcGxheTogbm9uZTsgXFxuICAgIFxcbiAgfVxcblxcbiAgLmtleWJvYXJkLW1pbmkge1xcbiAgICBwYWRkaW5nOiAxcHggM3B4IDJweCAzcHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVENUQ1OyBcXG4gICAgY29sb3I6IDJDMkMyQzsgXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IFxcbiAgICBmb250LXNpemU6IDEwcHg7IFxcbiAgfVxcblxcbiAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuICAvKiAvLyBaRVJPIFNUQVRFIFNUWUxJTkcgLy8vLyovXFxuICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuXFxuICAjemVyby1zdGF0ZSB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAgICAqL1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICAqL1xcbiAgICBsaW5lLWhlaWdodDogMTlweDsgXFxuICAgIHBhZGRpbmc6IDU1cHggNTBweDsgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcXG4gICAgLyogdG9wOiAxMHB4OyAgKi9cXG4gICAgbGVmdDogMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAgKi9cXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgXFxuICB9XFxuXFxuICAjemVyby1zdGF0ZSBwIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDsgXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTRFM0UzOyBcXG4gIH1cXG4gICN6ZXJvLXN0YXRlIHA6bnRoLWNoaWxkKDQpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgXFxuICB9XFxuXFxuICAjYWRkLW1pbmkgeyBcXG4gICAgcGFkZGluZzogMnB4IDEwcHggM3B4IDEwcHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMEZCOyBcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7IFxcbiAgfVxcblxcbiAgI2xvYWQtbWluaSB7XFxuICAgIHBhZGRpbmc6IDJweCA3cHggM3B4IDdweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgXFxuICAgIGNvbG9yOiAjMURBMEZCOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMURBMEZCOyBcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7IFxcbiAgfVxcblxcbiAgI3VwZGF0ZS1taW5pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMkMyQzsgXFxuICAgIHBhZGRpbmc6IDJweCAxMHB4IDNweCAxMHB4OyBcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyBcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7IFxcbiAgfVxcblxcbiAgI2Fubm90YXRpb24tbWluaSB7XFxuICAgIHBhZGRpbmc6IDJweCA5cHggM3B4IDlweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzY5Njk7IFxcbiAgICBjb2xvcjogd2hpdGU7IFxcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDsgXFxuICB9XFxuXFxuICAjemVyby1zdGF0ZS1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyA7IFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RTNFMzsgXFxuICAgIHBhZGRpbmctbGVmdDogNnB4OyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgdG9wOiAwcHg7IFxcbiAgICBsZWZ0OiAwcHg7IFxcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMjVweDsgXFxuICB9XFxuXFxuICAjemVyby1zdGF0ZS1uYXYgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDsgXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IFxcbiAgICBwYWRkaW5nOiA1cHggMTBweDsgXFxuICAgIGNvbG9yOiAjOTI5MjkyOyBcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG4gICAgd2lkdGg6IDY1cHg7IFxcbiAgfVxcblxcbiAgI2Fib3V0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgLyogdG9wOiA1MHB4OyAgKi9cXG4gICAgbGVmdDogMHB4OyBcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAgXFxuICAgIHBhZGRpbmc6IDc1cHggNTBweDsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICAgIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgICovXFxuICB9XFxuXFxuICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG4gIC8qIC8vIEFOTk9UQVRJT04gT0JKRUNUIFNUWUxJTkcgLy8vLyovXFxuICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcblxcblxcbiAgLmZvY3VzLW9iamVjdCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4OyBcXG4gICAgbWFyZ2luOiAwcHggMTVweDsgXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZFRkVGOyBcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7IFxcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyBcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA2MHB4IGF1dG8gNzBweDsgXFxuICB9XFxuXFxuICAuZm9jdXMtb2JqZWN0OmZvY3VzIHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4OyBcXG4gICAgbWFyZ2luOiAwcHg7IFxcbiAgICBvdXRsaW5lOiBub25lOyBcXG4gICAgY29sb3I6ICMyYzJjMmM7IFxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMURBMEZCOyBcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxREEwRkI7IFxcbiAgfVxcblxcblxcbi5mb2N1cy1vYmplY3Q6Zm9jdXMgI3RhYi1oZWxwIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyBcXG59XFxuXFxuICAuZm9jdXMtb2JqZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBtb3ZlOyBcXG4gIH1cXG5cXG4gIC50YWItb24ge1xcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgfVxcblxcbiAgLm1vdmUtaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4OyBcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7IFxcbiAgICBtYXgtaGVpZ2h0OiAzNnB4OyBcXG4gIFxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwOyBcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG4gIH1cXG5cXG4gIC5tb3ZlLWljb246aG92ZXIge1xcbiAgICBjdXJzb3I6IG1vdmU7IFxcbiAgfVxcbiAgXFxuICAubW92ZS1pY29uLWRvdCB7XFxuICAgIHdpZHRoOiA0cHg7IFxcbiAgICBoZWlnaHQ6IDRweDsgXFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMDBweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEM0QzQ7IFxcbiAgfVxcblxcbiAgLm9yZGVyLCAubmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICB9XFxuXFxuICAub3JkZXIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTsgXFxuICB9XFxuXFxuICAubmFtZSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzOyBcXG4gIH1cXG5cXG4gIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuICAvKiAvLyBCVVRUT04gU1RZTElORyAvLy8vKi9cXG4gIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuXFxuXFxuICAjYnV0dG9uLXJlZnJlc2g6Zm9jdXMsICNidXR0b24tYWRkOmZvY3VzLCAjYnV0dG9uLWxvYWQ6Zm9jdXMsIC5idXR0b24tcmVtb3ZlOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgXFxcInJlZFxcXCI7IFxcbiAgfVxcblxcbiAgI2J1dHRvbi1yZWZyZXNoLCAjYnV0dG9uLWFkZCwgI2J1dHRvbi1sb2FkLCNidXR0b24tcmVmcmVzaDpkaXNhYmxlZDpob3ZlciwgLmJ1dHRvbi1yZW1vdmUge1xcbiAgICBjb2xvcjogd2hpdGU7IFxcbiAgICBmb250LXdlaWdodDogNDAwOyBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgXFxuICAgIGhlaWdodDogMzBweDsgXFxuICB9XFxuXFxuICAjYnV0dG9uLXJlZnJlc2g6ZGlzYWJsZWQ6aG92ZXIsICNidXR0b24tYWRkOmRpc2FibGVkOmhvdmVyLCAjYnV0dG9uLWxvYWQ6ZGlzYWJsZWQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IFxcbiAgfVxcblxcbiAgI2J1dHRvbi1hZGQ6ZGlzYWJsZWQsICNidXR0b24tYWRkOmRpc2FibGVkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MjkyOyAgXFxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7IFxcbiAgfVxcblxcbiAgI2J1dHRvbi1sb2FkOmRpc2FibGVkLCAjYnV0dG9uLWxvYWQ6ZGlzYWJsZWQ6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICM5MjkyOTI7IFxcbiAgICBjb2xvcjogIzkyOTI5MjsgXFxuICB9XFxuXFxuICAjYnV0dG9uLWJhY2sge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTsgXFxuICAgIHBhZGRpbmctbGVmdDogNXB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMkMyQzsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyBcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4OyBcXG4gICAgbWFyZ2luOiAycHggMnB4IDFweCAycHg7IFxcbiAgICB3aWR0aDogMjFweDsgXFxuICB9XFxuXFxuXFxuICAjYnV0dG9uLWxvYWQge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTsgXFxuICAgIG1hcmdpbjogMTBweDsgXFxuICAgIGhlaWdodDogMzVweDsgXFxuICAgIHdpZHRoOmNhbGMoKDEwMCUgLSAyNXB4KS8yKTsgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxuICAgIGJvdHRvbTogMHB4OyBcXG4gICAgcmlnaHQ6IDBweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXG4gICAgY29sb3I6ICMxREEwRkI7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMURBMEZCOyBcXG4gIH1cXG4gICNidXR0b24tYWRkIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7IFxcbiAgICBtYXJnaW46IDEwcHg7IFxcbiAgICBoZWlnaHQ6IDM1cHg7IFxcbiAgICB3aWR0aDpjYWxjKCgxMDAlIC0gMjVweCkvMik7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgICBib3R0b206IDBweDsgXFxuICB9XFxuICAjYnV0dG9uLWFkZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQTBGQjsgXFxuICB9XFxuICAuYnV0dG9uLXJlZnJlc2gtZXhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzY5NjkgIWltcG9ydGFudDsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMzY5NjkgIWltcG9ydGFudDsgXFxuICB9XFxuXFxuICAjYnV0dG9uLXJlZnJlc2gsICNidXR0b24tcmVmcmVzaDpkaXNhYmxlZDpob3ZlciB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA0OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDMkMyQzsgXFxuICAgIG1hcmdpbjogMnB4IDJweCAxcHggMnB4OyBcXG4gIH1cXG5cXG4gICNidXR0b24tcmVmcmVzaDpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IC40NTsgXFxuICB9XFxuXFxuICAjYnV0dG9uLXJlZnJlc2g6aG92ZXIsICNidXR0b24tYmFjazpob3ZlciB7XFxuICAgIGNvbG9yOiAjMkMyQzJDOyBcXG4gICAgYm9yZGVyLWNvbG9yOiAjMkMyQzJDOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxcbiAgICBvdXRsaW5lOiBub25lOyBcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG4gIH1cXG5cXG4gIC5idXR0b24tcmVtb3ZlIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM2OTY5OyBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YzNjk2OTsgXFxuICB9XFxuICAjYnV0dG9uLWxvYWQ6aG92ZXIge1xcbiAgICBjb2xvcjogIzFEQTBGQjsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxREEwRkI7IFxcbiAgfVxcbiAgI2J1dHRvbi1hZGQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMEZCOyBcXG4gICAgYm9yZGVyLWNvbG9yOiAjMURBMEZCOyBcXG4gICAgb3V0bGluZTogbm9uZTsgXFxuICB9XFxuXFxuICAuYnV0dG9uLXJlZnJlc2gtZXhpdDpob3ZlciwgLmJ1dHRvbi1yZW1vdmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ1MzUzICFpbXBvcnRhbnQ7IFxcbiAgICBib3JkZXItY29sb3I6ICNFNDUzNTMgIWltcG9ydGFudDsgXFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBcXG4gIH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4vdWkuY3NzJztcbnZhciBleHBvcnRzID0ge307XG52YXIgdG90YWxGb2N1cyA9IDA7XG52YXIgZm9jdXNlZElEcyA9IFtdO1xudmFyIGN1clRhYklEID0gXCJcIjtcbi8vIGluc3RydWN0aW9ucyB3aGVuIHBhbmUgaXMgZW1wdHlcbmZ1bmN0aW9uIGNoZWNrWmVyb1N0YXRlKCkge1xuICAgIHZhciBkaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvY3VzLW9iamVjdFwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rLWluc3RydWN0aW9uc1wiKS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstYWJvdXRcIikuc3R5bGUuY29sb3IgPSBcIiM5MjkyOTJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInplcm8tc3RhdGVcIikuaGlkZGVuID0gKGRpdnMubGVuZ3RoID4gMCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6ZXJvLXN0YXRlLW5hdlwiKS5zdHlsZS52aXNpYmlsaXR5ID0gKGRpdnMubGVuZ3RoID4gMCkgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tbG9hZFwiKS5oaWRkZW4gPSAoZGl2cy5sZW5ndGggPiAwKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyXCIpLmlubmVySFRNTCA9IChkaXZzLmxlbmd0aCA+IDApID8gXCJPcmRlclwiIDogXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikuaW5uZXJIVE1MID0gKGRpdnMubGVuZ3RoID4gMCkgPyBcIk5hbWVcIiA6IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXItbGFiZWxzXCIpLnN0eWxlLnZpc2liaWxpdHkgPSAoZGl2cy5sZW5ndGggPD0gMCkgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tcmVmcmVzaFwiKS5oaWRkZW4gPSAoZGl2cy5sZW5ndGggPD0gMCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkXCIpLnN0eWxlLndpZHRoID0gKGRpdnMubGVuZ3RoID4gMCkgPyBcImNhbGMoMTAwJSAtIDI1cHgpXCIgOiBcImNhbGMoKDEwMCUgLSAyNXB4KS8yKVwiO1xufVxuLy8gc3R5bGluZyBmb3IgYWZmb3JkYW5jZXMgb24gZHJhZyBvdmVyXG5mdW5jdGlvbiBkcmFnT3Zlcihldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHRvcFkgPSBldi5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB2YXIgYm90dG9tWSA9IGV2LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgIHZhciBtaWRZID0gKHRvcFkgKyBib3R0b21ZKSAvIDI7XG4gICAgdmFyIGhvdmVyUG9pbnQgPSBldi5jbGllbnRZIDwgbWlkWTtcbiAgICBldi5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlclRvcENvbG9yID0gaG92ZXJQb2ludCA/IFwiIzFEQTBGQlwiIDogXCIjRkZGRkZGXCI7XG4gICAgZXYuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJUb3BXaWR0aCA9IGhvdmVyUG9pbnQgPyBcIjNweFwiIDogXCIxcHhcIjtcbiAgICBldi5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gaG92ZXJQb2ludCA/IFwiI0VGRUZFRlwiIDogXCIjMURBMEZCXCI7XG4gICAgZXYuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IGhvdmVyUG9pbnQgPyBcIjFweFwiIDogXCIzcHhcIjtcbn1cbi8vIGRldGVybWluZSB3aGVyZSBmb2N1cyBhbm5vdGF0aW9uIGdldHMgZHJvcHBlZFxuZnVuY3Rpb24gZHJvcChldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgdmFyIHRvRHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpO1xuICAgIHZhciB0b3BZID0gZXYuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgdmFyIGJvdHRvbVkgPSBldi5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICB2YXIgbWlkWSA9ICh0b3BZICsgYm90dG9tWSkgLyAyO1xuICAgIHZhciBob3ZlclBvaW50ID0gZXYuY2xpZW50WSA8IG1pZFk7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKS5pbnNlcnRCZWZvcmUodG9Ecm9wLCAoaG92ZXJQb2ludCkgPyBldi5jdXJyZW50VGFyZ2V0IDogZXYuY3VycmVudFRhcmdldC5uZXh0U2libGluZyk7XG4gICAgdG9Ecm9wLnN0eWxlLmJvcmRlclRvcENvbG9yID0gXCIjRkZGRkZGXCI7XG4gICAgZXYuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJUb3BDb2xvciA9IFwiI0ZGRkZGRlwiO1xuICAgIGV2LmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyVG9wV2lkdGggPSBcIjFweFwiO1xuICAgIHRvRHJvcC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IFwiI0VGRUZFRlwiO1xuICAgIGV2LmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSBcIiNFRkVGRUZcIjtcbiAgICBldi5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckJvdHRvbVdpZHRoID0gXCIxcHhcIjtcbiAgICByZXNvcnQoKTtcbn1cbmZ1bmN0aW9uIGRyYWdTdGFydChldikge1xuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBldi50YXJnZXQuaWQpO1xufVxuLy8gc3R5bGluZyByZXNldFxuZnVuY3Rpb24gZHJhZ0xlYXZlKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgY3VyVGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldDtcbiAgICBjdXJUYXJnZXQuc3R5bGUuYm9yZGVyVG9wQ29sb3IgPSBcIiNGRkZGRkZcIjtcbiAgICBjdXJUYXJnZXQuc3R5bGUuYm9yZGVyVG9wV2lkdGggPSBcIjFweFwiO1xuICAgIGN1clRhcmdldC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IFwiI0VGRUZFRlwiO1xuICAgIGN1clRhcmdldC5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IFwiMXB4XCI7XG59XG4vLyByZXNvcnQgd2hlbiBvYmplY3RzIGFyZSByZW1vdmVkLCBtb3ZlZCwgb3IgYWRkZWQgXG5mdW5jdGlvbiByZXNvcnQoKSB7XG4gICAgZm9jdXNlZElEcyA9IFtdO1xuICAgIHZhciBmb2N1c09iamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9jdXMtb2JqZWN0XCIpO1xuICAgIHZhciBmb2N1c09yZGVyID0gMTtcbiAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIG9iamVjdHMgXG4gICAgZm9yIChsZXQgb2JqIG9mIGZvY3VzT2JqZWN0cykge1xuICAgICAgICB2YXIgb2JqRWxlbWVudHMgPSBvYmouZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XG4gICAgICAgIGZvY3VzZWRJRHMucHVzaChvYmouaWQpO1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggZGl2IHRhZ3NcbiAgICAgICAgZm9yIChsZXQgZGl2IG9mIG9iakVsZW1lbnRzKSB7XG4gICAgICAgICAgICBpZiAoZGl2LmNsYXNzTmFtZSA9PSBcIm9yZGVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldk51bWJlciA9IGRpdi5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGZvY3VzT3JkZXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZWFubm90YXRlRm9jdXMob2JqLmlkLCBwcmV2TnVtYmVyLCBmb2N1c09yZGVyKTtcbiAgICAgICAgICAgICAgICBmb2N1c09yZGVyICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyByZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBmb2N1cyBsaXN0IFxuZnVuY3Rpb24gcmVtb3ZlRm9jdXNVSShJRCkge1xuICAgIGZvY3VzZWRJRHMgPSBmb2N1c2VkSURzLmZpbHRlcigoaWQpID0+IHsgcmV0dXJuIGlkICE9IElEOyB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChJRCkucmVtb3ZlKCk7XG4gICAgdG90YWxGb2N1cyAtPSAxO1xuICAgIHJlbW92ZUZvY3VzQW5ub3RhdGlvbihJRCk7XG4gICAgY2hlY2taZXJvU3RhdGUoKTtcbiAgICByZXNvcnQoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZvY3VzVUkoc2VsZWN0aW9uTmFtZSwgc2VsZWN0aW9uSUQsIGxvYWRpbmcpIHtcbiAgICAvLyB5b3UgY2FuIG9ubHkgYWRkIGEgbm9kZSBvbmNlIFxuICAgIGlmIChmb2N1c2VkSURzLmluY2x1ZGVzKHNlbGVjdGlvbklEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzZWRJRHMucHVzaChzZWxlY3Rpb25JRCk7XG4gICAgLy8gY3JlYXRlIHRoZSBuZXcgb2JqZWN0IFxuICAgIHZhciBuZXdGb2N1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3Rm9jdXMuY2xhc3NOYW1lID0gXCJmb2N1cy1vYmplY3RcIjtcbiAgICBuZXdGb2N1cy5pZCA9IHNlbGVjdGlvbklEO1xuICAgIG5ld0ZvY3VzLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgbmV3Rm9jdXMub25kcmFnc3RhcnQgPSAoKSA9PiB7IGRyYWdTdGFydChldmVudCk7IH07XG4gICAgbmV3Rm9jdXMub25kcmFnbGVhdmUgPSAoKSA9PiB7IGRyYWdMZWF2ZShldmVudCk7IH07XG4gICAgbmV3Rm9jdXMub25kcmFnb3ZlciA9ICgpID0+IHsgZHJhZ092ZXIoZXZlbnQpOyB9O1xuICAgIG5ld0ZvY3VzLm9uZHJvcCA9ICgpID0+IHsgZHJvcChldmVudCk7IH07XG4gICAgbmV3Rm9jdXMub25jbGljayA9ICgpID0+IHsgc2hvd0ZvY3VzKHNlbGVjdGlvbklEKTsgfTtcbiAgICBuZXdGb2N1cy5vbmZvY3VzID0gKCkgPT4geyBzaG93Rm9jdXMoc2VsZWN0aW9uSUQpOyB9O1xuICAgIC8vIGNyZWF0ZSBvcmRlciBudW1iZXJcbiAgICB2YXIgb3JkZXJOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9yZGVyTnVtYmVyLmNsYXNzTmFtZSA9IFwib3JkZXJcIjtcbiAgICBvcmRlck51bWJlci5pbm5lckhUTUwgPSAodG90YWxGb2N1cyArIDEpLnRvU3RyaW5nKCk7XG4gICAgLy8gY3JlYXRlIG5hbWVcbiAgICB2YXIgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZS5jbGFzc05hbWUgPSBcIm5hbWVcIjtcbiAgICBuYW1lLmlubmVySFRNTCA9IHNlbGVjdGlvbk5hbWU7XG4gICAgLy8gY3JlYXRlIHJlbW92ZSBidXR0b25cbiAgICB2YXIgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZW1vdmVCdXR0b24uY2xhc3NOYW1lID0gXCJidXR0b24tcmVtb3ZlXCI7XG4gICAgcmVtb3ZlQnV0dG9uLmlubmVySFRNTCA9IFwiUmVtb3ZlXCI7XG4gICAgcmVtb3ZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7IHJlbW92ZUZvY3VzVUkoc2VsZWN0aW9uSUQpOyB9O1xuICAgIC8vIGNyZWF0ZSB0YWItaGVscCBidXR0b24gXG4gICAgdmFyIHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFiQ29udGFpbmVyLmlkID0gXCJ0YWItaGVscFwiO1xuICAgIHRhYkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxkaXYgaWQ9J3RhYi1oZWxwJz4gJiM4NTkzOyA8c3BhbiBjbGFzcz0na2V5Ym9hcmQtbWluaSc+U2hpZnQ8L3NwYW4+IDxzcGFuIGNsYXNzPSdrZXlib2FyZC1taW5pJz5UYWI8L3NwYW4+IDxiciAvPiAmZGFycjsgPHNwYW4gY2xhc3M9J2tleWJvYXJkLW1pbmknPlRhYjwvc3Bhbj4gPC9kaXY+IFwiO1xuICAgIC8vIGFkZCBldmVyeXRoaW5nIGludG8gdGhlIGxhcmdlciBkaXZcbiAgICBuZXdGb2N1cy5hcHBlbmRDaGlsZChvcmRlck51bWJlcik7XG4gICAgbmV3Rm9jdXMuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgbmV3Rm9jdXMuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgICBuZXdGb2N1cy5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xuICAgIC8vIGFkZCBsYXJnZXIgZGl2IGludG8gdGhlIHBsdWdpbiBwYW5lLCBhbm5vdGF0ZSBhbmQgY2hlY2sgZm9yIHplcm8gc3RhdGUgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmFwcGVuZENoaWxkKG5ld0ZvY3VzKTtcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgICAgYW5ub3RhdGVGb2N1cyhzZWxlY3Rpb25JRCwgdG90YWxGb2N1cyArIDEpO1xuICAgIH1cbiAgICA7XG4gICAgc2hvd0ZvY3VzKHNlbGVjdGlvbklEKTtcbiAgICBjaGVja1plcm9TdGF0ZSgpO1xuICAgIHRvdGFsRm9jdXMgKz0gMTtcbn1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vIGNhbGxzIHRvIHBhcmVudCAvLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gYW5ub3RhdGVGb2N1cyhzZWxlY3Rpb25JRCwgb3JkZXJOdW1iZXIpIHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdjcmVhdGUtYW5ub3RhdGlvblVJJywgaWQ6IHNlbGVjdGlvbklELCBudW1iZXI6IG9yZGVyTnVtYmVyIH0gfSwgJyonKTtcbn1cbmZ1bmN0aW9uIHJlYW5ub3RhdGVGb2N1cyhzZWxlY3Rpb25JRCwgcHJldk9yZGVyTnVtYmVyLCBuZXh0T3JkZXJOdW1iZXIpIHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdyZW51bWJlci1hbm5vdGF0aW9uVUknLCBpZDogc2VsZWN0aW9uSUQsIHByZXZOdW1iZXI6IHByZXZPcmRlck51bWJlciwgbmV4dE51bWJlcjogbmV4dE9yZGVyTnVtYmVyIH0gfSwgJyonKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUZvY3VzQW5ub3RhdGlvbihzZWxlY3Rpb25JRCkge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3JlbW92ZS1hbm5vdGF0aW9uVUknLCBpZDogc2VsZWN0aW9uSUQgfSB9LCAnKicpO1xufVxuZnVuY3Rpb24gc2hvd0ZvY3VzKHNlbGVjdGlvbklEKSB7XG4gICAgLy8gcmV2ZXJ0IHByZXZpb3VzIHNlbGVjdGVkIHRhYlxuICAgIHZhciBjdXJUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJUYWJJRCk7XG4gICAgaWYgKGN1clRhYiAhPSBudWxsKSB7XG4gICAgICAgIGN1clRhYi5jbGFzc05hbWUgPSBcImZvY3VzLW9iamVjdFwiO1xuICAgIH1cbiAgICB2YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rpb25JRCk7XG4gICAgaWYgKHNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGNsYXNzTmV3ID0gc2VsZWN0ZWQuY2xhc3NOYW1lLmNvbmNhdChcIiB0YWItb25cIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdGlvbklEKS5jbGFzc05hbWUgPSBjbGFzc05ldztcbiAgICAgICAgY3VyVGFiSUQgPSBzZWxlY3Rpb25JRDtcbiAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnc2VsZWN0LWFubm90YXRpb25VSScsIGlkOiBzZWxlY3Rpb25JRCB9IH0sICcqJyk7XG4gICAgfVxufVxuLy8gaW5pdGlhdGlhbGl6YXRpb24gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpLmhpZGRlbiA9IHRydWU7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstaW5zdHJ1Y3Rpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rLWluc3RydWN0aW9uc1wiKS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstYWJvdXRcIikuc3R5bGUuY29sb3IgPSBcIiM5MjkyOTJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInplcm8tc3RhdGVcIikuaGlkZGVuID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKS5oaWRkZW4gPSB0cnVlO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluay1hYm91dFwiKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluay1hYm91dFwiKS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstaW5zdHJ1Y3Rpb25zXCIpLnN0eWxlLmNvbG9yID0gXCIjOTI5MjkyXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6ZXJvLXN0YXRlXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKS5oaWRkZW4gPSBmYWxzZTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikuaW5uZXJIVE1MID0gXCJcIjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyLWxhYmVsc1wiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tcmVmcmVzaCcpLmhpZGRlbiA9IHRydWU7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWFkZCcpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnYWRkLWZvY3VzJyB9IH0sICcqJyk7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1sb2FkJykub25jbGljayA9ICgpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdsb2FkLWFubm90YXRpb25zJyB9IH0sICcqJyk7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1yZWZyZXNoJykub25jbGljayA9ICgpID0+IHtcbiAgICBpZiAoZm9jdXNlZElEcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBidXR0b25SZWZyZXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1yZWZyZXNoJyk7XG4gICAgICAgIHZhciByZW1vdmVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uLXJlbW92ZScpO1xuICAgICAgICB2YXIgZm9jaSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZvY3VzLW9iamVjdCcpO1xuICAgICAgICBzd2l0Y2ggKGJ1dHRvblJlZnJlc2guaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICBjYXNlIFwiVGFiIHRlc3RcIjpcbiAgICAgICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICd0ZXN0LWFubm90YXRpb25VSScgfSB9LCAnKicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvblJlZnJlc2guaW5uZXJIVE1MID0gXCJFeGl0IHRlc3RcIjtcbiAgICAgICAgICAgICAgICBidXR0b25SZWZyZXNoLmNsYXNzTmFtZSA9IFwiYnV0dG9uLXJlZnJlc2gtZXhpdFwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tYWRkJykuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBiIG9mIHJlbW92ZUJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgYi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGYgb2YgZm9jaSkge1xuICAgICAgICAgICAgICAgICAgICBmLnRhYkluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgZi5jbGFzc05hbWUgPSBcImZvY3VzLW9iamVjdFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJFeGl0IHRlc3RcIjpcbiAgICAgICAgICAgICAgICBidXR0b25SZWZyZXNoLmlubmVySFRNTCA9IFwiVGFiIHRlc3RcIjtcbiAgICAgICAgICAgICAgICBidXR0b25SZWZyZXNoLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1hZGQnKS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBiIG9mIHJlbW92ZUJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgYi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZiBvZiBmb2NpKSB7XG4gICAgICAgICAgICAgICAgICAgIGYucmVtb3ZlQXR0cmlidXRlKFwidGFiSW5kZXhcIik7XG4gICAgICAgICAgICAgICAgICAgIGYuY2xhc3NOYW1lID0gXCJmb2N1cy1vYmplY3RcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xufTtcbmlmICghZG9jdW1lbnQuaGFzRm9jdXMoKSkge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3dpbmRvdy1ibHVyJyB9IH0sICcqJyk7XG4gICAgZm9yIChsZXQgc2VsZWN0aW9uSUQgb2YgZm9jdXNlZElEcykge1xuICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdyZWZyZXNoLWFubm90YXRpb25VSScsIGlkOiBzZWxlY3Rpb25JRCB9IH0sICcqJyk7XG4gICAgfVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3dpbmRvdy1mb2N1cycgfSB9LCAnKicpO1xuICAgIGZvciAobGV0IHNlbGVjdGlvbklEIG9mIGZvY3VzZWRJRHMpIHtcbiAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAncmVmcmVzaC1hbm5vdGF0aW9uVUknLCBpZDogc2VsZWN0aW9uSUQgfSB9LCAnKicpO1xuICAgIH1cbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnd2luZG93LWJsdXInIH0gfSwgJyonKTtcbn0pO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vIG1lc3NhZ2VzIGZyb20gcGFyZW50IC8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgdmFyIG1lc3NhZ2UgPSBldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2U7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2FkZC1mb2N1cycpIHtcbiAgICAgICAgdmFyIG5hbWVzID0gbWVzc2FnZS5uYW1lcztcbiAgICAgICAgdmFyIGlkcyA9IG1lc3NhZ2UuaWRzO1xuICAgICAgICB3aGlsZSAobmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBuYW1lcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIGlkID0gaWRzLnNoaWZ0KCk7XG4gICAgICAgICAgICBjcmVhdGVGb2N1c1VJKG5hbWUsIGlkLCBtZXNzYWdlLmxvYWRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNlbGVjdGlvbklEIG9mIGZvY3VzZWRJRHMpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdyZWZyZXNoLWFubm90YXRpb25VSScsIGlkOiBzZWxlY3Rpb25JRCB9IH0sICcqJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnbm9kZS1yZW5hbWUnKSB7XG4gICAgICAgIHZhciBkaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XG4gICAgICAgIGZvciAobGV0IGRpdiBvZiBkaXZzKSB7XG4gICAgICAgICAgICBpZiAoZGl2LmNsYXNzTmFtZSA9PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlLm5vZGVOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ25vZGUtcmVtb3ZlJykge1xuICAgICAgICByZW1vdmVGb2N1c1VJKG1lc3NhZ2UuaWQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICd1cGRhdGUtYnV0dG9ucycpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1hZGQnKS5kaXNhYmxlZCA9IG1lc3NhZ2UuaXNEaXNhYmxlZDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1sb2FkJykuZGlzYWJsZWQgPSBtZXNzYWdlLmxvYWRCdXR0b25EaXNhYmxlZDtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==