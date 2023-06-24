"use strict";
exports.id = 3256;
exports.ids = [3256];
exports.modules = {

/***/ 36792:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};


/***/ }),

/***/ 90648:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-393bc14a.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ arrowBackSharp),
/* harmony export */   b: () => (/* binding */ closeCircle),
/* harmony export */   c: () => (/* binding */ chevronBack),
/* harmony export */   d: () => (/* binding */ closeSharp),
/* harmony export */   e: () => (/* binding */ searchSharp),
/* harmony export */   f: () => (/* binding */ checkmarkOutline),
/* harmony export */   g: () => (/* binding */ ellipseOutline),
/* harmony export */   h: () => (/* binding */ caretBackSharp),
/* harmony export */   i: () => (/* binding */ arrowDown),
/* harmony export */   j: () => (/* binding */ reorderThreeOutline),
/* harmony export */   k: () => (/* binding */ reorderTwoSharp),
/* harmony export */   l: () => (/* binding */ chevronDown),
/* harmony export */   m: () => (/* binding */ chevronForwardOutline),
/* harmony export */   n: () => (/* binding */ ellipsisHorizontal),
/* harmony export */   o: () => (/* binding */ chevronForward),
/* harmony export */   p: () => (/* binding */ caretUpSharp),
/* harmony export */   q: () => (/* binding */ caretDownSharp),
/* harmony export */   r: () => (/* binding */ removeOutline),
/* harmony export */   s: () => (/* binding */ searchOutline),
/* harmony export */   t: () => (/* binding */ close),
/* harmony export */   u: () => (/* binding */ menuOutline),
/* harmony export */   v: () => (/* binding */ menuSharp),
/* harmony export */   w: () => (/* binding */ chevronExpand)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v7.1.0, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronExpand = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 13256:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_searchbar: () => (/* binding */ Searchbar)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-36a5fd75.js */ 15698);
/* harmony import */ var _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-393bc14a.js */ 90648);
/* harmony import */ var _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-a9abd569.js */ 64778);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 41099);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 36792);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-7670341c.js */ 35578);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */






