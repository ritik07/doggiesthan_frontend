(this["webpackJsonpmaruti"] = this["webpackJsonpmaruti"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/App.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes modal-video {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes modal-video-inner {\n  from {\n    transform: translate(0, 100px); }\n  to {\n    transform: translate(0, 0); } }\n\n.modal-video {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000000;\n  cursor: pointer;\n  opacity: 1;\n  animation-timing-function: ease-out;\n  animation-duration: 0.3s;\n  animation-name: modal-video;\n  transition: opacity 0.3s ease-out; }\n\n.modal-video-effect-exit {\n  opacity: 0; }\n  .modal-video-effect-exit .modal-video-movie-wrap {\n    transform: translate(0, 100px); }\n\n.modal-video-body {\n  max-width: 960px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 10px;\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box; }\n\n.modal-video-inner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n  @media (orientation: landscape) {\n    .modal-video-inner {\n      padding: 10px 60px;\n      box-sizing: border-box; } }\n\n.modal-video-movie-wrap {\n  width: 100%;\n  height: 0;\n  position: relative;\n  padding-bottom: 56.25%;\n  background-color: #333;\n  animation-timing-function: ease-out;\n  animation-duration: 0.3s;\n  animation-name: modal-video-inner;\n  transform: translate(0, 0);\n  transition: transform 0.3s ease-out; }\n  .modal-video-movie-wrap iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.modal-video-close-btn {\n  position: absolute;\n  z-index: 2;\n  top: -45px;\n  right: 0px;\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  overflow: hidden;\n  border: none;\n  background: transparent; }\n  @media (orientation: landscape) {\n    .modal-video-close-btn {\n      top: 0;\n      right: -45px; } }\n  .modal-video-close-btn:before {\n    transform: rotate(45deg); }\n  .modal-video-close-btn:after {\n    transform: rotate(-45deg); }\n  .modal-video-close-btn:before, .modal-video-close-btn:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    top: 50%;\n    left: 0;\n    margin-top: -1px;\n    background: #fff;\n    border-radius: 5px;\n    margin-top: -6px; }\n\n.App {\n  text-align: center; }\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none; }\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear; } }\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white; }\n\n.App-link {\n  color: #61dafb; }\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n", "",{"version":3,"sources":["webpack://node_modules/react-modal-video/scss/modal-video.scss","webpack://src/App.scss"],"names":[],"mappings":"AAIA;EACC;IACC,UAAU,EAAA;EAGX;IACC,UAAU,EAAA,EAAA;;AAIZ;EACC;IACC,8BAA8B,EAAA;EAG/B;IACC,0BAA0B,EAAA,EAAA;;AAI5B;EACC,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCA5BiC;EA6BjC,gBAAgB;EAChB,eAAe;EACf,UAAU;EACV,mCAjC4B;EAkC5B,wBAnCoB;EAoCpB,2BAA2B;EAK3B,iCAxC4B,EAAA;;AA2C7B;EACC,UAAU,EAAA;EADX;IAQE,8BAA8B,EAAA;;AAIhC;EACC,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,cAAc;EACd,eAAe;EACZ,aAAa;EACb,uBAAuB;EAC1B,sBAAsB,EAAA;;AAGvB;EACC,aAAa;EACV,uBAAuB;EACvB,mBAAmB;EACtB,WAAW;EACX,YAAY,EAAA;EAET;IAPJ;MAQQ,kBAAkB;MAClB,sBAAsB,EAAA,EAE7B;;AAED;EACC,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,mCArF4B;EAsF5B,wBAvFoB;EAwFpB,iCAAiC;EAKjC,0BAA0B;EAK1B,mCAjG4B,EAAA;EA+E7B;IAqBE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY,EAAA;;AAId;EACC,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,UAAU;EACV,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,uBAAuB,EAAA;EAEpB;IAZJ;MAaQ,MAAM;MACN,YAAY,EAAA,EAwBnB;EAtCD;IAkBE,wBAAwB,EAAA;EAlB1B;IAsBE,yBAAyB,EAAA;EAtB3B;IA2BE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,QAAQ;IACR,OAAO;IACP,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB,EAAA;;AC/IlB;EACE,kBAAkB,EAAA;;AAGpB;EACE,cAAc;EACd,oBAAoB,EAAA;;AAGtB;EACE;IACE,4CAA4C,EAAA,EAC7C;;AAGH;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY,EAAA;;AAGd;EACE,cAAc,EAAA;;AAGhB;EACE;IACE,uBAAuB,EAAA;EAEzB;IACE,yBAAyB,EAAA,EAAA","sourcesContent":["$animation-speed: .3s;\n$animation-function: ease-out;\n$backdrop-color: rgba(0, 0, 0, .5);\n\n@keyframes modal-video {\n\tfrom {\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes modal-video-inner {\n\tfrom {\n\t\ttransform: translate(0, 100px);\n\t}\n\n\tto {\n\t\ttransform: translate(0, 0);\n\t}\n}\n\n.modal-video {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: $backdrop-color;\n\tz-index: 1000000;\n\tcursor: pointer;\n\topacity: 1;\n\tanimation-timing-function: $animation-function;\n\tanimation-duration: $animation-speed;\n\tanimation-name: modal-video;\n\t-webkit-transition: opacity $animation-speed $animation-function;\n\t-moz-transition: opacity $animation-speed $animation-function;\n\t-ms-transition: opacity $animation-speed $animation-function;\n\t-o-transition: opacity $animation-speed $animation-function;\n\ttransition: opacity $animation-speed $animation-function;\n}\n\n.modal-video-effect-exit {\n\topacity: 0;\n\n\t& .modal-video-movie-wrap {\n\t\t-webkit-transform: translate(0, 100px);\n\t\t-moz-transform: translate(0, 100px);\n\t\t-ms-transform: translate(0, 100px);\n\t\t-o-transform: translate(0, 100px);\n\t\ttransform: translate(0, 100px);\n\t}\n}\n\n.modal-video-body {\n\tmax-width: 960px;\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0 auto;\n\tpadding: 0 10px;\n    display: flex;\n    justify-content: center;\n\tbox-sizing: border-box;\n}\n\n.modal-video-inner {\n\tdisplay: flex;\n    justify-content: center;\n    align-items: center;\n\twidth: 100%;\n\theight: 100%;\n\n    @media (orientation: landscape) {\n        padding: 10px 60px;\n        box-sizing: border-box;\n    }\n}\n\n.modal-video-movie-wrap {\n\twidth: 100%;\n\theight: 0;\n\tposition: relative;\n\tpadding-bottom: 56.25%;\n\tbackground-color: #333;\n\tanimation-timing-function: $animation-function;\n\tanimation-duration: $animation-speed;\n\tanimation-name: modal-video-inner;\n\t-webkit-transform: translate(0, 0);\n\t-moz-transform: translate(0, 0);\n\t-ms-transform: translate(0, 0);\n\t-o-transform: translate(0, 0);\n\ttransform: translate(0, 0);\n\t-webkit-transition: -webkit-transform $animation-speed $animation-function;\n\t-moz-transition: -moz-transform $animation-speed $animation-function;\n\t-ms-transition: -ms-transform $animation-speed $animation-function;\n\t-o-transition: -o-transform $animation-speed $animation-function;\n\ttransition: transform $animation-speed $animation-function;\n\n\t& iframe {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n}\n\n.modal-video-close-btn {\n\tposition: absolute;\n\tz-index: 2;\n\ttop: -45px;\n\tright: 0px;\n\tdisplay: inline-block;\n\twidth: 35px;\n\theight: 35px;\n\toverflow: hidden;\n\tborder: none;\n\tbackground: transparent;\n\n    @media (orientation: landscape) {\n        top: 0;\n        right: -45px;\n    }\n\n\t&:before {\n\t\ttransform: rotate(45deg);\n\t}\n\n\t&:after {\n\t\ttransform: rotate(-45deg);\n\t}\n\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\theight: 2px;\n\t\twidth: 100%;\n\t\ttop: 50%;\n\t\tleft: 0;\n\t\tmargin-top: -1px;\n\t\tbackground: #fff;\n\t\tborder-radius: 5px;\n\t\tmargin-top: -6px;\n\t}\n}\n","@import 'node_modules/react-modal-video/scss/modal-video.scss';\n\n.App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/appController/appController.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/appController/appController.css ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#components-layout-demo-custom-trigger .trigger {\n  padding: 0 24px;\n  font-size: 18px;\n  line-height: 64px;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n\n#components-layout-demo-custom-trigger .trigger:hover {\n  color: #1890ff;\n}\n\n#components-layout-demo-custom-trigger .logo {\n  height: 32px;\n  margin: 16px;\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.site-layout .site-layout-background {\n  background: #fff;\n}\n\n.mobile-header{\n  display: flex;\n  justify-content: space-between !important;\n  padding: 12px;\n}", "",{"version":3,"sources":["webpack://src/appController/appController.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,aAAa;AACf","sourcesContent":["#components-layout-demo-custom-trigger .trigger {\n  padding: 0 24px;\n  font-size: 18px;\n  line-height: 64px;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n\n#components-layout-demo-custom-trigger .trigger:hover {\n  color: #1890ff;\n}\n\n#components-layout-demo-custom-trigger .logo {\n  height: 32px;\n  margin: 16px;\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.site-layout .site-layout-background {\n  background: #fff;\n}\n\n.mobile-header{\n  display: flex;\n  justify-content: space-between !important;\n  padding: 12px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/fonts/stylesheet.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/assets/fonts/stylesheet.css ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Butler_UltraLight_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Butler-UltraLight.woff2 */ "./src/assets/fonts/Butler-UltraLight.woff2");
/* harmony import */ var _Butler_UltraLight_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Butler-UltraLight.woff */ "./src/assets/fonts/Butler-UltraLight.woff");
/* harmony import */ var _Butler_Medium_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Butler-Medium.woff2 */ "./src/assets/fonts/Butler-Medium.woff2");
/* harmony import */ var _Butler_Medium_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Butler-Medium.woff */ "./src/assets/fonts/Butler-Medium.woff");
/* harmony import */ var _Butler_Light_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Butler-Light.woff2 */ "./src/assets/fonts/Butler-Light.woff2");
/* harmony import */ var _Butler_Light_woff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Butler-Light.woff */ "./src/assets/fonts/Butler-Light.woff");
/* harmony import */ var _Butler_Black_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Butler-Black.woff2 */ "./src/assets/fonts/Butler-Black.woff2");
/* harmony import */ var _Butler_Black_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Butler-Black.woff */ "./src/assets/fonts/Butler-Black.woff");
/* harmony import */ var _Butler_Bold_woff2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Butler-Bold.woff2 */ "./src/assets/fonts/Butler-Bold.woff2");
/* harmony import */ var _Butler_Bold_woff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Butler-Bold.woff */ "./src/assets/fonts/Butler-Bold.woff");
/* harmony import */ var _Butler_ExtraBold_woff2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Butler-ExtraBold.woff2 */ "./src/assets/fonts/Butler-ExtraBold.woff2");
/* harmony import */ var _Butler_ExtraBold_woff__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Butler-ExtraBold.woff */ "./src/assets/fonts/Butler-ExtraBold.woff");
/* harmony import */ var _Butler_woff2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Butler.woff2 */ "./src/assets/fonts/Butler.woff2");
/* harmony import */ var _Butler_woff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Butler.woff */ "./src/assets/fonts/Butler.woff");
// Imports
















