(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tinyStack"] = factory();
	else
		root["tinyStack"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Queue = exports.Stack = undefined;

	var _Stack = __webpack_require__(1);

	var _Stack2 = _interopRequireDefault(_Stack);

	var _Queue = __webpack_require__(2);

	var _Queue2 = _interopRequireDefault(_Queue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by lqm on 15/11/2016.
	 */
	exports.Stack = _Stack2.default;
	exports.Queue = _Queue2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function Stack() {
	    this.data = [];
	    this.add = push;
	    this.push = push;
	    this.delete = pop;
	    this.pop = pop;
	    this.peak = peak;
	    this.clear = clear;
	    this.length = length;
	    this.getData = getData;
	}

	function push(element) {
	    this.data[this.data.length++] = element;
	}

	function pop() {
	    this.data.length--;
	}

	function peak() {
	    return this.data[this.data.length - 1];
	}

	function clear() {
	    this.data = [];
	}

	function length() {
	    return this.data.length;
	}

	function getData(type) {
	    if (type == 'string') {
	        return this.data.toString();
	    }
	    return this.data;
	}

	exports.default = Stack;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function Queue() {
	    this.data = [];
	    this.add = unshift;
	    this.unshift = unshift;
	    this.delete = shift;
	    this.shift = shift;
	    this.peak = peak;
	    this.clear = clear;
	    this.length = length;
	    this.getData = getData;
	}

	function unshift(element) {
	    this.data.unshift(element);
	}

	function shift() {
	    this.data.shift();
	}

	function peak() {
	    return this.data[this.data.length - 1];
	}

	function clear() {
	    this.data = [];
	}

	function length() {
	    return this.data.length;
	}

	function getData(type) {
	    if (type == 'string') {
	        return this.data.toString();
	    }
	    return this.data;
	}

	exports.default = Queue;

/***/ }
/******/ ])
});
;