const searchbarIosCss = ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-ios:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--border-radius:10px;--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #3880ff);--clear-button-color:var(--ion-color-step-600, #666666);--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, #666666);-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}.searchbar-input-container.sc-ion-searchbar-ios{height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px);top:0;position:absolute;width:22px;height:100%;contain:strict}@supports (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-ios{inset-inline-start:5px}}@supports not (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-ios{left:5px}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}[dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}@supports selector(:dir(rtl)){.searchbar-search-icon.sc-ion-searchbar-ios:dir(rtl){left:unset;right:unset;right:5px}}}.searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px;padding-top:0;padding-bottom:0;height:100%;font-size:17px;font-weight:400;contain:strict}.searchbar-clear-button.sc-ion-searchbar-ios{top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent}@supports (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-ios{inset-inline-end:0}}@supports not (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-ios{right:0}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}[dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}@supports selector(:dir(rtl)){.searchbar-clear-button.sc-ion-searchbar-ios:dir(rtl){left:unset;right:unset;left:0}}}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:0;margin-inline-start:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:30px;padding-inline-start:30px}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-transition:all 300ms ease;transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-margin-end:-100%;margin-inline-end:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;pointer-events:none}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}";
const searchbarMdCss = ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-md:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--border-radius:2px;--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, #1a1a1a);--clear-button-color:initial;--color:var(--ion-color-step-850, #262626);--icon-color:var(--ion-color-step-600, #666666);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;background:inherit}.searchbar-search-icon.sc-ion-searchbar-md{top:11px;width:21px;height:21px}@supports (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-md{inset-inline-start:16px}}@supports not (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-md{left:16px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}[dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}@supports selector(:dir(rtl)){.searchbar-search-icon.sc-ion-searchbar-md:dir(rtl){left:unset;right:unset;right:16px}}}.searchbar-cancel-button.sc-ion-searchbar-md{top:0;background-color:transparent;font-size:1.6em}@supports (inset-inline-start: 0){.searchbar-cancel-button.sc-ion-searchbar-md{inset-inline-start:5px}}@supports not (inset-inline-start: 0){.searchbar-cancel-button.sc-ion-searchbar-md{left:5px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}[dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}@supports selector(:dir(rtl)){.searchbar-cancel-button.sc-ion-searchbar-md:dir(rtl){left:unset;right:unset;right:5px}}}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px;padding-top:6px;padding-bottom:6px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}@supports selector(:dir(rtl)){.searchbar-input.sc-ion-searchbar-md:dir(rtl){background-position:right 8px center}}.searchbar-clear-button.sc-ion-searchbar-md{top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}@supports (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-md{inset-inline-end:13px}}@supports not (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-md{right:13px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}[dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}@supports selector(:dir(rtl)){.searchbar-clear-button.sc-ion-searchbar-md:dir(rtl){left:unset;right:unset;left:13px}}}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:3px;padding-bottom:3px}";
const Searchbar = class {
  constructor(hostRef) {
    var _this = this;
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionInput = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionInput", 7);
    this.ionChange = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionCancel = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionCancel", 7);
    this.ionClear = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionClear", 7);
    this.ionBlur = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.ionFocus = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.ionStyle = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionStyle", 7);
    this.isCancelVisible = false;
    this.shouldAlignLeft = true;
    /**
     * Clears the input field and triggers the control change.
     */
    this.onClearInput = /*#__PURE__*/function () {
      var _ref = (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (shouldFocus) {
        _this.ionClear.emit();
        return new Promise(resolve => {
          // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
          // wait for 4 frames
          setTimeout(() => {
            const value = _this.getValue();
            if (value !== '') {
              _this.value = '';
              _this.emitInputChange();
              /**
               * When tapping clear button
               * ensure input is focused after
               * clearing input so users
               * can quickly start typing.
               */
              if (shouldFocus && !_this.focused) {
                _this.setFocus();
                /**
                 * The setFocus call above will clear focusedValue,
                 * but ionChange will never have gotten a chance to
                 * fire. Manually revert focusedValue so onBlur can
                 * compare against what was in the box before the clear.
                 */
                _this.focusedValue = value;
              }
            }
            resolve();
          }, 16 * 4);
        });
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    /**
     * Clears the input field and tells the input to blur since
     * the clearInput function doesn't want the input to blur
     * then calls the custom cancel function if the user passed one in.
     */
    this.onCancelSearchbar = /*#__PURE__*/function () {
      var _ref2 = (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
        }
        _this.ionCancel.emit();
        // get cached values before clearing the input
        const value = _this.getValue();
        const focused = _this.focused;
        yield _this.onClearInput();
        /**
         * If there used to be something in the box, and we weren't focused
         * beforehand (meaning no blur fired that would already handle this),
         * manually fire ionChange.
         */
        if (value && !focused) {
          _this.emitValueChange(ev);
        }
        if (_this.nativeInput) {
          _this.nativeInput.blur();
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    /**
     * Update the Searchbar input value when the input changes
     */
    this.onInput = ev => {
      const input = ev.target;
      if (input) {
        this.value = input.value;
      }
      this.emitInputChange(ev);
    };
    this.onChange = ev => {
      this.emitValueChange(ev);
    };
    /**
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */
    this.onBlur = ev => {
      this.focused = false;
      this.ionBlur.emit();
      this.positionElements();
      if (this.focusedValue !== this.value) {
        this.emitValueChange(ev);
      }
      this.focusedValue = undefined;
    };
    /**
     * Sets the Searchbar to focused and active on input focus.
     */
    this.onFocus = () => {
      this.focused = true;
      this.focusedValue = this.value;
      this.ionFocus.emit();
      this.positionElements();
    };
    this.focused = false;
    this.noAnimate = true;
    this.color = undefined;
    this.animated = false;
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.cancelButtonIcon = _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__.c.get('backButtonIcon', _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.a);
    this.cancelButtonText = 'Cancel';
    this.clearIcon = undefined;
    this.debounce = undefined;
    this.disabled = false;
    this.inputmode = undefined;
    this.enterkeyhint = undefined;
    this.placeholder = 'Search';
    this.searchIcon = undefined;
    this.showCancelButton = 'never';
    this.showClearButton = 'always';
    this.spellcheck = false;
    this.type = 'search';
    this.value = '';
  }
  debounceChanged() {
    const {
      ionInput,
      debounce,
      originalIonInput
    } = this;
    /**
     * If debounce is undefined, we have to manually revert the ionInput emitter in case
     * debounce used to be set to a number. Otherwise, the event would stay debounced.
     */
    this.ionInput = debounce === undefined ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_4__.j)(ionInput, debounce);
  }
  valueChanged() {
    const inputEl = this.nativeInput;
    const value = this.getValue();
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
  }
  showCancelButtonChanged() {
    requestAnimationFrame(() => {
      this.positionElements();
      (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
    });
  }
  connectedCallback() {
    this.emitStyle();
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.positionElements();
    this.debounceChanged();
    setTimeout(() => {
      this.noAnimate = false;
    }, 300);
  }
  emitStyle() {
    this.ionStyle.emit({
      searchbar: true
    });
  }
  /**
   * Sets focus on the native `input` in `ion-searchbar`. Use this method instead of the global
   * `input.focus()`.
   *
   * Developers who wish to focus an input when a page enters
   * should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.
   *
   * Developers who wish to focus an input when an overlay is presented
   * should call `setFocus` after `didPresent` has resolved.
   */
  setFocus() {
    var _this2 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.nativeInput) {
        _this2.nativeInput.focus();
      }
    })();
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange(event) {
    const {
      value
    } = this;
    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    // Emitting a value change should update the internal state for tracking the focused value
    this.focusedValue = newValue;
    this.ionChange.emit({
      value: newValue,
      event
    });
  }
  /**
   * Emits an `ionInput` event.
   */
  emitInputChange(event) {
    const {
      value
    } = this;
    this.ionInput.emit({
      value,
      event
    });
  }
  /**
   * Positions the input search icon, placeholder, and the cancel button
   * based on the input value and if it is focused. (ios only)
   */
  positionElements() {
    const value = this.getValue();
    const prevAlignLeft = this.shouldAlignLeft;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    const shouldAlignLeft = !this.animated || value.trim() !== '' || !!this.focused;
    this.shouldAlignLeft = shouldAlignLeft;
    if (mode !== 'ios') {
      return;
    }
    if (prevAlignLeft !== shouldAlignLeft) {
      this.positionPlaceholder();
    }
    if (this.animated) {
      this.positionCancelButton();
    }
  }
  /**
   * Positions the input placeholder
   */
  positionPlaceholder() {
    const inputEl = this.nativeInput;
    if (!inputEl) {
      return;
    }
    const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el);
    const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
    if (this.shouldAlignLeft) {
      inputEl.removeAttribute('style');
      iconEl.removeAttribute('style');
    } else {
      // Create a dummy span to get the placeholder width
      const doc = document;
      const tempSpan = doc.createElement('span');
      tempSpan.innerText = this.placeholder || '';
      doc.body.appendChild(tempSpan);
      // Get the width of the span then remove it
      (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
        const textWidth = tempSpan.offsetWidth;
        tempSpan.remove();
        // Calculate the input padding
        const inputLeft = 'calc(50% - ' + textWidth / 2 + 'px)';
        // Calculate the icon margin
        const iconLeft = 'calc(50% - ' + (textWidth / 2 + 30) + 'px)';
        // Set the input padding start and icon margin start
        if (rtl) {
          inputEl.style.paddingRight = inputLeft;
          iconEl.style.marginRight = iconLeft;
        } else {
          inputEl.style.paddingLeft = inputLeft;
          iconEl.style.marginLeft = iconLeft;
        }
      });
    }
  }
  /**
   * Show the iOS Cancel button on focus, hide it offscreen otherwise
   */
  positionCancelButton() {
    const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el);
    const cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
    const shouldShowCancel = this.shouldShowCancelButton();
    if (cancelButton !== null && shouldShowCancel !== this.isCancelVisible) {
      const cancelStyle = cancelButton.style;
      this.isCancelVisible = shouldShowCancel;
      if (shouldShowCancel) {
        if (rtl) {
          cancelStyle.marginLeft = '0';
        } else {
          cancelStyle.marginRight = '0';
        }
      } else {
        const offset = cancelButton.offsetWidth;
        if (offset > 0) {
          if (rtl) {
            cancelStyle.marginLeft = -offset + 'px';
          } else {
            cancelStyle.marginRight = -offset + 'px';
          }
        }
      }
    }
  }
  getValue() {
    return this.value || '';
  }
  hasValue() {
    return this.getValue() !== '';
  }
  /**
   * Determines whether or not the cancel button should be visible onscreen.
   * Cancel button should be shown if one of two conditions applies:
   * 1. `showCancelButton` is set to `always`.
   * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
   */
  shouldShowCancelButton() {
    if (this.showCancelButton === 'never' || this.showCancelButton === 'focus' && !this.focused) {
      return false;
    }
    return true;
  }
  /**
   * Determines whether or not the clear button should be visible onscreen.
   * Clear button should be shown if one of two conditions applies:
   * 1. `showClearButton` is set to `always`.
   * 2. `showClearButton` is set to `focus`, and the searchbar has been focused.
   */
  shouldShowClearButton() {
    if (this.showClearButton === 'never' || this.showClearButton === 'focus' && !this.focused) {
      return false;
    }
    return true;
  }
  render() {
    const {
      cancelButtonText
    } = this;
    const animated = this.animated && _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__.c.getBoolean('animated', true);
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    const clearIcon = this.clearIcon || (mode === 'ios' ? _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.b : _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.d);
    const searchIcon = this.searchIcon || (mode === 'ios' ? _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.s : _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.e);
    const shouldShowCancelButton = this.shouldShowCancelButton();
    const cancelButton = this.showCancelButton !== 'never' && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      "aria-label": cancelButtonText,
      "aria-hidden": shouldShowCancelButton ? undefined : 'true',
      type: "button",
      tabIndex: mode === 'ios' && !shouldShowCancelButton ? -1 : undefined,
      onMouseDown: this.onCancelSearchbar,
      onTouchStart: this.onCancelSearchbar,
      class: "searchbar-cancel-button"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      "aria-hidden": "true"
    }, mode === 'md' ? (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      "aria-hidden": "true",
      mode: mode,
      icon: this.cancelButtonIcon,
      lazy: false
    }) : cancelButtonText));
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      role: "search",
      "aria-disabled": this.disabled ? 'true' : null,
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.c)(this.color, {
        [mode]: true,
        'searchbar-animated': animated,
        'searchbar-disabled': this.disabled,
        'searchbar-no-animate': animated && this.noAnimate,
        'searchbar-has-value': this.hasValue(),
        'searchbar-left-aligned': this.shouldAlignLeft,
        'searchbar-has-focus': this.focused,
        'searchbar-should-show-clear': this.shouldShowClearButton(),
        'searchbar-should-show-cancel': this.shouldShowCancelButton()
      })
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "searchbar-input-container"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", {
      "aria-label": "search text",
      disabled: this.disabled,
      ref: el => this.nativeInput = el,
      class: "searchbar-input",
      inputMode: this.inputmode,
      enterKeyHint: this.enterkeyhint,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      placeholder: this.placeholder,
      type: this.type,
      value: this.getValue(),
      autoComplete: this.autocomplete,
      autoCorrect: this.autocorrect,
      spellcheck: this.spellcheck
    }), mode === 'md' && cancelButton, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      "aria-hidden": "true",
      mode: mode,
      icon: searchIcon,
      lazy: false,
      class: "searchbar-search-icon"
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      "aria-label": "reset",
      type: "button",
      "no-blur": true,
      class: "searchbar-clear-button",
      onPointerDown: ev => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the clear
         * button is activated.
         */
        ev.preventDefault();
      },
      onClick: () => this.onClearInput(true)
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      "aria-hidden": "true",
      mode: mode,
      icon: clearIcon,
      lazy: false,
      class: "searchbar-clear-icon"
    }))), mode === 'ios' && cancelButton);
  }
  get el() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "debounce": ["debounceChanged"],
      "value": ["valueChanged"],
      "showCancelButton": ["showCancelButtonChanged"]
    };
  }
};
Searchbar.style = {
  ios: searchbarIosCss,
  md: searchbarMdCss
};


/***/ }),

/***/ 35578:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-7670341c.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createColorClasses),
/* harmony export */   g: () => (/* binding */ getClassMap),
/* harmony export */   h: () => (/* binding */ hostContext),
/* harmony export */   o: () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};
const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }
  return [];
};
const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = /*#__PURE__*/function () {
  var _ref = (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');
      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }
        return router.push(url, direction, animation);
      }
    }
    return false;
  });
  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();


/***/ })

};
;
//# sourceMappingURL=3256.js.map