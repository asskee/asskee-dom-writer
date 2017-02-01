(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./src/writer/dom.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The DOMWriter class object.
 * @author Rubens Mariuzzo <rubens@mariuzzo.com>
 */
var DOMWriter = function () {
  /**
   * Construct a new DOMWriter object.
   * @type {Object}
   */
  function DOMWriter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DOMWriter);

    this.width = options.width || 32;
    this.height = options.height || 8;
    this.border = options.border || false;
    this.separator = options.separator || '\n';
    this.out = options.out;
    window.addEventListener('keydown', this.keydownHandler.bind(this));
  }

  /**
   * Clear the output.
   */


  _createClass(DOMWriter, [{
    key: 'clear',
    value: function clear() {
      this.out.innerHTML = '';
    }

    /**
     * Handle keydown event on the terminal.
     * @param {String} character - The character pressed.
     * @param {Object} key - The key pressed.
     */

  }, {
    key: 'keydownHandler',
    value: function keydownHandler(character, key) {
      this.emit('keydown', character, key);
    }

    /**
     * Write text contents to the console output.
     * @param {String} contents - The text contents.
     */

  }, {
    key: 'write',
    value: function write(contents) {
      var _this = this;

      if (typeof contents !== 'string') return;
      var lines = contents.split(this.separator);
      lines = lines.splice(0, this.height);
      lines = lines.map(function (line) {
        return line.substr(0, _this.width);
      });
      this.out.write(lines.join(this.separator));
    }
  }]);

  return DOMWriter;
}();

exports.default = DOMWriter;

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dom = __webpack_require__(/*! asskee/writer/dom */ 0);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _dom2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNGJmMDFmYjhmOTI0NjliYjg4OSIsIndlYnBhY2s6Ly8vLi9zcmMvd3JpdGVyL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiRE9NV3JpdGVyIiwib3B0aW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwic2VwYXJhdG9yIiwib3V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleWRvd25IYW5kbGVyIiwiYmluZCIsImlubmVySFRNTCIsImNoYXJhY3RlciIsImtleSIsImVtaXQiLCJjb250ZW50cyIsImxpbmVzIiwic3BsaXQiLCJzcGxpY2UiLCJtYXAiLCJsaW5lIiwic3Vic3RyIiwid3JpdGUiLCJqb2luIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7OztJQUlNQSxTO0FBQ0o7Ozs7QUFJQSx1QkFBMEI7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3hCLFNBQUtDLEtBQUwsR0FBYUQsUUFBUUMsS0FBUixJQUFpQixFQUE5QjtBQUNBLFNBQUtDLE1BQUwsR0FBY0YsUUFBUUUsTUFBUixJQUFrQixDQUFoQztBQUNBLFNBQUtDLE1BQUwsR0FBY0gsUUFBUUcsTUFBUixJQUFrQixLQUFoQztBQUNBLFNBQUtDLFNBQUwsR0FBaUJKLFFBQVFJLFNBQVIsSUFBcUIsSUFBdEM7QUFDQSxTQUFLQyxHQUFMLEdBQVdMLFFBQVFLLEdBQW5CO0FBQ0FDLFdBQU9DLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLEtBQUtDLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQW5DO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NEJBR1E7QUFDTixXQUFLSixHQUFMLENBQVNLLFNBQVQsR0FBcUIsRUFBckI7QUFDRDs7QUFFRDs7Ozs7Ozs7bUNBS2VDLFMsRUFBV0MsRyxFQUFLO0FBQzdCLFdBQUtDLElBQUwsQ0FBVSxTQUFWLEVBQXFCRixTQUFyQixFQUFnQ0MsR0FBaEM7QUFDRDs7QUFFRDs7Ozs7OzswQkFJTUUsUSxFQUFVO0FBQUE7O0FBQ2QsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2xDLFVBQUlDLFFBQVFELFNBQVNFLEtBQVQsQ0FBZSxLQUFLWixTQUFwQixDQUFaO0FBQ0FXLGNBQVFBLE1BQU1FLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLEtBQUtmLE1BQXJCLENBQVI7QUFDQWEsY0FBUUEsTUFBTUcsR0FBTixDQUFVO0FBQUEsZUFBUUMsS0FBS0MsTUFBTCxDQUFZLENBQVosRUFBZSxNQUFLbkIsS0FBcEIsQ0FBUjtBQUFBLE9BQVYsQ0FBUjtBQUNBLFdBQUtJLEdBQUwsQ0FBU2dCLEtBQVQsQ0FBZU4sTUFBTU8sSUFBTixDQUFXLEtBQUtsQixTQUFoQixDQUFmO0FBQ0Q7Ozs7OztrQkFHWUwsUzs7Ozs7Ozs7Ozs7Ozs7QUMvQ2Y7Ozs7OztBQUVBd0IsT0FBT0MsT0FBUCxpQiIsImZpbGUiOiJhc3NrZWUtZG9tLXdyaXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjRiZjAxZmI4ZjkyNDY5YmI4ODkiLCIvKipcbiAqIFRoZSBET01Xcml0ZXIgY2xhc3Mgb2JqZWN0LlxuICogQGF1dGhvciBSdWJlbnMgTWFyaXV6em8gPHJ1YmVuc0BtYXJpdXp6by5jb20+XG4gKi9cbmNsYXNzIERPTVdyaXRlciB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgRE9NV3JpdGVyIG9iamVjdC5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgODtcbiAgICB0aGlzLmJvcmRlciA9IG9wdGlvbnMuYm9yZGVyIHx8IGZhbHNlO1xuICAgIHRoaXMuc2VwYXJhdG9yID0gb3B0aW9ucy5zZXBhcmF0b3IgfHwgJ1xcbic7XG4gICAgdGhpcy5vdXQgPSBvcHRpb25zLm91dDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIG91dHB1dC5cbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMub3V0LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBrZXlkb3duIGV2ZW50IG9uIHRoZSB0ZXJtaW5hbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNoYXJhY3RlciAtIFRoZSBjaGFyYWN0ZXIgcHJlc3NlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGtleSAtIFRoZSBrZXkgcHJlc3NlZC5cbiAgICovXG4gIGtleWRvd25IYW5kbGVyKGNoYXJhY3Rlciwga2V5KSB7XG4gICAgdGhpcy5lbWl0KCdrZXlkb3duJywgY2hhcmFjdGVyLCBrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIHRleHQgY29udGVudHMgdG8gdGhlIGNvbnNvbGUgb3V0cHV0LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29udGVudHMgLSBUaGUgdGV4dCBjb250ZW50cy5cbiAgICovXG4gIHdyaXRlKGNvbnRlbnRzKSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50cyAhPT0gJ3N0cmluZycpIHJldHVybjtcbiAgICBsZXQgbGluZXMgPSBjb250ZW50cy5zcGxpdCh0aGlzLnNlcGFyYXRvcik7XG4gICAgbGluZXMgPSBsaW5lcy5zcGxpY2UoMCwgdGhpcy5oZWlnaHQpO1xuICAgIGxpbmVzID0gbGluZXMubWFwKGxpbmUgPT4gbGluZS5zdWJzdHIoMCwgdGhpcy53aWR0aCkpO1xuICAgIHRoaXMub3V0LndyaXRlKGxpbmVzLmpvaW4odGhpcy5zZXBhcmF0b3IpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET01Xcml0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd3JpdGVyL2RvbS5qcyIsImltcG9ydCBET01Xcml0ZXIgZnJvbSAnYXNza2VlL3dyaXRlci9kb20nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTVdyaXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=