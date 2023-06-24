"use strict";
exports.id = 7667;
exports.ids = [7667];
exports.modules = {

/***/ 23797:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ hapticSelectionStart),
/* harmony export */   b: () => (/* binding */ hapticSelectionChanged),
/* harmony export */   c: () => (/* binding */ hapticSelection),
/* harmony export */   d: () => (/* binding */ hapticImpact),
/* harmony export */   h: () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;
    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },
  available() {
    var _a;
    const win = window;
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */
    if (((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === 'web') {
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }
    return true;
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },
  selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
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

/***/ 31150:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-7373924f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   a: () => (/* binding */ findIonContent),
/* harmony export */   b: () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   c: () => (/* binding */ scrollByPoint),
/* harmony export */   d: () => (/* binding */ disableContentScrollY),
/* harmony export */   f: () => (/* binding */ findClosestIonContent),
/* harmony export */   g: () => (/* binding */ getScrollElement),
/* harmony export */   i: () => (/* binding */ isIonContent),
/* harmony export */   p: () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   r: () => (/* binding */ resetContentScrollY),
/* harmony export */   s: () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 41099);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-e86f0117.js */ 99614);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */
const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */
const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }
    return el;
  });
  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */
const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
  if (customContentHost) {
    return customContentHost;
  }
  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */
const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */
// TODO(FW-2832): type
const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */
const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }
  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */
const printIonContentErrorMsg = el => {
  return (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_2__.b)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */
const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */
    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};
const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};


/***/ }),

/***/ 27667:
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_refresher: () => (/* binding */ Refresher),
/* harmony export */   ion_refresher_content: () => (/* binding */ RefresherContent)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-36a5fd75.js */ 15698);
/* harmony import */ var _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-a9abd569.js */ 64778);
/* harmony import */ var _cubic_bezier_e78d1307_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubic-bezier-e78d1307.js */ 57337);
/* harmony import */ var _index_7373924f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-7373924f.js */ 31150);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 41099);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 23797);
/* harmony import */ var _animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation-258fd22b.js */ 69616);
/* harmony import */ var _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-393bc14a.js */ 90648);
/* harmony import */ var _config_80c044f2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-80c044f2.js */ 30580);
/* harmony import */ var _spinner_configs_40ada8cd_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spinner-configs-40ada8cd.js */ 17814);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-e86f0117.js */ 99614);
/* harmony import */ var _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index-b32cad98.js */ 69830);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */












