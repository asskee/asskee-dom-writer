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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dom = __webpack_require__(/*! asskee/writer/dom */ 1);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _dom2.default;

/***/ },
/* 1 */
/*!***************************!*\
  !*** ./src/writer/dom.js ***!
  \***************************/
/***/ function(module, exports) {

	'use strict';
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YjRkYTdlNDM3ZDc1OTZlMWViNiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dyaXRlci9kb20uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkRPTVdyaXRlciIsIm9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsInNlcGFyYXRvciIsIm91dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlkb3duSGFuZGxlciIsImJpbmQiLCJpbm5lckhUTUwiLCJjaGFyYWN0ZXIiLCJrZXkiLCJlbWl0IiwiY29udGVudHMiLCJsaW5lcyIsInNwbGl0Iiwic3BsaWNlIiwibWFwIiwibGluZSIsInN1YnN0ciIsIndyaXRlIiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBQSxRQUFPQyxPQUFQLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7S0FJTUMsUztBQUNKOzs7O0FBSUEsd0JBQTBCO0FBQUEsU0FBZEMsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUN4QixVQUFLQyxLQUFMLEdBQWFELFFBQVFDLEtBQVIsSUFBaUIsRUFBOUI7QUFDQSxVQUFLQyxNQUFMLEdBQWNGLFFBQVFFLE1BQVIsSUFBa0IsQ0FBaEM7QUFDQSxVQUFLQyxNQUFMLEdBQWNILFFBQVFHLE1BQVIsSUFBa0IsS0FBaEM7QUFDQSxVQUFLQyxTQUFMLEdBQWlCSixRQUFRSSxTQUFSLElBQXFCLElBQXRDO0FBQ0EsVUFBS0MsR0FBTCxHQUFXTCxRQUFRSyxHQUFuQjtBQUNBQyxZQUFPQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLQyxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUFuQztBQUNEOztBQUVEOzs7Ozs7OzZCQUdRO0FBQ04sWUFBS0osR0FBTCxDQUFTSyxTQUFULEdBQXFCLEVBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O29DQUtlQyxTLEVBQVdDLEcsRUFBSztBQUM3QixZQUFLQyxJQUFMLENBQVUsU0FBVixFQUFxQkYsU0FBckIsRUFBZ0NDLEdBQWhDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MkJBSU1FLFEsRUFBVTtBQUFBOztBQUNkLFdBQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNsQyxXQUFJQyxRQUFRRCxTQUFTRSxLQUFULENBQWUsS0FBS1osU0FBcEIsQ0FBWjtBQUNBVyxlQUFRQSxNQUFNRSxNQUFOLENBQWEsQ0FBYixFQUFnQixLQUFLZixNQUFyQixDQUFSO0FBQ0FhLGVBQVFBLE1BQU1HLEdBQU4sQ0FBVTtBQUFBLGdCQUFRQyxLQUFLQyxNQUFMLENBQVksQ0FBWixFQUFlLE1BQUtuQixLQUFwQixDQUFSO0FBQUEsUUFBVixDQUFSO0FBQ0EsWUFBS0ksR0FBTCxDQUFTZ0IsS0FBVCxDQUFlTixNQUFNTyxJQUFOLENBQVcsS0FBS2xCLFNBQWhCLENBQWY7QUFDRDs7Ozs7O21CQUdZTCxTIiwiZmlsZSI6ImFzc2tlZS1kb20td3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YjRkYTdlNDM3ZDc1OTZlMWViNiIsImltcG9ydCBET01Xcml0ZXIgZnJvbSAnYXNza2VlL3dyaXRlci9kb20nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTVdyaXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qKlxuICogVGhlIERPTVdyaXRlciBjbGFzcyBvYmplY3QuXG4gKiBAYXV0aG9yIFJ1YmVucyBNYXJpdXp6byA8cnViZW5zQG1hcml1enpvLmNvbT5cbiAqL1xuY2xhc3MgRE9NV3JpdGVyIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIG5ldyBET01Xcml0ZXIgb2JqZWN0LlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgMzI7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCA4O1xuICAgIHRoaXMuYm9yZGVyID0gb3B0aW9ucy5ib3JkZXIgfHwgZmFsc2U7XG4gICAgdGhpcy5zZXBhcmF0b3IgPSBvcHRpb25zLnNlcGFyYXRvciB8fCAnXFxuJztcbiAgICB0aGlzLm91dCA9IG9wdGlvbnMub3V0O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgb3V0cHV0LlxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5vdXQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGtleWRvd24gZXZlbnQgb24gdGhlIHRlcm1pbmFsLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hhcmFjdGVyIC0gVGhlIGNoYXJhY3RlciBwcmVzc2VkLlxuICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IC0gVGhlIGtleSBwcmVzc2VkLlxuICAgKi9cbiAga2V5ZG93bkhhbmRsZXIoY2hhcmFjdGVyLCBrZXkpIHtcbiAgICB0aGlzLmVtaXQoJ2tleWRvd24nLCBjaGFyYWN0ZXIsIGtleSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgdGV4dCBjb250ZW50cyB0byB0aGUgY29uc29sZSBvdXRwdXQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50cyAtIFRoZSB0ZXh0IGNvbnRlbnRzLlxuICAgKi9cbiAgd3JpdGUoY29udGVudHMpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnRzICE9PSAnc3RyaW5nJykgcmV0dXJuO1xuICAgIGxldCBsaW5lcyA9IGNvbnRlbnRzLnNwbGl0KHRoaXMuc2VwYXJhdG9yKTtcbiAgICBsaW5lcyA9IGxpbmVzLnNwbGljZSgwLCB0aGlzLmhlaWdodCk7XG4gICAgbGluZXMgPSBsaW5lcy5tYXAobGluZSA9PiBsaW5lLnN1YnN0cigwLCB0aGlzLndpZHRoKSk7XG4gICAgdGhpcy5vdXQud3JpdGUobGluZXMuam9pbih0aGlzLnNlcGFyYXRvcikpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTVdyaXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93cml0ZXIvZG9tLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==