var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_UltraLight_woff2__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_UltraLight_woff__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_Medium_woff2__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_Medium_woff__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_Light_woff2__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_Light_woff__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_Black_woff2__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_Black_woff__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_Bold_woff2__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_Bold_woff__WEBPACK_IMPORTED_MODULE_11__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_ExtraBold_woff2__WEBPACK_IMPORTED_MODULE_12__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_ExtraBold_woff__WEBPACK_IMPORTED_MODULE_13__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_woff2__WEBPACK_IMPORTED_MODULE_14__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Butler_woff__WEBPACK_IMPORTED_MODULE_15__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n    font-family: 'Butler';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: 200;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff');\n    font-weight: 900;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff');\n    font-weight: bold;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('woff');\n    font-weight: 800;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n", "",{"version":3,"sources":["webpack://src/assets/fonts/stylesheet.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB;8DACgD;IAChD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB;8DAC4C;IAC5C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB;8DAC2C;IAC3C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB;8DAC2C;IAC3C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB;8DAC0C;IAC1C,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB;+DAC+C;IAC/C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB;+DACqC;IACrC,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: 'Butler';\n    src: url('Butler-UltraLight.woff2') format('woff2'),\n        url('Butler-UltraLight.woff') format('woff');\n    font-weight: 200;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url('Butler-Medium.woff2') format('woff2'),\n        url('Butler-Medium.woff') format('woff');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url('Butler-Light.woff2') format('woff2'),\n        url('Butler-Light.woff') format('woff');\n    font-weight: 300;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url('Butler-Black.woff2') format('woff2'),\n        url('Butler-Black.woff') format('woff');\n    font-weight: 900;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url('Butler-Bold.woff2') format('woff2'),\n        url('Butler-Bold.woff') format('woff');\n    font-weight: bold;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url('Butler-ExtraBold.woff2') format('woff2'),\n        url('Butler-ExtraBold.woff') format('woff');\n    font-weight: 800;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Butler';\n    src: url('Butler.woff2') format('woff2'),\n        url('Butler.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/megaMenu/style.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/megaMenu/style.css ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-mega-menu-mobile-bg{\n  background: #42a017a9 !important;\n}\n\n.mega-menu-wrapper {\n  /* background-color: #42a017a9; */\n  /* background-color: #42a017a9; */\n  background-color: #1eacbd;\n  height: 40px;\n}\n\n.cs-side-cards{\n  border-radius: 10px;\n  height: 225px;\n  margin-bottom: 28px;\n  padding: 15px;\n}\n\n.menu-ul {\n  display: flex;\n  text-align: center;\n  align-items: center;\n  list-style: none;\n  height: 100%;\n}\n\n.menu-li {\n  cursor: pointer;\n  height: 100%;\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  align-items: center;\n}\n\n\n.mega-menu-wrapper .ant-popover-open, .menu-li:hover {\n  background-color: #37beac49;\n  color: black;\n}\n\n.menu-popover{\n    margin-top: -4px;\n    background-color: #fff;\n    padding: 20px 13.8px;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.menu-popover-submenu{\n  min-width: 200px;\n}\n\n.menu-item-ul {\n    list-style: none;\n    padding: 0;\n}\n\n.vr-line{\n    background-color: #394747;\n    opacity: .1 !important;\n    width: 1px !important;\n    height: 100%;\n    margin-left: 30px;\n    margin-right: 20px;\n}", "",{"version":3,"sources":["webpack://src/components/megaMenu/style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;EACjC,iCAAiC;EACjC,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;;;AAGA;EACE,2BAA2B;EAC3B,YAAY;AACd;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,oBAAoB;IACpB,iDAAiD;AACrD;;AAEA;EACE,gBAAgB;AAClB;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":[".cs-mega-menu-mobile-bg{\n  background: #42a017a9 !important;\n}\n\n.mega-menu-wrapper {\n  /* background-color: #42a017a9; */\n  /* background-color: #42a017a9; */\n  background-color: #1eacbd;\n  height: 40px;\n}\n\n.cs-side-cards{\n  border-radius: 10px;\n  height: 225px;\n  margin-bottom: 28px;\n  padding: 15px;\n}\n\n.menu-ul {\n  display: flex;\n  text-align: center;\n  align-items: center;\n  list-style: none;\n  height: 100%;\n}\n\n.menu-li {\n  cursor: pointer;\n  height: 100%;\n  color: black;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  align-items: center;\n}\n\n\n.mega-menu-wrapper .ant-popover-open, .menu-li:hover {\n  background-color: #37beac49;\n  color: black;\n}\n\n.menu-popover{\n    margin-top: -4px;\n    background-color: #fff;\n    padding: 20px 13.8px;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.menu-popover-submenu{\n  min-width: 200px;\n}\n\n.menu-item-ul {\n    list-style: none;\n    padding: 0;\n}\n\n.vr-line{\n    background-color: #394747;\n    opacity: .1 !important;\n    width: 1px !important;\n    height: 100%;\n    margin-left: 30px;\n    margin-right: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideMenu/sideMenu.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/sideMenu/sideMenu.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#components-layout-demo-custom-trigger .trigger {\n    padding: 0 24px;\n    font-size: 18px;\n    line-height: 64px;\n    cursor: pointer;\n    transition: color 0.3s;\n  }\n  \n  #components-layout-demo-custom-trigger .trigger:hover {\n    color: #1890ff;\n  }\n  \n  #components-layout-demo-custom-trigger .logo {\n    height: 32px;\n    margin: 16px;\n    background: rgba(255, 255, 255, 0.3);\n  }\n  \n  .site-layout .site-layout-background {\n    background: #fff;\n  }\n\n  .over-hid{\n    overflow: hidden !important;\n    height: 100vh !important;\n    /* filter: blur(5px); */\n  }", "",{"version":3,"sources":["webpack://src/components/sideMenu/sideMenu.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,sBAAsB;EACxB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,oCAAoC;EACtC;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,2BAA2B;IAC3B,wBAAwB;IACxB,uBAAuB;EACzB","sourcesContent":["#components-layout-demo-custom-trigger .trigger {\n    padding: 0 24px;\n    font-size: 18px;\n    line-height: 64px;\n    cursor: pointer;\n    transition: color 0.3s;\n  }\n  \n  #components-layout-demo-custom-trigger .trigger:hover {\n    color: #1890ff;\n  }\n  \n  #components-layout-demo-custom-trigger .logo {\n    height: 32px;\n    margin: 16px;\n    background: rgba(255, 255, 255, 0.3);\n  }\n  \n  .site-layout .site-layout-background {\n    background: #fff;\n  }\n\n  .over-hid{\n    overflow: hidden !important;\n    height: 100vh !important;\n    /* filter: blur(5px); */\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/antOveride.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/globalStyle/antOveride.css ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ant-popover-placement-bottom, .ant-popover-placement-bottomLeft, .ant-popover-placement-bottomRight{\n    padding-top: 0px !important;\n}\n\n.ant-popover-inner-content{\n    box-shadow: none;\n    padding: 0;\n}\n\n.ant-popover-inner{\n    box-shadow: none;\n}\n.ant-popover-arrow{\n    display: none !important;\n}\n\n.ant-layout-content{\n    background-color: white;\n}\n/* .no-style, .no-style:hover, .no-style:focus{\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    margin: 0;\n    outline: 0;\n    box-shadow: none;\n} */\n\n\n.ant-modal-body{\n    padding: 0 !important;\n}\n\n.ant-form-item{\n    flex-direction: column;\n    align-items: start;\n}\n\n.ant-input-number{\n    width: 100%;\n}\n\n.ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title{\n    margin: 0;\n}\n@media (max-width: 767px){\n    .ant-modal {\n        max-width: calc(100vw - 30px);\n        /* margin: 8px auto; */\n    }\n}", "",{"version":3,"sources":["webpack://src/globalStyle/antOveride.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;AACA;;;;;;;GAOG;;;AAGH;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,SAAS;AACb;AACA;IACI;QACI,6BAA6B;QAC7B,sBAAsB;IAC1B;AACJ","sourcesContent":[".ant-popover-placement-bottom, .ant-popover-placement-bottomLeft, .ant-popover-placement-bottomRight{\n    padding-top: 0px !important;\n}\n\n.ant-popover-inner-content{\n    box-shadow: none;\n    padding: 0;\n}\n\n.ant-popover-inner{\n    box-shadow: none;\n}\n.ant-popover-arrow{\n    display: none !important;\n}\n\n.ant-layout-content{\n    background-color: white;\n}\n/* .no-style, .no-style:hover, .no-style:focus{\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    margin: 0;\n    outline: 0;\n    box-shadow: none;\n} */\n\n\n.ant-modal-body{\n    padding: 0 !important;\n}\n\n.ant-form-item{\n    flex-direction: column;\n    align-items: start;\n}\n\n.ant-input-number{\n    width: 100%;\n}\n\n.ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title{\n    margin: 0;\n}\n@media (max-width: 767px){\n    .ant-modal {\n        max-width: calc(100vw - 30px);\n        /* margin: 8px auto; */\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/button.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/globalStyle/button.css ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".no-border {\n    background-color: white !important;\n    border: none !important;\n    box-shadow: none !important\n}\n\n.ant-btn{\n    padding: 11px 20px !important;\n    box-shadow: none !important;\n    height: auto;\n}\n\n.outline-button {\n    color: white !important;\n    background-color: transparent !important;\n    border: 1px solid white !important;\n}\n\n.white-button {\n    background-color: white !important;\n    color: var(--primary-dark) !important;\n    border: none !important;\n}\n\n.button-disable{\n    opacity: .5;\n}", "",{"version":3,"sources":["webpack://src/globalStyle/button.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;IAClC,uBAAuB;IACvB;AACJ;;AAEA;IACI,6BAA6B;IAC7B,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,wCAAwC;IACxC,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;IAClC,qCAAqC;IACrC,uBAAuB;AAC3B;;AAEA;IACI,WAAW;AACf","sourcesContent":[".no-border {\n    background-color: white !important;\n    border: none !important;\n    box-shadow: none !important\n}\n\n.ant-btn{\n    padding: 11px 20px !important;\n    box-shadow: none !important;\n    height: auto;\n}\n\n.outline-button {\n    color: white !important;\n    background-color: transparent !important;\n    border: 1px solid white !important;\n}\n\n.white-button {\n    background-color: white !important;\n    color: var(--primary-dark) !important;\n    border: none !important;\n}\n\n.button-disable{\n    opacity: .5;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/constants.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/globalStyle/constants.css ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{\n    --primary-dark: #ffff;\n   \n}", "",{"version":3,"sources":["webpack://src/globalStyle/constants.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;;AAEzB","sourcesContent":[":root{\n    --primary-dark: #ffff;\n   \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/font.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/globalStyle/font.css ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_assets_fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!../assets/fonts/stylesheet.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/fonts/stylesheet.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_assets_fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Pacifico);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Philosopher);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1,h2,h3,h4,h5,h6{\n    font-family: 'Butler', Arial, sans-serif !important;\n    font-weight: 600 !important;\n    margin: 0px !important;\n}\n\n\n.cs-font-instyle{\n    font-family: \"Pacifico\",Arial,Helvetica,sans-serif;\n    font-weight: 100;\n}\n\nbody{\n    font-family: 'Philosopher', Arial, sans-serif !important;\n    font-weight: 600 !important;\n    margin: 0px !important;\n}\n", "",{"version":3,"sources":["webpack://src/globalStyle/font.css"],"names":[],"mappings":"AAUA;IACI,mDAAmD;IACnD,2BAA2B;IAC3B,sBAAsB;AAC1B;;;AAGA;IACI,kDAAkD;IAClD,gBAAgB;AACpB;;AAEA;IACI,wDAAwD;IACxD,2BAA2B;IAC3B,sBAAsB;AAC1B","sourcesContent":["@import url('../assets//fonts//stylesheet.css');\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap');\n\n@import url('https://fonts.googleapis.com/css?family=Pacifico');\n\n@import url('https://fonts.googleapis.com/css?family=Nunito');\n\n@import url('https://fonts.googleapis.com/css?family=Philosopher');\n\n\nh1,h2,h3,h4,h5,h6{\n    font-family: 'Butler', Arial, sans-serif !important;\n    font-weight: 600 !important;\n    margin: 0px !important;\n}\n\n\n.cs-font-instyle{\n    font-family: \"Pacifico\",Arial,Helvetica,sans-serif;\n    font-weight: 100;\n}\n\nbody{\n    font-family: 'Philosopher', Arial, sans-serif !important;\n    font-weight: 600 !important;\n    margin: 0px !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/globalStyle.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/globalStyle/globalStyle.css ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* color */\r\n.bg-clr-danger{\r\n    background-color: #f66359;\r\n}\r\n\r\n.bg-clr-warning{\r\n    background-color: #e16123;\r\n}\r\n\r\n.bg-clr-success{\r\n    background-color: #6bbd6e;\r\n}\r\n\r\n.txt-clr-label{\r\n    color:#5b616e;\r\n}\r\n\r\n.txt-clr-white{\r\n    color: #fff;\r\n}\r\n\r\n.user-wlcm-bg-clr{\r\n    background-color: #009378;\r\n}\r\n\r\n.user-wlcm-clr{\r\n    color: #009378;\r\n}\r\n\r\n.card-heading-1{\r\n    color: #e16123;\r\n}\r\n\r\np{\r\n    font-style: 16px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.txt-underline{\r\n    text-decoration:underline;\r\n    text-decoration-color: #e16123;\r\n}\r\n\r\n.clr-warning{\r\n    color: #e16123;\r\n}\r\n\r\n.clr-success{\r\n    color: #75ca78;\r\n}\r\n\r\n.clr-side-menu{\r\n    color:#3e4243;\r\n}\r\n\r\n.clr-danger{\r\n    color: #f66359;\r\n}\r\n\r\n.clr-blue{\r\n    color: #288fee;\r\n}\r\n\r\n.clr-primary{\r\n    color: #288fee;\r\n}\r\n\r\n.bg-clr-blue{\r\n    color: #f66359;\r\n}\r\n\r\n.flex-center{\r\ndisplay: flex;\r\njustify-items: center;\r\njustify-content: center;\r\nalign-items: center;\r\nalign-content: center;\r\n}\r\n\r\n.center{\r\n    display: flex;\r\n    justify-items: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    }\r\n\r\n.d-flex{\r\n    display: flex;\r\n}\r\n\r\n.txt-clr-blue{\r\n    color:#2bb3c0;\r\n}\r\n\r\n/* FONTS */\r\n.font-size-m{\r\n    font-size: 20px;\r\n}\r\n\r\n.f-20{\r\n    font-size: 20px;\r\n}\r\n\r\n.f-18{\r\n    font-size: 18px;\r\n}\r\n\r\n.f-16{\r\n    font-size: 16px;\r\n}\r\n\r\n.f-15{\r\n    font-size: 15px;\r\n}\r\n\r\n.font-size-s{\r\n    font-size: 14px;\r\n}\r\n\r\n.letter-spc-3{\r\nletter-spacing: 3;\r\n}\r\n\r\n.stylish-label{\r\n    font-size: 12;\r\n    font-weight: 600;\r\n}\r\n\r\n.mb-em{\r\nmargin-bottom: 1em;\r\n}\r\n\r\n.mb-2em{\r\n    margin-bottom: 2em;\r\n}\r\n    \r\n/* ANTD CSS DESIGN */\r\n.ant-table table { font-size: 16px; }\r\n\r\n.ant-menu.ant-menu-dark .ant-menu-item-selected.sidebar-menu-bg{\r\n    background-color: #232929;\r\n}", "",{"version":3,"sources":["webpack://src/globalStyle/globalStyle.css"],"names":[],"mappings":"AAAA,UAAU;AACV;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,8BAA8B;AAClC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;AACA,aAAa;AACb,qBAAqB;AACrB,uBAAuB;AACvB,mBAAmB;AACnB,qBAAqB;AACrB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB;;AAEJ;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA,UAAU;AACV;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;AACA,iBAAiB;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;AACA,kBAAkB;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,oBAAoB;AACpB,mBAAmB,eAAe,EAAE;;AAEpC;IACI,yBAAyB;AAC7B","sourcesContent":["/* color */\r\n.bg-clr-danger{\r\n    background-color: #f66359;\r\n}\r\n\r\n.bg-clr-warning{\r\n    background-color: #e16123;\r\n}\r\n\r\n.bg-clr-success{\r\n    background-color: #6bbd6e;\r\n}\r\n\r\n.txt-clr-label{\r\n    color:#5b616e;\r\n}\r\n\r\n.txt-clr-white{\r\n    color: #fff;\r\n}\r\n\r\n.user-wlcm-bg-clr{\r\n    background-color: #009378;\r\n}\r\n\r\n.user-wlcm-clr{\r\n    color: #009378;\r\n}\r\n\r\n.card-heading-1{\r\n    color: #e16123;\r\n}\r\n\r\np{\r\n    font-style: 16px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.txt-underline{\r\n    text-decoration:underline;\r\n    text-decoration-color: #e16123;\r\n}\r\n\r\n.clr-warning{\r\n    color: #e16123;\r\n}\r\n\r\n.clr-success{\r\n    color: #75ca78;\r\n}\r\n\r\n.clr-side-menu{\r\n    color:#3e4243;\r\n}\r\n\r\n.clr-danger{\r\n    color: #f66359;\r\n}\r\n\r\n.clr-blue{\r\n    color: #288fee;\r\n}\r\n\r\n.clr-primary{\r\n    color: #288fee;\r\n}\r\n\r\n.bg-clr-blue{\r\n    color: #f66359;\r\n}\r\n\r\n.flex-center{\r\ndisplay: flex;\r\njustify-items: center;\r\njustify-content: center;\r\nalign-items: center;\r\nalign-content: center;\r\n}\r\n\r\n.center{\r\n    display: flex;\r\n    justify-items: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    }\r\n\r\n.d-flex{\r\n    display: flex;\r\n}\r\n\r\n.txt-clr-blue{\r\n    color:#2bb3c0;\r\n}\r\n\r\n/* FONTS */\r\n.font-size-m{\r\n    font-size: 20px;\r\n}\r\n\r\n.f-20{\r\n    font-size: 20px;\r\n}\r\n\r\n.f-18{\r\n    font-size: 18px;\r\n}\r\n\r\n.f-16{\r\n    font-size: 16px;\r\n}\r\n\r\n.f-15{\r\n    font-size: 15px;\r\n}\r\n\r\n.font-size-s{\r\n    font-size: 14px;\r\n}\r\n\r\n.letter-spc-3{\r\nletter-spacing: 3;\r\n}\r\n\r\n.stylish-label{\r\n    font-size: 12;\r\n    font-weight: 600;\r\n}\r\n\r\n.mb-em{\r\nmargin-bottom: 1em;\r\n}\r\n\r\n.mb-2em{\r\n    margin-bottom: 2em;\r\n}\r\n    \r\n/* ANTD CSS DESIGN */\r\n.ant-table table { font-size: 16px; }\r\n\r\n.ant-menu.ant-menu-dark .ant-menu-item-selected.sidebar-menu-bg{\r\n    background-color: #232929;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/margin.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/globalStyle/margin.css ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".m-0{\n    margin: 0 !important;\n}\n\n.m-5{\n    margin: 5px;\n}\n\n.m-point5 {\n    margin: .5em;\n}\n\n /* ==============================================  Top  =====================================================*/\n\n.mt-10 {\n    margin-top: 10px;\n}\n\n.mt-5 {\n    margin-top: 5px;\n}\n\n.mt-15{\n    margin-top: 15px;\n}\n\n.mt-20 {\n    margin-top: 20px;\n}\n\n.mt-25{\n    margin-top: 25px;\n}\n\n.mt-30 {\n    margin-top: 30px;\n}\n\n /* ==============================================  Left  =====================================================*/\n\n.ml-5{\n    margin-left: 5px;\n}\n\n.ml-10 {\n    margin-left: 10px;\n}\n\n.ml-20 {\n    margin-left: 10px;\n}\n\n.ml-30 {\n    margin-left: 30px;\n}\n\n /* ==============================================  right  =====================================================*/\n\n.mr-5{\n    margin-right: 5px;\n}\n\n.mr-10{\n    margin-right: 10px;\n}\n\n.mr-20 {\n    margin-right: 20px;\n}\n\n.mr-30{\n    margin-right: 30px;\n}\n\n\n /* ==============================================  bottom  =====================================================*/\n\n.mb-20 {\n    margin-bottom: 20px;\n}\n\n.mb-10 {\n    margin-bottom: 10px;\n}\n\n.mb-5 {\n    margin-bottom: 5px;\n}\n\n.mb-30 {\n    margin-bottom: 30px;\n}", "",{"version":3,"sources":["webpack://src/globalStyle/margin.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;CAEC,8GAA8G;;AAE/G;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;CAEC,+GAA+G;;AAEhH;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;CAEC,gHAAgH;;AAEjH;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;;CAGC,iHAAiH;;AAElH;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":[".m-0{\n    margin: 0 !important;\n}\n\n.m-5{\n    margin: 5px;\n}\n\n.m-point5 {\n    margin: .5em;\n}\n\n /* ==============================================  Top  =====================================================*/\n\n.mt-10 {\n    margin-top: 10px;\n}\n\n.mt-5 {\n    margin-top: 5px;\n}\n\n.mt-15{\n    margin-top: 15px;\n}\n\n.mt-20 {\n    margin-top: 20px;\n}\n\n.mt-25{\n    margin-top: 25px;\n}\n\n.mt-30 {\n    margin-top: 30px;\n}\n\n /* ==============================================  Left  =====================================================*/\n\n.ml-5{\n    margin-left: 5px;\n}\n\n.ml-10 {\n    margin-left: 10px;\n}\n\n.ml-20 {\n    margin-left: 10px;\n}\n\n.ml-30 {\n    margin-left: 30px;\n}\n\n /* ==============================================  right  =====================================================*/\n\n.mr-5{\n    margin-right: 5px;\n}\n\n.mr-10{\n    margin-right: 10px;\n}\n\n.mr-20 {\n    margin-right: 20px;\n}\n\n.mr-30{\n    margin-right: 30px;\n}\n\n\n /* ==============================================  bottom  =====================================================*/\n\n.mb-20 {\n    margin-bottom: 20px;\n}\n\n.mb-10 {\n    margin-bottom: 10px;\n}\n\n.mb-5 {\n    margin-bottom: 5px;\n}\n\n.mb-30 {\n    margin-bottom: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/padding.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/globalStyle/padding.css ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".p-point5{\n    padding: .5em ;\n}\n\n.p-1{\n    padding: 1em;\n}\n\n.p-2{\n    padding: 2em !important;\n}\n\n.pl-2{\n    padding-left: 2em;\n}\n\n.pr-2{\n    padding-right: 2em;\n}\n\n.pl-30 {\n    padding-left: 30px;\n}", "",{"version":3,"sources":["webpack://src/globalStyle/padding.css"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[".p-point5{\n    padding: .5em ;\n}\n\n.p-1{\n    padding: 1em;\n}\n\n.p-2{\n    padding: 2em !important;\n}\n\n.pl-2{\n    padding-left: 2em;\n}\n\n.pr-2{\n    padding-right: 2em;\n}\n\n.pl-30 {\n    padding-left: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/size.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/globalStyle/size.css ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, " /* ==============================================  CONTENT  =====================================================*/\n\n/* 1 Font Size */\n/* 2 Width */\n\n\n/* ==============================================  FONT - SIZE  =====================================================*/\n.fnt-sz-11{\n    font-size: 11px;\n}\n\n.fnt-sz-12{\n    font-size: 12px;\n}\n\n.fnt-sz-16{\n    font-size: 16px;\n}\n\n.fnt-sz-20{\n    font-size: 20px;\n}\n\n.fnt-sz-18{\n    font-size: 18px;\n}\n\n.fnt-sz-24{\n    font-size: 24px;\n}\n\n.fnt-sz-32{\n    font-size: 32px;\n}\n\n /* ==============================================  WIDTH  =====================================================*/\n\n.w-30{\n    width: 30%;\n}\n\n.w-60{\n    width: 60%;\n}\n\n.w-70{\n    width: 70%;\n}\n\n.w-80 {\n    width: 80%;\n}\n\n.w-90{\n    width: 90%;\n}\n\n.w-95 {\n    width: 95%;\n}\n\n.w-100 {\n    width: 100%;\n}\n\n.wh-30{\n    width: 40px;\n    height: 40px;\n}\n\n.wh-80px{\n    width: 80px;\n    height: 80px;\n}\n\n.wh-50px{\n    width: 50px;\n    height: 50px;\n}\n\n.wh-60px{\n    width: 60px;\n    height: 60px;\n}\n\n.wh-100{\n    width: 100%;\n    max-height: 500px;\n    /* height: 600p; */\n}", "",{"version":3,"sources":["webpack://src/globalStyle/size.css"],"names":[],"mappings":"CAAC,kHAAkH;;AAEnH,gBAAgB;AAChB,YAAY;;;AAGZ,sHAAsH;AACtH;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;CAEC,gHAAgH;;AAEjH;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":[" /* ==============================================  CONTENT  =====================================================*/\n\n/* 1 Font Size */\n/* 2 Width */\n\n\n/* ==============================================  FONT - SIZE  =====================================================*/\n.fnt-sz-11{\n    font-size: 11px;\n}\n\n.fnt-sz-12{\n    font-size: 12px;\n}\n\n.fnt-sz-16{\n    font-size: 16px;\n}\n\n.fnt-sz-20{\n    font-size: 20px;\n}\n\n.fnt-sz-18{\n    font-size: 18px;\n}\n\n.fnt-sz-24{\n    font-size: 24px;\n}\n\n.fnt-sz-32{\n    font-size: 32px;\n}\n\n /* ==============================================  WIDTH  =====================================================*/\n\n.w-30{\n    width: 30%;\n}\n\n.w-60{\n    width: 60%;\n}\n\n.w-70{\n    width: 70%;\n}\n\n.w-80 {\n    width: 80%;\n}\n\n.w-90{\n    width: 90%;\n}\n\n.w-95 {\n    width: 95%;\n}\n\n.w-100 {\n    width: 100%;\n}\n\n.wh-30{\n    width: 40px;\n    height: 40px;\n}\n\n.wh-80px{\n    width: 80px;\n    height: 80px;\n}\n\n.wh-50px{\n    width: 50px;\n    height: 50px;\n}\n\n.wh-60px{\n    width: 60px;\n    height: 60px;\n}\n\n.wh-100{\n    width: 100%;\n    max-height: 500px;\n    /* height: 600p; */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/style.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/globalStyle/style.css ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_constants_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./constants.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/constants.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_margin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./margin.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/margin.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_padding_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./padding.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/padding.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_size_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./size.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/size.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_antOveride_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./antOveride.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/antOveride.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/button.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_font_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./font.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/font.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_constants_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_margin_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_padding_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_size_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_antOveride_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_button_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_font_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* ==============================================  Content  =====================================================*/\n\n/* 1. Wrapper & Back */\n/* 2. Line */\n/*  3. Display */\n/* 4. Border Radius */\n/* 5. Colour */\n/* 6. Icon */\n/* 7. Scroll */\n/* 8. Network Card */\n/* 9. Anime */\n/* 10. others */\n\n/* ==============================================  Wrapper & back  =====================================================*/\n\n\n.wrapper{\n    background-color: white;\n    padding: 1em;\n}\n\n.wrapper-grey {\n    background-color: var(--grey);\n    padding: 1em;\n    border: none;\n}\n\n.wrapper::-webkit-scrollbar , .wrapper-grey::-webkit-scrollbar{\n    display: none;\n}\n\n.grey-back {\n    background-color: var(--grey);\n}\n\n.main-wrapper{\n    padding: 30px 90px 30px 90px;\n}\n\n/* ==============================================  Line  =====================================================*/\n\n.line {\n    width: 100%;\n    border-radius: 5px;\n    height: 1px;\n    background-color: var(--primary-light);\n}\n\n.vr-line-after{\n    margin-right: 10px;\n}\n\n.vr-line-after::after{\n    position: absolute;\n    content: '';\n    background-color: var(--primary-light);\n    width: 1px;\n    height: 100%;\n    left: 120%;\n}\n\n.dash-yellow-line{\n    width: 100%;\n    height: 2px;\n    border-top: 4px dashed var(--orange);\n    margin-top: 14px;\n}\n\n/* ==============================================  Display  =====================================================*/\n\n\n.d{\n    display: flex;\n}\n\n.display-none {\n    display: none;\n}\n\n.display-column {\n    display: flex;\n    flex-direction: column;\n}\n\n.jc-c {\n    justify-content: center;\n}\n\n.jc-sb {\n    justify-content: space-between;\n}\n\n.jc-se {\n    justify-content: space-evenly;\n}\n\n.jc-sa {\n    justify-content: space-around;\n}\n\n.jc-fe {\n    justify-content: flex-end;\n}\n\n.jc-fs {\n    justify-content: flex-start;\n}\n\n.ai-center {\n    align-items: center;\n}\n\n.ai-start {\n    align-items: start;\n}\n\n.txt-center {\n    text-align: center;\n}\n\n /* ==============================================  Border Radius  =====================================================*/\n\n\n.br-1{\n    border-radius: 1em;\n}\n\n.br-point5{\n    border-radius: .5em;\n}\n\n\n /* ==============================================  Colour  =====================================================*/\n\n\n.color-grey {\n    background-color: var(--grey);\n    box-shadow: var(--grey);\n}\n\n.color-red {\n    background-color: var(--primary) !important;\n}\n\n.text-red {\n    color: var(--primary) !important;\n}\n\n.text-green{\n    color: var(--green) !important;\n}\n\n /* ==============================================  Icons  =====================================================*/\n\n.icon-wrapper{\n    font-size: 14px;\n    background-color: white;\n    padding: .5em;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.icon-wrapper-yellow{\n    font-size: 14px;\n    background-color: rgb(245, 214, 39);\n    color: white !important;\n    padding: .5em !important;\n    border-radius: 1em;\n    cursor: pointer;\n    margin-top: 15px !important;\n}\n\n.icon-wrapper-modal{\n    color: white;\n    padding: .4em;\n    font-size: 12px;\n    border: 1px solid white;\n    border-radius: 4px;\n}\n.icon-wrapper-modal:hover{\n    background-color: white;\n    color: var(--dark-primary);\n}\n /* ==============================================  Scroll  =====================================================*/\n\n\n.scroll{\n    margin-right: 10px;\n    overflow: hidden;   \n}\n\n.scroll-400{\n    margin-right: 10px;\n    max-height: 400px;\n    overflow: hidden;\n    overflow-x: hidden;\n}\n\n.scroll-400:hover , .scroll:hover{\n    margin-right: 0px;\n    overflow-y: auto;\n}\n\n /* ==============================================  Network Card  =====================================================*/\n\n\n.network-card {\n    border: none !important;\n    font-size: 13px;\n}\n\n.removed-network-card {\n    opacity: .5 ;\n}\n\n.network-card .ant-card-body{\n    background-color: var(--grey);\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.network-card .ant-card-head {\n    background-color: var(--primary-light);\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n /* ==============================================  Animate  =====================================================*/\n\n.anime-down {\n    transform: scaleY(0);    \n    transform-origin: top;\n    transition: transform 0.15s ease;\n}\n\n.anime-down-full {\n    transform: scaleY(1);\n}\n\n\n.dull-7 {\n    opacity: .7;\n}\n\n /* ==============================================  Other  =====================================================*/\n\n.upload-input {\n    padding: 8px;\n    height: 40px;\n    text-align: center;\n    font-size: 14px;\n    border-radius: 2px;\n    background-color: var(--blue) !important;\n    color: white !important;\n}\n\n.no-border-grey{\n    background-color: var(--grey) !important;\n    border: 0 !important;\n    box-shadow: none !important\n}\n\n", "",{"version":3,"sources":["webpack://src/globalStyle/style.css"],"names":[],"mappings":"AAOA,kHAAkH;;AAElH,sBAAsB;AACtB,YAAY;AACZ,gBAAgB;AAChB,qBAAqB;AACrB,cAAc;AACd,YAAY;AACZ,cAAc;AACd,oBAAoB;AACpB,aAAa;AACb,eAAe;;AAEf,yHAAyH;;;AAGzH;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA,+GAA+G;;AAE/G;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,sCAAsC;IACtC,UAAU;IACV,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;IACX,oCAAoC;IACpC,gBAAgB;AACpB;;AAEA,kHAAkH;;;AAGlH;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;CAEC,wHAAwH;;;AAGzH;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;;CAGC,iHAAiH;;;AAGlH;IACI,6BAA6B;IAC7B,uBAAuB;AAC3B;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;AAClC;;CAEC,gHAAgH;;AAEjH;IACI,eAAe;IACf,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mCAAmC;IACnC,uBAAuB;IACvB,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,0BAA0B;AAC9B;CACC,iHAAiH;;;AAGlH;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;CAEC,uHAAuH;;;AAGxH;IACI,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,sCAAsC;IACtC,4BAA4B;IAC5B,6BAA6B;AACjC;;CAEC,kHAAkH;;AAEnH;IACI,oBAAoB;IACpB,qBAAqB;IACrB,gCAAgC;AACpC;;AAEA;IACI,oBAAoB;AACxB;;;AAGA;IACI,WAAW;AACf;;CAEC,gHAAgH;;AAEjH;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,wCAAwC;IACxC,uBAAuB;AAC3B;;AAEA;IACI,wCAAwC;IACxC,oBAAoB;IACpB;AACJ","sourcesContent":["@import url('./constants.css');\n@import url(./margin.css);\n@import url(./padding.css);\n@import url(./size.css);\n@import url('./antOveride.css');\n@import url('./button.css');\n@import url(./font.css);\n/* ==============================================  Content  =====================================================*/\n\n/* 1. Wrapper & Back */\n/* 2. Line */\n/*  3. Display */\n/* 4. Border Radius */\n/* 5. Colour */\n/* 6. Icon */\n/* 7. Scroll */\n/* 8. Network Card */\n/* 9. Anime */\n/* 10. others */\n\n/* ==============================================  Wrapper & back  =====================================================*/\n\n\n.wrapper{\n    background-color: white;\n    padding: 1em;\n}\n\n.wrapper-grey {\n    background-color: var(--grey);\n    padding: 1em;\n    border: none;\n}\n\n.wrapper::-webkit-scrollbar , .wrapper-grey::-webkit-scrollbar{\n    display: none;\n}\n\n.grey-back {\n    background-color: var(--grey);\n}\n\n.main-wrapper{\n    padding: 30px 90px 30px 90px;\n}\n\n/* ==============================================  Line  =====================================================*/\n\n.line {\n    width: 100%;\n    border-radius: 5px;\n    height: 1px;\n    background-color: var(--primary-light);\n}\n\n.vr-line-after{\n    margin-right: 10px;\n}\n\n.vr-line-after::after{\n    position: absolute;\n    content: '';\n    background-color: var(--primary-light);\n    width: 1px;\n    height: 100%;\n    left: 120%;\n}\n\n.dash-yellow-line{\n    width: 100%;\n    height: 2px;\n    border-top: 4px dashed var(--orange);\n    margin-top: 14px;\n}\n\n/* ==============================================  Display  =====================================================*/\n\n\n.d{\n    display: flex;\n}\n\n.display-none {\n    display: none;\n}\n\n.display-column {\n    display: flex;\n    flex-direction: column;\n}\n\n.jc-c {\n    justify-content: center;\n}\n\n.jc-sb {\n    justify-content: space-between;\n}\n\n.jc-se {\n    justify-content: space-evenly;\n}\n\n.jc-sa {\n    justify-content: space-around;\n}\n\n.jc-fe {\n    justify-content: flex-end;\n}\n\n.jc-fs {\n    justify-content: flex-start;\n}\n\n.ai-center {\n    align-items: center;\n}\n\n.ai-start {\n    align-items: start;\n}\n\n.txt-center {\n    text-align: center;\n}\n\n /* ==============================================  Border Radius  =====================================================*/\n\n\n.br-1{\n    border-radius: 1em;\n}\n\n.br-point5{\n    border-radius: .5em;\n}\n\n\n /* ==============================================  Colour  =====================================================*/\n\n\n.color-grey {\n    background-color: var(--grey);\n    box-shadow: var(--grey);\n}\n\n.color-red {\n    background-color: var(--primary) !important;\n}\n\n.text-red {\n    color: var(--primary) !important;\n}\n\n.text-green{\n    color: var(--green) !important;\n}\n\n /* ==============================================  Icons  =====================================================*/\n\n.icon-wrapper{\n    font-size: 14px;\n    background-color: white;\n    padding: .5em;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.icon-wrapper-yellow{\n    font-size: 14px;\n    background-color: rgb(245, 214, 39);\n    color: white !important;\n    padding: .5em !important;\n    border-radius: 1em;\n    cursor: pointer;\n    margin-top: 15px !important;\n}\n\n.icon-wrapper-modal{\n    color: white;\n    padding: .4em;\n    font-size: 12px;\n    border: 1px solid white;\n    border-radius: 4px;\n}\n.icon-wrapper-modal:hover{\n    background-color: white;\n    color: var(--dark-primary);\n}\n /* ==============================================  Scroll  =====================================================*/\n\n\n.scroll{\n    margin-right: 10px;\n    overflow: hidden;   \n}\n\n.scroll-400{\n    margin-right: 10px;\n    max-height: 400px;\n    overflow: hidden;\n    overflow-x: hidden;\n}\n\n.scroll-400:hover , .scroll:hover{\n    margin-right: 0px;\n    overflow-y: auto;\n}\n\n /* ==============================================  Network Card  =====================================================*/\n\n\n.network-card {\n    border: none !important;\n    font-size: 13px;\n}\n\n.removed-network-card {\n    opacity: .5 ;\n}\n\n.network-card .ant-card-body{\n    background-color: var(--grey);\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.network-card .ant-card-head {\n    background-color: var(--primary-light);\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n /* ==============================================  Animate  =====================================================*/\n\n.anime-down {\n    transform: scaleY(0);    \n    transform-origin: top;\n    transition: transform 0.15s ease;\n}\n\n.anime-down-full {\n    transform: scaleY(1);\n}\n\n\n.dull-7 {\n    opacity: .7;\n}\n\n /* ==============================================  Other  =====================================================*/\n\n.upload-input {\n    padding: 8px;\n    height: 40px;\n    text-align: center;\n    font-size: 14px;\n    border-radius: 2px;\n    background-color: var(--blue) !important;\n    color: white !important;\n}\n\n.no-border-grey{\n    background-color: var(--grey) !important;\n    border: 0 !important;\n    box-shadow: none !important\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/layouts/header/style.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/layouts/header/style.css ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".app-header {\n  background-color: var(--primary-dark);\n  color: white !important;\n}\n\n.cs-web-navbar{\n  height: 68px;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.cs-h-v-center{\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.header-text {\n  margin-left: 14px;\n}\n\n.header-item {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  cursor: pointer;\n}\n\n.header-item-drop {\n  margin-top: -4px;\n  background-color: #e9682831;\n  color: rgba(0, 0, 0, 0.836) !important;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.list-item{\n    cursor: pointer;\n    padding: 10px 40px 10px 20px;\n}\n\n.list-item:hover{\n    background-color: #e968289c;\n}\n\n.header-content .ant-popover-open, .header-item:hover {\n  color: rgba(0, 0, 0, 0.836) !important;\n  background-color: #e4fcee;\n}\n\n.header-content {\n  display: flex;\n  align-items: center;\n  padding-left: 35px;\n  padding-right: 35px;\n}\n\n.search-cat{\n    /* min-width: 200px; */\n    cursor: pointer;\n    text-align: center;\n    height: 40px;\n    color: #fff;\n    background-color: #37bead;\n    padding: 7px 20px;\n}", "",{"version":3,"sources":["webpack://src/layouts/header/style.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,2BAA2B;EAC3B,sCAAsC;EACtC,eAAe;EACf,gBAAgB;AAClB;;AAEA;IACI,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;EACE,sCAAsC;EACtC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,iBAAiB;AACrB","sourcesContent":[".app-header {\n  background-color: var(--primary-dark);\n  color: white !important;\n}\n\n.cs-web-navbar{\n  height: 68px;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.cs-h-v-center{\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.header-text {\n  margin-left: 14px;\n}\n\n.header-item {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  cursor: pointer;\n}\n\n.header-item-drop {\n  margin-top: -4px;\n  background-color: #e9682831;\n  color: rgba(0, 0, 0, 0.836) !important;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.list-item{\n    cursor: pointer;\n    padding: 10px 40px 10px 20px;\n}\n\n.list-item:hover{\n    background-color: #e968289c;\n}\n\n.header-content .ant-popover-open, .header-item:hover {\n  color: rgba(0, 0, 0, 0.836) !important;\n  background-color: #e4fcee;\n}\n\n.header-content {\n  display: flex;\n  align-items: center;\n  padding-left: 35px;\n  padding-right: 35px;\n}\n\n.search-cat{\n    /* min-width: 200px; */\n    cursor: pointer;\n    text-align: center;\n    height: 40px;\n    color: #fff;\n    background-color: #37bead;\n    padding: 7px 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/login/style.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/login/style.css ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".app-static-wrapper {\n  width: 100%;\n  position: relative;\n  min-height: 100%;\n  text-align: center;\n  background-color: white;\n}\n.app-static-logo {\n  text-align: center;\n  width: 100%;\n  margin-bottom: 20px;\n}\n#login-form {\n  margin: 0 auto;\n  max-width: 350px;\n}\n.app-form-full {\n  margin: 12px 0;\n  width: 100%;\n}\n.app-form-label {\n  color: inherit;\n  font-family: \"Acre\", Helvetica, sans-serif;\n  font-weight: 600;\n  font-size: 0.84615385rem;\n  line-height: 1.73;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 3px;\n  text-align: left;\n}\n\n.app-form input[type=\"text\"],\n.app-form-full input[type=\"text\"],\n.app-form-half input[type=\"text\"],\n.app-form input[type=\"password\"],\n.app-form-full input[type=\"password\"],\n.app-form-half input[type=\"password\"],\n.app-form input[type=\"number\"],\n.app-form-full input[type=\"number\"],\n.app-form-half input[type=\"number\"],\n.app-form input[type=\"email\"],\n.app-form-full input[type=\"email\"],\n.app-form-half input[type=\"email\"],\n.app-form input[type=\"date\"],\n.app-form-full input[type=\"date\"],\n.app-form-half input[type=\"date\"] {\n  color: inherit;\n  font-family: \"Acre\", Helvetica, sans-serif;\n  font-size: 0.92307692rem;\n  line-height: 1.73;\n  letter-spacing: 1px;\n  color: #2c3144;\n  -webkit-appearance: none;\n  appearance: none;\n  background: white;\n  border: 1px solid #dfe0e4;\n  border-radius: 0;\n  box-sizing: border-box;\n  box-shadow: none;\n  height: 42px;\n  padding: 0 10px;\n  width: 100%;\n}\n\na,\n.app-cta-link,\nbutton.app-cta-link {\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: none;\n  box-sizing: border-box;\n  color: #426fca;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: none;\n}\n\n.app-cta-btn {\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: none;\n  box-sizing: border-box;\n  color: #2c3144;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.app-cta-btn.primary,\n.app-cta-btn.secondary,\n.app-cta-btn.tertiary,\n.app-cta-btn.septenary,\n.app-cta-btn.warning,\n.app-cta-btn.warning-inverted {\n  color: inherit;\n  font-family: \"Acre\", Helvetica, sans-serif;\n  font-weight: 600;\n  font-size: 0.92307692rem;\n  line-height: 1.67;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  display: inline-block;\n  min-height: 42px;\n  padding: 11px 20px;\n  text-align: center;\n  width: 100%;\n  max-width: 540px;\n}\n.app-cta-btn.primary {\n  background: #374646;\n  color: white;\n}\n\n.app-cta-btn.secondary {\n  background: transparent;\n  border: 1px solid #374646;\n  color: #374646;\n  padding: 10px 18px;\n}\n\n@media only screen and (min-width: 768px) {\n  .app-static-wrapper {\n    padding: 150px 0;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .app-static-wrapper {\n    padding: 80px 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/pages/login/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,WAAW;AACb;AACA;EACE,cAAc;EACd,0CAA0C;EAC1C,gBAAgB;EAChB,wBAAwB;EACxB,iBAAiB;EACjB,qBAAqB;EACrB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;;;;;;;;;;;;;;EAeE,cAAc;EACd,0CAA0C;EAC1C,wBAAwB;EACxB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,wBAAwB;EAExB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,WAAW;AACb;;AAEA;;;EAGE,wBAAwB;EAExB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;EAExB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf,qBAAqB;AACvB;;AAEA;;;;;;EAME,cAAc;EACd,0CAA0C;EAC1C,gBAAgB;EAChB,wBAAwB;EACxB,iBAAiB;EACjB,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":[".app-static-wrapper {\n  width: 100%;\n  position: relative;\n  min-height: 100%;\n  text-align: center;\n  background-color: white;\n}\n.app-static-logo {\n  text-align: center;\n  width: 100%;\n  margin-bottom: 20px;\n}\n#login-form {\n  margin: 0 auto;\n  max-width: 350px;\n}\n.app-form-full {\n  margin: 12px 0;\n  width: 100%;\n}\n.app-form-label {\n  color: inherit;\n  font-family: \"Acre\", Helvetica, sans-serif;\n  font-weight: 600;\n  font-size: 0.84615385rem;\n  line-height: 1.73;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 3px;\n  text-align: left;\n}\n\n.app-form input[type=\"text\"],\n.app-form-full input[type=\"text\"],\n.app-form-half input[type=\"text\"],\n.app-form input[type=\"password\"],\n.app-form-full input[type=\"password\"],\n.app-form-half input[type=\"password\"],\n.app-form input[type=\"number\"],\n.app-form-full input[type=\"number\"],\n.app-form-half input[type=\"number\"],\n.app-form input[type=\"email\"],\n.app-form-full input[type=\"email\"],\n.app-form-half input[type=\"email\"],\n.app-form input[type=\"date\"],\n.app-form-full input[type=\"date\"],\n.app-form-half input[type=\"date\"] {\n  color: inherit;\n  font-family: \"Acre\", Helvetica, sans-serif;\n  font-size: 0.92307692rem;\n  line-height: 1.73;\n  letter-spacing: 1px;\n  color: #2c3144;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: white;\n  border: 1px solid #dfe0e4;\n  border-radius: 0;\n  box-sizing: border-box;\n  box-shadow: none;\n  height: 42px;\n  padding: 0 10px;\n  width: 100%;\n}\n\na,\n.app-cta-link,\nbutton.app-cta-link {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: none;\n  box-sizing: border-box;\n  color: #426fca;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: none;\n}\n\n.app-cta-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: none;\n  box-sizing: border-box;\n  color: #2c3144;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.app-cta-btn.primary,\n.app-cta-btn.secondary,\n.app-cta-btn.tertiary,\n.app-cta-btn.septenary,\n.app-cta-btn.warning,\n.app-cta-btn.warning-inverted {\n  color: inherit;\n  font-family: \"Acre\", Helvetica, sans-serif;\n  font-weight: 600;\n  font-size: 0.92307692rem;\n  line-height: 1.67;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  display: inline-block;\n  min-height: 42px;\n  padding: 11px 20px;\n  text-align: center;\n  width: 100%;\n  max-width: 540px;\n}\n.app-cta-btn.primary {\n  background: #374646;\n  color: white;\n}\n\n.app-cta-btn.secondary {\n  background: transparent;\n  border: 1px solid #374646;\n  color: #374646;\n  padding: 10px 18px;\n}\n\n@media only screen and (min-width: 768px) {\n  .app-static-wrapper {\n    padding: 150px 0;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .app-static-wrapper {\n    padding: 80px 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/antdoverright.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/antdoverright.css ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ant-menu-title-content{\n    color: #ffff;\n}\n\n.ant-menu.ant-menu-dark .ant-menu-item-selected.sidebar-menu-bg{\n    background-color: #01745e8a;\n}\n\n.ant-layout-footer{\n    background-color: #00937860 !important;\n}\n\n.ant-tabs-ink-bar {\n    position: absolute;\n    background: #00937860 !important;\n    pointer-events: none;\n}\n\n.ant-tabs-tab {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    padding: 12px 0;\n    font-size: 22px !important;\n    background: transparent;\n    border: 0;\n    outline: none;\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://src/static/style/antdoverright.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;IAChC,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;IAC1B,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,eAAe;AACnB","sourcesContent":[".ant-menu-title-content{\n    color: #ffff;\n}\n\n.ant-menu.ant-menu-dark .ant-menu-item-selected.sidebar-menu-bg{\n    background-color: #01745e8a;\n}\n\n.ant-layout-footer{\n    background-color: #00937860 !important;\n}\n\n.ant-tabs-ink-bar {\n    position: absolute;\n    background: #00937860 !important;\n    pointer-events: none;\n}\n\n.ant-tabs-tab {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    padding: 12px 0;\n    font-size: 22px !important;\n    background: transparent;\n    border: 0;\n    outline: none;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/button.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/button.css ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-btn-notification{\n    border: #009378 solid;\n    border-width: 2px 0px 2px 2px;\n    border-radius: 6px 0px 0px 6px;\n    justify-content: center;\n    display: flex;\n    padding: 5px;\n    background-color: #0093782a;\n    font-size: 20px;\n}\n.cs-btn-login{\n    /* border: #009378 solid; */\n    border-width: 2px 0px 2px 2px;\n    border-radius: 6px 0px 0px 6px;\n    justify-content: center;\n    display: flex;\n    padding: 5px;\n    /* background-color: #0093782a; */\n    font-size: 20px;\n}\n\n.cs-btn-signup{\n    /* border: #e96828 solid; */\n    /* border-width: 2px; */\n    /* border-radius: 0px 6px 6px 0px; */\n    justify-content: center;\n    display: flex;\n    color: #e96828;\n    padding: 5px;\n    /* font-weight: bold; */\n    /* background-color: #e9682831; */\n    font-size: 20px;\n}\n\n.cs-get-second-consultant{\n    background-color:#009378;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 22px;\n}\n\n.cs-customer-care{\n    background-color:#e96828;\n    padding: 6px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 20px;\n}\n\n.cs-btn-get-second-consultant-invert{\n    background-color:#fff;\n    border: #009378 2px;\n    border-style: solid;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 22px;\n    color: #009378;\n    font-size: 20px;\n    font-weight: 600;\n    border-radius: 6px;\n}\n\n.cs-btn-get-second-consultant-invert:hover{\n    background-color:#009378;\n    border: #fff 2px;\n    border-style: solid;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 22px;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n    border-radius: 6px;\n}\n\n.cs-btn-call-invert{\n    background-color:#fff;\n    border: #57699b 2px;\n    border-style: solid;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    border-radius: 6px;\n    color: #57699b;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.cs-btn-call-invert:hover{\n    background-color:#57699b;\n    border: #fff 2px;\n    border-style: solid;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 22px;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n    border-radius: 6px;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.cs-btn-call-font-invert{\n    color: #57699b;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.cs-btn-call-font-invert:hover{\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.cs-btn-view-more-invert{\n    padding: 5px 15px;\n    color: #e96828;\n    border: #e96828 solid 2px;\n    border-radius: 6px;    \n    font-size: 16px;\n    font-weight: 600;\n}\n\n.cs-btn-view-more-invert:hover{\n    padding: 5px 15px;\n    background-color: #e96828;\n    color: #fff;\n    border: #e96828 solid 2px;\n    border-radius: 6px;    \n    font-size: 16px;\n    font-weight: 600;\n}\n\n@media screen and (min-width:768px) and (max-width:992px){\n    .cs-btn-login{\n        border: #009378 solid;\n        border-width: 2px 0px 2px 2px;\n        border-radius: 6px 0px 0px 6px;\n        /* justify-content: center; */\n        display: flex;\n        padding: 5px;\n        background-color: #0093782a;\n    }\n    .cs-btn-signup{\n        border: #e96828 solid;\n        border-width: 2px;\n        border-radius: 0px 6px 6px 0px;\n        /* justify-content: center; */\n        display: flex;\n        padding: 5px;\n        background-color: #e9682831;\n    }\n    .cs-get-second-consultant{\n        background-color:#009378;\n        padding: 5px;\n        border-radius: 5px;\n        cursor: pointer;\n        margin-right: 10px;\n        font-size: 14px;\n    }\n    .cs-customer-care{\n        background-color:#e96828;\n        padding: 5px;\n        border-radius: 5px;\n        cursor: pointer;\n        margin-right: 10px;\n        font-size: 14px;\n    }\n  }\n  \n  /* No greater than 992px, no less than 1200px  LGGG */ \n  @media screen and (min-width:992px) and (max-width:1200px){\n    .cs-btn-login{\n        border: #009378 solid;\n        border-width: 2px 0px 2px 2px;\n        border-radius: 6px 0px 0px 6px;\n        justify-content: center;\n        display: flex;\n        padding: 5px;\n        background-color: #0093782a;\n        font-size: 14px;\n    }\n    .cs-btn-signup{\n        border: #e96828 solid;\n        border-width: 2px;\n        border-radius: 0px 6px 6px 0px;\n        justify-content: center;\n        display: flex;\n        padding: 5px;\n        background-color: #e9682831;\n        font-size: 14px;\n    }\n    .cs-get-second-consultant{\n        background-color:#009378;\n        padding: 5px;\n        border-radius: 5px;\n        cursor: pointer;\n        margin-right: 10px;\n        font-size: 14px;\n    }\n    .cs-customer-care{\n        background-color:#e96828;\n        padding: 5px;\n        border-radius: 5px;\n        cursor: pointer;\n        margin-right: 10px;\n        font-size: 14px;\n    }\n      }", "",{"version":3,"sources":["webpack://src/static/style/button.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,6BAA6B;IAC7B,8BAA8B;IAC9B,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,8BAA8B;IAC9B,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;IACvB,oCAAoC;IACpC,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,YAAY;IACZ,uBAAuB;IACvB,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI;QACI,qBAAqB;QACrB,6BAA6B;QAC7B,8BAA8B;QAC9B,6BAA6B;QAC7B,aAAa;QACb,YAAY;QACZ,2BAA2B;IAC/B;IACA;QACI,qBAAqB;QACrB,iBAAiB;QACjB,8BAA8B;QAC9B,6BAA6B;QAC7B,aAAa;QACb,YAAY;QACZ,2BAA2B;IAC/B;IACA;QACI,wBAAwB;QACxB,YAAY;QACZ,kBAAkB;QAClB,eAAe;QACf,kBAAkB;QAClB,eAAe;IACnB;IACA;QACI,wBAAwB;QACxB,YAAY;QACZ,kBAAkB;QAClB,eAAe;QACf,kBAAkB;QAClB,eAAe;IACnB;EACF;;EAEA,qDAAqD;EACrD;IACE;QACI,qBAAqB;QACrB,6BAA6B;QAC7B,8BAA8B;QAC9B,uBAAuB;QACvB,aAAa;QACb,YAAY;QACZ,2BAA2B;QAC3B,eAAe;IACnB;IACA;QACI,qBAAqB;QACrB,iBAAiB;QACjB,8BAA8B;QAC9B,uBAAuB;QACvB,aAAa;QACb,YAAY;QACZ,2BAA2B;QAC3B,eAAe;IACnB;IACA;QACI,wBAAwB;QACxB,YAAY;QACZ,kBAAkB;QAClB,eAAe;QACf,kBAAkB;QAClB,eAAe;IACnB;IACA;QACI,wBAAwB;QACxB,YAAY;QACZ,kBAAkB;QAClB,eAAe;QACf,kBAAkB;QAClB,eAAe;IACnB;MACE","sourcesContent":[".cs-btn-notification{\n    border: #009378 solid;\n    border-width: 2px 0px 2px 2px;\n    border-radius: 6px 0px 0px 6px;\n    justify-content: center;\n    display: flex;\n    padding: 5px;\n    background-color: #0093782a;\n    font-size: 20px;\n}\n.cs-btn-login{\n    /* border: #009378 solid; */\n    border-width: 2px 0px 2px 2px;\n    border-radius: 6px 0px 0px 6px;\n    justify-content: center;\n    display: flex;\n    padding: 5px;\n    /* background-color: #0093782a; */\n    font-size: 20px;\n}\n\n.cs-btn-signup{\n    /* border: #e96828 solid; */\n    /* border-width: 2px; */\n    /* border-radius: 0px 6px 6px 0px; */\n    justify-content: center;\n    display: flex;\n    color: #e96828;\n    padding: 5px;\n    /* font-weight: bold; */\n    /* background-color: #e9682831; */\n    font-size: 20px;\n}\n\n.cs-get-second-consultant{\n    background-color:#009378;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 22px;\n}\n\n.cs-customer-care{\n    background-color:#e96828;\n    padding: 6px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 20px;\n}\n\n.cs-btn-get-second-consultant-invert{\n    background-color:#fff;\n    border: #009378 2px;\n    border-style: solid;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 22px;\n    color: #009378;\n    font-size: 20px;\n    font-weight: 600;\n    border-radius: 6px;\n}\n\n.cs-btn-get-second-consultant-invert:hover{\n    background-color:#009378;\n    border: #fff 2px;\n    border-style: solid;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 22px;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n    border-radius: 6px;\n}\n\n.cs-btn-call-invert{\n    background-color:#fff;\n    border: #57699b 2px;\n    border-style: solid;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    border-radius: 6px;\n    color: #57699b;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.cs-btn-call-invert:hover{\n    background-color:#57699b;\n    border: #fff 2px;\n    border-style: solid;\n    padding: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 22px;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n    border-radius: 6px;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.cs-btn-call-font-invert{\n    color: #57699b;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.cs-btn-call-font-invert:hover{\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.cs-btn-view-more-invert{\n    padding: 5px 15px;\n    color: #e96828;\n    border: #e96828 solid 2px;\n    border-radius: 6px;    \n    font-size: 16px;\n    font-weight: 600;\n}\n\n.cs-btn-view-more-invert:hover{\n    padding: 5px 15px;\n    background-color: #e96828;\n    color: #fff;\n    border: #e96828 solid 2px;\n    border-radius: 6px;    \n    font-size: 16px;\n    font-weight: 600;\n}\n\n@media screen and (min-width:768px) and (max-width:992px){\n    .cs-btn-login{\n        border: #009378 solid;\n        border-width: 2px 0px 2px 2px;\n        border-radius: 6px 0px 0px 6px;\n        /* justify-content: center; */\n        display: flex;\n        padding: 5px;\n        background-color: #0093782a;\n    }\n    .cs-btn-signup{\n        border: #e96828 solid;\n        border-width: 2px;\n        border-radius: 0px 6px 6px 0px;\n        /* justify-content: center; */\n        display: flex;\n        padding: 5px;\n        background-color: #e9682831;\n    }\n    .cs-get-second-consultant{\n        background-color:#009378;\n        padding: 5px;\n        border-radius: 5px;\n        cursor: pointer;\n        margin-right: 10px;\n        font-size: 14px;\n    }\n    .cs-customer-care{\n        background-color:#e96828;\n        padding: 5px;\n        border-radius: 5px;\n        cursor: pointer;\n        margin-right: 10px;\n        font-size: 14px;\n    }\n  }\n  \n  /* No greater than 992px, no less than 1200px  LGGG */ \n  @media screen and (min-width:992px) and (max-width:1200px){\n    .cs-btn-login{\n        border: #009378 solid;\n        border-width: 2px 0px 2px 2px;\n        border-radius: 6px 0px 0px 6px;\n        justify-content: center;\n        display: flex;\n        padding: 5px;\n        background-color: #0093782a;\n        font-size: 14px;\n    }\n    .cs-btn-signup{\n        border: #e96828 solid;\n        border-width: 2px;\n        border-radius: 0px 6px 6px 0px;\n        justify-content: center;\n        display: flex;\n        padding: 5px;\n        background-color: #e9682831;\n        font-size: 14px;\n    }\n    .cs-get-second-consultant{\n        background-color:#009378;\n        padding: 5px;\n        border-radius: 5px;\n        cursor: pointer;\n        margin-right: 10px;\n        font-size: 14px;\n    }\n    .cs-customer-care{\n        background-color:#e96828;\n        padding: 5px;\n        border-radius: 5px;\n        cursor: pointer;\n        margin-right: 10px;\n        font-size: 14px;\n    }\n      }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/color.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/color.css ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-bg-green{\n    background-color:#009378;\n}\n\n.cs-bg-green-op-5{\n    background-color:#00937833;\n}\n\n.cs-bg-red{\n  background-color: #ff5b58;\n}\n\n.cs-bg-cream{\n    background-color: #fc9066;\n}\n  \n.cs-bg-purple-op-1{\n    background-color: #57699b25;\n}\n\n.cs-bg-purple-op-4{\n    background-color: #57699b5b;\n}\n\n.cs-bg-orange{\n    background-color: #e96828;\n}\n\n.cs-bg-orange-op-1{\n    background-color: #e968283d;\n}\n\n.cs-bg-orange-op-4{\n    background-color: #e9682860;\n}\n\n.cs-bg-green-op-4{\n    background-color:#00937860;\n}\n\n.cs-bg-brown-op-4{\n    background-color: #c5a77d69\n}\n\n.cs-clr-fff{\n    color: #fff;\n}\n\n.cs-clr-cream{\n    color: #1eacbd;\n}\n\n.cs-clr-888{\n    color: #888;\n}\n\n.cs-clr-666{\n    color: #666666;\n}\n\n.cs-clr-4242{\n    color: #424242;\n}\n\n.cs-clr-off-black{\n    color: #1f1f1f;\n}\n\n/* \n.cs-clr-orange{\n    color: #e96828;\n} */\n\n.cs-clr-orange{\n    color: #e4692b;\n}\n\n\n.cs-clr-green{\n    color:#009378;\n}\n\n.cs-clr-brown{\n    color: #c5a77d\n}\n\n.cs-clr-dark-brown{\n    color: #bb9053\n}\n\n.cs-clr-light-purple{\n    color: #d191cfd5\n}\n\n.cs-clr-purple{\n    color: #57699b;\n}\n\n.cs-clr-mega-menu{\n    color: #c48129;\n}", "",{"version":3,"sources":["webpack://src/static/style/color.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;;GAGG;;AAEH;IACI,cAAc;AAClB;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB","sourcesContent":[".cs-bg-green{\n    background-color:#009378;\n}\n\n.cs-bg-green-op-5{\n    background-color:#00937833;\n}\n\n.cs-bg-red{\n  background-color: #ff5b58;\n}\n\n.cs-bg-cream{\n    background-color: #fc9066;\n}\n  \n.cs-bg-purple-op-1{\n    background-color: #57699b25;\n}\n\n.cs-bg-purple-op-4{\n    background-color: #57699b5b;\n}\n\n.cs-bg-orange{\n    background-color: #e96828;\n}\n\n.cs-bg-orange-op-1{\n    background-color: #e968283d;\n}\n\n.cs-bg-orange-op-4{\n    background-color: #e9682860;\n}\n\n.cs-bg-green-op-4{\n    background-color:#00937860;\n}\n\n.cs-bg-brown-op-4{\n    background-color: #c5a77d69\n}\n\n.cs-clr-fff{\n    color: #fff;\n}\n\n.cs-clr-cream{\n    color: #1eacbd;\n}\n\n.cs-clr-888{\n    color: #888;\n}\n\n.cs-clr-666{\n    color: #666666;\n}\n\n.cs-clr-4242{\n    color: #424242;\n}\n\n.cs-clr-off-black{\n    color: #1f1f1f;\n}\n\n/* \n.cs-clr-orange{\n    color: #e96828;\n} */\n\n.cs-clr-orange{\n    color: #e4692b;\n}\n\n\n.cs-clr-green{\n    color:#009378;\n}\n\n.cs-clr-brown{\n    color: #c5a77d\n}\n\n.cs-clr-dark-brown{\n    color: #bb9053\n}\n\n.cs-clr-light-purple{\n    color: #d191cfd5\n}\n\n.cs-clr-purple{\n    color: #57699b;\n}\n\n.cs-clr-mega-menu{\n    color: #c48129;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/font.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/font.css ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-font-10{\n    font-size: 10px;\n}\n.cs-font-12{\n    font-size: 12px;\n}\n.cs-font-14{\n    font-size: 14px;\n}\n.cs-font-16{\n    font-size: 16px;\n}\n.cs-font-18{\n    font-size: 18px;\n}\n.cs-font-20{\n    font-size: 20px;\n}\n.cs-font-21{\n    font-size: 21px;\n}\n.cs-font-22{\n    font-size: 22px;\n}\n.cs-font-24{\n    font-size: 24px;\n}\n.cs-font-26{\n    font-size: 26px;\n}\n.cs-font-28{\n    font-size: 28px;\n}\n.cs-font-32{\n    font-size: 32px;\n}\n.cs-font-34{\n    font-size: 34px;\n}\n.cs-font-36{\n    font-size: 36px;\n}\n.cs-font-38{\n    font-size: 38px;\n}\n.cs-font-45{\n    font-size: 45px;\n}\n.cs-font-48{\n    font-size: 48px;\n}\n.cs-font-50{\n    font-size: 50px;\n}\n.cs-font-60{\n    font-size: 60px;\n}\n\n\n\n\n/* weight */\n.cs-fw-300{\n    font-weight: 300;\n}\n.cs-fw-400{\n    font-weight: 400;\n}\n.cs-fw-500{\n    font-weight: 500;\n}\n.cs-fw-600{\n    font-weight: 600;\n}\n.cs-fw-700{\n    font-weight: 700;\n}\n.cs-fw-800{\n    font-weight: 800;\n}\n\n/* line height */\n.cs-lh-16{\n    line-height: 16px;\n}\n.cs-lh-18{\n    line-height: 18px;\n}\n.cs-lh-21{\n    line-height: 21px;\n}\n.cs-lh-28{\n    line-height: 28px;\n}\n.cs-lh-30{\n    line-height: 30px;\n}\n.cs-lh-32{\n    line-height: 32px;\n}\n.cs-lh-36{\n    line-height: 36px;\n}\n.cs-lh-40{\n    line-height: 40px;\n}\n.cs-lh-45{\n    line-height: 45px;\n}\n\n.cs-txt-wavy{\n    text-decoration: wavy;\n}\n\n/* word space */\n.cs-ws-2{\n    word-spacing: 2px;\n}\n.cs-ws-3{\n    word-spacing: 3px;\n}\n\n/* align */\n\n.cs-txt-align-center{\n    text-align: center;\n}\n\n.cs-font-italic{\n font-style: italic;   \n}\n", "",{"version":3,"sources":["webpack://src/static/style/font.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;;;;;AAKA,WAAW;AACX;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;AAEA,gBAAgB;AAChB;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA,eAAe;AACf;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;;AAEA,UAAU;;AAEV;IACI,kBAAkB;AACtB;;AAEA;CACC,kBAAkB;AACnB","sourcesContent":[".cs-font-10{\n    font-size: 10px;\n}\n.cs-font-12{\n    font-size: 12px;\n}\n.cs-font-14{\n    font-size: 14px;\n}\n.cs-font-16{\n    font-size: 16px;\n}\n.cs-font-18{\n    font-size: 18px;\n}\n.cs-font-20{\n    font-size: 20px;\n}\n.cs-font-21{\n    font-size: 21px;\n}\n.cs-font-22{\n    font-size: 22px;\n}\n.cs-font-24{\n    font-size: 24px;\n}\n.cs-font-26{\n    font-size: 26px;\n}\n.cs-font-28{\n    font-size: 28px;\n}\n.cs-font-32{\n    font-size: 32px;\n}\n.cs-font-34{\n    font-size: 34px;\n}\n.cs-font-36{\n    font-size: 36px;\n}\n.cs-font-38{\n    font-size: 38px;\n}\n.cs-font-45{\n    font-size: 45px;\n}\n.cs-font-48{\n    font-size: 48px;\n}\n.cs-font-50{\n    font-size: 50px;\n}\n.cs-font-60{\n    font-size: 60px;\n}\n\n\n\n\n/* weight */\n.cs-fw-300{\n    font-weight: 300;\n}\n.cs-fw-400{\n    font-weight: 400;\n}\n.cs-fw-500{\n    font-weight: 500;\n}\n.cs-fw-600{\n    font-weight: 600;\n}\n.cs-fw-700{\n    font-weight: 700;\n}\n.cs-fw-800{\n    font-weight: 800;\n}\n\n/* line height */\n.cs-lh-16{\n    line-height: 16px;\n}\n.cs-lh-18{\n    line-height: 18px;\n}\n.cs-lh-21{\n    line-height: 21px;\n}\n.cs-lh-28{\n    line-height: 28px;\n}\n.cs-lh-30{\n    line-height: 30px;\n}\n.cs-lh-32{\n    line-height: 32px;\n}\n.cs-lh-36{\n    line-height: 36px;\n}\n.cs-lh-40{\n    line-height: 40px;\n}\n.cs-lh-45{\n    line-height: 45px;\n}\n\n.cs-txt-wavy{\n    text-decoration: wavy;\n}\n\n/* word space */\n.cs-ws-2{\n    word-spacing: 2px;\n}\n.cs-ws-3{\n    word-spacing: 3px;\n}\n\n/* align */\n\n.cs-txt-align-center{\n    text-align: center;\n}\n\n.cs-font-italic{\n font-style: italic;   \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/main.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/main.css ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_padding_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./padding.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/padding.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_margin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./margin.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/margin.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./font.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/font.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_color_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./color.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/color.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_button_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/button.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_antdoverright_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./antdoverright.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/antdoverright.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_web_home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./web/home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/web/home.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_web_product_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./web/product.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/web/product.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_mobile_Footer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./mobile/Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/mobile/Footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_web_category_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./web/category.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/web/category.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_web_cart_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./web/cart.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/web/cart.css");
// Imports












