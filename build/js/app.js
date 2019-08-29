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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.onload = function () {\n  var copter = document.querySelector('.copter-img'),\n      textBlock = document.querySelector('.intro-text-block'),\n      coptercontainer = document.querySelector('body'),\n      copterCenterX = copter.offsetLeft + copter.offsetWidth / 2,\n      copterCenterY = copter.offsetTop + copter.offsetHeight / 2;\n\n  function getMousePos(xRef, yRef) {\n    var panelRect = coptercontainer.getBoundingClientRect();\n    return {\n      x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * coptercontainer.offsetWidth,\n      y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * coptercontainer.offsetHeight\n    };\n  }\n\n  document.body.addEventListener('mousemove', function (e) {\n    var mousePos = getMousePos(e.clientX, e.clientY),\n        distX = mousePos.x - copterCenterX,\n        distY = mousePos.y - copterCenterY;\n    textBlock.style.transform = 'translate(' + -1 * distX / 15 + 'px,' + -1 * distY / 15 + 'px)';\n    copter.style.transform = 'translate(' + -1 * distX / 20 + 'px,' + -1 * distY / 20 + 'px)';\n  });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgY29wdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcHRlci1pbWcnKSxcbiAgICB0ZXh0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50cm8tdGV4dC1ibG9jaycpLFxuICAgIGNvcHRlcmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbiAgICBjb3B0ZXJDZW50ZXJYID0gY29wdGVyLm9mZnNldExlZnQgKyAoY29wdGVyLm9mZnNldFdpZHRoIC8gMiksXG4gICAgY29wdGVyQ2VudGVyWSA9IGNvcHRlci5vZmZzZXRUb3AgKyAoY29wdGVyLm9mZnNldEhlaWdodCAvIDIpO1xuXG4gIGZ1bmN0aW9uIGdldE1vdXNlUG9zKHhSZWYsIHlSZWYpIHtcbiAgICBsZXQgcGFuZWxSZWN0ID0gY29wdGVyY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBNYXRoLmZsb29yKHhSZWYgLSBwYW5lbFJlY3QubGVmdCkgLyhwYW5lbFJlY3QucmlnaHQtcGFuZWxSZWN0LmxlZnQpKmNvcHRlcmNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgIHk6IE1hdGguZmxvb3IoeVJlZiAtIHBhbmVsUmVjdC50b3ApIC8gKHBhbmVsUmVjdC5ib3R0b20gLXBhbmVsUmVjdC50b3ApICogY29wdGVyY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgIH07XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhlLmNsaWVudFgsIGUuY2xpZW50WSksXG4gICAgICBkaXN0WCA9IG1vdXNlUG9zLnggLSBjb3B0ZXJDZW50ZXJYLFxuICAgICAgZGlzdFkgPSBtb3VzZVBvcy55IC0gY29wdGVyQ2VudGVyWTtcbiAgICB0ZXh0QmxvY2suc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnKygtMSpkaXN0WCkvMTUrJ3B4LCcrKC0xKmRpc3RZKS8xNSsncHgpJztcbiAgICBjb3B0ZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnKygtMSpkaXN0WCkvMjArJ3B4LCcrKC0xKmRpc3RZKS8yMCsncHgpJztcbiAgfSk7XG5cbn07XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });