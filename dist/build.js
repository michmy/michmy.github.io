/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// desiredOffset - page offset to scroll to\n// speed - duration of the scroll per 1000px\nfunction animateScrollTo(desiredOffset) {\n  var userOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n  var defaultOptions = {\n    speed: 500,\n    minDuration: 250,\n    maxDuration: 3000,\n    cancelOnUserAction: true\n  };\n\n  var options = {};\n\n  Object.keys(defaultOptions).forEach(function (key) {\n    options[key] = userOptions[key] ? userOptions[key] : defaultOptions[key];\n  });\n\n  // get cross browser scroll position\n  var initialScrollPosition = window.scrollY || document.documentElement.scrollTop;\n  // cross browser document height minus window height\n  var maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - window.innerHeight;\n\n  // If the scroll position is greater than maximum available scroll\n  if (desiredOffset > maxScroll) {\n    desiredOffset = maxScroll;\n  }\n\n  // Calculate diff to scroll\n  var diff = desiredOffset - initialScrollPosition;\n\n  // Do nothing if the page is already there\n  if (diff === 0) {\n    return;\n  }\n\n  // Calculate duration of the scroll\n  var duration = Math.abs(Math.round(diff / 1000 * options.speed));\n\n  // Set minimum and maximum duration\n  if (duration < options.minDuration) {\n    duration = options.minDuration;\n  } else if (duration > options.maxDuration) {\n    duration = options.maxDuration;\n  }\n\n  var startingTime = Date.now();\n\n  // Request animation frame ID\n  var requestID = null;\n\n  // Method handler\n  var handleUserEvent = null;\n\n  if (options.cancelOnUserAction) {\n    // Set handler to cancel scroll on user action\n    handleUserEvent = function handleUserEvent(e) {\n      cancelAnimationFrame(requestID);\n    };\n    window.addEventListener('keydown', handleUserEvent);\n  } else {\n    // Set handler to prevent user actions while scroll is active\n    handleUserEvent = function handleUserEvent(e) {\n      e.preventDefault();\n    };\n    window.addEventListener('scroll', handleUserEvent);\n  }\n\n  window.addEventListener('wheel', handleUserEvent);\n  window.addEventListener('touchstart', handleUserEvent);\n\n  var step = function step() {\n    var timeDiff = Date.now() - startingTime;\n    var t = timeDiff / duration - 1;\n    var easing = t * t * t + 1;\n    var scrollPosition = Math.round(initialScrollPosition + diff * easing);\n\n    if (timeDiff < duration && scrollPosition !== desiredOffset) {\n      // If scroll didn't reach desired offset or time is not elapsed\n      // Scroll to a new position\n      // And request a new step\n\n      window.scrollTo(0, scrollPosition);\n      requestID = requestAnimationFrame(step);\n    } else {\n      // If the time elapsed or we reached the desired offset\n      // Set scroll to the desired offset (when rounding made it to be off a pixel or two)\n      // Clear animation frame to be sure\n      window.scrollTo(0, desiredOffset);\n      cancelAnimationFrame(requestID);\n\n      // Remove listeners\n      window.removeEventListener('wheel', handleUserEvent);\n      window.removeEventListener('touchstart', handleUserEvent);\n\n      if (options.cancelOnUserAction) {\n        window.removeEventListener('keydown', handleUserEvent);\n      } else {\n        window.removeEventListener('scroll', handleUserEvent);\n      }\n    }\n  };\n\n  // Start animating scroll\n  requestID = requestAnimationFrame(step);\n}\n\nexports.default = animateScrollTo;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2FuaW1hdGVkLXNjcm9sbC10by9hbmltYXRlZC1zY3JvbGwtdG8uanM/ZjA2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8gZGVzaXJlZE9mZnNldCAtIHBhZ2Ugb2Zmc2V0IHRvIHNjcm9sbCB0b1xuLy8gc3BlZWQgLSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIHBlciAxMDAwcHhcbmZ1bmN0aW9uIGFuaW1hdGVTY3JvbGxUbyhkZXNpcmVkT2Zmc2V0KSB7XG4gIHZhciB1c2VyT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBzcGVlZDogNTAwLFxuICAgIG1pbkR1cmF0aW9uOiAyNTAsXG4gICAgbWF4RHVyYXRpb246IDMwMDAsXG4gICAgY2FuY2VsT25Vc2VyQWN0aW9uOiB0cnVlXG4gIH07XG5cbiAgdmFyIG9wdGlvbnMgPSB7fTtcblxuICBPYmplY3Qua2V5cyhkZWZhdWx0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgb3B0aW9uc1trZXldID0gdXNlck9wdGlvbnNba2V5XSA/IHVzZXJPcHRpb25zW2tleV0gOiBkZWZhdWx0T3B0aW9uc1trZXldO1xuICB9KTtcblxuICAvLyBnZXQgY3Jvc3MgYnJvd3NlciBzY3JvbGwgcG9zaXRpb25cbiAgdmFyIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIC8vIGNyb3NzIGJyb3dzZXIgZG9jdW1lbnQgaGVpZ2h0IG1pbnVzIHdpbmRvdyBoZWlnaHRcbiAgdmFyIG1heFNjcm9sbCA9IE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIC0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIC8vIElmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgZ3JlYXRlciB0aGFuIG1heGltdW0gYXZhaWxhYmxlIHNjcm9sbFxuICBpZiAoZGVzaXJlZE9mZnNldCA+IG1heFNjcm9sbCkge1xuICAgIGRlc2lyZWRPZmZzZXQgPSBtYXhTY3JvbGw7XG4gIH1cblxuICAvLyBDYWxjdWxhdGUgZGlmZiB0byBzY3JvbGxcbiAgdmFyIGRpZmYgPSBkZXNpcmVkT2Zmc2V0IC0gaW5pdGlhbFNjcm9sbFBvc2l0aW9uO1xuXG4gIC8vIERvIG5vdGhpbmcgaWYgdGhlIHBhZ2UgaXMgYWxyZWFkeSB0aGVyZVxuICBpZiAoZGlmZiA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENhbGN1bGF0ZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsXG4gIHZhciBkdXJhdGlvbiA9IE1hdGguYWJzKE1hdGgucm91bmQoZGlmZiAvIDEwMDAgKiBvcHRpb25zLnNwZWVkKSk7XG5cbiAgLy8gU2V0IG1pbmltdW0gYW5kIG1heGltdW0gZHVyYXRpb25cbiAgaWYgKGR1cmF0aW9uIDwgb3B0aW9ucy5taW5EdXJhdGlvbikge1xuICAgIGR1cmF0aW9uID0gb3B0aW9ucy5taW5EdXJhdGlvbjtcbiAgfSBlbHNlIGlmIChkdXJhdGlvbiA+IG9wdGlvbnMubWF4RHVyYXRpb24pIHtcbiAgICBkdXJhdGlvbiA9IG9wdGlvbnMubWF4RHVyYXRpb247XG4gIH1cblxuICB2YXIgc3RhcnRpbmdUaW1lID0gRGF0ZS5ub3coKTtcblxuICAvLyBSZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSBJRFxuICB2YXIgcmVxdWVzdElEID0gbnVsbDtcblxuICAvLyBNZXRob2QgaGFuZGxlclxuICB2YXIgaGFuZGxlVXNlckV2ZW50ID0gbnVsbDtcblxuICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAvLyBTZXQgaGFuZGxlciB0byBjYW5jZWwgc2Nyb2xsIG9uIHVzZXIgYWN0aW9uXG4gICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24gaGFuZGxlVXNlckV2ZW50KGUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJRCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gU2V0IGhhbmRsZXIgdG8gcHJldmVudCB1c2VyIGFjdGlvbnMgd2hpbGUgc2Nyb2xsIGlzIGFjdGl2ZVxuICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uIGhhbmRsZVVzZXJFdmVudChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVVzZXJFdmVudCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVXNlckV2ZW50KTtcblxuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgdmFyIHRpbWVEaWZmID0gRGF0ZS5ub3coKSAtIHN0YXJ0aW5nVGltZTtcbiAgICB2YXIgdCA9IHRpbWVEaWZmIC8gZHVyYXRpb24gLSAxO1xuICAgIHZhciBlYXNpbmcgPSB0ICogdCAqIHQgKyAxO1xuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IE1hdGgucm91bmQoaW5pdGlhbFNjcm9sbFBvc2l0aW9uICsgZGlmZiAqIGVhc2luZyk7XG5cbiAgICBpZiAodGltZURpZmYgPCBkdXJhdGlvbiAmJiBzY3JvbGxQb3NpdGlvbiAhPT0gZGVzaXJlZE9mZnNldCkge1xuICAgICAgLy8gSWYgc2Nyb2xsIGRpZG4ndCByZWFjaCBkZXNpcmVkIG9mZnNldCBvciB0aW1lIGlzIG5vdCBlbGFwc2VkXG4gICAgICAvLyBTY3JvbGwgdG8gYSBuZXcgcG9zaXRpb25cbiAgICAgIC8vIEFuZCByZXF1ZXN0IGEgbmV3IHN0ZXBcblxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFBvc2l0aW9uKTtcbiAgICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHRpbWUgZWxhcHNlZCBvciB3ZSByZWFjaGVkIHRoZSBkZXNpcmVkIG9mZnNldFxuICAgICAgLy8gU2V0IHNjcm9sbCB0byB0aGUgZGVzaXJlZCBvZmZzZXQgKHdoZW4gcm91bmRpbmcgbWFkZSBpdCB0byBiZSBvZmYgYSBwaXhlbCBvciB0d28pXG4gICAgICAvLyBDbGVhciBhbmltYXRpb24gZnJhbWUgdG8gYmUgc3VyZVxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGRlc2lyZWRPZmZzZXQpO1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcblxuICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVyc1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVXNlckV2ZW50KTtcblxuICAgICAgaWYgKG9wdGlvbnMuY2FuY2VsT25Vc2VyQWN0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBTdGFydCBhbmltYXRpbmcgc2Nyb2xsXG4gIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gYW5pbWF0ZVNjcm9sbFRvO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuaW1hdGVkLXNjcm9sbC10by9hbmltYXRlZC1zY3JvbGwtdG8uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RlZmF1bHQubGVzcz9jNmU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2Nzcy9kZWZhdWx0Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animated_scroll_to__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animated_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animated_scroll_to__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_default_less__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_default_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_default_less__);\n\n\n\nfunction scrollTo(e) {\n\n    __WEBPACK_IMPORTED_MODULE_0_animated_scroll_to___default()(document.getElementById(this.getAttribute('data-target')).offsetTop);\n    e.preventDefault();\n}\nfunction scrollToTop(e) {\n\n    __WEBPACK_IMPORTED_MODULE_0_animated_scroll_to___default()(0);\n    e.preventDefault();\n}\nfunction scrollListener() {\n\n    let ticking = false,\n        last_known_scroll_position = window.scrollY;\n\n    if (!ticking) {\n        window.requestAnimationFrame(() => {\n\n            if (last_known_scroll_position > 0) {\n                document.getElementById('js-link-top').classList.add('show');\n            } else {\n                document.getElementById('js-link-top').classList.remove('show');\n            }\n\n            ticking = false;\n        });\n    }\n    ticking = true;\n}\n\ndocument.getElementById('js-link-work').addEventListener('click', scrollTo);\ndocument.getElementById('js-link-top').addEventListener('click', scrollToTop);\nwindow.addEventListener('scroll', scrollListener);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21haW4uanM/NGJkMSJdLCJuYW1lcyI6WyJzY3JvbGxUbyIsImUiLCJhbmltYXRlU2Nyb2xsVG8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0VG9wIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGxUb1RvcCIsInNjcm9sbExpc3RlbmVyIiwidGlja2luZyIsImxhc3Rfa25vd25fc2Nyb2xsX3Bvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFJQSxTQUFTQSxRQUFULENBQWtCQyxDQUFsQixFQUFxQjs7QUFFakJDLElBQUEsMERBQUFBLENBQWdCQyxTQUFTQyxjQUFULENBQXdCLEtBQUtDLFlBQUwsQ0FBa0IsYUFBbEIsQ0FBeEIsRUFBMERDLFNBQTFFO0FBQ0FMLE1BQUVNLGNBQUY7QUFDSDtBQUNELFNBQVNDLFdBQVQsQ0FBcUJQLENBQXJCLEVBQXdCOztBQUVwQkMsSUFBQSwwREFBQUEsQ0FBZ0IsQ0FBaEI7QUFDQUQsTUFBRU0sY0FBRjtBQUNIO0FBQ0QsU0FBU0UsY0FBVCxHQUEwQjs7QUFFdEIsUUFBSUMsVUFBVSxLQUFkO0FBQUEsUUFDSUMsNkJBQTZCQyxPQUFPQyxPQUR4Qzs7QUFHQSxRQUFJLENBQUNILE9BQUwsRUFBYztBQUNWRSxlQUFPRSxxQkFBUCxDQUE2QixNQUFNOztBQUUvQixnQkFBSUgsNkJBQTZCLENBQWpDLEVBQW9DO0FBQ2hDUix5QkFBU0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q1csU0FBdkMsQ0FBaURDLEdBQWpELENBQXFELE1BQXJEO0FBQ0gsYUFGRCxNQUdLO0FBQ0RiLHlCQUFTQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDVyxTQUF2QyxDQUFpREUsTUFBakQsQ0FBd0QsTUFBeEQ7QUFDSDs7QUFFRFAsc0JBQVUsS0FBVjtBQUNILFNBVkQ7QUFXSDtBQUNEQSxjQUFVLElBQVY7QUFDSDs7QUFFRFAsU0FBU0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q2MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFbEIsUUFBbEU7QUFDQUcsU0FBU0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q2MsZ0JBQXZDLENBQXdELE9BQXhELEVBQWlFVixXQUFqRTtBQUNBSSxPQUFPTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1QsY0FBbEMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltYXRlU2Nyb2xsVG8gZnJvbSAnYW5pbWF0ZWQtc2Nyb2xsLXRvJ1xyXG5pbXBvcnQgJy4vLi4vLi4vY3NzL2RlZmF1bHQubGVzcydcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsVG8oZSkge1xyXG4gICAgXHJcbiAgICBhbmltYXRlU2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykpLm9mZnNldFRvcClcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG59XHJcbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKGUpIHtcclxuICAgIFxyXG4gICAgYW5pbWF0ZVNjcm9sbFRvKDApXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxufVxyXG5mdW5jdGlvbiBzY3JvbGxMaXN0ZW5lcigpIHtcclxuXHJcbiAgICBsZXQgdGlja2luZyA9IGZhbHNlLFxyXG4gICAgICAgIGxhc3Rfa25vd25fc2Nyb2xsX3Bvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgaWYgKCF0aWNraW5nKSB7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobGFzdF9rbm93bl9zY3JvbGxfcG9zaXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbGluay10b3AnKS5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1saW5rLXRvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aWNraW5nID0gdHJ1ZTtcclxufVxyXG4gICAgXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1saW5rLXdvcmsnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbFRvKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWxpbmstdG9wJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzY3JvbGxUb1RvcCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxMaXN0ZW5lcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);