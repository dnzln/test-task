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
eval("\n\nwindow.onload = function () {\n  var copter = document.querySelector('.copter-img'),\n      textBlock = document.querySelector('.intro-text-block'),\n      coptercontainer = document.querySelector('body'),\n      copterCenterX = copter.offsetLeft + copter.offsetWidth / 2,\n      copterCenterY = copter.offsetTop + copter.offsetHeight / 2;\n\n  function getMousePos(xRef, yRef) {\n    var panelRect = coptercontainer.getBoundingClientRect();\n    return {\n      x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * coptercontainer.offsetWidth,\n      y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * coptercontainer.offsetHeight\n    };\n  }\n\n  document.body.addEventListener('mousemove', function (e) {\n    var mousePos = getMousePos(e.clientX, e.clientY),\n        distX = mousePos.x - copterCenterX,\n        distY = mousePos.y - copterCenterY;\n    textBlock.style.transform = 'translate(' + -1 * distX / 15 + 'px,' + -1 * distY / 15 + 'px)';\n    copter.style.transform = 'translate(' + -1 * distX / 20 + 'px,' + -1 * distY / 20 + 'px)';\n  });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBjb3B0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29wdGVyLWltZycpLFxyXG4gICAgdGV4dEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvLXRleHQtYmxvY2snKSxcclxuICAgIGNvcHRlcmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcclxuICAgIGNvcHRlckNlbnRlclggPSBjb3B0ZXIub2Zmc2V0TGVmdCArIChjb3B0ZXIub2Zmc2V0V2lkdGggLyAyKSxcclxuICAgIGNvcHRlckNlbnRlclkgPSBjb3B0ZXIub2Zmc2V0VG9wICsgKGNvcHRlci5vZmZzZXRIZWlnaHQgLyAyKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0TW91c2VQb3MoeFJlZiwgeVJlZikge1xyXG4gICAgbGV0IHBhbmVsUmVjdCA9IGNvcHRlcmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IE1hdGguZmxvb3IoeFJlZiAtIHBhbmVsUmVjdC5sZWZ0KSAvKHBhbmVsUmVjdC5yaWdodC1wYW5lbFJlY3QubGVmdCkqY29wdGVyY29udGFpbmVyLm9mZnNldFdpZHRoLFxyXG4gICAgICB5OiBNYXRoLmZsb29yKHlSZWYgLSBwYW5lbFJlY3QudG9wKSAvIChwYW5lbFJlY3QuYm90dG9tIC1wYW5lbFJlY3QudG9wKSAqIGNvcHRlcmNvbnRhaW5lci5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGUuY2xpZW50WCwgZS5jbGllbnRZKSxcclxuICAgICAgZGlzdFggPSBtb3VzZVBvcy54IC0gY29wdGVyQ2VudGVyWCxcclxuICAgICAgZGlzdFkgPSBtb3VzZVBvcy55IC0gY29wdGVyQ2VudGVyWTtcclxuICAgIHRleHRCbG9jay5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcrKC0xKmRpc3RYKS8xNSsncHgsJysoLTEqZGlzdFkpLzE1KydweCknO1xyXG4gICAgY29wdGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJysoLTEqZGlzdFgpLzIwKydweCwnKygtMSpkaXN0WSkvMjArJ3B4KSc7XHJcbiAgfSk7XHJcblxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });