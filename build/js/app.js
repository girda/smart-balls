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
eval("\n\nvar _mouse = __webpack_require__(/*! ./mouse */ \"./mouse.js\");\n\nvar _mouse2 = _interopRequireDefault(_mouse);\n\nvar _ball = __webpack_require__(/*! ./ball */ \"./ball.js\");\n\nvar _ball2 = _interopRequireDefault(_ball);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar canvas = document.createElement('canvas');\nvar ctx = canvas.getContext('2d');\n// document.body.appendChild(canvas);\nvar size = 20;\ncanvas.width = size;\ncanvas.height = size;\n\nvar canvas1 = document.createElement('canvas');\nvar wrapper = document.querySelector('.canvas');\ndocument.body.appendChild(canvas1);\nvar ctx1 = canvas1.getContext('2d');\nctx1.fillStyle = '#000000';\nvar size1 = 400;\ncanvas1.width = size1;\ncanvas1.height = size1;\n\nvar img = new Image();\nvar images = ['img/google-plus.svg', 'img/facebook.svg', 'img/snow-middle.svg'];\nvar i = 0;\n\nvar changeUrlImg = setTimeout(function tick() {\n  if (i >= images.length) i = 0;\n  img.src = images[i];\n  i++;\n  img.onload = getCoordsSvg;\n  changeUrlImg = setTimeout(tick, 5000);\n}, 0);\n\nvar mouse = new _ball2.default(0, 0, 30, 'transparent');\nvar pos = new _mouse2.default(canvas1);\nvar balls = [];\n\nfunction getCoordsSvg() {\n  ctx.clearRect(0, 0, size, size);\n  ctx.drawImage(img, 0, 0, size, size);\n\n  var data = ctx.getImageData(0, 0, size, size);\n  var mydat = data.data;\n  balls = [];\n\n  for (var _i = 0; _i < size * size; _i++) {\n\n    if (mydat[_i * 4 + 1] > 5) {\n      var x = _i % size;\n      var y = Math.floor(_i / size);\n      balls.push(new _ball2.default(50 + x * 15, 50 + y * 15, 4));\n    }\n  }\n};\n\nfunction Render() {\n  window.requestAnimationFrame(Render);\n  ctx1.clearRect(0, 0, size1, size1);\n\n  mouse.setPos(pos.x, pos.y);\n  mouse.draw(ctx1);\n\n  balls.forEach(function (ball) {\n    ball.think(pos);\n    ball.draw(ctx1);\n  });\n}\n\nRender();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3VzZSBmcm9tICcuL21vdXNlJztcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbmxldCBzaXplID0gMjA7XG5jYW52YXMud2lkdGggPSBzaXplO1xuY2FudmFzLmhlaWdodCA9IHNpemU7XG5cblxubGV0IGNhbnZhczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbnZhcycpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMxKTtcbmxldCBjdHgxID0gY2FudmFzMS5nZXRDb250ZXh0KCcyZCcpO1xuY3R4MS5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XG5sZXQgc2l6ZTEgPSA0MDA7XG5jYW52YXMxLndpZHRoID0gc2l6ZTE7XG5jYW52YXMxLmhlaWdodCA9IHNpemUxO1xuXG5sZXQgaW1nID0gbmV3IEltYWdlKCk7XG5sZXQgaW1hZ2VzID0gWydpbWcvZ29vZ2xlLXBsdXMuc3ZnJywnaW1nL2ZhY2Vib29rLnN2ZycsJ2ltZy9zbm93LW1pZGRsZS5zdmcnXTtcbmxldCBpID0gMDtcblxubGV0IGNoYW5nZVVybEltZyA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uIHRpY2soKSB7XG4gIGlmICggaSA+PSBpbWFnZXMubGVuZ3RoICkgaSA9IDA7XG4gIGltZy5zcmMgPSBpbWFnZXNbaV07XG4gIGkrKztcbiAgaW1nLm9ubG9hZCA9IGdldENvb3Jkc1N2ZztcbiAgY2hhbmdlVXJsSW1nID0gc2V0VGltZW91dCh0aWNrLCA1MDAwKTtcbn0sIDApO1xuXG5sZXQgbW91c2UgPSBuZXcgQmFsbCgwLDAsMzAsJ3RyYW5zcGFyZW50Jyk7XG5sZXQgcG9zID0gbmV3IE1vdXNlKGNhbnZhczEpO1xubGV0IGJhbGxzID1bXTtcblxuZnVuY3Rpb24gZ2V0Q29vcmRzU3ZnKCkge1xuICBjdHguY2xlYXJSZWN0KDAsMCxzaXplLHNpemUpO1xuICBjdHguZHJhd0ltYWdlKGltZywwLDAsc2l6ZSxzaXplKTtcblxuICBsZXQgZGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwwLHNpemUsc2l6ZSk7XG4gIGxldCBteWRhdCA9IGRhdGEuZGF0YTtcbiAgYmFsbHMgPVtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSpzaXplOyBpKyspIHtcblxuICAgIGlmKCBteWRhdFtpICogNCArIDFdID4gNSApIHtcbiAgICAgIGxldCB4ID0gaSVzaXplO1xuICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkvc2l6ZSk7XG4gICAgICBiYWxscy5wdXNoKG5ldyBCYWxsKDUwK3gqMTUsIDUwK3kqMTUsIDQpKTtcbiAgICB9XG4gIH1cblxufTtcblxuXG5mdW5jdGlvbiBSZW5kZXIoKSB7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoUmVuZGVyKTtcbiAgY3R4MS5jbGVhclJlY3QoMCwwLHNpemUxLHNpemUxKTtcblxuICBtb3VzZS5zZXRQb3MocG9zLngsIHBvcy55KTtcbiAgbW91c2UuZHJhdyhjdHgxKTtcblxuICBiYWxscy5mb3JFYWNoKGJhbGwgPT4ge1xuICAgIGJhbGwudGhpbmsocG9zKTtcbiAgICBiYWxsLmRyYXcoY3R4MSk7XG4gIH0pO1xufVxuXG5SZW5kZXIoKTtcblxuXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./ball.js":
/*!*****************!*\
  !*** ./ball.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ball = function () {\n  function Ball(x, y, radius, color) {\n    _classCallCheck(this, Ball);\n\n    this.x = x || 0;\n    this.y = y || 0;\n    this.originalX = x || 0;\n    this.originalY = y || 0;\n    this.vx = 0;\n    this.vy = 0;\n    this.radius = radius || 2;\n    this.color = color || '#ff0000';\n    this.friction = 0.9;\n    this.springFactor = 0.02;\n  }\n\n  _createClass(Ball, [{\n    key: 'setPos',\n    value: function setPos(x, y) {\n      this.x = x;\n      this.y = y;\n    }\n  }, {\n    key: 'think',\n    value: function think(mouse) {\n      var dx = this.x - mouse.x;\n      var dy = this.y - mouse.y;\n      var dist = Math.sqrt(dx * dx + dy * dy);\n      // interetion\n      if (dist < 30) {\n        var angle = Math.atan2(dx, dy);\n        var tx = mouse.x + Math.sin(angle) * 30;\n        var ty = mouse.y + Math.cos(angle) * 30;\n\n        this.vx += tx - this.x;\n        this.vy += ty - this.y;\n      }\n\n      // spring back\n      var dx1 = -(this.x - this.originalX);\n      var dy1 = -(this.y - this.originalY);\n\n      this.vx += dx1 * this.springFactor;\n      this.vy += dy1 * this.springFactor;\n\n      // friction\n      this.vx *= this.friction;\n      this.vy *= this.friction;\n\n      // actual move\n      this.x += this.vx;\n      this.y += this.vy;\n    }\n  }, {\n    key: 'draw',\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n      ctx.fillStyle = this.color;\n      ctx.fill();\n      ctx.closePath();\n      ctx.restore();\n    }\n  }]);\n\n  return Ball;\n}();\n\nexports.default = Ball;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWxsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9iYWxsLmpzP2M2ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCB7XHJcbiAgY29uc3RydWN0b3IoeCx5LHJhZGl1cyxjb2xvcikge1xyXG4gICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgdGhpcy5vcmlnaW5hbFggPSB4IHx8IDA7XHJcbiAgICB0aGlzLm9yaWdpbmFsWSA9IHkgfHwgMDtcclxuICAgIHRoaXMudnggPSAwO1xyXG4gICAgdGhpcy52eSA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAyO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yIHx8ICcjZmYwMDAwJztcclxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjk7XHJcbiAgICB0aGlzLnNwcmluZ0ZhY3RvciA9IDAuMDI7XHJcbiAgfVxyXG5cclxuICBzZXRQb3MoeCx5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcblxyXG4gIHRoaW5rKG1vdXNlKSB7XHJcbiAgICBsZXQgZHggPSB0aGlzLnggLSBtb3VzZS54O1xyXG4gICAgbGV0IGR5ID0gdGhpcy55IC0gbW91c2UueTtcclxuICAgIGxldCBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xyXG4gICAgLy8gaW50ZXJldGlvblxyXG4gICAgaWYoZGlzdDwzMCkge1xyXG4gICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGR4LGR5KTtcclxuICAgICAgbGV0IHR4ID0gbW91c2UueCArIE1hdGguc2luKGFuZ2xlKSAqIDMwO1xyXG4gICAgICBsZXQgdHkgPSBtb3VzZS55ICsgTWF0aC5jb3MoYW5nbGUpICogMzA7XHJcblxyXG4gICAgICB0aGlzLnZ4ICs9IHR4IC0gdGhpcy54O1xyXG4gICAgICB0aGlzLnZ5ICs9IHR5IC0gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNwcmluZyBiYWNrXHJcbiAgICBsZXQgZHgxID0gLSh0aGlzLnggLSB0aGlzLm9yaWdpbmFsWCk7XHJcbiAgICBsZXQgZHkxID0gLSh0aGlzLnkgLSB0aGlzLm9yaWdpbmFsWSk7XHJcblxyXG4gICAgdGhpcy52eCArPSBkeDEgKiB0aGlzLnNwcmluZ0ZhY3RvcjtcclxuICAgIHRoaXMudnkgKz0gZHkxICogdGhpcy5zcHJpbmdGYWN0b3I7XHJcblxyXG4gICAgLy8gZnJpY3Rpb25cclxuICAgIHRoaXMudnggKj0gdGhpcy5mcmljdGlvbjsgXHJcbiAgICB0aGlzLnZ5ICo9IHRoaXMuZnJpY3Rpb247XHJcblxyXG4gICAgLy8gYWN0dWFsIG1vdmVcclxuICAgIHRoaXMueCArPSB0aGlzLnZ4O1xyXG4gICAgdGhpcy55ICs9IHRoaXMudnk7XHJcbiAgfVxyXG5cclxuICBkcmF3KGN0eCkge1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyKk1hdGguUEkpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHRcdFxyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBMURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ball.js\n");

/***/ }),

/***/ "./mouse.js":
/*!******************!*\
  !*** ./mouse.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Mouse = function Mouse(canvas) {\n  var _this = this;\n\n  _classCallCheck(this, Mouse);\n\n  this.x = 0;\n  this.y = 0;\n  var rect = canvas.getBoundingClientRect();\n\n  canvas.onmousemove = function (e) {\n    _this.x = e.clientX - rect.left;\n    _this.y = e.clientY - rect.top;\n  };\n};\n\nexports.default = Mouse;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb3VzZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbW91c2UuanM/ZGI1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSB7XHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGNhbnZhcy5vbm1vdXNlbW92ZSA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMueCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgdGhpcy55ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFiQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./mouse.js\n");

/***/ })

/******/ });