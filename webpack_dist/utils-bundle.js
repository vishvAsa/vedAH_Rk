/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var module_utils;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"replaceAsync\": () => (/* binding */ replaceAsync),\n/* harmony export */   \"textNodesUnder\": () => (/* binding */ textNodesUnder),\n/* harmony export */   \"getAncestors\": () => (/* binding */ getAncestors),\n/* harmony export */   \"isDescendant\": () => (/* binding */ isDescendant),\n/* harmony export */   \"getDescendentsByCss\": () => (/* binding */ getDescendentsByCss),\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie)\n/* harmony export */ });\nasync function replaceAsync(str, regex, asyncFn) {\n  const promises = [];\n  str.replace(regex, (match, ...args) => {\n    const promise = asyncFn(match, ...args);\n    promises.push(promise);\n  });\n  const data = await Promise.all(promises);\n  return str.replace(regex, () => data.shift());\n}\n\nfunction textNodesUnder(node) {\n  var all = [];\n  for (node = node.firstChild; node; node = node.nextSibling) {\n    if (node.nodeType == 3) all.push(node);\n    else all = all.concat(textNodesUnder(node));\n  }\n  return all;\n}\n\nfunction getAncestors(child) {\n  let ancestors = [];\n  let node = child.parentNode;\n  while (node) {\n    ancestors.push(node);\n    // Traverse up to the parent\n    node = node.parentNode;\n  }\n  return ancestors;\n};\n\n// Check if `child` is a descendant of `parent`\nfunction isDescendant(parent, child) {\n  let node = child.parentNode;\n  while (node) {\n    if (node === parent) {\n      return true;\n    }\n    // Traverse up to the parent\n    node = node.parentNode;\n  }\n\n  // Go up until the root but couldn't find the `parent`\n  return false;\n};\n\nfunction getDescendentsByCss(parent, css, documentElement) {\n  var descendents = [].slice.call(documentElement.querySelectorAll(css));\n  descendents = descendents.filter(x => isDescendant(parent, x));\n  return descendents;\n}\n\nfunction getCookie(cname) {\n  var name = cname + \"=\";\n  var decodedCookie = decodeURIComponent(document.cookie);\n  var ca = decodedCookie.split(';');\n  for (var i = 0; i < ca.length; i++) {\n    var c = ca[i];\n    while (c.charAt(0) == ' ') {\n      c = c.substring(1);\n    }\n    if (c.indexOf(name) == 0) {\n      return c.substring(name.length, c.length);\n    }\n  }\n  return undefined;\n}\n\n//# sourceURL=webpack://module_%5Bname%5D/./js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/utils.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	module_utils = __webpack_exports__;
/******/ 	
/******/ })()
;