var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_padding_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_margin_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_font_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_color_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_margin_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_button_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_antdoverright_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_web_home_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_web_product_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_mobile_Footer_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_web_category_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_web_cart_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "div{\n  color: #000;\n}\n\n.cs-web-container{\n  margin: 0px 40px;\n}\n\n.cs-web-container-70{\n  margin: 0px 70px;\n}\n\n.cs-pic-display{\n  width: 25em;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n.cs-w-20{\n  width: 20%;\n}\n\n.cs-mobile-container{\n  margin: 0px 6px;\n}\n\n.cs-web-container-110{\n  margin: 0px 110px;\n}\n\n.cs-fix-it{\n  position: sticky;\n  top: 150px;\n}\n\n.cs-hrz-divion{\n  height: 2px;\n  background-color: #000;\n  width: 100%;\n}\n\n.cs-hrz-divion-light{\n  height: 1px;\n  background-color: rgba(124, 124, 124, 0.226);\n  width: 100%; \n}\n\n.frz-br-8{\n  border-radius: 8pc;\n}\n\n.cs-hrz-divion-bold{\n  height: 3px;\n  background-color: #000;\n  width: 100%; \n}\n\n.cs-vt-center{\n  align-content:center;\n  align-items: center;\n}\n\n.cs-dis-flex{\n  display: flex !important;\n}\n\n.cs-hrz-center{\n  justify-content: center;\n  justify-items: center;\n}\n\n.cs-abs-center{\n  left: 50%;\n  transform: translate(-50%, 0);\n  top: 50%;\n  transform: translate(-50%,-50%);\n}\n\n.cs-justify-sb{\n  justify-content: space-between;\n}\n\n.cs-justify-se{\n  justify-content: space-evenly;\n}\n\n.cs-dis-block{\n  display: block;\n}\n\n.subscribe-input{\n  background-color: #00937800;\n  margin-top: 15px;\n  border-color: #009378;\n  border-radius: 6px;\n  height: 35px;\n}\n\n.subscribe-input:focus{\n  border-color: #009378;\n}\n\n.subscribe-input:hover{\n  border-color: #009378;\n}\n\n\n.subscribe-input::placeholder{\n  color: rgba(0, 0, 0, 0.637);\n}\n\n.cs-font-caps{\n  text-transform: uppercase;\n}\n\n.cs-br-5{\n  border-radius: 5px;\n}\n\n.cs-br-8{\n  border-radius: 8px;\n}\n\n.cs-br-12{\n  border-radius: 12px;\n}\n\n.cs-br-15{\n  border-radius: 15px;\n}\n\n.cs-br-18{\n  border-radius: 18px;\n}\n\n.cs-pointer{\n  cursor: pointer;\n}\n\n.cs-overflow-x-scroll{\n  overflow-x: scroll;\n}\n\n.cs-dis-none{\n  display: none;\n}\n\n.cs-font-italic{\n  font-style: italic;\n}\n\n.cs-vt-line{\n  border: rgba(0, 0, 0, 0.514);\n  border-style: solid;\n  border-width: 0px 2px 0px 0px;\n}\n\n.cs-vt-line-header{\n  border: rgba(0, 0, 0, 0.226);\n  border-style: solid;\n  border-width: 0px 1px 0px 0px;\n}\n\n.cs-w-50{\n  width: 50% !important;\n}\n\n.cs-w-60{\n  width: 60% !important;\n}\n\n.cs-w-70{\n  width: 70% !important;\n}\n\n.cs-w-75{\n  width: 75% !important;\n}\n\n.cs-w-80{\n  width: 80% !important;\n}\n.cs-cross-icon{\n  height: 18px;\n  width: 18px;\n  color: #fff;\n  background-color: #37bead;\n  border-radius: 50%;\n}\n\n.cs-w-100{\n  width: 100% !important;\n}\n\n.cs-w-40p{\n  width: 40px;\n}\n\n.cs-pos-abs{\n  position: absolute;\n}\n\n.cs-float-left{\n  float: left;\n}\n\n.cs-float-right{\n  float: right;\n}\n\n/* WEB VIEW */\n@media screen and (min-width: 768px) {\n\n  .cs-show-mobile {\n    display: none;\n  }\n\n  .cs-show-web {\n    display: block;\n  }\n\n}\n\n/* TAB VIEW */\n/* No greater than 992px, no less than 768px */\n@media screen and (min-width:768px) and (max-width:991px){\n  .cs-show-mobile {\n    display: none;\n  }\n\n  .cs-show-web {\n    display: block;\n  }\n\n  .cs-show-lg-tab {\n    display: none;\n  }\n\n  .cs-hide-lg-tab{\n    display: block;\n  }\n}\n\n /*LG */ \n@media screen and (min-width:992px) and (max-width:1200px){\n  .cs-show-lg-tab {\n    display: block;\n  }\n\n  .cs-hide-lg-tab{\n    display: none;\n  }\n}\n\n/* MD */\n@media screen and (min-width:768px) and (max-width:992px){\n  .cs-show-md-tab {\n    display: block;\n  }\n\n  .cs-hide-md-tab{\n    display: none;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .cs-show-mobile {\n    display: block;\n  }\n\n  .cs-show-web {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 600px) { \n  .cs-web-container{\n    margin: 0px 16px;\n  }\n  .cs-rp-40 {\n    padding-right: 0px;\n  }\n}\n \n.ant-menu-title-content{\n  color: #000 !important;\n  font-size: 15px !important;\n  font-weight: 400px !important;\n}\n/* Extra small devices (phones, 600px and down) */\n/* @media only screen and (max-width: 600px) {\n  .cs-not-for-mobile{\n    display: none !important;\n  }\n  .cs-center-vertical-mobile{\n    display: flex;\n    align-items: center;\n    align-content: center;\n  }\n  .cs-get-ticket-container{\n    padding: 20px 20px;\n  }\n  .cs-web-container{\n    padding: 0px 15px;\n  }\n  .cs-xs-bp-20{\n    padding-bottom: 20px;\n  }\n  .cs-only-for-mobile{\n    display: flex !important ;\n  }\n  .cs-mobile-logo{\n    float: right;\n    margin-top: 12px;\n  }\n} */\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* @media only screen and (min-width: 768px) and (max-width: 1199px) {\n  .cs-not-for-mobile{\n    display: none !important;\n  }\n  .cs-only-for-mobile{\n    display: flex !important ;\n  }\n\n} */\n\n/* @media screen and (min-width:768px) and (max-width:992px){\n  .cs-not-for-mobile{\n    display: none !important;\n  }\n  .cs-only-for-mobile{\n    display: flex !important ;\n  }\n} */\n\n/* No greater than 992px, no less than 1200px */\n/* @media screen and (min-width:992px) and (max-width:1200px){\n  .cs-not-for-mobile{\n    display: none !important;\n  }\n  .cs-only-for-mobile{\n    display: flex !important ;\n  }\n}\n\n.cs-not-for-mobile{\n  display: content !important;\n}\n.cs-only-for-mobile{\n  display: none;\n} */\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* @media only screen and (min-width: 768px) {...} */\n\n/* Large devices (laptops/desktops, 992px and up) */\n/* @media only screen and (min-width: 992px) {...} */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n/* @media only screen and (min-width: 1200px) {...} */", "",{"version":3,"sources":["webpack://src/static/style/main.css"],"names":[],"mappings":"AAaA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EAEE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,4CAA4C;EAC5C,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,6BAA6B;EAC7B,QAAQ;EACR,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;;AAGA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,WAAW;EACX,WAAW;EACX,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA,aAAa;AACb;;EAEE;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;;AAEF;;AAEA,aAAa;AACb,8CAA8C;AAC9C;EACE;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;AACF;;CAEC,MAAM;AACP;EACE;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA,OAAO;AACP;EACE;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;EACA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,6BAA6B;AAC/B;AACA,iDAAiD;AACjD;;;;;;;;;;;;;;;;;;;;;;;;;GAyBG;;AAEH,oEAAoE;AACpE;;;;;;;;GAQG;;AAEH;;;;;;;GAOG;;AAEH,+CAA+C;AAC/C;;;;;;;;;;;;;;GAcG;;AAEH,qDAAqD;AACrD,oDAAoD;;AAEpD,mDAAmD;AACnD,oDAAoD;;AAEpD,oEAAoE;AACpE,qDAAqD","sourcesContent":["@import './padding.css';\n@import './margin.css';\n@import './font.css';\n@import './color.css';\n@import './margin.css';\n@import './button.css';\n@import './antdoverright.css';\n@import './web/home.css';\n@import './web/product.css';\n@import './mobile/Footer.css';\n@import './web/category.css';\n@import './web/cart.css';\n\ndiv{\n  color: #000;\n}\n\n.cs-web-container{\n  margin: 0px 40px;\n}\n\n.cs-web-container-70{\n  margin: 0px 70px;\n}\n\n.cs-pic-display{\n  width: 25em;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n.cs-w-20{\n  width: 20%;\n}\n\n.cs-mobile-container{\n  margin: 0px 6px;\n}\n\n.cs-web-container-110{\n  margin: 0px 110px;\n}\n\n.cs-fix-it{\n  position: -webkit-sticky;\n  position: sticky;\n  top: 150px;\n}\n\n.cs-hrz-divion{\n  height: 2px;\n  background-color: #000;\n  width: 100%;\n}\n\n.cs-hrz-divion-light{\n  height: 1px;\n  background-color: rgba(124, 124, 124, 0.226);\n  width: 100%; \n}\n\n.frz-br-8{\n  border-radius: 8pc;\n}\n\n.cs-hrz-divion-bold{\n  height: 3px;\n  background-color: #000;\n  width: 100%; \n}\n\n.cs-vt-center{\n  align-content:center;\n  align-items: center;\n}\n\n.cs-dis-flex{\n  display: flex !important;\n}\n\n.cs-hrz-center{\n  justify-content: center;\n  justify-items: center;\n}\n\n.cs-abs-center{\n  left: 50%;\n  transform: translate(-50%, 0);\n  top: 50%;\n  transform: translate(-50%,-50%);\n}\n\n.cs-justify-sb{\n  justify-content: space-between;\n}\n\n.cs-justify-se{\n  justify-content: space-evenly;\n}\n\n.cs-dis-block{\n  display: block;\n}\n\n.subscribe-input{\n  background-color: #00937800;\n  margin-top: 15px;\n  border-color: #009378;\n  border-radius: 6px;\n  height: 35px;\n}\n\n.subscribe-input:focus{\n  border-color: #009378;\n}\n\n.subscribe-input:hover{\n  border-color: #009378;\n}\n\n\n.subscribe-input::placeholder{\n  color: rgba(0, 0, 0, 0.637);\n}\n\n.cs-font-caps{\n  text-transform: uppercase;\n}\n\n.cs-br-5{\n  border-radius: 5px;\n}\n\n.cs-br-8{\n  border-radius: 8px;\n}\n\n.cs-br-12{\n  border-radius: 12px;\n}\n\n.cs-br-15{\n  border-radius: 15px;\n}\n\n.cs-br-18{\n  border-radius: 18px;\n}\n\n.cs-pointer{\n  cursor: pointer;\n}\n\n.cs-overflow-x-scroll{\n  overflow-x: scroll;\n}\n\n.cs-dis-none{\n  display: none;\n}\n\n.cs-font-italic{\n  font-style: italic;\n}\n\n.cs-vt-line{\n  border: rgba(0, 0, 0, 0.514);\n  border-style: solid;\n  border-width: 0px 2px 0px 0px;\n}\n\n.cs-vt-line-header{\n  border: rgba(0, 0, 0, 0.226);\n  border-style: solid;\n  border-width: 0px 1px 0px 0px;\n}\n\n.cs-w-50{\n  width: 50% !important;\n}\n\n.cs-w-60{\n  width: 60% !important;\n}\n\n.cs-w-70{\n  width: 70% !important;\n}\n\n.cs-w-75{\n  width: 75% !important;\n}\n\n.cs-w-80{\n  width: 80% !important;\n}\n.cs-cross-icon{\n  height: 18px;\n  width: 18px;\n  color: #fff;\n  background-color: #37bead;\n  border-radius: 50%;\n}\n\n.cs-w-100{\n  width: 100% !important;\n}\n\n.cs-w-40p{\n  width: 40px;\n}\n\n.cs-pos-abs{\n  position: absolute;\n}\n\n.cs-float-left{\n  float: left;\n}\n\n.cs-float-right{\n  float: right;\n}\n\n/* WEB VIEW */\n@media screen and (min-width: 768px) {\n\n  .cs-show-mobile {\n    display: none;\n  }\n\n  .cs-show-web {\n    display: block;\n  }\n\n}\n\n/* TAB VIEW */\n/* No greater than 992px, no less than 768px */\n@media screen and (min-width:768px) and (max-width:991px){\n  .cs-show-mobile {\n    display: none;\n  }\n\n  .cs-show-web {\n    display: block;\n  }\n\n  .cs-show-lg-tab {\n    display: none;\n  }\n\n  .cs-hide-lg-tab{\n    display: block;\n  }\n}\n\n /*LG */ \n@media screen and (min-width:992px) and (max-width:1200px){\n  .cs-show-lg-tab {\n    display: block;\n  }\n\n  .cs-hide-lg-tab{\n    display: none;\n  }\n}\n\n/* MD */\n@media screen and (min-width:768px) and (max-width:992px){\n  .cs-show-md-tab {\n    display: block;\n  }\n\n  .cs-hide-md-tab{\n    display: none;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .cs-show-mobile {\n    display: block;\n  }\n\n  .cs-show-web {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 600px) { \n  .cs-web-container{\n    margin: 0px 16px;\n  }\n  .cs-rp-40 {\n    padding-right: 0px;\n  }\n}\n \n.ant-menu-title-content{\n  color: #000 !important;\n  font-size: 15px !important;\n  font-weight: 400px !important;\n}\n/* Extra small devices (phones, 600px and down) */\n/* @media only screen and (max-width: 600px) {\n  .cs-not-for-mobile{\n    display: none !important;\n  }\n  .cs-center-vertical-mobile{\n    display: flex;\n    align-items: center;\n    align-content: center;\n  }\n  .cs-get-ticket-container{\n    padding: 20px 20px;\n  }\n  .cs-web-container{\n    padding: 0px 15px;\n  }\n  .cs-xs-bp-20{\n    padding-bottom: 20px;\n  }\n  .cs-only-for-mobile{\n    display: flex !important ;\n  }\n  .cs-mobile-logo{\n    float: right;\n    margin-top: 12px;\n  }\n} */\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* @media only screen and (min-width: 768px) and (max-width: 1199px) {\n  .cs-not-for-mobile{\n    display: none !important;\n  }\n  .cs-only-for-mobile{\n    display: flex !important ;\n  }\n\n} */\n\n/* @media screen and (min-width:768px) and (max-width:992px){\n  .cs-not-for-mobile{\n    display: none !important;\n  }\n  .cs-only-for-mobile{\n    display: flex !important ;\n  }\n} */\n\n/* No greater than 992px, no less than 1200px */\n/* @media screen and (min-width:992px) and (max-width:1200px){\n  .cs-not-for-mobile{\n    display: none !important;\n  }\n  .cs-only-for-mobile{\n    display: flex !important ;\n  }\n}\n\n.cs-not-for-mobile{\n  display: content !important;\n}\n.cs-only-for-mobile{\n  display: none;\n} */\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* @media only screen and (min-width: 768px) {...} */\n\n/* Large devices (laptops/desktops, 992px and up) */\n/* @media only screen and (min-width: 992px) {...} */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n/* @media only screen and (min-width: 1200px) {...} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/margin.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/margin.css ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-rm-5{\n    margin-right: 5px;\n}\n\n.cs-rm-10{\n    margin-right: 10px;\n}\n\n.cs-rm-20{\n    margin-right: 20px;\n}\n\n.cs-rm-40{\n    margin-right: 40px;\n}\n\n.cs-lm-40{\n    margin-left: 40px;\n}\n\n.cs-lm-10{\n    margin-left: 10px;\n}\n\n.cs-lm-15{\n    margin-left: 15px;\n}\n\n.cs-lm-20{\n    margin-left: 20px;\n}\n\n.cs-bm-5{\n    margin-bottom: 5px;\n}\n\n.cs-bm-20{\n    margin-bottom: 20px;\n}\n\n.cs-bm-30{\n    margin-bottom: 30px;\n}\n\n.cs-bm-40{\n    margin-bottom: 40px;\n}\n\n.cs-tm-10{\n    margin-top: 10px;\n}\n\n.cs-tm-15{\n    margin-top: 15px;\n}\n\n.cs-tm-20{\n    margin-top: 20px;\n}\n\n.cs-mt-40{\n    margin-top: 40px;\n}\n\n.cs-tm-40{\n    margin-top: 40px;\n}\n\n.cs-mt-60{\n    margin-top: 60px;\n}\n\n.cs-bm-0{\n    margin-bottom: 0px !important;\n}\n\n.cs-bm-10{\n    margin-bottom: 10px;\n}\n\n.cs-bm-15{\n    margin-bottom: 15px;\n}\n\n.cs-bm-20{\n    margin-bottom: 20px;\n}\n\n.cs-bm-25{\n    margin-bottom: 25px !important;\n}\n\n.cs-bm-30{\n    margin-bottom: 30px !important;\n}\n\n.cs-bm-40{\n    margin-bottom: 40px !important;\n}\n\n.cs-bm-50{\n    margin-bottom: 50px !important;\n}\n\n.cs-bm-60{\n    margin-bottom: 60px !important;\n}", "",{"version":3,"sources":["webpack://src/static/style/margin.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC","sourcesContent":[".cs-rm-5{\n    margin-right: 5px;\n}\n\n.cs-rm-10{\n    margin-right: 10px;\n}\n\n.cs-rm-20{\n    margin-right: 20px;\n}\n\n.cs-rm-40{\n    margin-right: 40px;\n}\n\n.cs-lm-40{\n    margin-left: 40px;\n}\n\n.cs-lm-10{\n    margin-left: 10px;\n}\n\n.cs-lm-15{\n    margin-left: 15px;\n}\n\n.cs-lm-20{\n    margin-left: 20px;\n}\n\n.cs-bm-5{\n    margin-bottom: 5px;\n}\n\n.cs-bm-20{\n    margin-bottom: 20px;\n}\n\n.cs-bm-30{\n    margin-bottom: 30px;\n}\n\n.cs-bm-40{\n    margin-bottom: 40px;\n}\n\n.cs-tm-10{\n    margin-top: 10px;\n}\n\n.cs-tm-15{\n    margin-top: 15px;\n}\n\n.cs-tm-20{\n    margin-top: 20px;\n}\n\n.cs-mt-40{\n    margin-top: 40px;\n}\n\n.cs-tm-40{\n    margin-top: 40px;\n}\n\n.cs-mt-60{\n    margin-top: 60px;\n}\n\n.cs-bm-0{\n    margin-bottom: 0px !important;\n}\n\n.cs-bm-10{\n    margin-bottom: 10px;\n}\n\n.cs-bm-15{\n    margin-bottom: 15px;\n}\n\n.cs-bm-20{\n    margin-bottom: 20px;\n}\n\n.cs-bm-25{\n    margin-bottom: 25px !important;\n}\n\n.cs-bm-30{\n    margin-bottom: 30px !important;\n}\n\n.cs-bm-40{\n    margin-bottom: 40px !important;\n}\n\n.cs-bm-50{\n    margin-bottom: 50px !important;\n}\n\n.cs-bm-60{\n    margin-bottom: 60px !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/mobile/Footer.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/mobile/Footer.css ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-mobile-bottom-nav{\n    padding: 20px 15px;\n    background-color: #fff;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;\n}", "",{"version":3,"sources":["webpack://src/static/style/mobile/Footer.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;IACf,SAAS;IACT,WAAW;IACX,0FAA0F;AAC9F","sourcesContent":[".cs-mobile-bottom-nav{\n    padding: 20px 15px;\n    background-color: #fff;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/padding.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/padding.css ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-p-5{\n    padding: 5px;\n}\n\n.cs-p-10{\n    padding: 10px;\n}\n\n.cs-p-15{\n    padding: 15px;\n}\n\n.cs-p-20{\n    padding: 20px;\n}\n\n.cs-p-40{\n    padding: 40px;\n}\n\n.cs-p-25{\n    padding: 25px;\n}\n\n.cs-p-30{\n    padding: 30px;\n}\n\n.cs-p-40{\n    padding: 40px;\n}\n\n.cs-tp-5{\n    padding-top: 5px;\n}\n\n.cs-tp-10{\n    padding-top: 10px;\n}\n\n.cs-tp-15{\n    padding-top: 15px;\n}\n\n.cs-tp-20{\n    padding-top: 20px;\n}\n\n.cs-tp-25{\n    padding-top: 25px;\n}\n\n.cs-tp-30{\n    padding-top: 30px;\n}\n\n.cs-tp-40{\n    padding-top: 40px;\n}\n\n.cs-tp-60{\n    padding-top: 60px;\n}\n\n.cs-tp-128{\n    padding-top: 128px;\n}\n\n.cs-tp-80{\n    padding-top: 80px;\n}\n\n.cs-tp-100{\n    padding-top: 100px;\n}\n\n.cs-bp-5{\n    padding-bottom: 5px;\n}\n\n.cs-bp-10{\n    padding-bottom: 10px;\n}\n\n.cs-bp-15{\n    padding-bottom: 15px;\n}\n\n.cs-bp-20{\n    padding-bottom: 20px;\n}\n\n.cs-bp-25{\n    padding-bottom: 25px;\n}\n\n.cs-bp-30{\n    padding-bottom: 30px;\n}\n\n.cs-bp-40{\n    padding-bottom: 40px;\n}\n\n.cs-bp-80{\n    padding-bottom: 80px;\n}\n\n.cs-bp-100{\n    padding-bottom: 100px;\n}\n\n.cs-rp-5{\n    padding-right: 5px;\n}\n\n.cs-rp-10{\n    padding-right: 10px;\n}\n\n.cs-rp-15{\n    padding-right: 15px;\n}\n\n.cs-rp-20{\n    padding-right: 20px;\n}\n\n\n.cs-lp-5{\n    padding-left: 5px;\n}\n\n.cs-lp-10{\n    padding-left: 10px;\n}\n\n.cs-lp-20{\n    padding-left: 20px;\n}\n\n.cs-lp-30{\n    padding-left: 30px;\n}\n\n.cs-lp-40{\n    padding-left: 40px;\n}", "",{"version":3,"sources":["webpack://src/static/style/padding.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[".cs-p-5{\n    padding: 5px;\n}\n\n.cs-p-10{\n    padding: 10px;\n}\n\n.cs-p-15{\n    padding: 15px;\n}\n\n.cs-p-20{\n    padding: 20px;\n}\n\n.cs-p-40{\n    padding: 40px;\n}\n\n.cs-p-25{\n    padding: 25px;\n}\n\n.cs-p-30{\n    padding: 30px;\n}\n\n.cs-p-40{\n    padding: 40px;\n}\n\n.cs-tp-5{\n    padding-top: 5px;\n}\n\n.cs-tp-10{\n    padding-top: 10px;\n}\n\n.cs-tp-15{\n    padding-top: 15px;\n}\n\n.cs-tp-20{\n    padding-top: 20px;\n}\n\n.cs-tp-25{\n    padding-top: 25px;\n}\n\n.cs-tp-30{\n    padding-top: 30px;\n}\n\n.cs-tp-40{\n    padding-top: 40px;\n}\n\n.cs-tp-60{\n    padding-top: 60px;\n}\n\n.cs-tp-128{\n    padding-top: 128px;\n}\n\n.cs-tp-80{\n    padding-top: 80px;\n}\n\n.cs-tp-100{\n    padding-top: 100px;\n}\n\n.cs-bp-5{\n    padding-bottom: 5px;\n}\n\n.cs-bp-10{\n    padding-bottom: 10px;\n}\n\n.cs-bp-15{\n    padding-bottom: 15px;\n}\n\n.cs-bp-20{\n    padding-bottom: 20px;\n}\n\n.cs-bp-25{\n    padding-bottom: 25px;\n}\n\n.cs-bp-30{\n    padding-bottom: 30px;\n}\n\n.cs-bp-40{\n    padding-bottom: 40px;\n}\n\n.cs-bp-80{\n    padding-bottom: 80px;\n}\n\n.cs-bp-100{\n    padding-bottom: 100px;\n}\n\n.cs-rp-5{\n    padding-right: 5px;\n}\n\n.cs-rp-10{\n    padding-right: 10px;\n}\n\n.cs-rp-15{\n    padding-right: 15px;\n}\n\n.cs-rp-20{\n    padding-right: 20px;\n}\n\n\n.cs-lp-5{\n    padding-left: 5px;\n}\n\n.cs-lp-10{\n    padding-left: 10px;\n}\n\n.cs-lp-20{\n    padding-left: 20px;\n}\n\n.cs-lp-30{\n    padding-left: 30px;\n}\n\n.cs-lp-40{\n    padding-left: 40px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/web/cart.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/web/cart.css ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-cart-table .ant-table-thead > tr > th {\n    background-color: #1eacbd !important;\n    color: #fff;\n    font-weight: 600 !important;\n}\n\n.cs-btn-proceed-chkout{\n    padding: 10px 15px;\n    border-radius: 10px;\n    background-color: #1eacbd;\n    color: #fff;\n}", "",{"version":3,"sources":["webpack://src/static/style/web/cart.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;AACf","sourcesContent":[".cs-cart-table .ant-table-thead > tr > th {\n    background-color: #1eacbd !important;\n    color: #fff;\n    font-weight: 600 !important;\n}\n\n.cs-btn-proceed-chkout{\n    padding: 10px 15px;\n    border-radius: 10px;\n    background-color: #1eacbd;\n    color: #fff;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/web/category.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/web/category.css ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-cat-def-sorting .ant-select-selector{\n    border-radius: 14px !important;\n}\n\n.cs-cover-image-curve{\n    margin-top: -125px;\n}\n\n@media screen and (max-width: 767px) {\n    .cs-cover-image-curve{\n        margin-top: -78px !important;\n    }    \n  }", "",{"version":3,"sources":["webpack://src/static/style/web/category.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI;QACI,4BAA4B;IAChC;EACF","sourcesContent":[".cs-cat-def-sorting .ant-select-selector{\n    border-radius: 14px !important;\n}\n\n.cs-cover-image-curve{\n    margin-top: -125px;\n}\n\n@media screen and (max-width: 767px) {\n    .cs-cover-image-curve{\n        margin-top: -78px !important;\n    }    \n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/web/home.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/web/home.css ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-long-slider-img{\n    position: absolute;\n    left: 20%;\n    overflow: hidden;\n}\n\n.cs-long-slider-bone-img{\n    position: absolute;\n    left: 70%;\n}\n\n.cs-long-slider{\n    position: relative;\n    width: 100%;\n    padding: 20px 40px;\n    background-color: #aae297;\n    border-radius: 12px 100px 12px 100px;   \n}\n\n.slick-slide{\n    padding: 0px 20px 0px 0px !important;\n}\n  \n  @keyframes pulsate1 {\n    0% {\n      transform: scale(0.6);\n      opacity: 1;\n      box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);\n    }\n    100% {\n      transform: scale(1);\n      opacity: 0;\n      box-shadow: none;\n  \n    }\n  }\n  \n.testimonial-back {\n    background: white;\n}\n.gtco-testimonials {\n    position: relative;\n    margin-top: 30px;\n}\n.gtco-testimonials h2 {\n    font-size: 30px;\n    text-align: center;\n    color: #333;\n    margin-bottom: 50px;\n}\n/* .gtco-testimonials .owl-stage-outer {\n    padding: 30px 0;\n} */\n.gtco-testimonials .owl-nav {\n    display: none;\n}\n.gtco-testimonials .owl-dots {\n    text-align: center;\n}\n.gtco-testimonials .owl-dots span {\n    position: relative;\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    display: block;\n    background: #fff;\n    border: 2px solid #01b0f8;\n    margin: 0 5px;\n}\n.gtco-testimonials .owl-dots .active {\n    box-shadow: none;\n}\n.gtco-testimonials .owl-dots .active span {\n    background: #01b0f8;\n    box-shadow: none;\n    height: 12px;\n    width: 12px;\n    margin-bottom: -1px;\n}\n.gtco-testimonials .card {\n    background: #fff;\n    box-shadow: 0 8px 30px -7px #c9dff0;\n    margin: 0 20px;\n    padding: 0 10px;\n    border-radius: 4px;\n    border: 0;\n}\n.gtco-testimonials .card .card-img-top {\n    max-width: 100px;\n    border-radius: 50%;\n    margin: 15px auto 0;\n    box-shadow: 0 8px 20px -4px #95abbb;\n    width: 100px;\n    height: 100px;\n}\n.gtco-testimonials .card h5 {\n    color: #01b0f8;\n    font-size: 21px;\n    line-height: 1.3;\n}\n.gtco-testimonials .card h5 span {\n    font-size: 18px;\n    color: #666;\n}\n.gtco-testimonials .card p {\n    font-size: 18px;\n    color: #555;\n    padding-bottom: 15px;\n}\n.gtco-testimonials .active {\n    opacity: 0.5;\n    transition: all 0.3s;\n}\n.gtco-testimonials .center {\n    opacity: 1;\n}\n.gtco-testimonials .center h5 {\n    font-size: 24px;\n}\n.gtco-testimonials .center h5 span {\n    font-size: 20px;\n}\n.gtco-testimonials .center .card-img-top {\n    max-width: 100%;\n    height: 120px;\n    width: 120px;\n}\n@media (max-width: 767px) {\n    .gtco-testimonials {\n        margin-top: 20px;\n   }\n}\n.owl-carousel .owl-nav button.owl-next, .owl-carousel .owl-nav button.owl-prev {\n    outline: 0;\n}\n.owl-carousel button.owl-dot {\n    outline: 0;\n}\n\n@media screen and (min-width:992px) and (max-width:1200px){\n    .cs-long-slider-bone-img{\n        position: absolute;\n        left: 50%;\n    }\n  }\n  \n  /* MD */\n  @media screen and (min-width:768px) and (max-width:992px){\n    .cs-long-slider-bone-img{\n        position: absolute;\n        left: 50%;\n    }\n  }", "",{"version":3,"sources":["webpack://src/static/style/web/home.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;EAkBE;IACE;MAEE,qBAAqB;MACrB,UAAU;MACV,yGAAyG;IAC3G;IACA;MAEE,mBAAmB;MACnB,UAAU;MACV,gBAAgB;;IAElB;EACF;;AAEF;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,mBAAmB;AACvB;AACA;;GAEG;AACH;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;AACjB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,mCAAmC;IACnC,YAAY;IACZ,aAAa;AACjB;AACA;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,WAAW;AACf;AACA;IACI,eAAe;IACf,WAAW;IACX,oBAAoB;AACxB;AACA;IACI,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,UAAU;AACd;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,aAAa;IACb,YAAY;AAChB;AACA;IACI;QACI,gBAAgB;GACrB;AACH;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;;AAEA;IACI;QACI,kBAAkB;QAClB,SAAS;IACb;EACF;;EAEA,OAAO;EACP;IACE;QACI,kBAAkB;QAClB,SAAS;IACb;EACF","sourcesContent":[".cs-long-slider-img{\n    position: absolute;\n    left: 20%;\n    overflow: hidden;\n}\n\n.cs-long-slider-bone-img{\n    position: absolute;\n    left: 70%;\n}\n\n.cs-long-slider{\n    position: relative;\n    width: 100%;\n    padding: 20px 40px;\n    background-color: #aae297;\n    border-radius: 12px 100px 12px 100px;   \n}\n\n.slick-slide{\n    padding: 0px 20px 0px 0px !important;\n}\n\n  @-webkit-keyframes pulsate1 {\n    0% {\n      -webkit-transform: scale(0.6);\n      transform: scale(0.6);\n      opacity: 1;\n      box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);\n    }\n    100% {\n      -webkit-transform: scale(1);\n      transform: scale(1);\n      opacity: 0;\n      box-shadow: none;\n  \n    }\n  }\n  \n  @keyframes pulsate1 {\n    0% {\n      -webkit-transform: scale(0.6);\n      transform: scale(0.6);\n      opacity: 1;\n      box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);\n    }\n    100% {\n      -webkit-transform: scale(1, 1);\n      transform: scale(1);\n      opacity: 0;\n      box-shadow: none;\n  \n    }\n  }\n  \n.testimonial-back {\n    background: white;\n}\n.gtco-testimonials {\n    position: relative;\n    margin-top: 30px;\n}\n.gtco-testimonials h2 {\n    font-size: 30px;\n    text-align: center;\n    color: #333;\n    margin-bottom: 50px;\n}\n/* .gtco-testimonials .owl-stage-outer {\n    padding: 30px 0;\n} */\n.gtco-testimonials .owl-nav {\n    display: none;\n}\n.gtco-testimonials .owl-dots {\n    text-align: center;\n}\n.gtco-testimonials .owl-dots span {\n    position: relative;\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    display: block;\n    background: #fff;\n    border: 2px solid #01b0f8;\n    margin: 0 5px;\n}\n.gtco-testimonials .owl-dots .active {\n    box-shadow: none;\n}\n.gtco-testimonials .owl-dots .active span {\n    background: #01b0f8;\n    box-shadow: none;\n    height: 12px;\n    width: 12px;\n    margin-bottom: -1px;\n}\n.gtco-testimonials .card {\n    background: #fff;\n    box-shadow: 0 8px 30px -7px #c9dff0;\n    margin: 0 20px;\n    padding: 0 10px;\n    border-radius: 4px;\n    border: 0;\n}\n.gtco-testimonials .card .card-img-top {\n    max-width: 100px;\n    border-radius: 50%;\n    margin: 15px auto 0;\n    box-shadow: 0 8px 20px -4px #95abbb;\n    width: 100px;\n    height: 100px;\n}\n.gtco-testimonials .card h5 {\n    color: #01b0f8;\n    font-size: 21px;\n    line-height: 1.3;\n}\n.gtco-testimonials .card h5 span {\n    font-size: 18px;\n    color: #666;\n}\n.gtco-testimonials .card p {\n    font-size: 18px;\n    color: #555;\n    padding-bottom: 15px;\n}\n.gtco-testimonials .active {\n    opacity: 0.5;\n    transition: all 0.3s;\n}\n.gtco-testimonials .center {\n    opacity: 1;\n}\n.gtco-testimonials .center h5 {\n    font-size: 24px;\n}\n.gtco-testimonials .center h5 span {\n    font-size: 20px;\n}\n.gtco-testimonials .center .card-img-top {\n    max-width: 100%;\n    height: 120px;\n    width: 120px;\n}\n@media (max-width: 767px) {\n    .gtco-testimonials {\n        margin-top: 20px;\n   }\n}\n.owl-carousel .owl-nav button.owl-next, .owl-carousel .owl-nav button.owl-prev {\n    outline: 0;\n}\n.owl-carousel button.owl-dot {\n    outline: 0;\n}\n\n@media screen and (min-width:992px) and (max-width:1200px){\n    .cs-long-slider-bone-img{\n        position: absolute;\n        left: 50%;\n    }\n  }\n  \n  /* MD */\n  @media screen and (min-width:768px) and (max-width:992px){\n    .cs-long-slider-bone-img{\n        position: absolute;\n        left: 50%;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/style/web/product.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/static/style/web/product.css ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cs-product-card{\n    border: 1px solid rgba(0,0,0,.1);\n    border-radius: 8px;\n}\n\n.cs-product-card:hover{\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.cs-product-card-cat-txt{\n    font-size: 14px;\n    text-align: center;\n}\n\n.cs-product-card-prod-name-txt{\n    font-size: 26px;\n}\n\n.cs-product-card-name{\n    height: 50px;\n}\n\n.cs-golden-star div{\n    color: #fbdd3d\n}\n\n.cs-product-card-name:hover{\n    color: #1eacbd;\n}\n\n.cs-product-card-info{\n    padding: 12px 12px 8px 12px;\n}\n\n.slick-arrow {\n    display: none !important;\n}\n.slick-prev{\n    display: none !important;\n}\n.slick-next {\n    display: none !important;\n}\n.slick-arrow .slick-next{\n    display: none !important;\n}\n/* \n.cs-product-card-rating{\n    background-color: ;\n} */\n\n.cs-product-card-mrp{\n    color: rgba(0, 0, 0, 0.39);\n    text-decoration: line-through;\n}\n\n.cs-product-card-pricing-section{\n    justify-content: center;\n    justify-items: center;\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n}\n\n.cs-product-card-addtocart{\n    background-color: #1eacbd;\n    color: #fff;\n    border-radius: 18px;\n    padding: 8px 12px;\n}\n\n.cs-divider-line{\n    background-color: rgba(0, 0, 0, 0.164);\n    width: 100%;\n    height: 1px;\n}\n\n.cs-product-card-rate{\n    font-size: 16px;\n}\n\n@media only screen and (max-width: 600px) { \n    .cs-product-card-prod-name-txt{\n        font-size: 20px;\n        text-align: center;\n    }\n\n    .cs-product-card-rate{\n        font-size: 14px;\n    }\n}", "",{"version":3,"sources":["webpack://src/static/style/web/product.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI;AACJ;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,wBAAwB;AAC5B;AACA;;;GAGG;;AAEH;IACI,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,sBAAsB;IACtB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,sCAAsC;IACtC,WAAW;IACX,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;AACJ","sourcesContent":[".cs-product-card{\n    border: 1px solid rgba(0,0,0,.1);\n    border-radius: 8px;\n}\n\n.cs-product-card:hover{\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.cs-product-card-cat-txt{\n    font-size: 14px;\n    text-align: center;\n}\n\n.cs-product-card-prod-name-txt{\n    font-size: 26px;\n}\n\n.cs-product-card-name{\n    height: 50px;\n}\n\n.cs-golden-star div{\n    color: #fbdd3d\n}\n\n.cs-product-card-name:hover{\n    color: #1eacbd;\n}\n\n.cs-product-card-info{\n    padding: 12px 12px 8px 12px;\n}\n\n.slick-arrow {\n    display: none !important;\n}\n.slick-prev{\n    display: none !important;\n}\n.slick-next {\n    display: none !important;\n}\n.slick-arrow .slick-next{\n    display: none !important;\n}\n/* \n.cs-product-card-rating{\n    background-color: ;\n} */\n\n.cs-product-card-mrp{\n    color: rgba(0, 0, 0, 0.39);\n    text-decoration: line-through;\n}\n\n.cs-product-card-pricing-section{\n    justify-content: center;\n    justify-items: center;\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n}\n\n.cs-product-card-addtocart{\n    background-color: #1eacbd;\n    color: #fff;\n    border-radius: 18px;\n    padding: 8px 12px;\n}\n\n.cs-divider-line{\n    background-color: rgba(0, 0, 0, 0.164);\n    width: 100%;\n    height: 1px;\n}\n\n.cs-product-card-rate{\n    font-size: 16px;\n}\n\n@media only screen and (max-width: 600px) { \n    .cs-product-card-prod-name-txt{\n        font-size: 20px;\n        text-align: center;\n    }\n\n    .cs-product-card-rate{\n        font-size: 14px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/theme/antd.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/theme/antd.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/index */ "./src/redux/index.js");
/* harmony import */ var _custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-routes/PublicRoute */ "./src/custom-routes/PublicRoute.js");
/* harmony import */ var _custom_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-routes/PrivateRoute */ "./src/custom-routes/PrivateRoute.js");
/* harmony import */ var _config_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/history */ "./src/config/history.js");
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login */ "./src/pages/login/index.jsx");
/* harmony import */ var _pages_SignUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/SignUp */ "./src/pages/SignUp/index.jsx");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home/index.jsx");
/* harmony import */ var _theme_antd_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme/antd.css */ "./src/theme/antd.css");
/* harmony import */ var _theme_antd_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_theme_antd_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _globalStyle_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globalStyle/style.css */ "./src/globalStyle/style.css");
/* harmony import */ var _globalStyle_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_globalStyle_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _globalStyle_globalStyle_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./globalStyle/globalStyle.css */ "./src/globalStyle/globalStyle.css");
/* harmony import */ var _globalStyle_globalStyle_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_globalStyle_globalStyle_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_style_main_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./static/style/main.css */ "./src/static/style/main.css");
/* harmony import */ var _static_style_main_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_style_main_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_inner_image_zoom_lib_InnerImageZoom_styles_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-inner-image-zoom/lib/InnerImageZoom/styles.css */ "./node_modules/react-inner-image-zoom/lib/InnerImageZoom/styles.css");
/* harmony import */ var react_inner_image_zoom_lib_InnerImageZoom_styles_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_inner_image_zoom_lib_InnerImageZoom_styles_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.theme.default.css */ "./node_modules/owl.carousel/dist/assets/owl.theme.default.css");
/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _pages_category__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/category */ "./src/pages/category/index.js");
/* harmony import */ var _pages_cart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/cart */ "./src/pages/cart/index.js");
/* harmony import */ var _pages_checkout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/checkout */ "./src/pages/checkout/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _pages_dogs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/dogs */ "./src/pages/dogs/index.js");
/* harmony import */ var _config_ScrollToTop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./config/ScrollToTop */ "./src/config/ScrollToTop.js");
/* harmony import */ var _pages_cat__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/cat */ "./src/pages/cat/index.js");
/* harmony import */ var _pages_todaydeals__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/todaydeals */ "./src/pages/todaydeals/index.js");
/* harmony import */ var _pages_brands__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/brands */ "./src/pages/brands/index.js");
/* harmony import */ var _pages_exclusive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/exclusive */ "./src/pages/exclusive/index.js");
/* harmony import */ var _pages_blogs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/blogs */ "./src/pages/blogs/index.js");
/* harmony import */ var _pages_rewards__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/rewards */ "./src/pages/rewards/index.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-promise-tracker */ "./node_modules/react-promise-tracker/lib/index.js");
/* harmony import */ var react_promise_tracker__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_promise_tracker__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _pages_productsingle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/productsingle */ "./src/pages/productsingle/index.js");
/* harmony import */ var _pages_allbrands__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/allbrands */ "./src/pages/allbrands/index.js");
/* harmony import */ var _pages_search__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/search */ "./src/pages/search/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();











 // import 'bootstrap/dist/css/bootstrap.min.css';