const getRefresherAnimationType = contentEl => {
  const previousSibling = contentEl.previousElementSibling;
  const hasHeader = previousSibling !== null && previousSibling.tagName === 'ION-HEADER';
  return hasHeader ? 'translate' : 'scale';
};
const createPullingAnimation = (type, pullingSpinner, refresherEl) => {
  return type === 'scale' ? createScaleAnimation(pullingSpinner, refresherEl) : createTranslateAnimation(pullingSpinner, refresherEl);
};
const createBaseAnimation = pullingRefresherIcon => {
  // TODO(FW-2832): add types/re-evaluate asserting so many things
  const spinner = pullingRefresherIcon.querySelector('ion-spinner');
  const circle = spinner.shadowRoot.querySelector('circle');
  const spinnerArrowContainer = pullingRefresherIcon.querySelector('.spinner-arrow-container');
  const arrowContainer = pullingRefresherIcon.querySelector('.arrow-container');
  const arrow = arrowContainer ? arrowContainer.querySelector('ion-icon') : null;
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)().duration(1000).easing('ease-out');
  const spinnerArrowContainerAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(spinnerArrowContainer).keyframes([{
    offset: 0,
    opacity: '0.3'
  }, {
    offset: 0.45,
    opacity: '0.3'
  }, {
    offset: 0.55,
    opacity: '1'
  }, {
    offset: 1,
    opacity: '1'
  }]);
  const circleInnerAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(circle).keyframes([{
    offset: 0,
    strokeDasharray: '1px, 200px'
  }, {
    offset: 0.2,
    strokeDasharray: '1px, 200px'
  }, {
    offset: 0.55,
    strokeDasharray: '100px, 200px'
  }, {
    offset: 1,
    strokeDasharray: '100px, 200px'
  }]);
  const circleOuterAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(spinner).keyframes([{
    offset: 0,
    transform: 'rotate(-90deg)'
  }, {
    offset: 1,
    transform: 'rotate(210deg)'
  }]);
  /**
   * Only add arrow animation if present
   * this allows users to customize the spinners
   * without errors being thrown
   */
  if (arrowContainer && arrow) {
    const arrowContainerAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(arrowContainer).keyframes([{
      offset: 0,
      transform: 'rotate(0deg)'
    }, {
      offset: 0.3,
      transform: 'rotate(0deg)'
    }, {
      offset: 0.55,
      transform: 'rotate(280deg)'
    }, {
      offset: 1,
      transform: 'rotate(400deg)'
    }]);
    const arrowAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(arrow).keyframes([{
      offset: 0,
      transform: 'translateX(2px) scale(0)'
    }, {
      offset: 0.3,
      transform: 'translateX(2px) scale(0)'
    }, {
      offset: 0.55,
      transform: 'translateX(-1.5px) scale(1)'
    }, {
      offset: 1,
      transform: 'translateX(-1.5px) scale(1)'
    }]);
    baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
  }
  return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
};
const createScaleAnimation = (pullingRefresherIcon, refresherEl) => {
  /**
   * Do not take the height of the refresher icon
   * because at this point the DOM has not updated,
   * so the refresher icon is still hidden with
   * display: none.
   * The `ion-refresher` container height
   * is roughly the amount we need to offset
   * the icon by when pulling down.
   */
  const height = refresherEl.clientHeight;
  const spinnerAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(pullingRefresherIcon).keyframes([{
    offset: 0,
    transform: `scale(0) translateY(-${height}px)`
  }, {
    offset: 1,
    transform: 'scale(1) translateY(100px)'
  }]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
const createTranslateAnimation = (pullingRefresherIcon, refresherEl) => {
  /**
   * Do not take the height of the refresher icon
   * because at this point the DOM has not updated,
   * so the refresher icon is still hidden with
   * display: none.
   * The `ion-refresher` container height
   * is roughly the amount we need to offset
   * the icon by when pulling down.
   */
  const height = refresherEl.clientHeight;
  const spinnerAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(pullingRefresherIcon).keyframes([{
    offset: 0,
    transform: `translateY(-${height}px)`
  }, {
    offset: 1,
    transform: 'translateY(100px)'
  }]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
const createSnapBackAnimation = pullingRefresherIcon => {
  return (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)().duration(125).addElement(pullingRefresherIcon).fromTo('transform', 'translateY(var(--ion-pulling-refresher-translate, 100px))', 'translateY(0px)');
};
// iOS Native Refresher
// -----------------------------
const setSpinnerOpacity = (spinner, opacity) => {
  spinner.style.setProperty('opacity', opacity.toString());
};
const handleScrollWhilePulling = (ticks, numTicks, pullAmount) => {
  const max = 1;
  (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
    ticks.forEach((el, i) => {
      /**
       * Compute the opacity of each tick
       * mark as a percentage of the pullAmount
       * offset by max / numTicks so
       * the tick marks are shown staggered.
       */
      const min = i * (max / numTicks);
      const range = max - min;
      const start = pullAmount - min;
      const progression = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.l)(0, start / range, 1);
      el.style.setProperty('opacity', progression.toString());
    });
  });
};
const handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
  (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
    // If user pulls down quickly, the spinner should spin faster
    spinner.style.setProperty('--refreshing-rotation-duration', lastVelocityY >= 1.0 ? '0.5s' : '2s');
    spinner.style.setProperty('opacity', '1');
  });
};
const translateElement = (el, value, duration = 200) => {
  if (!el) {
    return Promise.resolve();
  }
  const trans = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.t)(el, duration);
  (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
    el.style.setProperty('transition', `${duration}ms all ease-out`);
    if (value === undefined) {
      el.style.removeProperty('transform');
    } else {
      el.style.setProperty('transform', `translate3d(0px, ${value}, 0px)`);
    }
  });
  return trans;
};
// Utils
// -----------------------------
const shouldUseNativeRefresher = /*#__PURE__*/function () {
  var _ref = (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (referenceEl, mode) {
    const refresherContent = referenceEl.querySelector('ion-refresher-content');
    if (!refresherContent) {
      return Promise.resolve(false);
    }
    yield new Promise(resolve => (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.c)(refresherContent, resolve));
    const pullingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
    const refreshingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
    return pullingSpinner !== null && refreshingSpinner !== null && (mode === 'ios' && (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.a)('mobile') && referenceEl.style.webkitOverflowScrolling !== undefined || mode === 'md');
  });
  return function shouldUseNativeRefresher(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
const refresherIosCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}[dir=rtl] ion-refresher{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){ion-refresher:dir(rtl){left:unset;right:unset;right:0}}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";
const refresherMdCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}[dir=rtl] ion-refresher{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){ion-refresher:dir(rtl){left:unset;right:unset;right:0}}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}";
const Refresher = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionRefresh = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionRefresh", 7);
    this.ionPull = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPull", 7);
    this.ionStart = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionStart", 7);
    this.appliedStyles = false;
    this.didStart = false;
    this.progress = 0;
    this.pointerDown = false;
    this.needsCompletion = false;
    this.didRefresh = false;
    this.lastVelocityY = 0;
    this.animations = [];
    this.nativeRefresher = false;
    this.state = 1 /* RefresherState.Inactive */;
    this.pullMin = 60;
    this.pullMax = this.pullMin + 60;
    this.closeDuration = '280ms';
    this.snapbackDuration = '280ms';
    this.pullFactor = 1;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  checkNativeRefresher() {
    var _this = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const useNativeRefresher = yield shouldUseNativeRefresher(_this.el, (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(_this));
      if (useNativeRefresher && !_this.nativeRefresher) {
        const contentEl = _this.el.closest('ion-content');
        _this.setupNativeRefresher(contentEl);
      } else if (!useNativeRefresher) {
        _this.destroyNativeRefresher();
      }
    })();
  }
  destroyNativeRefresher() {
    if (this.scrollEl && this.scrollListenerCallback) {
      this.scrollEl.removeEventListener('scroll', this.scrollListenerCallback);
      this.scrollListenerCallback = undefined;
    }
    this.nativeRefresher = false;
  }
  resetNativeRefresher(el, state) {
    var _this2 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.state = state;
      if ((0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(_this2) === 'ios') {
        yield translateElement(el, undefined, 300);
      } else {
        yield (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.t)(_this2.el.querySelector('.refresher-refreshing-icon'), 200);
      }
      _this2.didRefresh = false;
      _this2.needsCompletion = false;
      _this2.pointerDown = false;
      _this2.animations.forEach(ani => ani.destroy());
      _this2.animations = [];
      _this2.progress = 0;
      _this2.state = 1 /* RefresherState.Inactive */;
    })();
  }

  setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
    var _this3 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.elementToTransform = _this3.scrollEl;
      const ticks = pullingSpinner.shadowRoot.querySelectorAll('svg');
      let MAX_PULL = _this3.scrollEl.clientHeight * 0.16;
      const NUM_TICKS = ticks.length;
      (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => ticks.forEach(el => el.style.setProperty('animation', 'none')));
      _this3.scrollListenerCallback = () => {
        // If pointer is not on screen or refresher is not active, ignore scroll
        if (!_this3.pointerDown && _this3.state === 1 /* RefresherState.Inactive */) {
          return;
        }
        (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.e)(() => {
          // PTR should only be active when overflow scrolling at the top
          const scrollTop = _this3.scrollEl.scrollTop;
          const refresherHeight = _this3.el.clientHeight;
          if (scrollTop > 0) {
            /**
             * If refresher is refreshing and user tries to scroll
             * progressively fade refresher out/in
             */
            if (_this3.state === 8 /* RefresherState.Refreshing */) {
              const ratio = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.l)(0, scrollTop / (refresherHeight * 0.5), 1);
              (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
              return;
            }
            return;
          }
          if (_this3.pointerDown) {
            if (!_this3.didStart) {
              _this3.didStart = true;
              _this3.ionStart.emit();
            }
            // emit "pulling" on every move
            if (_this3.pointerDown) {
              _this3.ionPull.emit();
            }
          }
          /**
           * We want to delay the start of this gesture by ~30px
           * when initially pulling down so the refresher does not
           * overlap with the content. But when letting go of the
           * gesture before the refresher completes, we want the
           * refresher tick marks to quickly fade out.
           */
          const offset = _this3.didStart ? 30 : 0;
          const pullAmount = _this3.progress = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.l)(0, (Math.abs(scrollTop) - offset) / MAX_PULL, 1);
          const shouldShowRefreshingSpinner = _this3.state === 8 /* RefresherState.Refreshing */ || pullAmount === 1;
          if (shouldShowRefreshingSpinner) {
            if (_this3.pointerDown) {
              handleScrollWhileRefreshing(refreshingSpinner, _this3.lastVelocityY);
            }
            if (!_this3.didRefresh) {
              _this3.beginRefresh();
              _this3.didRefresh = true;
              (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_6__.d)({
                style: 'light'
              });
              /**
               * Translate the content element otherwise when pointer is removed
               * from screen the scroll content will bounce back over the refresher
               */
              if (!_this3.pointerDown) {
                translateElement(_this3.elementToTransform, `${refresherHeight}px`);
              }
            }
          } else {
            _this3.state = 2 /* RefresherState.Pulling */;
            handleScrollWhilePulling(ticks, NUM_TICKS, pullAmount);
          }
        });
      };
      _this3.scrollEl.addEventListener('scroll', _this3.scrollListenerCallback);
      _this3.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 96178))).createGesture({
        el: _this3.scrollEl,
        gestureName: 'refresher',
        gesturePriority: 31,
        direction: 'y',
        threshold: 5,
        onStart: () => {
          _this3.pointerDown = true;
          if (!_this3.didRefresh) {
            translateElement(_this3.elementToTransform, '0px');
          }
          /**
           * If the content had `display: none` when
           * the refresher was initialized, its clientHeight
           * will be 0. When the gesture starts, the content
           * will be visible, so try to get the correct
           * client height again. This is most common when
           * using the refresher in an ion-menu.
           */
          if (MAX_PULL === 0) {
            MAX_PULL = _this3.scrollEl.clientHeight * 0.16;
          }
        },
        onMove: ev => {
          _this3.lastVelocityY = ev.velocityY;
        },
        onEnd: () => {
          _this3.pointerDown = false;
          _this3.didStart = false;
          if (_this3.needsCompletion) {
            _this3.resetNativeRefresher(_this3.elementToTransform, 32 /* RefresherState.Completing */);
            _this3.needsCompletion = false;
          } else if (_this3.didRefresh) {
            (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.e)(() => translateElement(_this3.elementToTransform, `${_this3.el.clientHeight}px`));
          }
        }
      });
      _this3.disabledChanged();
    })();
  }
  setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
    var _this4 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const circle = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.g)(pullingSpinner).querySelector('circle');
      const pullingRefresherIcon = _this4.el.querySelector('ion-refresher-content .refresher-pulling-icon');
      const refreshingCircle = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.g)(refreshingSpinner).querySelector('circle');
      if (circle !== null && refreshingCircle !== null) {
        (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
          circle.style.setProperty('animation', 'none');
          // This lines up the animation on the refreshing spinner with the pulling spinner
          refreshingSpinner.style.setProperty('animation-delay', '-655ms');
          refreshingCircle.style.setProperty('animation-delay', '-655ms');
        });
      }
      _this4.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 96178))).createGesture({
        el: _this4.scrollEl,
        gestureName: 'refresher',
        gesturePriority: 31,
        direction: 'y',
        threshold: 5,
        canStart: () => _this4.state !== 8 /* RefresherState.Refreshing */ && _this4.state !== 32 /* RefresherState.Completing */ && _this4.scrollEl.scrollTop === 0,
        onStart: ev => {
          _this4.progress = 0;
          ev.data = {
            animation: undefined,
            didStart: false,
            cancelled: false
          };
        },
        onMove: ev => {
          if (ev.velocityY < 0 && _this4.progress === 0 && !ev.data.didStart || ev.data.cancelled) {
            ev.data.cancelled = true;
            return;
          }
          if (!ev.data.didStart) {
            ev.data.didStart = true;
            _this4.state = 2 /* RefresherState.Pulling */;
            // When ion-refresher is being used with a custom scroll target, the overflow styles need to be applied directly instead of via a css variable
            const {
              scrollEl
            } = _this4;
            const overflowProperty = scrollEl.matches(_index_7373924f_js__WEBPACK_IMPORTED_MODULE_4__.I) ? 'overflow' : '--overflow';
            (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => scrollEl.style.setProperty(overflowProperty, 'hidden'));
            const animationType = getRefresherAnimationType(contentEl);
            const animation = createPullingAnimation(animationType, pullingRefresherIcon, _this4.el);
            ev.data.animation = animation;
            animation.progressStart(false, 0);
            _this4.ionStart.emit();
            _this4.animations.push(animation);
            return;
          }
          // Since we are using an easing curve, slow the gesture tracking down a bit
          _this4.progress = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.l)(0, ev.deltaY / 180 * 0.5, 1);
          ev.data.animation.progressStep(_this4.progress);
          _this4.ionPull.emit();
        },
        onEnd: ev => {
          if (!ev.data.didStart) {
            return;
          }
          _this4.gesture.enable(false);
          const {
            scrollEl
          } = _this4;
          const overflowProperty = scrollEl.matches(_index_7373924f_js__WEBPACK_IMPORTED_MODULE_4__.I) ? 'overflow' : '--overflow';
          (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => scrollEl.style.removeProperty(overflowProperty));
          if (_this4.progress <= 0.4) {
            ev.data.animation.progressEnd(0, _this4.progress, 500).onFinish(() => {
              _this4.animations.forEach(ani => ani.destroy());
              _this4.animations = [];
              _this4.gesture.enable(true);
              _this4.state = 1 /* RefresherState.Inactive */;
            });

            return;
          }
          const progress = (0,_cubic_bezier_e78d1307_js__WEBPACK_IMPORTED_MODULE_3__.g)([0, 0], [0, 0], [1, 1], [1, 1], _this4.progress)[0];
          const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
          _this4.animations.push(snapBackAnimation);
          (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)( /*#__PURE__*/(0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            pullingRefresherIcon.style.setProperty('--ion-pulling-refresher-translate', `${progress * 100}px`);
            ev.data.animation.progressEnd();
            yield snapBackAnimation.play();
            _this4.beginRefresh();
            ev.data.animation.destroy();
            _this4.gesture.enable(true);
          }));
        }
      });
      _this4.disabledChanged();
    })();
  }
  setupNativeRefresher(contentEl) {
    var _this5 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.scrollListenerCallback || !contentEl || _this5.nativeRefresher || !_this5.scrollEl) {
        return;
      }
      /**
       * If using non-native refresher before make sure
       * we clean up any old CSS. This can happen when
       * a user manually calls the refresh method in a
       * component create callback before the native
       * refresher is setup.
       */
      _this5.setCss(0, '', false, '');
      _this5.nativeRefresher = true;
      const pullingSpinner = _this5.el.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
      const refreshingSpinner = _this5.el.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
      if ((0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(_this5) === 'ios') {
        _this5.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
      } else {
        _this5.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
      }
    })();
  }
  componentDidUpdate() {
    this.checkNativeRefresher();
  }
  connectedCallback() {
    var _this6 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.el.getAttribute('slot') !== 'fixed') {
        console.error('Make sure you use: <ion-refresher slot="fixed">');
        return;
      }
      const contentEl = _this6.el.closest(_index_7373924f_js__WEBPACK_IMPORTED_MODULE_4__.b);
      if (!contentEl) {
        (0,_index_7373924f_js__WEBPACK_IMPORTED_MODULE_4__.p)(_this6.el);
        return;
      }
      /**
       * Waits for the content to be ready before querying the scroll
       * or the background content element.
       */
      (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.c)(contentEl, /*#__PURE__*/(0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const customScrollTarget = contentEl.querySelector(_index_7373924f_js__WEBPACK_IMPORTED_MODULE_4__.I);
        /**
         * Query the custom scroll target (if available), first. In refresher implementations,
         * the ion-refresher element will always be a direct child of ion-content (slot="fixed"). By
         * querying the custom scroll target first and falling back to the ion-content element,
         * the correct scroll element will be returned by the implementation.
         */
        _this6.scrollEl = yield (0,_index_7373924f_js__WEBPACK_IMPORTED_MODULE_4__.g)(customScrollTarget !== null && customScrollTarget !== void 0 ? customScrollTarget : contentEl);
        /**
         * Query the background content element from the host ion-content element directly.
         */
        _this6.backgroundContentEl = yield contentEl.getBackgroundElement();
        if (yield shouldUseNativeRefresher(_this6.el, (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(_this6))) {
          _this6.setupNativeRefresher(contentEl);
        } else {
          _this6.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 96178))).createGesture({
            el: contentEl,
            gestureName: 'refresher',
            gesturePriority: 31,
            direction: 'y',
            threshold: 20,
            passive: false,
            canStart: () => _this6.canStart(),
            onStart: () => _this6.onStart(),
            onMove: ev => _this6.onMove(ev),
            onEnd: () => _this6.onEnd()
          });
          _this6.disabledChanged();
        }
      }));
    })();
  }
  disconnectedCallback() {
    this.destroyNativeRefresher();
    this.scrollEl = undefined;
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  /**
   * Call `complete()` when your async operation has completed.
   * For example, the `refreshing` state is while the app is performing
   * an asynchronous operation, such as receiving more data from an
   * AJAX request. Once the data has been received, you then call this
   * method to signify that the refreshing has completed and to close
   * the refresher. This method also changes the refresher's state from
   * `refreshing` to `completing`.
   */
  complete() {
    var _this7 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.nativeRefresher) {
        _this7.needsCompletion = true;
        // Do not reset scroll el until user removes pointer from screen
        if (!_this7.pointerDown) {
          (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => _this7.resetNativeRefresher(_this7.elementToTransform, 32 /* RefresherState.Completing */)));
        }
      } else {
        _this7.close(32 /* RefresherState.Completing */, '120ms');
      }
    })();
  }
  /**
   * Changes the refresher's state from `refreshing` to `cancelling`.
   */
  cancel() {
    var _this8 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.nativeRefresher) {
        // Do not reset scroll el until user removes pointer from screen
        if (!_this8.pointerDown) {
          (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => _this8.resetNativeRefresher(_this8.elementToTransform, 16 /* RefresherState.Cancelling */)));
        }
      } else {
        _this8.close(16 /* RefresherState.Cancelling */, '');
      }
    })();
  }
  /**
   * A number representing how far down the user has pulled.
   * The number `0` represents the user hasn't pulled down at all. The
   * number `1`, and anything greater than `1`, represents that the user
   * has pulled far enough down that when they let go then the refresh will
   * happen. If they let go and the number is less than `1`, then the
   * refresh will not happen, and the content will return to it's original
   * position.
   */
  getProgress() {
    return Promise.resolve(this.progress);
  }
  canStart() {
    if (!this.scrollEl) {
      return false;
    }
    if (this.state !== 1 /* RefresherState.Inactive */) {
      return false;
    }
    // if the scrollTop is greater than zero then it's
    // not possible to pull the content down yet
    if (this.scrollEl.scrollTop > 0) {
      return false;
    }
    return true;
  }
  onStart() {
    this.progress = 0;
    this.state = 1 /* RefresherState.Inactive */;
    this.memoizeOverflowStyle();
  }
  onMove(detail) {
    if (!this.scrollEl) {
      return;
    }
    // this method can get called like a bazillion times per second,
    // so it's built to be as efficient as possible, and does its
    // best to do any DOM read/writes only when absolutely necessary
    // if multi-touch then get out immediately
    const ev = detail.event;
    if (ev.touches !== undefined && ev.touches.length > 1) {
      return;
    }
    // do nothing if it's actively refreshing
    // or it's in the way of closing
    // or this was never a startY
    if ((this.state & 56 /* RefresherState._BUSY_ */) !== 0) {
      return;
    }
    const pullFactor = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
    const deltaY = detail.deltaY * pullFactor;
    // don't bother if they're scrolling up
    // and have not already started dragging
    if (deltaY <= 0) {
      // the current Y is higher than the starting Y
      // so they scrolled up enough to be ignored
      this.progress = 0;
      this.state = 1 /* RefresherState.Inactive */;
      if (this.appliedStyles) {
        // reset the styles only if they were applied
        this.setCss(0, '', false, '');
        return;
      }
      return;
    }
    if (this.state === 1 /* RefresherState.Inactive */) {
      // this refresh is not already actively pulling down
      // get the content's scrollTop
      const scrollHostScrollTop = this.scrollEl.scrollTop;
      // if the scrollTop is greater than zero then it's
      // not possible to pull the content down yet
      if (scrollHostScrollTop > 0) {
        this.progress = 0;
        return;
      }
      // content scrolled all the way to the top, and dragging down
      this.state = 2 /* RefresherState.Pulling */;
    }
    // prevent native scroll events
    if (ev.cancelable) {
      ev.preventDefault();
    }
    // the refresher is actively pulling at this point
    // move the scroll element within the content element
    this.setCss(deltaY, '0ms', true, '');
    if (deltaY === 0) {
      // don't continue if there's no delta yet
      this.progress = 0;
      return;
    }
    const pullMin = this.pullMin;
    // set pull progress
    this.progress = deltaY / pullMin;
    // emit "start" if it hasn't started yet
    if (!this.didStart) {
      this.didStart = true;
      this.ionStart.emit();
    }
    // emit "pulling" on every move
    this.ionPull.emit();
    // do nothing if the delta is less than the pull threshold
    if (deltaY < pullMin) {
      // ensure it stays in the pulling state, cuz its not ready yet
      this.state = 2 /* RefresherState.Pulling */;
      return;
    }
    if (deltaY > this.pullMax) {
      // they pulled farther than the max, so kick off the refresh
      this.beginRefresh();
      return;
    }
    // pulled farther than the pull min!!
    // it is now in the `ready` state!!
    // if they let go then it'll refresh, kerpow!!
    this.state = 4 /* RefresherState.Ready */;
    return;
  }
  onEnd() {
    // only run in a zone when absolutely necessary
    if (this.state === 4 /* RefresherState.Ready */) {
      // they pulled down far enough, so it's ready to refresh
      this.beginRefresh();
    } else if (this.state === 2 /* RefresherState.Pulling */) {
      // they were pulling down, but didn't pull down far enough
      // set the content back to it's original location
      // and close the refresher
      // set that the refresh is actively cancelling
      this.cancel();
    } else if (this.state === 1 /* RefresherState.Inactive */) {
      /**
       * The pull to refresh gesture was aborted
       * so we should immediately restore any overflow styles
       * that have been modified. Do not call this.cancel
       * because the styles will only be reset after a timeout.
       * If the gesture is aborted then scrolling should be
       * available right away.
       */
      this.restoreOverflowStyle();
    }
  }
  beginRefresh() {
    // assumes we're already back in a zone
    // they pulled down far enough, so it's ready to refresh
    this.state = 8 /* RefresherState.Refreshing */;
    // place the content in a hangout position while it thinks
    this.setCss(this.pullMin, this.snapbackDuration, true, '');
    // emit "refresh" because it was pulled down far enough
    // and they let go to begin refreshing
    this.ionRefresh.emit({
      complete: this.complete.bind(this)
    });
  }
  close(state, delay) {
    // create fallback timer incase something goes wrong with transitionEnd event
    setTimeout(() => {
      this.state = 1 /* RefresherState.Inactive */;
      this.progress = 0;
      this.didStart = false;
      /**
       * Reset any overflow styles so the
       * user can scroll again.
       */
      this.setCss(0, '0ms', false, '', true);
    }, 600);
    // reset the styles on the scroll element
    // set that the refresh is actively cancelling/completing
    this.state = state;
    this.setCss(0, this.closeDuration, true, delay);
  }
  setCss(y, duration, overflowVisible, delay, shouldRestoreOverflowStyle = false) {
    if (this.nativeRefresher) {
      return;
    }
    this.appliedStyles = y > 0;
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
      if (this.scrollEl && this.backgroundContentEl) {
        const scrollStyle = this.scrollEl.style;
        const backgroundStyle = this.backgroundContentEl.style;
        scrollStyle.transform = backgroundStyle.transform = y > 0 ? `translateY(${y}px) translateZ(0px)` : '';
        scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
        scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
        scrollStyle.overflow = overflowVisible ? 'hidden' : '';
      }
      /**
       * Reset the overflow styles only once
       * the pull to refresh effect has been closed.
       * This ensures that the gesture is done
       * and the refresh operation has either
       * been aborted or has completed.
       */
      if (shouldRestoreOverflowStyle) {
        this.restoreOverflowStyle();
      }
    });
  }
  memoizeOverflowStyle() {
    if (this.scrollEl) {
      const {
        overflow,
        overflowX,
        overflowY
      } = this.scrollEl.style;
      this.overflowStyles = {
        overflow: overflow !== null && overflow !== void 0 ? overflow : '',
        overflowX: overflowX !== null && overflowX !== void 0 ? overflowX : '',
        overflowY: overflowY !== null && overflowY !== void 0 ? overflowY : ''
      };
    }
  }
  restoreOverflowStyle() {
    if (this.overflowStyles !== undefined && this.scrollEl !== undefined) {
      const {
        overflow,
        overflowX,
        overflowY
      } = this.overflowStyles;
      this.scrollEl.style.overflow = overflow;
      this.scrollEl.style.overflowX = overflowX;
      this.scrollEl.style.overflowY = overflowY;
      this.overflowStyles = undefined;
    }
  }
  render() {
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      slot: "fixed",
      class: {
        [mode]: true,
        // Used internally for styling
        [`refresher-${mode}`]: true,
        'refresher-native': this.nativeRefresher,
        'refresher-active': this.state !== 1 /* RefresherState.Inactive */,
        'refresher-pulling': this.state === 2 /* RefresherState.Pulling */,
        'refresher-ready': this.state === 4 /* RefresherState.Ready */,
        'refresher-refreshing': this.state === 8 /* RefresherState.Refreshing */,
        'refresher-cancelling': this.state === 16 /* RefresherState.Cancelling */,
        'refresher-completing': this.state === 32 /* RefresherState.Completing */
      }
    });
  }

  get el() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
