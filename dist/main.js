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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./interop/ajax.js":
/*!*************************!*\
  !*** ./interop/ajax.js ***!
  \*************************/
/*! exports provided: ajax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ajax\", function() { return ajax; });\nfunction ajax(option) {\n  /**\r\n   * 默认为GET请求\r\n   * 返回值类型默认为json\r\n   * 默认为异步请求\r\n  **/\n  const queryData = {\n    url: '',\n    type: 'GET',\n    dataType: 'json',\n    async: true,\n    data: {},\n    header: {},\n    success: function () {},\n    fail: function () {}\n  };\n  const options = Object.assign(queryData, option);\n  options.data = getParams(options);\n  /**\r\n   * 创建一个 ajax 实例\r\n   * W3C标准和IE标准\r\n   */\n\n  let xhr;\n\n  if (window.XMLHttpRequest) {\n    xhr = new XMLHttpRequest();\n  } else {\n    xhr = new ActiveXObject('Microsoft.XMLHTTP');\n  }\n  /**\r\n   * 发送请求\r\n   */\n\n\n  if (options.type == 'GET') {\n    xhr.open(\"GET\", options.url + '?' + options.data, options.async); // 添加自定义请求头 \n\n    for (let key in options.header) {\n      xhr.setRequestHeader(key, options.header[key]);\n    }\n\n    xhr.send(null);\n  } else if (options.type == 'POST') {\n    xhr.open('POST', options.url, options.async); // POST请求设置请求头\n\n    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // 添加自定义请求头 \n\n    for (let key in options.header) {\n      xhr.setRequestHeader(key, options.header[key]);\n    }\n\n    xhr.send(options.data);\n  }\n  /**\r\n   * callback\r\n   */\n\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState == 4) {\n      var status = xhr.status;\n\n      if (status >= 200 && status < 300) {\n        options.success && options.success(JSON.parse(xhr.responseText));\n      } else {\n        options.fail && options.fail(status);\n      }\n    }\n  };\n}\n/**\r\n* 对象参数的处理\r\n* @param data\r\n* @returns {string}\r\n*/\n\nfunction getParams(option) {\n  const queryData = option.data || {};\n  let arr = [];\n\n  for (let key in queryData) {\n    arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryData[key]));\n  }\n\n  option.proxy ? arr.push('proxy=' + option.proxy) : '';\n  const params = arr.join('&');\n  return params;\n}\n\n//# sourceURL=webpack:///./interop/ajax.js?");

/***/ }),

/***/ "./interop/index.js":
/*!**************************!*\
  !*** ./interop/index.js ***!
  \**************************/
/*! exports provided: ajax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.js */ \"./interop/ajax.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ajax\", function() { return _ajax_js__WEBPACK_IMPORTED_MODULE_0__[\"ajax\"]; });\n\n\n\n//# sourceURL=webpack:///./interop/index.js?");

/***/ }),

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interop_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interop/index */ \"./interop/index.js\");\n\nconst serverUrl = 'http://127.0.0.1:8082/'; // 选择器简易封装\n\nfunction $(str) {\n  const ele = str.slice(1);\n\n  if (str[0] === '.') {\n    return document.getElementsByClassName(ele);\n  } else if (str[0] === '#') {\n    return document.getElementById(ele);\n  } else {\n    return document.getElementsByTagName(ele);\n  }\n} // 通过设置 Access-Control-Allow-Origin 来解决跨域问题\n\n\n$('#headAll').addEventListener('click', e => {\n  Object(_interop_index__WEBPACK_IMPORTED_MODULE_0__[\"ajax\"])({\n    url: serverUrl + 'all',\n    type: 'GET',\n    async: true,\n    success: function (res) {\n      $('#all').innerText = res.info;\n    }\n  });\n}); // 非简单请求\n\n$('#addHeaderBtn').addEventListener('click', e => {\n  Object(_interop_index__WEBPACK_IMPORTED_MODULE_0__[\"ajax\"])({\n    url: serverUrl + 'addHeader',\n    type: 'GET',\n    async: true,\n    header: {\n      token: 'option'\n    },\n    success: function (res) {\n      $('#addHeader').innerText = res.info;\n    }\n  });\n});\n\n//# sourceURL=webpack:///./public/index.js?");

/***/ })

/******/ });