// import './globalStyle/antd.css'































const LoadingIndicator = props => {
  _s();

  const {
    promiseInProgress
  } = Object(react_promise_tracker__WEBPACK_IMPORTED_MODULE_35__["usePromiseTracker"])();
  return promiseInProgress && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])("div", {
    style: {
      top: 0,
      zIndex: 99999,
      position: "absolute",
      width: "100vw",
      height: "1000px",
      background: "#FFFFFF88"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])("span", {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_24__["Spin"], {
        size: 'large'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

_s(LoadingIndicator, "KTo1xiutw/iZHt+hlD1avyNKva4=", false, function () {
  return [react_promise_tracker__WEBPACK_IMPORTED_MODULE_35__["usePromiseTracker"]];
});

_c = LoadingIndicator;

const App = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: _redux_index__WEBPACK_IMPORTED_MODULE_3__["store"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
        history: _config_history__WEBPACK_IMPORTED_MODULE_6__["history"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_config_ScrollToTop__WEBPACK_IMPORTED_MODULE_26__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/home",
            component: _pages_home__WEBPACK_IMPORTED_MODULE_9__["HomePage"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/category",
            component: _pages_category__WEBPACK_IMPORTED_MODULE_21__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/log-in",
            component: _pages_login__WEBPACK_IMPORTED_MODULE_7__["Login"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/sign-up",
            component: _pages_SignUp__WEBPACK_IMPORTED_MODULE_8__["SignUp"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/cart",
            component: _pages_cart__WEBPACK_IMPORTED_MODULE_22__["Cart"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/checkout",
            component: _pages_checkout__WEBPACK_IMPORTED_MODULE_23__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/product/:id",
            component: _pages_productsingle__WEBPACK_IMPORTED_MODULE_36__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/brand/allproducts/:id",
            component: _pages_allbrands__WEBPACK_IMPORTED_MODULE_37__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/:category/:id",
            component: _pages_dogs__WEBPACK_IMPORTED_MODULE_25__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/bestdeals",
            component: _pages_todaydeals__WEBPACK_IMPORTED_MODULE_28__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/brands",
            component: _pages_brands__WEBPACK_IMPORTED_MODULE_29__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/exclusive",
            component: _pages_exclusive__WEBPACK_IMPORTED_MODULE_30__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/blogs",
            component: _pages_blogs__WEBPACK_IMPORTED_MODULE_31__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/rewards",
            component: _pages_rewards__WEBPACK_IMPORTED_MODULE_32__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/search",
            component: _pages_search__WEBPACK_IMPORTED_MODULE_38__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(_custom_routes_PublicRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
            path: "/login",
            component: _pages_login__WEBPACK_IMPORTED_MODULE_7__["Login"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
            from: "/",
            to: "/home/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_34__["ToastContainer"], {
      autoClose: 3200
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_39__["jsxDEV"])(LoadingIndicator, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, undefined);
};

_c2 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "LoadingIndicator");
__webpack_require__.$Refresh$.register(_c2, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/appController/AppController.js":
/*!********************************************!*\
  !*** ./src/appController/AppController.js ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _appController_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appController.css */ "./src/appController/appController.css");
/* harmony import */ var _appController_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_appController_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_sideMenu_SideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sideMenu/SideMenu */ "./src/components/sideMenu/SideMenu.js");
/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/header */ "./src/layouts/header/index.js");
/* harmony import */ var _components_megaMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/megaMenu */ "./src/components/megaMenu/index.jsx");
/* harmony import */ var _layouts_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/footer */ "./src/layouts/footer/index.js");
/* harmony import */ var public_ip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! public-ip */ "./node_modules/public-ip/browser.js");
/* harmony import */ var public_ip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(public_ip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_allData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/allData */ "./src/redux/actions/allData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/appController/AppController.js",
    _s = __webpack_require__.$Refresh$.signature();













const {
  Content
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const AppController = ({
  history,
  children
}) => {
  _s();

  const [top, setTop] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [collapsed, setcollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [searchPage, setSearchPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.allData);

  const getClientIp = async () => await public_ip__WEBPACK_IMPORTED_MODULE_8___default.a.v4({
    fallbackUrls: ["https://ifconfig.co/ip"]
  });

  const toggle = () => {
    setcollapsed(!collapsed);
  };

  const init = async () => {
    // console.log("render")
    let ip = await getClientIp();
    dispatch(Object(_redux_actions_allData__WEBPACK_IMPORTED_MODULE_10__["updateUserCartAction"])(ip));
    dispatch(Object(_redux_actions_allData__WEBPACK_IMPORTED_MODULE_10__["updateFeatureBannerAction"])());
    dispatch(Object(_redux_actions_allData__WEBPACK_IMPORTED_MODULE_10__["updateMainBannerAction"])()); // dispatch(updateSubCategoryAction())
    // dispatch(updateProductsAction())
    // dispatch(updateMasterAction())
    // dispatch(updateParentAction())

    dispatch(Object(_redux_actions_allData__WEBPACK_IMPORTED_MODULE_10__["updateBlogDataAction"])());
    dispatch(Object(_redux_actions_allData__WEBPACK_IMPORTED_MODULE_10__["updateBrandAction"])());
    dispatch(Object(_redux_actions_allData__WEBPACK_IMPORTED_MODULE_10__["updateCompleteDataAction"])());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    init();
  }, []);

  const handleOnSearchPageChange = value => {
    setSearchPage(value);
  }; // useEffect(() => {
  //   if (allData) {
  //     getCompleteData()
  //   }
  // }, [allData])
  // const getCompleteData = () => {
  //   let completeData = [];
  //   if (allData.products.length) {
  //     completeData.push(allData.products)
  //     if(allData.subCategory.length){
  //       completeData
  //     }
  //     console.log("allData.products", allData.products)
  //   }
  //   // dispatch(updateCompleteDataAction(data))
  // }
  // const getMobileBuggerMenu = history => {
  //   return (
  //     <div className="mobile-header">
  //       <div>
  //         {React.createElement(
  //           collapsed ? AlignLeftOutlined : AlignLeftOutlined,
  //           { className: "trigger", onClick: toggle }
  //         )}
  //       </div>
  //       <div>
  //         <span className="">
  //           <h3 className="cs-txt-fff">Logo</h3>
  //         </span>
  //       </div>
  //     </div>
  //   );
  // };


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: "cs-show-web",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
          className: "site-layout " + (collapsed ? "" : "over-hid"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Affix"], {
            offsetTop: .1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("header", {
              className: "app-header",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_layouts_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
                history: history
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_megaMenu__WEBPACK_IMPORTED_MODULE_6__["MegaMenu"], {
              history: history
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Content, {
            style: {//  margin: "24px 16px",
              //  marginLeft: 12,
              //  marginRight: 12,
              // padding: 0,
              // height: "100vh",
              // minHeight: 280
            },
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_layouts_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
            history: history
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: "cs-show-mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
          className: "site-layout " + (collapsed ? "" : "over-hid"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("header", {
            className: "app-header",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_layouts_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
              history: history
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Content, {
            style: {
              //  margin: "24px 16px",
              //  marginLeft: 12,
              //  marginRight: 12,
              padding: 0,
              height: "100%",
              minHeight: 280
            },
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_layouts_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
          history: history
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, undefined);
};

_s(AppController, "aBxXd3VWjolSYOUutcJStjgp99g=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c = AppController;

var _c;

__webpack_require__.$Refresh$.register(_c, "AppController");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/appController/appController.css":
/*!*********************************************!*\
  !*** ./src/appController/appController.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./appController.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/appController/appController.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./appController.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/appController/appController.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./appController.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/appController/appController.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/DMMS-blue.png":
/*!**********************************!*\
  !*** ./src/assets/DMMS-blue.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/DMMS-blue.12d3c5bd.png");

/***/ }),

/***/ "./src/assets/fonts/Butler-Black.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Butler-Black.woff ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-Black.a5c6a98a.woff");

/***/ }),

/***/ "./src/assets/fonts/Butler-Black.woff2":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Butler-Black.woff2 ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-Black.393b8442.woff2");

/***/ }),

/***/ "./src/assets/fonts/Butler-Bold.woff":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Butler-Bold.woff ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-Bold.4ac98389.woff");

/***/ }),

/***/ "./src/assets/fonts/Butler-Bold.woff2":
/*!********************************************!*\
  !*** ./src/assets/fonts/Butler-Bold.woff2 ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-Bold.67aacca7.woff2");

/***/ }),

/***/ "./src/assets/fonts/Butler-ExtraBold.woff":
/*!************************************************!*\
  !*** ./src/assets/fonts/Butler-ExtraBold.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-ExtraBold.80741218.woff");

/***/ }),

/***/ "./src/assets/fonts/Butler-ExtraBold.woff2":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Butler-ExtraBold.woff2 ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-ExtraBold.ec03900c.woff2");

/***/ }),

