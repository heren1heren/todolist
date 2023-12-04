/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* { font-size: 20px;\n    list-style: none;\n    box-sizing: border-box;\n    margin: 0;\n}\n@keyframes open-trash {\n    /* Start with the icon closed and opaque */\n    0% {\n      transform: scale(1) rotate(0deg);\n      opacity: 1;\n    }\n    /* At 50%, open the icon and make it transparent */\n    50% {\n      transform: scale(1.2) rotate(45deg);\n      opacity: 0;\n    }\n    /* At 100%, reset the icon to the original state */\n    100% {\n      transform: scale(1) rotate(0deg);\n      opacity: 1;\n    }\n  }\n  \n\nbody {\n    background-color: azure;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    align-content: flex-start;\n    height: 100vh;\n}\naside {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n  grid-row: 1/2 ;\n  grid-column: 1/2;\n  gap: 30px;\n}\n\n/** sidebar*/\naside > header {\n    margin-left: 1rem;\n}\naside > header, aside > header > i {\n    font-size: 2rem;\n}\naside ul {article .check-btn::after {\n    display: inline;\n}\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    \n}\nul li i, header i {\n    color: rgb(33, 124, 94);\n    margin-right: 0.3rem;\n}\n\nli {\n    cursor: pointer;\n    padding: 0px 20px;\n    display: flex;\n    gap: 0.1rem;\n}\nli > span {\n    margin-left: auto;\n    color: lightgray;\n    \n}\nli > p {\n    margin-right: 0.7rem;\n}\n/** header */\nmain{\n    height: 100vh;\n    grid-row: 1/2 ;\n    grid-column: 2/3 ;\n    background-color: azure;\n    display: flex;\n    flex-direction: column;\n    border-left: 2px gray solid;\n}\n\nmain > header {\n    background-color: rgb(0, 166, 255);\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: end;\n    padding: 1rem;\n}\nh1 {\n    font-size: 3rem;\n}\n\n/**  article */\nmain > article {\n    padding: 1rem;\n\n    flex-grow: 3;\n    display: flex;\n    flex-direction: column;\n    gap:1rem;\n}\n.button-wrapper {\n    margin-left: auto;\n    display: flex;\n    gap: 0.5rem;\n}\n.card {\n    height: 30px;\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n  align-items: center;\n}\n article  .check-btn {\n    cursor: pointer;\n    vertical-align: middle;\n    padding: 10px;\n    border-radius: 50%;\n    border: 2px solid black;\n    position: relative;\n\n} article .check-btn::after {\n    display:none;\n    content: '\\\\2713'; /* Unicode character for checkmark */\n    font-size: 20px;\n    color: green; /* Color of the checkmark */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n/* will use active affect later with js */\narticle .card-star:hover, .card-star:active {\n    color: rgba(227, 227, 66, 0.693);\n    transition: 0.2s;\n}\n\narticle h4 {\n    color: lightgray;\n    font-size: 0.8rem;\n}\n    \n.cards-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.fa-trash:hover {\n    animation: open-trash 1s;\n    cursor: pointer;\n  }\n  .new-card {\n    cursor: pointer;\n    margin-bottom: auto;\n}\n/* .truncate {\n    overflow: auto;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n} */\n  \n\n  /** dialog*/\n.dialog-inner {\n    padding: 1rem;\n    background-color: white;\n    border: 3px solid black;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    position:fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n}\ndialog {\n    border: none;\n    background-color: transparent;\n}\ndialog::backdrop {\n    background-color: lightgray;\n    opacity: 0.5;\n}\n\n\n/** toggle class for js*/\n.show-check .check-btn::after {\n    display: inline;\n}\n.show-check  {\n    text-decoration: line-through;\n    color: rgba(169, 169, 169, 0.5); }\n\n\n    /** list toggle*/\n\n .active-list {\n        background-color: lightslategray;\n        font-weight: bolder;\n    }\n    \n\n/** task toggle*/\n.task-description-field {\n  display: none;\n} `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/InjectingHtmlStructure.js":
/*!***************************************!*\
  !*** ./src/InjectingHtmlStructure.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   injectingCardStructure: () => (/* binding */ injectingCardStructure),\n/* harmony export */   injectingListStructure: () => (/* binding */ injectingListStructure),\n/* harmony export */   returnCardStructure: () => (/* binding */ returnCardStructure),\n/* harmony export */   returnListStructure: () => (/* binding */ returnListStructure)\n/* harmony export */ });\n\nfunction injectingListStructure(listContainer, lists) {\n    let source = lists.map((list) => {\n      return returnListStructure(list)\n    })\n    return listContainer.innerHTML = source.join('');\n}\n\nfunction returnListStructure(list) {\n    return `        <li><i class=\"fa-solid fa-skull-crossbones\"></i>\n    <p>${list.name}</p>\n    <span>${list.tasksCount} </span>\n`\n\n}\n\nfunction injectingCardStructure(cardContainer,cards) {\n  let sourceCard = cards.map((card) => {\n      return returnCardStructure(card);    \n})     \n\nreturn  cardContainer.innerHTML = sourceCard.join('');\n}\nfunction returnCardStructure(card) { //implement with id\n    return ` <div class=\"card\" data-id=\"${card.id}\"> \n\n    <button class=\"check-btn\"></button>\n    <div class=\"text-wrapper\">\n      <h3>${card.title}</h3>\n      <h4 class=\"truncate\"> ${card.description} </h4>\n     </div>\n<div class=\"button-wrapper\">\n  \n  <p>Due: ${card.dueDate}</p>\n      <i class=\"fa-solid fa-trash\"></i>\n     <i class=\"fa-regular fa-star  card-star\"></i>\n</div>\n\n   </div>\n <hr>\n`\n}\nfunction returnH1Header() {\n\n}\nfunction injectingH1Header() {\n\n}\n\n\n//# sourceURL=webpack://todolist/./src/InjectingHtmlStructure.js?");