Refresher.style = {
  ios: refresherIosCss,
  md: refresherMdCss
};
const RefresherContent = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.customHTMLEnabled = _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('innerHTMLTemplatesEnabled', _config_80c044f2_js__WEBPACK_IMPORTED_MODULE_9__.E);
    this.pullingIcon = undefined;
    this.pullingText = undefined;
    this.refreshingSpinner = undefined;
    this.refreshingText = undefined;
  }
  componentWillLoad() {
    if (this.pullingIcon === undefined) {
      const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
      const overflowRefresher = this.el.style.webkitOverflowScrolling !== undefined ? 'lines' : _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_8__.i;
      this.pullingIcon = _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('refreshingIcon', mode === 'ios' && (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.a)('mobile') ? _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('spinner', overflowRefresher) : 'circular');
    }
    if (this.refreshingSpinner === undefined) {
      const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
      this.refreshingSpinner = _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('refreshingSpinner', _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('spinner', mode === 'ios' ? 'lines' : 'circular'));
    }
  }
  renderPullingText() {
    const {
      customHTMLEnabled,
      pullingText
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "refresher-pulling-text",
        innerHTML: (0,_config_80c044f2_js__WEBPACK_IMPORTED_MODULE_9__.a)(pullingText)
      });
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-pulling-text"
    }, pullingText);
  }
  renderRefreshingText() {
    const {
      customHTMLEnabled,
      refreshingText
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "refresher-refreshing-text",
        innerHTML: (0,_config_80c044f2_js__WEBPACK_IMPORTED_MODULE_9__.a)(refreshingText)
      });
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-refreshing-text"
    }, refreshingText);
  }
  render() {
    const pullingIcon = this.pullingIcon;
    const hasSpinner = pullingIcon != null && _spinner_configs_40ada8cd_js__WEBPACK_IMPORTED_MODULE_10__.S[pullingIcon] !== undefined;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: mode
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-pulling"
    }, this.pullingIcon && hasSpinner && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-pulling-icon"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "spinner-arrow-container"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-spinner", {
      name: this.pullingIcon,
      paused: true
    }), mode === 'md' && this.pullingIcon === 'circular' && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "arrow-container"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_8__.h,
      "aria-hidden": "true"
    })))), this.pullingIcon && !hasSpinner && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-pulling-icon"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: this.pullingIcon,
      lazy: false,
      "aria-hidden": "true"
    })), this.pullingText !== undefined && this.renderPullingText()), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-refreshing"
    }, this.refreshingSpinner && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-refreshing-icon"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-spinner", {
      name: this.refreshingSpinner
    })), this.refreshingText !== undefined && this.renderRefreshingText()));
  }
  get el() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
};


/***/ }),

/***/ 17814:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-40ada8cd.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${32 - 32 * index}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ })

};
;
//# sourceMappingURL=7667.js.map