/***/ "./src/assets/fonts/Butler-Light.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Butler-Light.woff ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-Light.0f611ba7.woff");

/***/ }),

/***/ "./src/assets/fonts/Butler-Light.woff2":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Butler-Light.woff2 ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-Light.73f35be5.woff2");

/***/ }),

/***/ "./src/assets/fonts/Butler-Medium.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Butler-Medium.woff ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-Medium.88165e78.woff");

/***/ }),

/***/ "./src/assets/fonts/Butler-Medium.woff2":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Butler-Medium.woff2 ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-Medium.9ae56492.woff2");

/***/ }),

/***/ "./src/assets/fonts/Butler-UltraLight.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Butler-UltraLight.woff ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-UltraLight.0f38ab4c.woff");

/***/ }),

/***/ "./src/assets/fonts/Butler-UltraLight.woff2":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Butler-UltraLight.woff2 ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler-UltraLight.375e3c4e.woff2");

/***/ }),

/***/ "./src/assets/fonts/Butler.woff":
/*!**************************************!*\
  !*** ./src/assets/fonts/Butler.woff ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler.7704cc6b.woff");

/***/ }),

/***/ "./src/assets/fonts/Butler.woff2":
/*!***************************************!*\
  !*** ./src/assets/fonts/Butler.woff2 ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Butler.99c7b1a6.woff2");

/***/ }),

