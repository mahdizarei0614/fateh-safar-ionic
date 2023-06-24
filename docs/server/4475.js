"use strict";
exports.id = 4475;
exports.ids = [4475];
exports.modules = {

/***/ 14475:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-211f1ad8.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startStatusTap: () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-36a5fd75.js */ 15698);
/* harmony import */ var _index_7373924f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-7373924f.js */ 31150);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 41099);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-e86f0117.js */ 99614);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.e)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = (0,_index_7373924f_js__WEBPACK_IMPORTED_MODULE_2__.f)(el);
      if (contentEl) {
        new Promise(resolve => (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_3__.c)(contentEl, resolve)).then(() => {
          (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)( /*#__PURE__*/(0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            yield (0,_index_7373924f_js__WEBPACK_IMPORTED_MODULE_2__.s)(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          }));
        });
      }
    });
  });
};


/***/ })

};
;
//# sourceMappingURL=4475.js.map