/***/ }),

/***/ "./src/card-component.js":
/*!*******************************!*\
  !*** ./src/card-component.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: () => (/* binding */ Card),\n/* harmony export */   checkStatusCardArray: () => (/* binding */ checkStatusCardArray),\n/* harmony export */   makeCard: () => (/* binding */ makeCard)\n/* harmony export */ });\nfunction makeCard(cardArray,idCount) {\n\n    const titleInput = document.querySelector('#title-input').value;\n    const descriptionInput = document.querySelector('#description-input').value;\n    const dueDate = document.querySelector('#dueDate-input').value;\n    const card = new Card(idCount,titleInput,descriptionInput,dueDate);\n    cardArray.push(card);\n    card.isDelete = false;\n}    \n\nclass Card {\n   constructor(id,title,description,dueDate)  {\n       this.id = id;\n       this.title = title;\n       this.description = description;\n       this.dueDate = dueDate;\n       \n       this.isDelete = false;\n       this.isMarked = false;\n   }\n   delete() { // how to delete itself inside an array\n       this.isDelete = true;\n   }\n   mark() {\n      this.isMarked = true;\n   }\n}\n\nfunction checkStatusCardArray(cardArray) {\n\n    cardArray.forEach((card,index) => {\n        if (card.isDelete == true) {            \n            cardArray.splice(index,1)\n            console.log(cardArray);\n        }\n        if(card.isMarked == true) {\n            \n        }\n        if(card.isImportant == true) {\n        }\n    })    \n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/card-component.js?");

/***/ }),