/***/ "./src/components/addtocart/index.jsx":
/*!********************************************!*\
  !*** ./src/components/addtocart/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var public_ip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public-ip */ "./node_modules/public-ip/browser.js");
/* harmony import */ var public_ip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_ip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _elements_api_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/api/cart */ "./src/elements/api/cart.js");
/* harmony import */ var _redux_actions_allData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/allData */ "./src/redux/actions/allData.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/addtocart/index.jsx",
    _s = __webpack_require__.$Refresh$.signature();











const AddToCart = ({
  history,
  productId
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const getClientIp = async () => await public_ip__WEBPACK_IMPORTED_MODULE_2___default.a.v4({
    fallbackUrls: ["https://ifconfig.co/ip"]
  });

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.allData);
  const [id, setId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const init = () => {
    if (allData.userCart.length) {
      if (allData.userCart.filter(data => data.productId === productId)[0]) {
        setData(allData.userCart.filter(data => data.productId === productId)[0]["quantity"]);
        setId(allData.userCart.filter(data => data.productId === productId)[0]["id"]);
      } else {
        setId(null);
        setData(0);
      }
    } else {
      setId(null);
      setData(0);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    init();
  }, [allData, allData.userCart, productId]);

  const addTo = async positive => {
    let ip = await getClientIp();
    let res = await Object(_elements_api_cart__WEBPACK_IMPORTED_MODULE_4__["setCart"])({
      parentId: ip,
      productId: productId,
      id: id,
      quantity: positive ? parseInt(data) + 1 : parseInt(data) - 1,
      action: parseInt(data) === 0 && id === null ? "INSERT" : parseInt(data) === 1 && id !== null && !positive ? "DELETE" : "UPDATE"
    });
    if (res.status === "1") dispatch(Object(_redux_actions_allData__WEBPACK_IMPORTED_MODULE_5__["updateUserCartAction"])(ip, true));
  };

  return data !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "cs-dis-flex cs-tp-15 cs-bp-20",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "cs-dis-flex cs-vt-center",
      onClick: () => addTo(true),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlusCircle"],
        className: "cs-font-22"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "cs-dis-flex cs-vt-center cs-lp-10 cs-rp-10",
      children: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "cs-dis-flex cs-vt-center",
      onClick: () => addTo(false),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faMinusCircle"],
        className: "cs-font-22"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "cs-dis-flex cs-tp-15 cs-bp-20",
    onClick: () => addTo(true),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      count: data,
      style: {
        backgroundColor: "#07bc0c"
      },
      offset: [0, 0],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "cs-product-card-addtocart cs-pointer",
        children: "Add to Cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, undefined);
};

_s(AddToCart, "vhY0Q98Ckx4sfsnEd7xrmslBdvk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = AddToCart;
/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

var _c;

__webpack_require__.$Refresh$.register(_c, "AddToCart");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/allbrand/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/allbrand/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_coverimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/coverimg */ "./src/pages/coverimg/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _productcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productcard */ "./src/components/productcard/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/allbrand/index.jsx",
    _s = __webpack_require__.$Refresh$.signature();







const AllBrandComp = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.allData);
  let allBrandId = window.location.pathname.split("/")[3];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.products.length) {
      let tempData = false;
      tempData = allData.products.filter(e => e.brandId === allBrandId).map(data => {
        if (allData.subCategory.length) {
          if (allData.brand.length) {
            return Object.assign({}, data, {
              brandData: allData.brand.filter(filterBranddata => filterBranddata.id == data.brandId)
            }, {
              subcat: allData.subCategory.filter(filterdata => filterdata.id === data.subMasterId)
            }); // return Object.assign({}, data, { subcat: allData.subCategory.filter((filterdata) => filterdata.id === data.subMasterId) })
          }
        }
      }); // console.log("tempData", tempData)

      setData(tempData);
    }
  }, [allData]);
  return data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_pages_coverimg__WEBPACK_IMPORTED_MODULE_1__["default"], {
        coverName: "Shop by Brands"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-web-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_productcard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bestDeals: data,
        history: history,
        toMainProduct: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

_s(AllBrandComp, "lUbkFPNcLZzGjjnVvyskAohmf10=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = AllBrandComp;
/* harmony default export */ __webpack_exports__["default"] = (AllBrandComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "AllBrandComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/blogs/index.js":
/*!***************************************!*\
  !*** ./src/components/blogs/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _pages_coverimg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/coverimg */ "./src/pages/coverimg/index.js");
/* harmony import */ var _static_images_coverpic_blog_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/coverpic/blog.jpeg */ "./src/static/images/coverpic/blog.jpeg");
/* harmony import */ var _static_images_coverpic_coverpic_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/coverpic/coverpic.jpeg */ "./src/static/images/coverpic/coverpic.jpeg");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/blogs/index.js",
    _s = __webpack_require__.$Refresh$.signature();










const BlogsComp = () => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [allImages, setAllImages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.blogData.length) {
      setData(allData.blogData);
      if (allData.blogData[0].images) setAllImages(allData.blogData[0].images.split(','));
    }
  }, [allData]);
  return data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_pages_coverimg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      coverName: "Blogs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "cs-web-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: data.map((data, index) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xl: 10,
              className: "cs-bp-80",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                src: `${_lib_constant__WEBPACK_IMPORTED_MODULE_6__["ImageUrl"]}/${data.images.split(',')[0]}`,
                className: "cs-w-100 frz-br-8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "cs-font-instyle cs-font-32 cs-tp-10",
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "cs-tp-10 cs-lp-5",
                children: data.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "cs-tp-20 cs-font-20",
                children: data.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: "NO DATA FOUND"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 7
  }, undefined);
};

_s(BlogsComp, "dY3fvDNyzX9agTjd5zqFHYvGQrI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = BlogsComp;
/* harmony default export */ __webpack_exports__["default"] = (BlogsComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "BlogsComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/brands/index.js":
/*!****************************************!*\
  !*** ./src/components/brands/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_coverimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/coverimg */ "./src/pages/coverimg/index.js");
/* harmony import */ var _static_images_products_product1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/products/product1.jpg */ "./src/static/images/products/product1.jpg");
/* harmony import */ var _static_images_products_product2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/products/product2.jpg */ "./src/static/images/products/product2.jpg");
/* harmony import */ var _static_images_products_product3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/products/product3.jpg */ "./src/static/images/products/product3.jpg");
/* harmony import */ var _static_images_products_product4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/images/products/product4.jpg */ "./src/static/images/products/product4.jpg");
/* harmony import */ var _productcard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../productcard */ "./src/components/productcard/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/brands/index.js",
    _s = __webpack_require__.$Refresh$.signature();












const BrandsComp = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.brand.length) {
      setData(allData.brand);
    }
  }, [allData]);
  return data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_pages_coverimg__WEBPACK_IMPORTED_MODULE_1__["default"], {
        coverName: "Shop with world's top most brands"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "cs-web-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_productcard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        bestDeals: data,
        history: history,
        noPrice: true,
        noRating: true,
        isBrand: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: "NO DATA FOUND"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined);
};

_s(BrandsComp, "lUbkFPNcLZzGjjnVvyskAohmf10=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = BrandsComp;
/* harmony default export */ __webpack_exports__["default"] = (BrandsComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "BrandsComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cart/CartTable.jsx":
/*!*******************************************!*\
  !*** ./src/components/cart/CartTable.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/cart/CartTable.jsx",
    _s = __webpack_require__.$Refresh$.signature();






const columns = [{
  title: 'Product',
  dataIndex: 'name',
  key: 'name',
  render: text => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 21
  }, undefined)
}, {
  title: 'Price',
  dataIndex: 'price',
  key: 'price'
}, {
  title: 'Quantity',
  dataIndex: 'quantity',
  key: 'quantity'
}, {
  title: 'Subtotal',
  dataIndex: '',
  key: '',
  render: data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: +data.price * +data.quantity
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }, undefined)
} // {
//   title: 'Action',
//   key: 'action',
//   render: (text, record) => (
//     <Space size="middle">
//       <a>Invite {record.name}</a>
//       <a>Delete</a>
//     </Space>
//   ),
// },
];

const CartTable = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [subTotal, setSubTotal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getTableData();
  }, [allData, allData.userCart]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (data) {
      getSubTotal();
    }
  }, [data]);

  const getSubTotal = () => {
    let tempTotal = [];
    data.map(data => {
      tempTotal.push(data.subtotal);
    });

    if (tempTotal.length) {
      const reducer = (previousValue, currentValue) => previousValue + currentValue;

      let finalTotal = tempTotal.reduce(reducer);
      setSubTotal(finalTotal);
    }
  };

  const getTableData = () => {
    let tempProduct = [];

    if (allData.userCart.length) {
      if (allData.products.length) {
        allData.products.map((prodData, index) => {
          prodData.price = +prodData.price;
          return allData.userCart.map((cartData, cartindex) => {
            if (prodData.id === cartData.productId) {
              cartData.quantity = +cartData.quantity;
              cartData.subtotal = cartData.quantity * prodData.price;
              return tempProduct.push({ ...prodData,
                ...cartData
              });
            }
          });
        });
      }

      setData([...tempProduct]);
    } else {
      setData([]);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "cs-font-instyle cs-font-24 cs-bp-20",
          children: "Shopping Cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
          className: "cs-cart-table",
          columns: columns,
          dataSource: data,
          pagination: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "cs-dis-flex cs-tp-20",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          style: {
            width: 300,
            marginRight: 20
          },
          placeholder: "Apply Coupon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          className: "cs-lp-20",
          children: "Apply"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-font-instyle cs-font-24 cs-tp-30 cs-bp-15",
      children: "Cart totals"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-hrz-divion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "cs-tp-20 cs-bp-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 6,
        children: "Subtotal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 6,
        children: ["Rs ", subTotal, " (Free Shipping)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-hrz-divion-light"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-hrz-divion-light"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "cs-tp-20 cs-bp-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 6,
        className: "cs-fw-700 cs-font-20",
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 6,
        className: "cs-fw-700 cs-font-20",
        children: ["Rs ", subTotal]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-hrz-divion-bold"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-dis-flex cs-hrz-center cs-tp-20 cs-pointer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "cs-btn-proceed-chkout",
        onClick: () => history.push("/checkout"),
        children: "PROCEED TO CHECKOUT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, undefined);
};

_s(CartTable, "XdDF8ub4Npl2zbMa4GZgqjmWzBw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = CartTable;
/* harmony default export */ __webpack_exports__["default"] = (CartTable);

var _c;

__webpack_require__.$Refresh$.register(_c, "CartTable");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cart/index.js":
/*!**************************************!*\
  !*** ./src/components/cart/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CartTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartTable */ "./src/components/cart/CartTable.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/cart/index.js";




const CartComp = ({
  history
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "cs-web-container cs-tp-40 cs-bp-100",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_CartTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
      history: history
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = CartComp;
/* harmony default export */ __webpack_exports__["default"] = (CartComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "CartComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/cat/index.js":
/*!*************************************!*\
  !*** ./src/components/cat/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_coverimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/coverimg */ "./src/pages/coverimg/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/cat/index.js";




const CatComp = ({
  history
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_pages_coverimg__WEBPACK_IMPORTED_MODULE_1__["default"], {
        coverName: "Cat Accessories & Products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "cs-web-container"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

_c = CatComp;
/* harmony default export */ __webpack_exports__["default"] = (CatComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "CatComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/category/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/category/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _static_images_products_product1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/products/product1.jpg */ "./src/static/images/products/product1.jpg");
/* harmony import */ var _static_images_products_product2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/products/product2.jpg */ "./src/static/images/products/product2.jpg");
/* harmony import */ var _static_images_products_product3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/products/product3.jpg */ "./src/static/images/products/product3.jpg");
/* harmony import */ var _static_images_products_product4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/images/products/product4.jpg */ "./src/static/images/products/product4.jpg");
/* harmony import */ var _sidecart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidecart */ "./src/components/sidecart/index.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _productcard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../productcard */ "./src/components/productcard/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/category/index.jsx",
    _s = __webpack_require__.$Refresh$.signature();















const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_7__["Menu"];

const Category = ({
  history
}) => {
  _s();

  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_7__["Select"];
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [product, setProduct] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [openId, setOpenId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [defaultSelected, setDefaultSelected] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.completeData.length) {
      setData(allData.completeData);
    }
  }, [allData]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (data) {
      getAllByTestId();
      getDefaultSelectedKey();
    }
  }, [data]);

  const getAllByTestId = () => {
    let tempIdData = [];
    data.map((parentData, index) => {
      parentData.children.map((subData, index) => {
        tempIdData.push(parentData.id, subData.id);
      });
    });
    setOpenId(tempIdData);
  };

  const getDefaultSelectedKey = () => {
    let tempkey = [];
    data.map((parentData, index) => {
      if (parentData.children.length) {
        parentData.children.map((subData, index) => {
          if (index == 0) {
            if (subData.children.length) {
              subData.children.map((subcat, index) => {
                if (subcat.children.length) {
                  tempkey.push(subcat.id);
                  setProduct(subcat.children);
                }
              });
              setDefaultSelected(tempkey);
            }
          }
        });
      }
    });
    setDefaultSelected(tempkey);
  };

  function handleChange(value) {// console.log(`selected ${value}`);
  }

  return data && openId && defaultSelected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
    className: "cs-web-container cs-tp-60 cs-bp-100",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 3,
        xs: 12,
        sm: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: "cs-fix-it",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
            className: "cs-font-instyle cs-font-24 cs-bp-25",
            children: "Product Category"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"], {
            defaultSelectedKeys: defaultSelected,
            defaultOpenKeys: react_device_detect__WEBPACK_IMPORTED_MODULE_10__["isMobile"] ? [] : openId,
            mode: "inline",
            children: data.map((data, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(SubMenu, {
              title: data.title,
              children: data.children.map((catData, ind) => {
                if (catData.children.length) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(SubMenu, {
                    title: catData.title,
                    children: catData.children.map(subCatData => {
                      if (subCatData.children.length) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
                          onClick: () => setProduct(subCatData.children),
                          children: subCatData.title
                        }, subCatData.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 43
                        }, undefined);
                      }
                    })
                  }, catData.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 29
                  }, undefined);
                }
              })
            }, data.id, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 21
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 9,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_productcard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          bestDeals: product,
          gridXl: 4,
          gridMd: 4,
          gridLg: 3,
          history: history,
          isGrid: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 7
  }, undefined);
};

_s(Category, "itYvoNhrAAAj+pXVkV8JfffCNmo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"]];
});

_c = Category;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

__webpack_require__.$Refresh$.register(_c, "Category");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/dog/index.js":
/*!*************************************!*\
  !*** ./src/components/dog/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_coverimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/coverimg */ "./src/pages/coverimg/index.js");
/* harmony import */ var _static_images_products_product1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/products/product1.jpg */ "./src/static/images/products/product1.jpg");
/* harmony import */ var _static_images_products_product2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/products/product2.jpg */ "./src/static/images/products/product2.jpg");
/* harmony import */ var _static_images_products_product3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/products/product3.jpg */ "./src/static/images/products/product3.jpg");
/* harmony import */ var _static_images_products_product4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/images/products/product4.jpg */ "./src/static/images/products/product4.jpg");
/* harmony import */ var _productcard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../productcard */ "./src/components/productcard/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/dog/index.js",
    _s = __webpack_require__.$Refresh$.signature();












const DogComp = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [allImages, setAllImages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let id = window.location.pathname.split('/')[2];

    if (allData.completeData.length) {
      let productsData = allData.products;
      productsData = productsData.filter(data => data.parentId === id);
      setData(productsData);
    }
  }, [allData, window.location.pathname.split('/')[2]]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_pages_coverimg__WEBPACK_IMPORTED_MODULE_1__["default"], {
        coverName: `${window.location.pathname.split('/')[1]} Accessories & Products`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "cs-web-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_productcard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        bestDeals: data,
        history: history,
        toMainProduct: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

_s(DogComp, "dY3fvDNyzX9agTjd5zqFHYvGQrI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = DogComp;
/* harmony default export */ __webpack_exports__["default"] = (DogComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "DogComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/exclusive/index.js":
/*!*******************************************!*\
  !*** ./src/components/exclusive/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_coverimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/coverimg */ "./src/pages/coverimg/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _productcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productcard */ "./src/components/productcard/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/exclusive/index.js",
    _s = __webpack_require__.$Refresh$.signature();







const ExclusiveComp = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.allData);
  let allBrandId = window.location.pathname.split("/")[3];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.products.length) {
      let tempData = false;
      tempData = allData.brand.filter(e => e.title === "Exclusive").map(data => {
        if (allData.subCategory.length) {
          if (allData.brand.length) {
            return Object.assign({}, data, {
              brandData: allData.brand.filter(filterBranddata => filterBranddata.id == data.brandId)
            }, {
              subcat: allData.subCategory.filter(filterdata => filterdata.id === data.subMasterId)
            }); // return Object.assign({}, data, { subcat: allData.subCategory.filter((filterdata) => filterdata.id === data.subMasterId) })
          }
        }
      }); // console.log("tempData exclusive", tempData)

      setData(tempData);
    }
  }, [allData]);
  return data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_pages_coverimg__WEBPACK_IMPORTED_MODULE_1__["default"], {
        coverName: "Exclusive products only on Doggiesthan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-web-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_productcard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bestDeals: data,
        history: history,
        noPrice: true,
        noRating: true,
        isBrand: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

_s(ExclusiveComp, "lUbkFPNcLZzGjjnVvyskAohmf10=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = ExclusiveComp;
/* harmony default export */ __webpack_exports__["default"] = (ExclusiveComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "ExclusiveComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/home/Banners.jsx":
/*!*****************************************!*\
  !*** ./src/components/home/Banners.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_slider_finaltemplate_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/slider/finaltemplate.png */ "./src/static/images/slider/finaltemplate.png");
/* harmony import */ var _static_images_slider_sliderimg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/slider/sliderimg.png */ "./src/static/images/slider/sliderimg.png");
/* harmony import */ var _static_images_slider_sldierimg1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/images/slider/sldierimg1.jpg */ "./src/static/images/slider/sldierimg1.jpg");
/* harmony import */ var _static_images_slider_sliderimg2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/images/slider/sliderimg2.jpg */ "./src/static/images/slider/sliderimg2.jpg");
/* harmony import */ var _static_images_slider_hero_prices_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/images/slider/hero_prices.png */ "./src/static/images/slider/hero_prices.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/home/Banners.jsx",
    _s = __webpack_require__.$Refresh$.signature();



 //local imports










