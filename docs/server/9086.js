"use strict";
exports.id = 9086;
exports.ids = [9086];
exports.modules = {

/***/ 37106:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-2fcba83d.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-36a5fd75.js */ 15698);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 23797);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-422b6e83.js */ 96178);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};


/***/ }),

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

/***/ 9086:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_action_sheet: () => (/* binding */ ActionSheet)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-36a5fd75.js */ 15698);
/* harmony import */ var _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-a9abd569.js */ 64778);
/* harmony import */ var _button_active_2fcba83d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-active-2fcba83d.js */ 37106);
/* harmony import */ var _overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-4101c476.js */ 8552);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-7670341c.js */ 35578);
/* harmony import */ var _animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation-258fd22b.js */ 69616);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 23797);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-422b6e83.js */ 96178);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 10239);
/* harmony import */ var _framework_delegate_6a45ed30_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./framework-delegate-6a45ed30.js */ 26419);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 41099);
/* harmony import */ var _hardware_back_button_490df115_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hardware-back-button-490df115.js */ 93428);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index-e86f0117.js */ 99614);
/* harmony import */ var _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index-b32cad98.js */ 69830);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */















/**
 * iOS Action Sheet Enter Animation
 */
const iosEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Action Sheet Leave Animation
 */
const iosLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Enter Animation
 */
const mdEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Leave Animation
 */
const mdLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
};
const actionSheetIosCss = ".sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100vh}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}.action-sheet-container.sc-ion-action-sheet-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:13px;font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:28px;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}";
const actionSheetMdCss = ".sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100vh}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}.action-sheet-title.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}.action-sheet-icon.sc-ion-action-sheet-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}";
const ActionSheet = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionActionSheetDidPresent", 7);
    this.willPresent = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionActionSheetWillPresent", 7);
    this.willDismiss = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionActionSheetWillDismiss", 7);
    this.didDismiss = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionActionSheetDidDismiss", 7);
    this.didPresentShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didDismiss", 7);
    this.delegateController = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    this.triggerController = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.e)();
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.B);
    };
    this.dispatchCancelHandler = ev => {
      const role = ev.detail.role;
      if ((0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.i)(role)) {
        const cancelButton = this.getButtons().find(b => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.buttons = [];
    this.cssClass = undefined;
    this.backdropDismiss = true;
    this.header = undefined;
    this.subHeader = undefined;
    this.translucent = false;
    this.animated = true;
    this.htmlAttributes = undefined;
    this.isOpen = false;
    this.trigger = undefined;
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const {
      trigger,
      el,
      triggerController
    } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  /**
   * Present the action sheet overlay after it has been created.
   */
  present() {
    var _this = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * When using an inline action sheet
       * and dismissing a action sheet it is possible to
       * quickly present the action sheet while it is
       * dismissing. We need to await any current
       * transition to allow the dismiss to finish
       * before presenting again.
       */
      if (_this.currentTransition !== undefined) {
        yield _this.currentTransition;
      }
      yield _this.delegateController.attachViewToDom();
      _this.currentTransition = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.f)(_this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
      yield _this.currentTransition;
      _this.currentTransition = undefined;
    })();
  }
  /**
   * Dismiss the action sheet overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the action sheet.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the action sheet.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    var _this2 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.currentTransition = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.g)(_this2, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
      const dismissed = yield _this2.currentTransition;
      if (dismissed) {
        _this2.delegateController.removeViewFromDom();
      }
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the action sheet did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.h)(this.el, 'ionActionSheetDidDismiss');
  }
  /**
   * Returns a promise that resolves when the action sheet will dismiss.
   *
   */
  onWillDismiss() {
    return (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.h)(this.el, 'ionActionSheetWillDismiss');
  }
  buttonClick(button) {
    var _this3 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const role = button.role;
      if ((0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.i)(role)) {
        return _this3.dismiss(button.data, role);
      }
      const shouldDismiss = yield _this3.callButtonHandler(button);
      if (shouldDismiss) {
        return _this3.dismiss(button.data, button.role);
      }
      return Promise.resolve();
    })();
  }
  callButtonHandler(button) {
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (button) {
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        const rtn = yield (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.s)(button.handler);
        if (rtn === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
      }
      return true;
    })();
  }
  getButtons() {
    return this.buttons.map(b => {
      return typeof b === 'string' ? {
        text: b
      } : b;
    });
  }
  connectedCallback() {
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.j)(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_4__.k)(this.el);
  }
  componentDidLoad() {
    /**
     * Do not create gesture if:
     * 1. A gesture already exists
     * 2. App is running in MD mode
     * 3. A wrapper ref does not exist
     */
    const {
      groupEl,
      wrapperEl
    } = this;
    if (this.gesture || (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this) === 'md' || !wrapperEl || !groupEl) {
      return;
    }
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.e)(() => {
      const isScrollable = groupEl.scrollHeight > groupEl.clientHeight;
      if (!isScrollable) {
        this.gesture = (0,_button_active_2fcba83d_js__WEBPACK_IMPORTED_MODULE_3__.c)(wrapperEl, refEl => refEl.classList.contains('action-sheet-button'));
        this.gesture.enable(true);
      }
    });
  }
  render() {
    const {
      header,
      htmlAttributes,
      overlayIndex
    } = this;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const allButtons = this.getButtons();
    const cancelButton = allButtons.find(b => b.role === 'cancel');
    const buttons = allButtons.filter(b => b.role !== 'cancel');
    const headerID = `action-sheet-${overlayIndex}-header`;
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": header !== undefined ? headerID : null,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${20000 + this.overlayIndex}`
      },
      class: Object.assign(Object.assign({
        [mode]: true
      }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.cssClass)), {
        'overlay-hidden': true,
        'action-sheet-translucent': this.translucent
      }),
      onIonActionSheetWillDismiss: this.dispatchCancelHandler,
      onIonBackdropTap: this.onBackdropTap
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      tappable: this.backdropDismiss
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-wrapper ion-overlay-wrapper",
      ref: el => this.wrapperEl = el
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-container"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-group",
      ref: el => this.groupEl = el
    }, header !== undefined && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      id: headerID,
      class: {
        'action-sheet-title': true,
        'action-sheet-has-sub-title': this.subHeader !== undefined
      }
    }, header, this.subHeader && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-sub-title"
    }, this.subHeader)), buttons.map(b => (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      id: b.id,
      class: buttonClass(b),
      onClick: () => this.buttonClick(b)
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      class: "action-sheet-button-inner"
    }, b.icon && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: b.icon,
      "aria-hidden": "true",
      lazy: false,
      class: "action-sheet-icon"
    }), b.text), mode === 'md' && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null)))), cancelButton && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-group action-sheet-group-cancel"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      class: buttonClass(cancelButton),
      onClick: () => this.buttonClick(cancelButton)
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      class: "action-sheet-button-inner"
    }, cancelButton.icon && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: cancelButton.icon,
      "aria-hidden": "true",
      lazy: false,
      class: "action-sheet-icon"
    }), cancelButton.text), mode === 'md' && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null))))), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }));
  }
  get el() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
const buttonClass = button => {
  return Object.assign({
    'action-sheet-button': true,
    'ion-activatable': true,
    'ion-focusable': true,
    [`action-sheet-${button.role}`]: button.role !== undefined
  }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_5__.g)(button.cssClass));
};
ActionSheet.style = {
  ios: actionSheetIosCss,
  md: actionSheetMdCss
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
//# sourceMappingURL=9086.js.map