/***/ "./src/list-component.js":
/*!*******************************!*\
  !*** ./src/list-component.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-component.js */ \"./src/card-component.js\");\n/* harmony import */ var _renderFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFunction.js */ \"./src/renderFunction.js\");\n\n\n\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists'\nconst LOCAL_STORAGE_SELECTED_LIST_KEY = 'task.selectedListId'\n\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\nlet selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_KEY)\n\nconst  listsContainer = document.querySelector('.list-wrapper')        \nconst listSubmitBtn = document.querySelector('#list-btn');\nconst listForm = document.querySelector('#list-form');\nconst deleteListButton = document.querySelector('[data-delete-list-button')\n\nconst listDisplayContainer = document.querySelector('[data-list-display-container');\nconst listTitleElement = document.querySelector('[data-list-title]');\nconst listCountElement = document.querySelector('[data-list-count]');\nconst tasksContainer = document.querySelector('.cards-container');\n\ndeleteListButton.addEventListener('click', (e) => {\n    // using filter to filter lists arr that doesn't contain current list\n    lists = lists.filter(list => list.id !== selectedListId)\n    selectedListId = null;\n    saveAndRender();\n})\nlistsContainer.addEventListener('click',(e) => {\n    if (e.target.tagName.toLowerCase() === 'li') {\n       selectedListId = e.target.dataset.listId;\n       saveAndRender();\n    }\n\n} ) \n\n\nlistSubmitBtn.addEventListener('click', (e) => {\n    const listName = document.querySelector('#list-input').value;\n    \n    if(!listForm.checkValidity()) \n{    e.preventDefault(); return}\n     \n       const list = (0,_renderFunction_js__WEBPACK_IMPORTED_MODULE_1__.createList)(listName)\n      lists.push(list);\n       saveAndRender();\n}) \n\n\n//     const pageTime = document.querySelector('#page-time');\n//     function updateDateTime(element) {\n//         const currentDate = new Date();\n\n//         // Format the date and time as desired using date-fns\n//         const formattedDateTime = format(currentDate, \"EEEE, MMMM do yyyy, h:mm a\");\n        \n//         // Update the content of the <p> tag with the current date and time\n//         element.textContent = formattedDateTime;\n//     }\n//     updateDateTime(pageTime);\n    \nconst addCardClicker = document.querySelector('.new-card');\naddCardClicker.addEventListener('click', () => {\n    const dialog = document.querySelector('[data-card-dialog]')\n    dialog.showModal();\n})\n\n\nconst CardSubmitBtn = document.querySelector('.card-btn');\nconst taskForm = document.querySelector('#task-form');\nCardSubmitBtn.addEventListener('click', (e) => { \n    \n    if(!taskForm.checkValidity()) {\n        e.preventDefault();\n    } else {\n    const selectedList = lists.find(list => list.id === selectedListId)\n    ;(0,_renderFunction_js__WEBPACK_IMPORTED_MODULE_1__.createTaskIn)(selectedList.tasks);\n    console.log(selectedList.tasks);\n}\nsaveAndRender();\n})\n\n\n   \n\nfunction render() {\n                         \n    ;(0,_renderFunction_js__WEBPACK_IMPORTED_MODULE_1__.clearElement)(listsContainer);\n    (0,_renderFunction_js__WEBPACK_IMPORTED_MODULE_1__.renderList)(lists,selectedListId,listsContainer);\n\n\n    const selectedList = lists.find(list => list.id === selectedListId)\n    if (selectedListId == null) {\n        listDisplayContainer.style.display = 'none';\n    } else {\n        listDisplayContainer.style.display = '';\n        listTitleElement.innerText = selectedList.name;\n        (0,_renderFunction_js__WEBPACK_IMPORTED_MODULE_1__.renderTaskCount)(selectedList,listCountElement) ;\n        (0,_renderFunction_js__WEBPACK_IMPORTED_MODULE_1__.clearElement)(tasksContainer) \n        console.log(selectedList);\n        (0,_renderFunction_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(selectedList,tasksContainer);\n    }\n\n  \n}   \nfunction save() {\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists))\n    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_KEY, selectedListId)\n}\n\n function saveAndRender() {\n    save();\n    render();\n}\n\nrender();   \n     \n    \n\n\n\n\n\n\n\n\n\n\nconst ListCLicker = document.querySelector('#list-clicker');\nconst listModal = document.querySelector('[data-list-dialog]')\nListCLicker.addEventListener('click', () => {\n    listModal.showModal()\n    \n})\n\n\n\n//# sourceURL=webpack://todolist/./src/list-component.js?");

/***/ }),