const Banners = () => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [allImages, setAllImages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.headerBanner.length) {
      setData(allData.headerBanner);
      if (allData.headerBanner[0].images) setAllImages(allData.headerBanner[0].images.split(','));
    }
  }, [allData]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      noGutters: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 5,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "cs-web-container cs-tp-60",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, { ...settings,
            children: data.map((data, index) => {
              if (index > 0) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                    children: data.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                    className: "cs-font-instyle cs-font-50 cs-tm-20",
                    children: data.descp
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 23
                  }, undefined)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 21
                }, undefined);
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: 7,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
          src: `${_lib_constant__WEBPACK_IMPORTED_MODULE_9__["ImageUrl"]}/${allImages[0]}`,
          className: "cs-w-100"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined) // <div className="cs-web-container cs-tp-10">
  //   <Row>
  //     <Col xl={8}>
  //       {/* <div>
  //         <Slider {...settings}>
  //           <div>
  //             <img className="cs-w-100" src={templateblank} />
  //           </div>
  //           <div>
  //             <img className="cs-w-100" src={sliderimg1} />
  //           </div>
  //           <div>
  //             <img className="cs-w-100" src={sliderimg2} />
  //           </div>
  //         </Slider>
  //       </div> */}
  //     </Col>
  //     <Col xl={4}>
  //       {/* <Slider {...settings}>
  //         <div className="cs-side-cards cs-bg-red">
  //           <div className="cs-clr-fff cs-fw-600">
  //             LOYALTY PROGRAMS
  //           </div>
  //           <h1 className="cs-discount-style cs-tp-20 cs-clr-fff">
  //             Earn Points to Get Discounts
  //           </h1>
  //         </div>
  //       </Slider> */}
  //       {/* <Slider {...settings}>
  //         <div className="cs-side-cards cs-bg-cream">
  //           <h1 className="cs-discount-style">
  //             hello
  //           </h1>
  //         </div>
  //       </Slider> */}
  //       {/* <Slider {...settings}>
  //         <div className="cs-side-cards cs-bg-green">
  //           <h1 className="cs-discount-style">
  //             hello
  //           </h1>
  //         </div>
  //       </Slider> */}
  //     </Col>
  //   </Row>
  // <div className="cs-tp-30">
  //     <div className="cs-long-slider">
  //       <div className="cs-dis-flex">
  //         <div>
  //           <div className="cs-font-14 cs-ws-3 cs-fw-600 cs-tm-20 cs-bm-20">
  //             MANSOON PROMO CODE
  //           </div>
  //           <div className="cs-discount-style cs-font-38 cs-clr-fff">
  //             Big Brand
  //           </div>
  //           <div className="cs-discount-style cs-font-60">
  //             40% off
  //          </div>
  //         </div>
  //         <img className="cs-long-slider-img" src={catdog} />
  //       </div>
  //     </div>
  //   </div> 
  // </div>
  ;
};

_s(Banners, "dY3fvDNyzX9agTjd5zqFHYvGQrI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c = Banners;
/* harmony default export */ __webpack_exports__["default"] = (Banners);

var _c;

__webpack_require__.$Refresh$.register(_c, "Banners");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/home/Category.jsx":
/*!******************************************!*\
  !*** ./src/components/home/Category.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productcard */ "./src/components/productcard/index.js");
/* harmony import */ var _static_images_products_product1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/products/product1.jpg */ "./src/static/images/products/product1.jpg");
/* harmony import */ var _static_images_products_product2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/products/product2.jpg */ "./src/static/images/products/product2.jpg");
/* harmony import */ var _static_images_products_product3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/products/product3.jpg */ "./src/static/images/products/product3.jpg");
/* harmony import */ var _static_images_products_product4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/images/products/product4.jpg */ "./src/static/images/products/product4.jpg");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/home/Category.jsx",
    _s = __webpack_require__.$Refresh$.signature();











const Category = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.subCategory.length) {
      setData(allData.subCategory);
    }
  }, [allData]);
  return allData.subCategory.length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "cs-web-container cs-bp-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "cs-tp-100 cs-dis-flex cs-justify-sb",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "cs-font-instyle cs-font-38 cs-bp-20",
          children: "Shop by category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "cs-dis-flex cs-vt-center cs-pointer",
          onClick: () => history.push("/category"),
          children: "See All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_productcard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        bestDeals: data,
        history: history,
        noPrice: true,
        noRating: true,
        openCat: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

_s(Category, "lUbkFPNcLZzGjjnVvyskAohmf10=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = Category;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

__webpack_require__.$Refresh$.register(_c, "Category");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/home/ComboProduct.jsx":
/*!**********************************************!*\
  !*** ./src/components/home/ComboProduct.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productcard */ "./src/components/productcard/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/home/ComboProduct.jsx",
    _s = __webpack_require__.$Refresh$.signature();






const ComboProduct = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.products.length) {
      let tempData = false;
      tempData = allData.products.filter(e => e.isCombo === "Yes"); // console.log("tempData", tempData)

      setData(tempData);
    }
  }, [allData]);
  return data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "cs-web-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "cs-tp-40",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "cs-font-instyle cs-font-38 cs-bp-20",
          children: "Combo Products"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_productcard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        bestDeals: data,
        history: history,
        toMainProduct: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }, undefined) : null;
};

_s(ComboProduct, "lUbkFPNcLZzGjjnVvyskAohmf10=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = ComboProduct;
/* harmony default export */ __webpack_exports__["default"] = (ComboProduct);

var _c;

__webpack_require__.$Refresh$.register(_c, "ComboProduct");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/home/FeaturedBanner.jsx":
/*!************************************************!*\
  !*** ./src/components/home/FeaturedBanner.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_slider_catdog_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/slider/catdog.png */ "./src/static/images/slider/catdog.png");
/* harmony import */ var _static_images_slider_bone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/slider/bone.png */ "./src/static/images/slider/bone.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/home/FeaturedBanner.jsx",
    _s = __webpack_require__.$Refresh$.signature();








const FeaturedBanner = () => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [allImages, setAllImages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.featureBanner.length) {
      setData(allData.featureBanner);
      if (allData.featureBanner[0].images) setAllImages(allData.featureBanner[0].images.split(','));
    }
  }, [allData]);
  return data.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: "Loading.."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 30
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "cs-tp-128 cs-web-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "cs-long-slider",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "cs-dis-flex",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "cs-dis-flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "cs-font-14 cs-ws-3 cs-fw-600 cs-tm-20 cs-bm-20",
                children: data[0]["upperText"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "cs-font-instyle cs-font-38 cs-clr-fff",
                children: data[0]["middleText"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "cs-font-instyle cs-font-60",
                children: data[0]["lowerText"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "cs-show-web",
              children: [allImages[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                className: "cs-long-slider-img cs-hide-lg-tab cs-hide-md-tab",
                src: `${_lib_constant__WEBPACK_IMPORTED_MODULE_4__["ImageUrl"]}/${allImages[0]}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 34
              }, undefined), allImages[1] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                className: "cs-long-slider-bone-img",
                src: `${_lib_constant__WEBPACK_IMPORTED_MODULE_4__["ImageUrl"]}/${allImages[1]}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 34
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

_s(FeaturedBanner, "dY3fvDNyzX9agTjd5zqFHYvGQrI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FeaturedBanner;
/* harmony default export */ __webpack_exports__["default"] = (FeaturedBanner);

var _c;

__webpack_require__.$Refresh$.register(_c, "FeaturedBanner");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/home/FeaturedProduct.jsx":
/*!*************************************************!*\
  !*** ./src/components/home/FeaturedProduct.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productcard */ "./src/components/productcard/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/home/FeaturedProduct.jsx",
    _s = __webpack_require__.$Refresh$.signature();






const FeaturedProduct = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.products.length) {
      let tempData = false;
      tempData = allData.products.filter(e => e.isBestDeal === "Yes").map(data => {
        if (allData.subCategory.length) {
          if (allData.brand.length) {
            return Object.assign({}, data, {
              brandData: allData.brand.filter(filterBranddata => filterBranddata.id == data.brandId)
            }, {
              subcat: allData.subCategory.filter(filterdata => filterdata.id === data.subMasterId)
            });
          }
        }
      }); // console.log("tempData", tempData)

      setData(tempData);
    }
  }, [allData]);
  return data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "cs-web-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "cs-tp-128",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "cs-font-instyle cs-font-38 cs-bp-20",
          children: "Best Deals"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_productcard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        bestDeals: data,
        history: history,
        toMainProduct: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }, undefined) : null;
};

_s(FeaturedProduct, "lUbkFPNcLZzGjjnVvyskAohmf10=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = FeaturedProduct;
/* harmony default export */ __webpack_exports__["default"] = (FeaturedProduct);

var _c;

__webpack_require__.$Refresh$.register(_c, "FeaturedProduct");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/home/index.js":
/*!**************************************!*\
  !*** ./src/components/home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeaturedProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturedProduct */ "./src/components/home/FeaturedProduct.jsx");
/* harmony import */ var _Banners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Banners */ "./src/components/home/Banners.jsx");
/* harmony import */ var _FeaturedBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeaturedBanner */ "./src/components/home/FeaturedBanner.jsx");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Category */ "./src/components/home/Category.jsx");
/* harmony import */ var _ComboProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ComboProduct */ "./src/components/home/ComboProduct.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/home/index.js";








const WebHome = ({
  history
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Banners__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_FeaturedBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
      history: history
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_FeaturedProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
      history: history
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Category__WEBPACK_IMPORTED_MODULE_4__["default"], {
      history: history
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ComboProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
      history: history
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

_c = WebHome;
/* harmony default export */ __webpack_exports__["default"] = (WebHome);

var _c;

__webpack_require__.$Refresh$.register(_c, "WebHome");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/megaMenu/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/megaMenu/index.jsx ***!
  \*******************************************/
/*! exports provided: MegaMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenu", function() { return MegaMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_MobileMegaMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile/MobileMegaMenu */ "./src/components/megaMenu/mobile/MobileMegaMenu.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/megaMenu/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web_WebMegaMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/WebMegaMenu */ "./src/components/megaMenu/web/WebMegaMenu.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/megaMenu/index.jsx";





const MegaMenu = ({
  history
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-show-web",
      history: history,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_web_WebMegaMenu__WEBPACK_IMPORTED_MODULE_3__["WebMegaMenu"], {
        history: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-show-mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mobile_MobileMegaMenu__WEBPACK_IMPORTED_MODULE_1__["MobileMegaMenu"], {
        history: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};
_c = MegaMenu;

var _c;

__webpack_require__.$Refresh$.register(_c, "MegaMenu");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/megaMenu/mobile/MobileMegaMenu.jsx":
/*!***********************************************************!*\
  !*** ./src/components/megaMenu/mobile/MobileMegaMenu.jsx ***!
  \***********************************************************/
/*! exports provided: MobileMegaMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMegaMenu", function() { return MobileMegaMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/megaMenu/mobile/MobileMegaMenu.jsx";



const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];

const getFormobile = () => {
  const handleClick = e => {// console.log('click ', e);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    className: "cs-dis-flex cs-overflow-x-scroll",
    onClick: handleClick // style={{ width: 256 }}
    ,
    style: {
      backgroundColor: "#0093788a"
    },
    defaultSelectedKeys: ['1'],
    theme: "dark",
    mode: "inline",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SubMenu, {
      className: "cs-mega-menu-mobile-bg",
      title: "Organization",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SubMenu, {
        className: "cs-mega-menu-mobile-bg cs-bm-0",
        title: "About Us",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          className: "cs-mega-menu-mobile-bg cs-bm-0",
          children: "Our Team"
        }, "sub1-1", false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          className: "cs-mega-menu-mobile-bg cs-bm-0",
          children: "Our Doctors"
        }, "sub1-2", false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          className: "cs-mega-menu-mobile-bg cs-bm-0",
          children: "Career"
        }, "sub1-3", false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          className: "cs-mega-menu-mobile-bg cs-bm-0",
          children: "Our Clients"
        }, "sub1-4", false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, undefined)]
      }, "aboutus", true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SubMenu, {
        className: "cs-mega-menu-mobile-bg cs-bm-0",
        title: "Testimonials",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          className: "cs-mega-menu-mobile-bg cs-bm-0",
          children: "Customer's FeedBack"
        }, "sub2-1", false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          className: "cs-mega-menu-mobile-bg cs-bm-0",
          children: "Doctor's FeedBack"
        }, "sub2-2", false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          className: "cs-mega-menu-mobile-bg cs-bm-0",
          children: "Career"
        }, "sub2-3", false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          className: "cs-mega-menu-mobile-bg cs-bm-0",
          children: "Our Clients"
        }, "sub2-4", false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, undefined)]
      }, "Testimonials", true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined)]
    }, "sub1", true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SubMenu, {
      className: "cs-mega-menu-mobile-bg",
      title: "Specialities"
    }, "Specialities", false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SubMenu, {
      className: "cs-mega-menu-mobile-bg",
      title: "Services"
    }, "Services", false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SubMenu, {
      className: "cs-mega-menu-mobile-bg",
      title: "FAQs"
    }, "FAQs", false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }, undefined);
};

const MobileMegaMenu = ({
  history
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: getFormobile(history)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, undefined);
};
_c = MobileMegaMenu;

var _c;

__webpack_require__.$Refresh$.register(_c, "MobileMegaMenu");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/megaMenu/style.css":
/*!*******************************************!*\
  !*** ./src/components/megaMenu/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/megaMenu/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/megaMenu/style.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/megaMenu/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/megaMenu/web/WebMegaMenu.jsx":
/*!*****************************************************!*\
  !*** ./src/components/megaMenu/web/WebMegaMenu.jsx ***!
  \*****************************************************/
/*! exports provided: WebMegaMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebMegaMenu", function() { return WebMegaMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/megaMenu/web/WebMegaMenu.jsx",
    _s = __webpack_require__.$Refresh$.signature();







const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];

const Foodmenu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
  className: "menu-popover menu-popover-submenu",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-600 cs-font-18 cs-bm-15",
      children: "Dog Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Dry Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Wet Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Gain Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Puppy Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "cs-tm-20",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-600 cs-font-18 cs-bm-15",
      children: "Cat Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Dry Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Wet Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Gain Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Kittne Food"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 18
}, undefined);

const GroomingMenu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
  className: "menu-popover menu-popover-submenu",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-600 cs-font-18 cs-bm-15",
      children: "Dog Grooming"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Shampoo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Conditioner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Puppy Grooming"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Oral Hygiene"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Tick and Flea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Brushes and Combs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 22
}, undefined); // const menu = (catData) => <div className="menu-popover">
//   <div>
//     {data.map((catData, index) => {
//       <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Food</div>
//     })}
//   </div>
// </div>;


const services = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
  className: "menu-popover",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
      children: "Grooming"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 55,
  columnNumber: 18
}, undefined);

const cateogryPopoverData = data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
  className: "menu-popover",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: data.map((mainCategory, index) => {
      return mainCategory.children.map((categoryData, index) => {
        if (categoryData.parentId === mainCategory.id) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "cs-fw-500 cs-font-16 cs-bm-10 cs-pointer",
            children: categoryData.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined);
        }
      });
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 61,
  columnNumber: 39
}, undefined);

const WebMegaMenu = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.completeData.length) {
      // console.log("completeData", allData.completeData)
      setData(allData.completeData);
    }
  }, [allData]);
  return data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "mega-menu-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
          className: "menu-ul",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
            content: services,
            placement: "bottomLeft",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
              className: "menu-li",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "cs-dis-flex",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "cs-clr-fff cs-fw-600",
                  children: "Services"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "cs-vt-center cs-dis-flex cs-clr-fff",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CaretDownOutlined"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 72
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
            className: "menu-li",
            onClick: () => history.push("/brands"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "cs-dis-flex",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "cs-clr-fff cs-fw-600",
                children: "All Brands"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
            className: "menu-li",
            onClick: () => history.push("/blogs"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "cs-dis-flex",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "cs-clr-fff cs-fw-600",
                children: "Blogs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
            className: "menu-li",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "cs-dis-flex",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "cs-clr-fff cs-fw-600",
                children: "FAQs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_s(WebMegaMenu, "lUbkFPNcLZzGjjnVvyskAohmf10=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = WebMegaMenu;

var _c;

__webpack_require__.$Refresh$.register(_c, "WebMegaMenu");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/productcard/ProductCardMobile.jsx":
/*!**********************************************************!*\
  !*** ./src/components/productcard/ProductCardMobile.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var _addtocart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../addtocart */ "./src/components/addtocart/index.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/productcard/ProductCardMobile.jsx";










const ProductCardMobile = props => {
  const {
    gridMd,
    gridXl,
    gridLg,
    history,
    noRating,
    noPrice,
    openCat,
    toMainProduct,
    isBrand
  } = props; // const SamplePrevArrow = (props) => {
  //   return (
  //     <FontAwesomeIcon icon={faArrowLeft} style={{ ...style, display: "block", background: "green" }} />
  //   );
  // }
  // const SampleNextArrow = (props) => {
  //   return (
  //     <FontAwesomeIcon icon={faArrowRight} style={{ ...style, display: "block", background: "green" }} />
  //   );
  // }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

  };

  const handleOnProductSelect = id => {
    if (id) {
      history.push(`/product/${id}`);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    children: props.isGrid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "cs-tp-20",
      children: props.bestDeals.map(data => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          sm: 6,
          xs: 6,
          className: "cs-bp-25",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "cs-product-card cs-pointer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "cs-dis-flex cs-hrz-center cs-vt-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                src: `${_lib_constant__WEBPACK_IMPORTED_MODULE_6__["ImageUrl"]}/${data.images.split(',')[0]}`,
                className: "cs-w-100 cs-pointer",
                onClick: toMainProduct ? e => handleOnProductSelect(data.id) : openCat ? e => history.push("/category") : e => handleOnProductSelect(data.id),
                style: {
                  height: 140
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "cs-product-card-info cs-dis-flex cs-hrz-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-dis-flex cs-hrz-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-font-caps cs-product-card-cat-txt cs-clr-cream cs-pointer",
                    children: data.category
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-product-card-name cs-font-instyle cs-product-card-prod-name-txt cs-pointer cs-cs-lh-32",
                  children: data.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-golden-star",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Rate"], {
                    className: "cs-product-card-rate",
                    disabled: true,
                    defaultValue: data.rating,
                    allowHalf: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 19
            }, undefined), !noPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "cs-product-card-pricing-section",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "cs-dis-flex cs-hrz-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-product-card-mrp cs-rp-15",
                  children: ["\u20B9", data.mrp]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  children: ["\u20B9", data.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 31
            }, undefined) : null, openCat ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20",
              onClick: () => history.push("/category"),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "cs-product-card-addtocart cs-pointer",
                children: "View Category"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 21
            }, undefined) : isBrand ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20",
              onClick: () => history.push(`/brand/allproducts/${data.id}`),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "cs-product-card-addtocart cs-pointer",
                children: "View All Products"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_addtocart__WEBPACK_IMPORTED_MODULE_7__["default"], {
                history: history,
                productId: data.id
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 23
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, { ...settings,
          children: props.bestDeals.map(data => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "cs-product-card cs-pointer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "cs-dis-flex cs-hrz-center cs-vt-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: `${_lib_constant__WEBPACK_IMPORTED_MODULE_6__["ImageUrl"]}/${data.images.split(',')[0]}`,
                  className: "cs-w-100 cs-pointer",
                  onClick: toMainProduct ? e => handleOnProductSelect(data.id) : "",
                  style: {
                    height: 140
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "cs-product-card-info cs-dis-flex cs-hrz-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-dis-flex cs-hrz-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "cs-font-caps cs-product-card-cat-txt cs-clr-cream cs-pointer",
                      children: data.category
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-product-card-name cs-font-instyle cs-product-card-prod-name-txt cs-pointer cs-cs-lh-32",
                    children: openCat || isBrand ? data.title : data.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 25
                  }, undefined), data.brandData && data.brandData.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-product-card-name cs-dis-flex cs-hrz-center cs-font-12 cs-tp-10 cs-pointer",
                    children: ["( A product by ", data.brandData[0].title, " )"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 27
                  }, undefined) : null, !noRating && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-golden-star",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Rate"], {
                      className: "cs-product-card-rate",
                      disabled: true,
                      defaultValue: data.rating,
                      allowHalf: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 29
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 21
              }, undefined), !noPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "cs-product-card-pricing-section",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-dis-flex cs-hrz-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-product-card-mrp cs-rp-15",
                    children: ["\u20B9", data.mrp]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    children: ["\u20B9", data.price]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 33
              }, undefined) : null, openCat ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20",
                onClick: () => history.push("/category"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-product-card-addtocart cs-pointer",
                  children: "View Category"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 23
              }, undefined) : isBrand ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20",
                onClick: () => history.push(`/brand/allproducts/${data.id}`),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-product-card-addtocart cs-pointer",
                  children: "View All Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 35
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_addtocart__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  history: history,
                  productId: data.id
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 25
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 19
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined);
};

_c = ProductCardMobile;
/* harmony default export */ __webpack_exports__["default"] = (ProductCardMobile);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductCardMobile");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/productcard/ProductCardWeb.jsx":
/*!*******************************************************!*\
  !*** ./src/components/productcard/ProductCardWeb.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _addtocart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addtocart */ "./src/components/addtocart/index.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/productcard/ProductCardWeb.jsx";








