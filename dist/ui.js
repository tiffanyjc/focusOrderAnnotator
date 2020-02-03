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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGFBQWEseUJBQXlCLE1BQU0sVUFBVSxrQkFBa0IsMEJBQTBCLG1CQUFtQixvQkFB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QUNqRTtBQUNBLDRCQUE0QixpQkFBaUIsZ0RBQWdELEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQix1QkFBdUIsRUFBRTtBQUNsRTtBQUNBLDRCQUE0QixpQkFBaUIsZ0RBQWdELEVBQUU7QUFDL0Y7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx3QkFBd0IsaUJBQWlCLHNCQUFzQixFQUFFO0FBQ2pFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91aS50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4gIGJvZHkge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxcbiAgfVxcbiAgI2FwcCB7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgLyogdG9wOiAwcHg7ICAqL1xcbiAgICBsZWZ0OiAwcHg7IFxcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDsgXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiOyBcXG4gICAgZm9udC1zaXplOiAxMnB4OyBcXG4gICAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xcbiAgfVxcblxcbiAgI2NvbnRhaW5lci1oZWFkZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7IFxcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4OyBcXG4gICAgICBjb2xvcjogd2hpdGU7IFxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiAndXBwZXJjYXNlJzsgXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gICAgICBmb250LXdlaWdodDogNTAwOyBcXG4gIH1cXG5cXG4gICNjb250YWluZXItbGFiZWxzIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTsgXFxuICAgIHRvcDogMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXG4gICAgcGFkZGluZzogMTBweCAxNXB4OyBcXG4gICAgLyogbWFyZ2luOiAwcHggMTVweDsgICovXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZFRkVGOyBcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA2MHB4IGF1dG8gNzBweDsgXFxuICAgIGNvbG9yOiAjMkMyQzJDOyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICBcXG4gIH1cXG5cXG4gICNvcmRlciwgI25hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgfVxcblxcblxcbiAgI29yZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7IFxcbiAgfVxcbiAgI25hbWUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMzsgXFxuICB9XFxuXFxuICAjdGFiLWhlbHAge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogNDsgXFxuICAgIHdpZHRoOiA4MHB4OyBcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7IFxcbiAgICBkaXNwbGF5OiBub25lOyBcXG4gICAgXFxuICB9XFxuXFxuICAua2V5Ym9hcmQtbWluaSB7XFxuICAgIHBhZGRpbmc6IDFweCAzcHggMnB4IDNweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENUQ1RDU7IFxcbiAgICBjb2xvcjogMkMyQzJDOyBcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgXFxuICAgIGZvbnQtc2l6ZTogMTBweDsgXFxuICB9XFxuXFxuIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG4gIC8qIC8vIFpFUk8gU1RBVEUgU1RZTElORyAvLy8vKi9cXG4gIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG5cXG4gICN6ZXJvLXN0YXRlIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICAgICovXFxuICAgIC8qIGhlaWdodDogMTAwJTsgICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4OyBcXG4gICAgcGFkZGluZzogNTVweCA1MHB4OyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxcbiAgICAvKiB0b3A6IDEwcHg7ICAqL1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyBcXG4gIH1cXG5cXG4gICN6ZXJvLXN0YXRlIHAge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4OyBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNEUzRTM7IFxcbiAgfVxcbiAgI3plcm8tc3RhdGUgcDpudGgtY2hpbGQoNCkge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyBcXG4gIH1cXG5cXG4gICNhZGQtbWluaSB7IFxcbiAgICBwYWRkaW5nOiAycHggMTBweCAzcHggMTBweDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREEwRkI7IFxcbiAgICBjb2xvcjogd2hpdGU7IFxcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDsgXFxuICB9XFxuXFxuICAjbG9hZC1taW5pIHtcXG4gICAgcGFkZGluZzogMnB4IDdweCAzcHggN3B4OyBcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyBcXG4gICAgY29sb3I6ICMxREEwRkI7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxREEwRkI7IFxcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDsgXFxuICB9XFxuXFxuICAjdXBkYXRlLW1pbmkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMyQzJDOyBcXG4gICAgcGFkZGluZzogMnB4IDEwcHggM3B4IDEwcHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IFxcbiAgICBjb2xvcjogd2hpdGU7IFxcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDsgXFxuICB9XFxuXFxuICAjYW5ub3RhdGlvbi1taW5pIHtcXG4gICAgcGFkZGluZzogMnB4IDlweCAzcHggOXB4OyBcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzNjk2OTsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIG1hcmdpbi1yaWdodDogM3B4OyBcXG4gIH1cXG5cXG4gICN6ZXJvLXN0YXRlLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93IDsgXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTRFM0UzOyBcXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICB0b3A6IDBweDsgXFxuICAgIGxlZnQ6IDBweDsgXFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAyNXB4OyBcXG4gIH1cXG5cXG4gICN6ZXJvLXN0YXRlLW5hdiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxMnB4OyBcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4OyBcXG4gICAgY29sb3I6ICM5MjkyOTI7IFxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICB3aWR0aDogNjVweDsgXFxuICB9XFxuXFxuICAjYWJvdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICAvKiB0b3A6IDUwcHg7ICAqL1xcbiAgICBsZWZ0OiAwcHg7IFxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7ICBcXG4gICAgcGFkZGluZzogNzVweCA1MHB4OyBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gICAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAgKi9cXG4gIH1cXG5cXG4gICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcbiAgLyogLy8gQU5OT1RBVElPTiBPQkpFQ1QgU1RZTElORyAvLy8vKi9cXG4gIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxuXFxuXFxuICAuZm9jdXMtb2JqZWN0IHtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7IFxcbiAgICBtYXJnaW46IDBweCAxNXB4OyBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVGRUY7IFxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjsgXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IFxcbiAgICBkaXNwbGF5OiBncmlkOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDYwcHggYXV0byA3MHB4OyBcXG4gIH1cXG5cXG4gIC5mb2N1cy1vYmplY3Q6Zm9jdXMge1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IFxcbiAgICBtYXJnaW46IDBweDsgXFxuICAgIG91dGxpbmU6IG5vbmU7IFxcbiAgICBjb2xvcjogIzJjMmMyYzsgXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxREEwRkI7IFxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzFEQTBGQjsgXFxuICB9XFxuXFxuXFxuLmZvY3VzLW9iamVjdDpmb2N1cyAjdGFiLWhlbHAge1xcbiAgZGlzcGxheTogYmxvY2s7IFxcbn1cXG5cXG4gIC5mb2N1cy1vYmplY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IG1vdmU7IFxcbiAgfVxcblxcbiAgLnRhYi1vbiB7XFxuICAgICBmb250LXdlaWdodDogYm9sZDsgXFxuICB9XFxuXFxuICAubW92ZS1pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7IFxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTsgXFxuICAgIG1heC1oZWlnaHQ6IDM2cHg7IFxcbiAgXFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxcbiAgfVxcblxcbiAgLm1vdmUtaWNvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogbW92ZTsgXFxuICB9XFxuICBcXG4gIC5tb3ZlLWljb24tZG90IHtcXG4gICAgd2lkdGg6IDRweDsgXFxuICAgIGhlaWdodDogNHB4OyBcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M0QzRDNDsgXFxuICB9XFxuXFxuICAub3JkZXIsIC5uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIH1cXG5cXG4gIC5vcmRlciB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxOyBcXG4gIH1cXG5cXG4gIC5uYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7IFxcbiAgfVxcblxcbiAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG4gIC8qIC8vIEJVVFRPTiBTVFlMSU5HIC8vLy8qL1xcbiAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXG5cXG5cXG4gICNidXR0b24tcmVmcmVzaDpmb2N1cywgI2J1dHRvbi1hZGQ6Zm9jdXMsICNidXR0b24tbG9hZDpmb2N1cywgLmJ1dHRvbi1yZW1vdmU6Zm9jdXMge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBcXFwicmVkXFxcIjsgXFxuICB9XFxuXFxuICAjYnV0dG9uLXJlZnJlc2gsICNidXR0b24tYWRkLCAjYnV0dG9uLWxvYWQsI2J1dHRvbi1yZWZyZXNoOmRpc2FibGVkOmhvdmVyLCAuYnV0dG9uLXJlbW92ZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcXG4gICAgYm94LXNoYWRvdzogbm9uZTsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyBcXG4gICAgaGVpZ2h0OiAzMHB4OyBcXG4gIH1cXG5cXG4gICNidXR0b24tcmVmcmVzaDpkaXNhYmxlZDpob3ZlciwgI2J1dHRvbi1hZGQ6ZGlzYWJsZWQ6aG92ZXIsICNidXR0b24tbG9hZDpkaXNhYmxlZDpob3ZlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDsgXFxuICB9XFxuXFxuICAjYnV0dG9uLWFkZDpkaXNhYmxlZCwgI2J1dHRvbi1hZGQ6ZGlzYWJsZWQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MjkyOTI7ICBcXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTsgXFxuICB9XFxuXFxuICAjYnV0dG9uLWxvYWQ6ZGlzYWJsZWQsICNidXR0b24tbG9hZDpkaXNhYmxlZDpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzkyOTI5MjsgXFxuICAgIGNvbG9yOiAjOTI5MjkyOyBcXG4gIH1cXG5cXG4gICNidXR0b24tYmFjayB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxOyBcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMyQzJDOyBcXG4gICAgY29sb3I6IHdoaXRlOyBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IFxcbiAgICBmb250LXdlaWdodDogNTAwOyBcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7IFxcbiAgICBtYXJnaW46IDJweCAycHggMXB4IDJweDsgXFxuICAgIHdpZHRoOiAyMXB4OyBcXG4gIH1cXG5cXG5cXG4gICNidXR0b24tbG9hZCB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxOyBcXG4gICAgbWFyZ2luOiAxMHB4OyBcXG4gICAgaGVpZ2h0OiAzNXB4OyBcXG4gICAgd2lkdGg6Y2FsYygoMTAwJSAtIDI1cHgpLzIpOyBcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgYm90dG9tOiAwcHg7IFxcbiAgICByaWdodDogMHB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxcbiAgICBjb2xvcjogIzFEQTBGQjsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxREEwRkI7IFxcbiAgfVxcbiAgI2J1dHRvbi1hZGQge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTsgXFxuICAgIG1hcmdpbjogMTBweDsgXFxuICAgIGhlaWdodDogMzVweDsgXFxuICAgIHdpZHRoOmNhbGMoKDEwMCUgLSAyNXB4KS8yKTsgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxuICAgIGJvdHRvbTogMHB4OyBcXG4gIH1cXG4gICNidXR0b24tYWRke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMEZCOyBcXG4gIH1cXG4gIC5idXR0b24tcmVmcmVzaC1leGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzNjk2OSAhaW1wb3J0YW50OyBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YzNjk2OSAhaW1wb3J0YW50OyBcXG4gIH1cXG5cXG4gICNidXR0b24tcmVmcmVzaCwgI2J1dHRvbi1yZWZyZXNoOmRpc2FibGVkOmhvdmVyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMyQzJDOyBcXG4gICAgbWFyZ2luOiAycHggMnB4IDFweCAycHg7IFxcbiAgfVxcblxcbiAgI2J1dHRvbi1yZWZyZXNoOmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogLjQ1OyBcXG4gIH1cXG5cXG4gICNidXR0b24tcmVmcmVzaDpob3ZlciwgI2J1dHRvbi1iYWNrOmhvdmVyIHtcXG4gICAgY29sb3I6ICMyQzJDMkM7IFxcbiAgICBib3JkZXItY29sb3I6ICMyQzJDMkM7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXFxuICAgIG91dGxpbmU6IG5vbmU7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgfVxcblxcbiAgLmJ1dHRvbi1yZW1vdmUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogNDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzY5Njk7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjM2OTY5OyBcXG4gIH1cXG4gICNidXR0b24tbG9hZDpob3ZlciB7XFxuICAgIGNvbG9yOiAjMURBMEZCOyBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFEQTBGQjsgXFxuICB9XFxuICAjYnV0dG9uLWFkZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREEwRkI7IFxcbiAgICBib3JkZXItY29sb3I6ICMxREEwRkI7IFxcbiAgICBvdXRsaW5lOiBub25lOyBcXG4gIH1cXG5cXG4gIC5idXR0b24tcmVmcmVzaC1leGl0OmhvdmVyLCAuYnV0dG9uLXJlbW92ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNDUzNTMgIWltcG9ydGFudDsgXFxuICAgIGJvcmRlci1jb2xvcjogI0U0NTM1MyAhaW1wb3J0YW50OyBcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IFxcbiAgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi91aS5jc3MnO1xudmFyIGV4cG9ydHMgPSB7fTtcbnZhciB0b3RhbEZvY3VzID0gMDtcbnZhciBmb2N1c2VkSURzID0gW107XG52YXIgY3VyVGFiSUQgPSBcIlwiO1xuLy8gaW5zdHJ1Y3Rpb25zIHdoZW4gcGFuZSBpcyBlbXB0eVxuZnVuY3Rpb24gY2hlY2taZXJvU3RhdGUoKSB7XG4gICAgdmFyIGRpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9jdXMtb2JqZWN0XCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstaW5zdHJ1Y3Rpb25zXCIpLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluay1hYm91dFwiKS5zdHlsZS5jb2xvciA9IFwiIzkyOTI5MlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemVyby1zdGF0ZVwiKS5oaWRkZW4gPSAoZGl2cy5sZW5ndGggPiAwKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInplcm8tc3RhdGUtbmF2XCIpLnN0eWxlLnZpc2liaWxpdHkgPSAoZGl2cy5sZW5ndGggPiAwKSA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1sb2FkXCIpLmhpZGRlbiA9IChkaXZzLmxlbmd0aCA+IDApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JkZXJcIikuaW5uZXJIVE1MID0gKGRpdnMubGVuZ3RoID4gMCkgPyBcIk9yZGVyXCIgOiBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS5pbm5lckhUTUwgPSAoZGl2cy5sZW5ndGggPiAwKSA/IFwiTmFtZVwiIDogXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lci1sYWJlbHNcIikuc3R5bGUudmlzaWJpbGl0eSA9IChkaXZzLmxlbmd0aCA8PSAwKSA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1yZWZyZXNoXCIpLmhpZGRlbiA9IChkaXZzLmxlbmd0aCA8PSAwKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1hZGRcIikuc3R5bGUud2lkdGggPSAoZGl2cy5sZW5ndGggPiAwKSA/IFwiY2FsYygxMDAlIC0gMjVweClcIiA6IFwiY2FsYygoMTAwJSAtIDI1cHgpLzIpXCI7XG59XG4vLyBzdHlsaW5nIGZvciBhZmZvcmRhbmNlcyBvbiBkcmFnIG92ZXJcbmZ1bmN0aW9uIGRyYWdPdmVyKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdG9wWSA9IGV2LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHZhciBib3R0b21ZID0gZXYuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgdmFyIG1pZFkgPSAodG9wWSArIGJvdHRvbVkpIC8gMjtcbiAgICB2YXIgaG92ZXJQb2ludCA9IGV2LmNsaWVudFkgPCBtaWRZO1xuICAgIGV2LmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyVG9wQ29sb3IgPSBob3ZlclBvaW50ID8gXCIjMURBMEZCXCIgOiBcIiNGRkZGRkZcIjtcbiAgICBldi5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlclRvcFdpZHRoID0gaG92ZXJQb2ludCA/IFwiM3B4XCIgOiBcIjFweFwiO1xuICAgIGV2LmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSBob3ZlclBvaW50ID8gXCIjRUZFRkVGXCIgOiBcIiMxREEwRkJcIjtcbiAgICBldi5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckJvdHRvbVdpZHRoID0gaG92ZXJQb2ludCA/IFwiMXB4XCIgOiBcIjNweFwiO1xufVxuLy8gZGV0ZXJtaW5lIHdoZXJlIGZvY3VzIGFubm90YXRpb24gZ2V0cyBkcm9wcGVkXG5mdW5jdGlvbiBkcm9wKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICB2YXIgdG9Ecm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSk7XG4gICAgdmFyIHRvcFkgPSBldi5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB2YXIgYm90dG9tWSA9IGV2LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgIHZhciBtaWRZID0gKHRvcFkgKyBib3R0b21ZKSAvIDI7XG4gICAgdmFyIGhvdmVyUG9pbnQgPSBldi5jbGllbnRZIDwgbWlkWTtcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpLmluc2VydEJlZm9yZSh0b0Ryb3AsIChob3ZlclBvaW50KSA/IGV2LmN1cnJlbnRUYXJnZXQgOiBldi5jdXJyZW50VGFyZ2V0Lm5leHRTaWJsaW5nKTtcbiAgICB0b0Ryb3Auc3R5bGUuYm9yZGVyVG9wQ29sb3IgPSBcIiNGRkZGRkZcIjtcbiAgICBldi5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlclRvcENvbG9yID0gXCIjRkZGRkZGXCI7XG4gICAgZXYuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJUb3BXaWR0aCA9IFwiMXB4XCI7XG4gICAgdG9Ecm9wLnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gXCIjRUZFRkVGXCI7XG4gICAgZXYuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IFwiI0VGRUZFRlwiO1xuICAgIGV2LmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGggPSBcIjFweFwiO1xuICAgIHJlc29ydCgpO1xufVxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGV2KSB7XG4gICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGV2LnRhcmdldC5pZCk7XG59XG4vLyBzdHlsaW5nIHJlc2V0XG5mdW5jdGlvbiBkcmFnTGVhdmUoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBjdXJUYXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuICAgIGN1clRhcmdldC5zdHlsZS5ib3JkZXJUb3BDb2xvciA9IFwiI0ZGRkZGRlwiO1xuICAgIGN1clRhcmdldC5zdHlsZS5ib3JkZXJUb3BXaWR0aCA9IFwiMXB4XCI7XG4gICAgY3VyVGFyZ2V0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gXCIjRUZFRkVGXCI7XG4gICAgY3VyVGFyZ2V0LnN0eWxlLmJvcmRlckJvdHRvbVdpZHRoID0gXCIxcHhcIjtcbn1cbi8vIHJlc29ydCB3aGVuIG9iamVjdHMgYXJlIHJlbW92ZWQsIG1vdmVkLCBvciBhZGRlZCBcbmZ1bmN0aW9uIHJlc29ydCgpIHtcbiAgICBmb2N1c2VkSURzID0gW107XG4gICAgdmFyIGZvY3VzT2JqZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb2N1cy1vYmplY3RcIik7XG4gICAgdmFyIGZvY3VzT3JkZXIgPSAxO1xuICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgb2JqZWN0cyBcbiAgICBmb3IgKGxldCBvYmogb2YgZm9jdXNPYmplY3RzKSB7XG4gICAgICAgIHZhciBvYmpFbGVtZW50cyA9IG9iai5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTtcbiAgICAgICAgZm9jdXNlZElEcy5wdXNoKG9iai5pZCk7XG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBkaXYgdGFnc1xuICAgICAgICBmb3IgKGxldCBkaXYgb2Ygb2JqRWxlbWVudHMpIHtcbiAgICAgICAgICAgIGlmIChkaXYuY2xhc3NOYW1lID09IFwib3JkZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2TnVtYmVyID0gZGl2LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gZm9jdXNPcmRlci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJlYW5ub3RhdGVGb2N1cyhvYmouaWQsIHByZXZOdW1iZXIsIGZvY3VzT3JkZXIpO1xuICAgICAgICAgICAgICAgIGZvY3VzT3JkZXIgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIGZvY3VzIGxpc3QgXG5mdW5jdGlvbiByZW1vdmVGb2N1c1VJKElEKSB7XG4gICAgZm9jdXNlZElEcyA9IGZvY3VzZWRJRHMuZmlsdGVyKChpZCkgPT4geyByZXR1cm4gaWQgIT0gSUQ7IH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElEKS5yZW1vdmUoKTtcbiAgICB0b3RhbEZvY3VzIC09IDE7XG4gICAgcmVtb3ZlRm9jdXNBbm5vdGF0aW9uKElEKTtcbiAgICBjaGVja1plcm9TdGF0ZSgpO1xuICAgIHJlc29ydCgpO1xufVxuZnVuY3Rpb24gY3JlYXRlRm9jdXNVSShzZWxlY3Rpb25OYW1lLCBzZWxlY3Rpb25JRCwgbG9hZGluZykge1xuICAgIC8vIHlvdSBjYW4gb25seSBhZGQgYSBub2RlIG9uY2UgXG4gICAgaWYgKGZvY3VzZWRJRHMuaW5jbHVkZXMoc2VsZWN0aW9uSUQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9jdXNlZElEcy5wdXNoKHNlbGVjdGlvbklEKTtcbiAgICAvLyBjcmVhdGUgdGhlIG5ldyBvYmplY3QgXG4gICAgdmFyIG5ld0ZvY3VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdGb2N1cy5jbGFzc05hbWUgPSBcImZvY3VzLW9iamVjdFwiO1xuICAgIG5ld0ZvY3VzLmlkID0gc2VsZWN0aW9uSUQ7XG4gICAgbmV3Rm9jdXMuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICBuZXdGb2N1cy5vbmRyYWdzdGFydCA9ICgpID0+IHsgZHJhZ1N0YXJ0KGV2ZW50KTsgfTtcbiAgICBuZXdGb2N1cy5vbmRyYWdsZWF2ZSA9ICgpID0+IHsgZHJhZ0xlYXZlKGV2ZW50KTsgfTtcbiAgICBuZXdGb2N1cy5vbmRyYWdvdmVyID0gKCkgPT4geyBkcmFnT3ZlcihldmVudCk7IH07XG4gICAgbmV3Rm9jdXMub25kcm9wID0gKCkgPT4geyBkcm9wKGV2ZW50KTsgfTtcbiAgICBuZXdGb2N1cy5vbmNsaWNrID0gKCkgPT4geyBzaG93Rm9jdXMoc2VsZWN0aW9uSUQpOyB9O1xuICAgIG5ld0ZvY3VzLm9uZm9jdXMgPSAoKSA9PiB7IHNob3dGb2N1cyhzZWxlY3Rpb25JRCk7IH07XG4gICAgLy8gY3JlYXRlIG9yZGVyIG51bWJlclxuICAgIHZhciBvcmRlck51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3JkZXJOdW1iZXIuY2xhc3NOYW1lID0gXCJvcmRlclwiO1xuICAgIG9yZGVyTnVtYmVyLmlubmVySFRNTCA9ICh0b3RhbEZvY3VzICsgMSkudG9TdHJpbmcoKTtcbiAgICAvLyBjcmVhdGUgbmFtZVxuICAgIHZhciBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lLmNsYXNzTmFtZSA9IFwibmFtZVwiO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gc2VsZWN0aW9uTmFtZTtcbiAgICAvLyBjcmVhdGUgcmVtb3ZlIGJ1dHRvblxuICAgIHZhciByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImJ1dHRvbi1yZW1vdmVcIjtcbiAgICByZW1vdmVCdXR0b24uaW5uZXJIVE1MID0gXCJSZW1vdmVcIjtcbiAgICByZW1vdmVCdXR0b24ub25jbGljayA9ICgpID0+IHsgcmVtb3ZlRm9jdXNVSShzZWxlY3Rpb25JRCk7IH07XG4gICAgLy8gY3JlYXRlIHRhYi1oZWxwIGJ1dHRvbiBcbiAgICB2YXIgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJDb250YWluZXIuaWQgPSBcInRhYi1oZWxwXCI7XG4gICAgdGFiQ29udGFpbmVyLmlubmVySFRNTCA9IFwiPGRpdiBpZD0ndGFiLWhlbHAnPiAmIzg1OTM7IDxzcGFuIGNsYXNzPSdrZXlib2FyZC1taW5pJz5TaGlmdDwvc3Bhbj4gPHNwYW4gY2xhc3M9J2tleWJvYXJkLW1pbmknPlRhYjwvc3Bhbj4gPGJyIC8+ICZkYXJyOyA8c3BhbiBjbGFzcz0na2V5Ym9hcmQtbWluaSc+VGFiPC9zcGFuPiA8L2Rpdj4gXCI7XG4gICAgLy8gYWRkIGV2ZXJ5dGhpbmcgaW50byB0aGUgbGFyZ2VyIGRpdlxuICAgIG5ld0ZvY3VzLmFwcGVuZENoaWxkKG9yZGVyTnVtYmVyKTtcbiAgICBuZXdGb2N1cy5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBuZXdGb2N1cy5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICAgIG5ld0ZvY3VzLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG4gICAgLy8gYWRkIGxhcmdlciBkaXYgaW50byB0aGUgcGx1Z2luIHBhbmUsIGFubm90YXRlIGFuZCBjaGVjayBmb3IgemVybyBzdGF0ZSBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuYXBwZW5kQ2hpbGQobmV3Rm9jdXMpO1xuICAgIGlmICghbG9hZGluZykge1xuICAgICAgICBhbm5vdGF0ZUZvY3VzKHNlbGVjdGlvbklELCB0b3RhbEZvY3VzICsgMSk7XG4gICAgfVxuICAgIDtcbiAgICBzaG93Rm9jdXMoc2VsZWN0aW9uSUQpO1xuICAgIGNoZWNrWmVyb1N0YXRlKCk7XG4gICAgdG90YWxGb2N1cyArPSAxO1xufVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8gY2FsbHMgdG8gcGFyZW50IC8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiBhbm5vdGF0ZUZvY3VzKHNlbGVjdGlvbklELCBvcmRlck51bWJlcikge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2NyZWF0ZS1hbm5vdGF0aW9uVUknLCBpZDogc2VsZWN0aW9uSUQsIG51bWJlcjogb3JkZXJOdW1iZXIgfSB9LCAnKicpO1xufVxuZnVuY3Rpb24gcmVhbm5vdGF0ZUZvY3VzKHNlbGVjdGlvbklELCBwcmV2T3JkZXJOdW1iZXIsIG5leHRPcmRlck51bWJlcikge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3JlbnVtYmVyLWFubm90YXRpb25VSScsIGlkOiBzZWxlY3Rpb25JRCwgcHJldk51bWJlcjogcHJldk9yZGVyTnVtYmVyLCBuZXh0TnVtYmVyOiBuZXh0T3JkZXJOdW1iZXIgfSB9LCAnKicpO1xufVxuZnVuY3Rpb24gcmVtb3ZlRm9jdXNBbm5vdGF0aW9uKHNlbGVjdGlvbklEKSB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAncmVtb3ZlLWFubm90YXRpb25VSScsIGlkOiBzZWxlY3Rpb25JRCB9IH0sICcqJyk7XG59XG5mdW5jdGlvbiBzaG93Rm9jdXMoc2VsZWN0aW9uSUQpIHtcbiAgICAvLyByZXZlcnQgcHJldmlvdXMgc2VsZWN0ZWQgdGFiXG4gICAgdmFyIGN1clRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1clRhYklEKTtcbiAgICBpZiAoY3VyVGFiICE9IG51bGwpIHtcbiAgICAgICAgY3VyVGFiLmNsYXNzTmFtZSA9IFwiZm9jdXMtb2JqZWN0XCI7XG4gICAgfVxuICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdGlvbklEKTtcbiAgICBpZiAoc2VsZWN0ZWQgIT0gbnVsbCkge1xuICAgICAgICB2YXIgY2xhc3NOZXcgPSBzZWxlY3RlZC5jbGFzc05hbWUuY29uY2F0KFwiIHRhYi1vblwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0aW9uSUQpLmNsYXNzTmFtZSA9IGNsYXNzTmV3O1xuICAgICAgICBjdXJUYWJJRCA9IHNlbGVjdGlvbklEO1xuICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdzZWxlY3QtYW5ub3RhdGlvblVJJywgaWQ6IHNlbGVjdGlvbklEIH0gfSwgJyonKTtcbiAgICB9XG59XG4vLyBpbml0aWF0aWFsaXphdGlvbiBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikuaGlkZGVuID0gdHJ1ZTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluay1pbnN0cnVjdGlvbnNcIikub25jbGljayA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstaW5zdHJ1Y3Rpb25zXCIpLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluay1hYm91dFwiKS5zdHlsZS5jb2xvciA9IFwiIzkyOTI5MlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemVyby1zdGF0ZVwiKS5oaWRkZW4gPSBmYWxzZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpLmhpZGRlbiA9IHRydWU7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rLWFib3V0XCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rLWFib3V0XCIpLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluay1pbnN0cnVjdGlvbnNcIikuc3R5bGUuY29sb3IgPSBcIiM5MjkyOTJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInplcm8tc3RhdGVcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpLmhpZGRlbiA9IGZhbHNlO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JkZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS5pbm5lckhUTUwgPSBcIlwiO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXItbGFiZWxzXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1yZWZyZXNoJykuaGlkZGVuID0gdHJ1ZTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tYWRkJykub25jbGljayA9ICgpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdhZGQtZm9jdXMnIH0gfSwgJyonKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWxvYWQnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2xvYWQtYW5ub3RhdGlvbnMnIH0gfSwgJyonKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXJlZnJlc2gnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChmb2N1c2VkSURzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGJ1dHRvblJlZnJlc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXJlZnJlc2gnKTtcbiAgICAgICAgdmFyIHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b24tcmVtb3ZlJyk7XG4gICAgICAgIHZhciBmb2NpID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9jdXMtb2JqZWN0Jyk7XG4gICAgICAgIHN3aXRjaCAoYnV0dG9uUmVmcmVzaC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUYWIgdGVzdFwiOlxuICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3Rlc3QtYW5ub3RhdGlvblVJJyB9IH0sICcqJyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uUmVmcmVzaC5pbm5lckhUTUwgPSBcIkV4aXQgdGVzdFwiO1xuICAgICAgICAgICAgICAgIGJ1dHRvblJlZnJlc2guY2xhc3NOYW1lID0gXCJidXR0b24tcmVmcmVzaC1leGl0XCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1hZGQnKS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGIgb2YgcmVtb3ZlQnV0dG9ucykge1xuICAgICAgICAgICAgICAgICAgICBiLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDE7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZiBvZiBmb2NpKSB7XG4gICAgICAgICAgICAgICAgICAgIGYudGFiSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBmLmNsYXNzTmFtZSA9IFwiZm9jdXMtb2JqZWN0XCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkV4aXQgdGVzdFwiOlxuICAgICAgICAgICAgICAgIGJ1dHRvblJlZnJlc2guaW5uZXJIVE1MID0gXCJUYWIgdGVzdFwiO1xuICAgICAgICAgICAgICAgIGJ1dHRvblJlZnJlc2guY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWFkZCcpLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGIgb2YgcmVtb3ZlQnV0dG9ucykge1xuICAgICAgICAgICAgICAgICAgICBiLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmIG9mIGZvY2kpIHtcbiAgICAgICAgICAgICAgICAgICAgZi5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJJbmRleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZi5jbGFzc05hbWUgPSBcImZvY3VzLW9iamVjdFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG59O1xuaWYgKCFkb2N1bWVudC5oYXNGb2N1cygpKSB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnd2luZG93LWJsdXInIH0gfSwgJyonKTtcbiAgICBmb3IgKGxldCBzZWxlY3Rpb25JRCBvZiBmb2N1c2VkSURzKSB7XG4gICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3JlZnJlc2gtYW5ub3RhdGlvblVJJywgaWQ6IHNlbGVjdGlvbklEIH0gfSwgJyonKTtcbiAgICB9XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnd2luZG93LWZvY3VzJyB9IH0sICcqJyk7XG4gICAgZm9yIChsZXQgc2VsZWN0aW9uSUQgb2YgZm9jdXNlZElEcykge1xuICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdyZWZyZXNoLWFubm90YXRpb25VSScsIGlkOiBzZWxlY3Rpb25JRCB9IH0sICcqJyk7XG4gICAgfVxufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICd3aW5kb3ctYmx1cicgfSB9LCAnKicpO1xufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8gbWVzc2FnZXMgZnJvbSBwYXJlbnQgLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB2YXIgbWVzc2FnZSA9IGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZTtcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnYWRkLWZvY3VzJykge1xuICAgICAgICB2YXIgbmFtZXMgPSBtZXNzYWdlLm5hbWVzO1xuICAgICAgICB2YXIgaWRzID0gbWVzc2FnZS5pZHM7XG4gICAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IG5hbWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgaWQgPSBpZHMuc2hpZnQoKTtcbiAgICAgICAgICAgIGNyZWF0ZUZvY3VzVUkobmFtZSwgaWQsIG1lc3NhZ2UubG9hZGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnbm9kZS1yZW5hbWUnKSB7XG4gICAgICAgIHZhciBkaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVzc2FnZS5pZCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XG4gICAgICAgIGZvciAobGV0IGRpdiBvZiBkaXZzKSB7XG4gICAgICAgICAgICBpZiAoZGl2LmNsYXNzTmFtZSA9PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlLm5vZGVOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ25vZGUtcmVtb3ZlJykge1xuICAgICAgICByZW1vdmVGb2N1c1VJKG1lc3NhZ2UuaWQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICd1cGRhdGUtYnV0dG9ucycpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1hZGQnKS5kaXNhYmxlZCA9IG1lc3NhZ2UuaXNEaXNhYmxlZDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1sb2FkJykuZGlzYWJsZWQgPSBtZXNzYWdlLmxvYWRCdXR0b25EaXNhYmxlZDtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==