/***/ "./src/renderFunction.js":
/*!*******************************!*\
  !*** ./src/renderFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   clearElement: () => (/* binding */ clearElement),\n/* harmony export */   createList: () => (/* binding */ createList),\n/* harmony export */   createTaskIn: () => (/* binding */ createTaskIn),\n/* harmony export */   renderList: () => (/* binding */ renderList),\n/* harmony export */   renderTaskCount: () => (/* binding */ renderTaskCount),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\n\nfunction renderList(lists,selectedListId,listsContainer) {\n\n    lists.forEach(list => {\n        const listElement = document.createElement('li');\n        listElement.classList.add(\"list-name\");\n        listElement.dataset.listId = list.id\n        listElement.innerText = list.name;\n    if (list.id === selectedListId) {\n     listElement.classList.add('active-list')\n    }\n    listsContainer.appendChild(listElement);\n})    \n}\nfunction createList(name) { //create new list with id, name, and its arr\n    return {id: Date.now().toString(), name: name, tasks: []}\n}\n\nfunction renderTaskCount(selectedList,listCountElement) {\n    const incompleteTasksCount = selectedList.tasks.filter(task => {\n        !task.isMarked\n    }).length\n    const taskString = incompleteTasksCount === 1 ? \"task\" : \"tasks\"\n    listCountElement.innerText = `${incompleteTasksCount} ${taskString} remaining`\n    console.log(incompleteTasksCount);\n} \n// tasks\n \n\nfunction renderTasks(selectedList,tasksContainer) {\n    \n    selectedList.tasks.forEach(task => { \n        let source = taskStructure(task);\n        tasksContainer.innerHTML += source;\n\n    })\n }\n class Task {\n    constructor(name,description,dueDate) {\n      this.id = Date.now().toString();\n      this.dueDate = dueDate;\n      this.name = name;\n      this.description = description;\n      this.isDeleted = false; // \n      this.isMarked = false;\n      this.isImportant = false;\n    }\n }\n function createTaskIn(taskArray) {\n\n    const titleInput = document.querySelector('#title-input').value;\n    const descriptionInput = document.querySelector('#description-input').value;\n    const dueDate = document.querySelector('#dueDate-input').value;\n    const task = new Task(titleInput,descriptionInput,dueDate);\n    taskArray.push(task);\n}    \n\n\n\n // other low level function\n\nfunction clearElement(element) {\n    while (element.firstChild) {\n     element.removeChild(element.firstChild);\n    }\n }\n\n function taskStructure(task) {\n    return ` <div id=\" ${task.id}\"class=\"card\"> \n\n    <button class=\"check-btn\"></button>\n    <div class=\"text-wrapper\">\n      <h3>${task.name}</h3>\n      <h4>${task.description}</h4>\n     </div>\n<div class=\"button-wrapper\">\n  \n  <p>Due: ${task.dueDate}</p>\n      <i id=\"${task.id}\"  class=\"fa-solid fa-trash\"></i>\n     <i  id=\"${task.id}\" class=\"fa-regular fa-star  card-star\"></i>\n</div>\n\n<div class=\"task-description-field\"> ${task.description}</div>\n   </div>\n <hr>`\n}\n\n//# sourceURL=webpack://todolist/./src/renderFunction.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-component.js */ \"./src/list-component.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _InjectingHtmlStructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InjectingHtmlStructure */ \"./src/InjectingHtmlStructure.js\");\n/* harmony import */ var _card_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-component.js */ \"./src/card-component.js\");\n/* harmony import */ var _tasks_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks-button.js */ \"./src/tasks-button.js\");\n/* harmony import */ var _tasks_button_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tasks_button_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/script.js?");

/***/ }),

/***/ "./src/tasks-button.js":
/*!*****************************!*\
  !*** ./src/tasks-button.js ***!
  \*****************************/
/***/ (() => {

eval("\nconst markButtons = document.querySelectorAll('.check-btn');\nconst deleteButtons = document.querySelectorAll('.fa-trash');\nconst importantButtons = document.querySelectorAll('.card-star');\nconst descriptionFields = document.querySelectorAll('.task-description-field');\nconst cardRegion = document.querySelectorAll('.card');\nconst tasksContainer = document.querySelector('#tasks-container')\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists'\nconst LOCAL_STORAGE_SELECTED_LIST_KEY = 'task.selectedListId'\n\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\nlet selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_KEY)\n\n// toggle css style doesn't work \n// toggle isMarked for the element inside the array will work\n\ntasksContainer.addEventListener('click', (e) => {\n        const currentTarget = e.target;\n        const selectedList = lists.find(list => list.id === selectedListId);\n        // console.log(selectedList);\n        markBtnHandler(currentTarget,e,selectedList);\n        deleteBtnHandler(currentTarget,e,selectedList);\n        importantBtnHandler(currentTarget,e,selectedList);\n        changeTasksStatus(selectedList,e)\n})\n\n\n\n\n function markBtnHandler(currentTarget,e,selectedList) {\n        \n    if (currentTarget.classList.contains('check-btn')) {\n \n         selectedList.tasks.forEach(task => {\n              if(task.id = currentTarget.closest('.card').id) {\n                 task.isMarked = !(task.isMarked);\n                //  console.log(task);\n              }           \n          })\n\n          e.stopImmediatePropagation();\n    }\n    \n\n }\n\n function deleteBtnHandler(currentTarget,e,selectedList) {\n          \n    if (currentTarget.classList.contains('fa-trash')) {\n        selectedList.tasks.forEach(task => {\n            if(task.id = currentTarget.closest('.card').id) {\n               task.isDeleted = true;\n               \n            }           \n        })\n        e.stopImmediatePropagation();\n    }\n }\n\n function importantBtnHandler(currentTarget,e,selectedList) {\n    if (currentTarget.classList.contains('card-star')) {\n\n        selectedList.tasks.forEach(task => {\n            if(task.id = currentTarget.closest('.card').id) {\n               task.isImportant = !(task.isImportant)\n            }           \n        })\n        e.stopImmediatePropagation();\n    }\n }\n\n function changeTasksStatus(selectedList,e) {\n    // check if task.isimportant -> do this\n         selectedList.tasks.forEach(task => {\n\n            if (task.isDeleted) {\n                //do something\n            }\n            if ( task.isImportant) {\n                //do something\n            }\n            if ( task.isMarked) {\n                //do something\n            }\n         })      \n    \n }\n\n//# sourceURL=webpack://todolist/./src/tasks-button.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;