const ProductCardWeb = props => {
  const {
    gridMd,
    gridXl,
    gridLg,
    history,
    noRating,
    noPrice,
    openCat,
    toMainProduct,
    isBrand
  } = props;

  const handleOnProductSelect = id => {
    if (id) {
      history.push(`/product/${id}`);
    }
  };

  const truncateString = (str, num) => {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str;
    } // Return str truncated with '...' concatenated to the end of str.


    return str.slice(0, num) + '...';
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    children: props.bestDeals.map((data, index) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xl: gridXl ? gridXl : 3,
        md: gridLg ? gridLg : 4,
        lg: gridMd ? gridMd : 3,
        className: "cs-bp-30",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "cs-product-card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "cs-dis-flex cs-vt-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              src: `${_lib_constant__WEBPACK_IMPORTED_MODULE_3__["ImageUrl"]}/${data.images.split(',')[0]}`,
              className: "cs-w-100 cs-pointer",
              onClick: toMainProduct ? e => handleOnProductSelect(data.id) : openCat ? e => history.push("/category") : e => handleOnProductSelect(data.id),
              style: {
                height: 300
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "cs-product-card-info cs-dis-flex cs-hrz-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              children: [!openCat && data.subcat && data.subcat.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "cs-dis-flex cs-hrz-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  className: "cs-font-caps cs-clr-cream cs-font-14 cs-pointer",
                  children: data.subcat[0].title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 21
              }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "cs-product-card-name cs-dis-flex cs-hrz-center cs-font-instyle cs-font-26 cs-pointer",
                children: openCat || isBrand ? data.title : data.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, undefined), data.brandData && data.brandData.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "cs-product-card-name cs-dis-flex cs-hrz-center cs-font-16 cs-pointer",
                children: ["( A product by ", data.brandData[0].title, " )"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 21
              }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "cs-product-card-descp cs-font-16 cs-pointer cs-dis-flex cs-hrz-center",
                style: {
                  textAlign: "center",
                  height: 75
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                  children: [" ", react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(truncateString(data.description, 120)), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, undefined), !noRating && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "cs-dis-flex cs-hrz-center cs-golden-star",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
                  style: {
                    fontSize: 16
                  },
                  disabled: true,
                  defaultValue: data.rating,
                  allowHalf: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, undefined), !noPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "cs-product-card-pricing-section",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              className: "cs-dis-flex cs-hrz-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "cs-product-card-mrp cs-rp-15",
                children: ["\u20B9", data.mrp, ".00"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                children: ["\u20B9", data.price, ".00"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 27
          }, undefined) : null, openCat ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20",
            onClick: () => history.push("/category"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              className: "cs-product-card-addtocart cs-pointer",
              children: "View Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, undefined) : isBrand ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20",
            onClick: () => history.push(`/brand/allproducts/${data.id}`),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              className: "cs-product-card-addtocart cs-pointer",
              children: "View All Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 29
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "cs-dis-flex cs-hrz-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_addtocart__WEBPACK_IMPORTED_MODULE_5__["default"], {
              history: history,
              productId: data.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

_c = ProductCardWeb;
/* harmony default export */ __webpack_exports__["default"] = (ProductCardWeb);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductCardWeb");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/productcard/index.js":
/*!*********************************************!*\
  !*** ./src/components/productcard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductCardWeb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCardWeb */ "./src/components/productcard/ProductCardWeb.jsx");
/* harmony import */ var _ProductCardMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCardMobile */ "./src/components/productcard/ProductCardMobile.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/productcard/index.js";





const ProductCard = props => {
  const {
    gridXl,
    gridMd,
    gridLg,
    history,
    isGrid,
    noPrice,
    noRating,
    openCat,
    toMainProduct,
    isBrand
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "cs-show-web",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_ProductCardWeb__WEBPACK_IMPORTED_MODULE_1__["default"], {
        history: history,
        gridXl: gridXl,
        gridMd: gridMd,
        ridLg: gridLg,
        bestDeals: props.bestDeals,
        noPrice: noPrice,
        noRating: noRating,
        openCat: openCat,
        toMainProduct: toMainProduct,
        isBrand: isBrand
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "cs-show-mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_ProductCardMobile__WEBPACK_IMPORTED_MODULE_2__["default"], {
        history: history,
        bestDeals: props.bestDeals,
        isGrid: isGrid,
        noPrice: noPrice,
        noRating: noRating,
        openCat: openCat,
        toMainProduct: toMainProduct,
        isBrand: isBrand
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

_c = ProductCard;
/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductCard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/productsingle/index.js":
/*!***********************************************!*\
  !*** ./src/components/productsingle/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _addtocart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../addtocart */ "./src/components/addtocart/index.jsx");
/* harmony import */ var react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-simple-image-viewer */ "./node_modules/react-simple-image-viewer/dist/index.esm.js");
/* harmony import */ var react_inner_image_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-inner-image-zoom */ "./node_modules/react-inner-image-zoom/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/productsingle/index.js",
    _s = __webpack_require__.$Refresh$.signature();















const ProductSingleComp = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [allImages, setAllImages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [catName, setCatName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.allData);
  const [currentImage, setCurrentImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [isViewerOpen, setIsViewerOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [mainImg, setMainImg] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let prodid = window.location.pathname.split('/')[2];
  let subImages = [];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.products.length) {
      let tempData = allData.products;
      tempData = tempData.filter(e => e.id === prodid);
      setData(tempData); // console.log("tempData", tempData)

      if (tempData[0].images) {
        setMainImg(tempData[0].images.split(',')[0]);
        setAllImages(tempData[0].images.split(','));
      }
    }
  }, [allData]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (data.length) {
      getSubCategory();
    }
  }, [data]);

  const getSubCategory = () => {
    let tempData = allData.subCategory; // console.log(" tempData ..", tempData)

    tempData = tempData.filter(e => e.id === data[0].parent_id);
    setCatName(tempData);
  };

  const handleOnMainImg = imagesrc => {
    setMainImg(imagesrc);
  };

  const openImageViewer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    className: "cs-web-container cs-tp-30 cs-bp-100",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: "cs-show-mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        className: "cs-tp-25",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowLeft"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: "cs-rp-40 cs-lp-30 cs-tp-30",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        children: [console.log("object", allImages), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          xl: 4,
          xs: 12,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              xl: 12,
              xs: 12,
              className: "cs-dis-flex cs-hrz-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_inner_image_zoom__WEBPACK_IMPORTED_MODULE_8__["default"], {
                width: 500,
                zoomScale: 2,
                zoomSrc: `${_lib_constant__WEBPACK_IMPORTED_MODULE_2__["ImageUrl"]}/${mainImg}`,
                src: `${_lib_constant__WEBPACK_IMPORTED_MODULE_2__["ImageUrl"]}/${mainImg}`,
                className: "cs-w-100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "cs-pic-display cs-lp-30",
            children: allImages.map((data, index) => {
              subImages.push(`${_lib_constant__WEBPACK_IMPORTED_MODULE_2__["ImageUrl"]}/${data}`);

              if (index > 0 && index < data.length) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                  onClick: () => handleOnMainImg(data),
                  style: {
                    width: 80,
                    height: 80
                  },
                  src: `${_lib_constant__WEBPACK_IMPORTED_MODULE_2__["ImageUrl"]}/${data}`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 21
                }, undefined);
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          xl: 8,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "cs-clr-cream cs-font-21",
            children: "Food"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "cs-font-instyle cs-font-28",
            children: data[0].name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "cs-golden-star cs-tp-10",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Rate"], {
              style: {
                fontSize: 16
              },
              disabled: true,
              defaultValue: data.rating,
              allowHalf: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "cs-dis-flex cs-tp-10",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "cs-product-card-mrp cs-rp-15 cs-font-18 cs-dis-flex cs-vt-center",
              children: ["\u20B9", data[0].mrp, ".00"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "cs-font-24",
              children: ["\u20B9", data[0].price, ".00"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "cs-tp-20 cs-font-instyle cs-font-26 cs-bp-20",
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "cs-font-18",
            children: react_html_parser__WEBPACK_IMPORTED_MODULE_5___default()(data[0].description)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_addtocart__WEBPACK_IMPORTED_MODULE_6__["default"], {
            history: history,
            productId: prodid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), isViewerOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_simple_image_viewer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      src: subImages,
      currentIndex: currentImage,
      onClose: closeImageViewer,
      disableScroll: false,
      backgroundStyle: {
        backgroundColor: "rgba(0,0,0,0.9)"
      },
      closeOnClickOutside: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};

_s(ProductSingleComp, "UyuJQ0xs7P1TC6gs/SlUfiD/FlQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = ProductSingleComp;
/* harmony default export */ __webpack_exports__["default"] = (ProductSingleComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductSingleComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/rewards/index.js":
/*!*****************************************!*\
  !*** ./src/components/rewards/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _pages_coverimg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/coverimg */ "./src/pages/coverimg/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/rewards/index.js";





const columns = [{
  title: 'Credits',
  dataIndex: 'credit',
  key: 'credit',
  render: text => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 21
  }, undefined)
}, {
  title: 'Shop Now',
  dataIndex: '',
  key: 'price',
  render: text => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    children: "Shop now"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 21
  }, undefined)
} // {
//   title: 'Quantity',
//   dataIndex: 'qty',
//   key: 'qty',
// },
// {
//   title: 'Subtotal',
//   dataIndex: 'subtotal',
//   key: 'subtotal',
// },
// {
//   title: 'Action',
//   key: 'action',
//   render: (text, record) => (
//     <Space size="middle">
//       <a>Invite {record.name}</a>
//       <a>Delete</a>
//     </Space>
//   ),
// },
];
const data = [{
  key: '1',
  credit: 500 // price: 132,
  // qty: 1,
  // subtotal: 132

}];

const RewardsComp = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_pages_coverimg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        coverName: "Your Credits"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "cs-web-container cs-tp-20",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "cs-dis-flex",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "cs-font-instyle cs-font-24",
            children: "Total Credit Amount -"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "cs-lp-20 cs-font-24",
            children: "Rs 500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "cs-tp-20",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            type: "primary",
            className: "cs-lp-20",
            children: "Shop Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, undefined);
};

_c = RewardsComp;
/* harmony default export */ __webpack_exports__["default"] = (RewardsComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "RewardsComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/sideMenu/SideMenu.js":
/*!*********************************************!*\
  !*** ./src/components/sideMenu/SideMenu.js ***!
  \*********************************************/
/*! exports provided: SideMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenu", function() { return SideMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _assets_DMMS_blue_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/DMMS-blue.png */ "./src/assets/DMMS-blue.png");
/* harmony import */ var _elements_layout_AppControllerLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/layout/AppControllerLayout */ "./src/elements/layout/AppControllerLayout.js");
/* harmony import */ var _sideMenu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideMenu.css */ "./src/components/sideMenu/sideMenu.css");
/* harmony import */ var _sideMenu_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sideMenu_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/sideMenu/SideMenu.js",
    _s = __webpack_require__.$Refresh$.signature();







const {
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
const SideMenu = props => {
  _s();

  let {
    collapsed,
    setcollapsed,
    history
  } = props;
  const [menuLayout, setmenuLayout] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_elements_layout_AppControllerLayout__WEBPACK_IMPORTED_MODULE_3__["menuLayoutA"]);

  const getMenuItem = menuItem => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      className: "sidebar-menu-bg",
      theme: "dark",
      icon: menuItem.icon,
      onClick: () => {
        history.push(menuItem.path);
        setcollapsed(!collapsed);
      },
      children: menuItem.title
    }, menuItem.key, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Sider, {
    width: 280,
    style: {
      zIndex: 999,
      overflow: 'auto',
      height: '100vh',
      // position: 'fixed',
      backgroundColor: '#0093788a',
      left: 0
    },
    collapsible: true,
    collapsedWidth: 0,
    collapsed: collapsed,
    theme: "dark",
    trigger: null,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "d jc-center ai-center mt-20 mb-20 ml-20 logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        preview: false,
        id: "menu-logo",
        width: 100,
        src: _assets_DMMS_blue_png__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      theme: "dark",
      mode: "inline",
      style: {
        background: "#0093788a"
      },
      children: menuLayout.map(menuItem => menuItem.type !== "parent" ? getMenuItem(menuItem) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SubMenu, {
        icon: menuItem.icon,
        title: menuItem.title,
        children: menuItem.children.map(menuItem => getMenuItem(menuItem))
      }, menuItem.key, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 6
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, undefined);
};

_s(SideMenu, "ICav+qMC/zYB4QdsmYdq0l1gkM8=");

_c = SideMenu;

var _c;

__webpack_require__.$Refresh$.register(_c, "SideMenu");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/sideMenu/sideMenu.css":
/*!**********************************************!*\
  !*** ./src/components/sideMenu/sideMenu.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./sideMenu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideMenu/sideMenu.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./sideMenu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideMenu/sideMenu.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./sideMenu.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideMenu/sideMenu.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/sidecart/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/sidecart/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/sidecart/index.jsx";




const SideCart = ({
  cartData
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "cs-font-instyle cs-font-24 cs-bp-10",
      children: "Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), cartData.map(data => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "cs-bp-20",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xl: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "cs-product-card cs-dis-flex cs-hrz-center cs-vt-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: data.img,
              className: "cs-w-80"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xl: 8,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "cs-dis-flex cs-justify-sb",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "cs-font-instyle cs-font-18",
                children: data.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: [data.qty, " x ", data.sp]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "cs-cross-icon cs-dis-flex cs-hrz-center cs-vt-center cs-pointer",
              children: "x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

_c = SideCart;
/* harmony default export */ __webpack_exports__["default"] = (SideCart);

var _c;

__webpack_require__.$Refresh$.register(_c, "SideCart");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/todaydeal/index.js":
/*!*******************************************!*\
  !*** ./src/components/todaydeal/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_coverimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/coverimg */ "./src/pages/coverimg/index.js");
/* harmony import */ var _static_images_products_product1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/products/product1.jpg */ "./src/static/images/products/product1.jpg");
/* harmony import */ var _static_images_products_product2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/products/product2.jpg */ "./src/static/images/products/product2.jpg");
/* harmony import */ var _static_images_products_product3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/products/product3.jpg */ "./src/static/images/products/product3.jpg");
/* harmony import */ var _static_images_products_product4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/images/products/product4.jpg */ "./src/static/images/products/product4.jpg");
/* harmony import */ var _productcard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../productcard */ "./src/components/productcard/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/constant */ "./src/lib/constant.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/components/todaydeal/index.js",
    _s = __webpack_require__.$Refresh$.signature();












const TodayDealComp = ({
  history
}) => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [allImages, setAllImages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.products.length) {
      let tempData = allData.products;
      tempData = tempData.filter(e => e.isBestDeal === "Yes");
      setData(tempData);
      if (allData.products[0].images) setAllImages(allData.products[0].images.split(','));
    }
  }, [allData]);
  return data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_pages_coverimg__WEBPACK_IMPORTED_MODULE_1__["default"], {
        coverName: "Today's Deal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "cs-web-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_productcard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        bestDeals: data,
        history: history,
        toMainProduct: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }, undefined) : null;
};

_s(TodayDealComp, "dY3fvDNyzX9agTjd5zqFHYvGQrI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = TodayDealComp;
/* harmony default export */ __webpack_exports__["default"] = (TodayDealComp);

var _c;

__webpack_require__.$Refresh$.register(_c, "TodayDealComp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/config/ScrollToTop.js":
/*!***********************************!*\
  !*** ./src/config/ScrollToTop.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();




function ScrollToTop({
  history
}) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);
  return null;
}

_s(ScrollToTop, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = ScrollToTop;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ScrollToTop));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ScrollToTop");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/config/history.js":
/*!*******************************!*\
  !*** ./src/config/history.js ***!
  \*******************************/
/*! exports provided: history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


let history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/custom-routes/PrivateRoute.js":
/*!*******************************************!*\
  !*** ./src/custom-routes/PrivateRoute.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/custom-routes/PrivateRoute.js",
    _s = __webpack_require__.$Refresh$.signature();






const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  _s();

  const login = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.appStatus.login);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { ...rest,
    render: props => login ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, { ...props,
      ...rest
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: '/login'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

_s(PrivateRoute, "A1mao0B0qvYrrffMGNc+fGWkK4I=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = PrivateRoute;
/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "PrivateRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/custom-routes/PublicRoute.js":
/*!******************************************!*\
  !*** ./src/custom-routes/PublicRoute.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/custom-routes/PublicRoute.js",
    _s = __webpack_require__.$Refresh$.signature();






const PublicRoute = ({
  component: Component,
  ...rest
}) => {
  _s();

  const appStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.appStatus);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { ...rest,
    render: props => !appStatus.login ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, { ...props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 28
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 55
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

_s(PublicRoute, "+w4JSqP47PKJ2IM+w9CSqknGDng=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = PublicRoute;
/* harmony default export */ __webpack_exports__["default"] = (PublicRoute);

var _c;

__webpack_require__.$Refresh$.register(_c, "PublicRoute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/elements/api/blog.js":
/*!**********************************!*\
  !*** ./src/elements/api/blog.js ***!
  \**********************************/
/*! exports provided: setBlog, getBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlog", function() { return setBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlog", function() { return getBlog; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/apiHelper */ "./src/lib/apiHelper.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



let URL = "http://arihantchemical.in/petapi/blog";
const setBlog = async (query, files) => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  for (var index = 0; index < files.length; index++) {
    formData.append("files[]", files[index]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/blog.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const getBlog = async () => {
  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/blog.php`);
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/elements/api/brand.js":
/*!***********************************!*\
  !*** ./src/elements/api/brand.js ***!
  \***********************************/
/*! exports provided: setBrand, getBrand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBrand", function() { return setBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrand", function() { return getBrand; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/apiHelper */ "./src/lib/apiHelper.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



let URL = "http://arihantchemical.in/petapi/products";
const setBrand = async (query, files) => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  for (var index = 0; index < files.length; index++) {
    formData.append("files[]", files[index]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/brand.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const getBrand = async () => {
  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/brand.php`);
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/elements/api/cart.js":
/*!**********************************!*\
  !*** ./src/elements/api/cart.js ***!
  \**********************************/
/*! exports provided: setCart, getCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCart", function() { return setCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/apiHelper */ "./src/lib/apiHelper.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



let URL = "http://arihantchemical.in/petapi/cart";
const setCart = async query => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/cart.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const getCart = async () => {
  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/cart.php`);
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/elements/api/featuredbanner.js":
/*!********************************************!*\
  !*** ./src/elements/api/featuredbanner.js ***!
  \********************************************/
/*! exports provided: setFeaturedBanner, getFeaturedBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFeaturedBanner", function() { return setFeaturedBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedBanner", function() { return getFeaturedBanner; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/apiHelper */ "./src/lib/apiHelper.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



let URL = "http://arihantchemical.in/petapi/banner";
const setFeaturedBanner = async (query, files) => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  for (var index = 0; index < files.length; index++) {
    formData.append("files[]", files[index]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/banner.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const getFeaturedBanner = async () => {
  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/banner.php`);
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/elements/api/headerbanner.js":
/*!******************************************!*\
  !*** ./src/elements/api/headerbanner.js ***!
  \******************************************/
/*! exports provided: setHeaderBanner, getHeaderBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHeaderBanner", function() { return setHeaderBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaderBanner", function() { return getHeaderBanner; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/apiHelper */ "./src/lib/apiHelper.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



let URL = "http://arihantchemical.in/petapi/header";
const setHeaderBanner = async (query, files) => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  for (var index = 0; index < files.length; index++) {
    formData.append("files[]", files[index]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/header.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const getHeaderBanner = async () => {
  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/header.php`);
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/elements/api/product.js":
/*!*************************************!*\
  !*** ./src/elements/api/product.js ***!
  \*************************************/
/*! exports provided: setParent, getParent, setMaster, getMaster, setSubMaster, getSubMaster, setProuduct, setColorImage, getProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setParent", function() { return setParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMaster", function() { return setMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaster", function() { return getMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSubMaster", function() { return setSubMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubMaster", function() { return getSubMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProuduct", function() { return setProuduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColorImage", function() { return setColorImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/apiHelper */ "./src/lib/apiHelper.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



let URL = "http://arihantchemical.in/petapi/products";
const setParent = async (query, files) => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  for (var index = 0; index < files.length; index++) {
    formData.append("files[]", files[index]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/parent.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const getParent = async () => {
  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/parent.php`);
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const setMaster = async query => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/master.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const getMaster = async () => {
  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/master.php`);
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const setSubMaster = async (query, files) => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  for (var index = 0; index < files.length; index++) {
    formData.append("files[]", files[index]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/subMaster.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const getSubMaster = async () => {
  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/subMaster.php`);
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const setProuduct = async (query, files) => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  for (var index = 0; index < files.length; index++) {
    formData.append("files[]", files[index]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/product.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const setColorImage = async (query, files) => {
  let formData = new FormData();

  for (var key in query) {
    formData.append(key, query[key]);
  }

  for (var index = 0; index < files.length; index++) {
    formData.append("files[]", files[index]);
  }

  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/imageUpload.php`, {
    method: 'POST',
    body: formData
  });
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};
const getProduct = async () => {
  const response = await Object(_lib_apiHelper__WEBPACK_IMPORTED_MODULE_1__["modifyFetch"])(`${URL}/product.php`);
  const body = await response.json();

  if (response.status !== 200) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(body.message || "some error occured, please try sometime later");
  }

  return body;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/elements/layout/AppControllerLayout.js":
/*!****************************************************!*\
  !*** ./src/elements/layout/AppControllerLayout.js ***!
  \****************************************************/
/*! exports provided: menuLayoutA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuLayoutA", function() { return menuLayoutA; });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/elements/layout/AppControllerLayout.js";


const menuLayoutA = [{
  title: "Home",
  key: 1,
  type: "root",
  path: '/home',
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HomeOutlined"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined)
}, {
  title: "Get Second Consultation",
  key: 2,
  type: "root",
  path: '/home',
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["BulbOutlined"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined)
}, {
  title: "Customer Care",
  key: 3,
  type: "root",
  path: '/home',
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MobileOutlined"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined)
}, {
  title: "Login",
  key: 8,
  type: "root",
  path: '/log-in',
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["UserOutlined"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined)
}, {
  title: "Sign Up",
  key: 9,
  type: "root",
  path: '/sign-up',
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["UserOutlined"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, undefined)
}]; // {
// 	title: "Quote",
// 	key: 2,
// 	path: '/quote',
// 	type: "parent",
// 	icon: <FileOutlined />,
// 	children: [{
// 		title: "Quote",
// 		key: 3,
// 		path: '/quote',
// 		type: "child",
// 		icon: <MenuOutlined />
// 	},
// 	{
// 		title: "Order",
// 		key: 4,
// 		path: '/order',
// 		type: "child",
// 		icon: <SettingOutlined />
// 	},
// 	{
// 		title: "Favourite",
// 		key: 5,
// 		path: '/favourite',
// 		type: "child",
// 		icon: <HeartOutlined />
// 	}]
// },
// {
// 	title: "Inspire",
// 	key: 6,
// 	type: "parent",
// 	icon: <BulbOutlined />,
// 	children:[
// 	{
// 		title: "Blog",
// 		key: 7,
// 		path: '/blog',
// 		type: "child",
// 		icon: <FileOutlined />
// 	}
// 	]
// }

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/globalStyle/globalStyle.css":
/*!*****************************************!*\
  !*** ./src/globalStyle/globalStyle.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./globalStyle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/globalStyle.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./globalStyle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/globalStyle.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./globalStyle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/globalStyle.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/globalStyle/style.css":
/*!***********************************!*\
  !*** ./src/globalStyle/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/style.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globalStyle/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/layouts/footer/MobileFooter.jsx":
/*!*********************************************!*\
  !*** ./src/layouts/footer/MobileFooter.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/layouts/footer/MobileFooter.jsx",
    _s = __webpack_require__.$Refresh$.signature();








const MobileFooter = ({
  history
}) => {
  _s();

  const [acive, setAcive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("home");
  const [totalCartItem, setTotalCartItem] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getActiveBar();
  }, [acive]);
  const allData = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.allData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (allData.userCart.length) {
      setTotalCartItem(allData.userCart.length);
    }
  }, [allData]);

  const getActiveBar = () => {
    // setAcive()
    // console.log("...", window.location.pathname.split("/")[1])
    setAcive(window.location.pathname.split("/")[1]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "cs-mobile-bottom-nav",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "cs-mobile-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xs: 3,
          className: "cs-dis-flex cs-hrz-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HomeOutlined"], {
            style: {
              fontSize: 24,
              color: acive === "home" ? "#129b88" : ""
            },
            onClick: () => history.push("/")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xs: 3,
          className: "cs-dis-flex cs-hrz-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingOutlined"], {
            style: {
              fontSize: 24,
              color: acive === "category" ? "#129b88" : ""
            },
            onClick: () => history.push("/category")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xs: 3,
          className: "cs-dis-flex cs-hrz-center",
          onClick: () => history.push("/rewards"),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["GiftOutlined"], {
            style: {
              fontSize: 24,
              color: acive === "rewards" ? "#129b88" : ""
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xs: 3,
          className: "cs-dis-flex cs-hrz-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
            count: totalCartItem,
            style: {
              backgroundColor: "#37bead"
            },
            offset: [0, 0],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
              style: {
                fontSize: 24,
                color: acive === "cart" ? "#129b88" : ""
              },
              onClick: () => history.push("/cart")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

_s(MobileFooter, "1dUkkIHk75RY4MxqzIZ4prFGDSQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = MobileFooter;
/* harmony default export */ __webpack_exports__["default"] = (MobileFooter);

var _c;

__webpack_require__.$Refresh$.register(_c, "MobileFooter");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/layouts/footer/WebFooter.jsx":
/*!******************************************!*\
  !*** ./src/layouts/footer/WebFooter.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_Footer_footer_top_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/Footer/footer-top.png */ "./src/static/images/Footer/footer-top.png");
/* harmony import */ var _static_images_Footer_background_footer_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/Footer/background_footer.jpg */ "./src/static/images/Footer/background_footer.jpg");
/* harmony import */ var _static_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/logo.png */ "./src/static/images/logo.png");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ritiksoni/Documents/Projects/doggiesthan_frontend/src/layouts/footer/WebFooter.jsx";










const WebFooter = ({
  history
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: {
        position: "relative",
        zIndex: 10
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
        className: "cs-w-100",
        src: _static_images_Footer_footer_top_png__WEBPACK_IMPORTED_MODULE_1__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: {
        position: "relative"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        style: {
          backgroundImage: `url(${_static_images_Footer_background_footer_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]})`,
          height: "70vh",
          marginTop: "-135px",
          position: "relative"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          style: {
            position: "absolute",
            zIndex: 10,
            top: 260
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "cs-web-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
                xl: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                  src: _static_images_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
                  className: "cs-w-80"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
                xl: 3,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-font-28",
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-dis-flex",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-dis-flex cs-vt-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faMapMarkerAlt"],
                      className: "cs-rm-5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    children: "PO BOX Collins Street West"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-dis-flex cs-tp-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-dis-flex cs-vt-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPhone"],
                      className: "cs-rm-5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    children: "95096367777"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-dis-flex cs-tp-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-dis-flex cs-vt-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faClock"],
                      className: "cs-rm-5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    children: "Morning 8 AM - Evening 9 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
                xl: 3,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-font-28",
                  children: "Quick Links"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-dis-flex cs-pointer",
                  onClick: () => history.push("/dogs/7"),
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-dis-flex cs-vt-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faDog"],
                      className: "cs-rm-5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    children: "Dog Accessories & Products"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-dis-flex cs-tp-5 cs-pointer",
                  onClick: () => history.push("/cats/8"),
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-dis-flex cs-vt-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCat"],
                      className: "cs-rm-5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    children: "Cat Accessories & Products"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-dis-flex cs-tp-5 cs-pointer",
                  onClick: () => history.push("/blogs"),
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "cs-dis-flex cs-vt-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBlog"],
                      className: "cs-rm-5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    children: "Blogs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
                xl: 3,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-font-28",
                  children: "Newsletter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "cs-dis-flex cs-tp-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                    placeholder: "Enter your email"
                  }, void 0, false, {
  }, undefined);