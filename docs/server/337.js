"use strict";
exports.id = 337;
exports.ids = [337];
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

/***/ 50337:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-alert.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_alert: () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-36a5fd75.js */ 15698);
/* harmony import */ var _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-a9abd569.js */ 64778);
/* harmony import */ var _config_80c044f2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-80c044f2.js */ 30580);
/* harmony import */ var _button_active_2fcba83d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-active-2fcba83d.js */ 37106);
/* harmony import */ var _overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-4101c476.js */ 8552);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-7670341c.js */ 35578);
/* harmony import */ var _animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation-258fd22b.js */ 69616);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 23797);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index-422b6e83.js */ 96178);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 10239);
/* harmony import */ var _framework_delegate_6a45ed30_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./framework-delegate-6a45ed30.js */ 26419);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 41099);
/* harmony import */ var _hardware_back_button_490df115_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hardware-back-button-490df115.js */ 93428);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index-e86f0117.js */ 99614);
/* harmony import */ var _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index-b32cad98.js */ 69830);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
















/**
 * iOS Alert Enter Animation
 */
const iosEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).keyframes([{
    offset: 0,
    opacity: '0.01',
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: '1',
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Alert Leave Animation
 */
const iosLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Alert Enter Animation
 */
const mdEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).keyframes([{
    offset: 0,
    opacity: '0.01',
    transform: 'scale(0.9)'
  }, {
    offset: 1,
    opacity: '1',
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Alert Leave Animation
 */
const mdLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).fromTo('opacity', 0.99, 0);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};
const alertIosCss = ".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-button.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{pointer-events:none}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:7px;text-align:center}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, #666666);font-size:14px}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:13px;text-align:center}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:6px;padding-bottom:6px;border:0.55px solid var(--ion-color-step-250, #bfbfbf);background-color:var(--ion-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #3880ff)}@supports (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{inset-inline-start:7px}}@supports not (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}@supports selector(:dir(rtl)){[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios:dir(rtl){left:unset;right:unset;right:7px}}}.alert-checkbox-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}@supports (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{inset-inline-start:9px}}@supports not (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}@supports selector(:dir(rtl)){[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios:dir(rtl){left:unset;right:unset;right:9px}}}.alert-button-group.sc-ion-alert-ios{-webkit-margin-end:-0.55px;margin-inline-end:-0.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:first-child:dir(rtl){border-right:0}}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}.alert-button-role-destructive.sc-ion-alert-ios,.alert-button-role-destructive.ion-activated.sc-ion-alert-ios,.alert-button-role-destructive.ion-focused.sc-ion-alert-ios{color:var(--ion-color-danger, #eb445a)}";
const alertMdCss = ".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px;padding-top:20px;padding-bottom:15px;text-align:start}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:16px}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, #737373)}.alert-message.sc-ion-alert-md{max-height:266px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #3880ff)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;max-height:266px;border-top:1px solid var(--ion-color-step-150, #d9d9d9);border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;height:48px;overflow:hidden}.alert-radio-label.sc-ion-alert-md{-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-radio-icon.sc-ion-alert-md{top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373)}@supports (inset-inline-start: 0){.alert-radio-icon.sc-ion-alert-md{inset-inline-start:26px}}@supports not (inset-inline-start: 0){.alert-radio-icon.sc-ion-alert-md{left:26px}[dir=rtl].sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[dir=rtl].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}@supports selector(:dir(rtl)){.alert-radio-icon.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:26px}}}.alert-radio-inner.sc-ion-alert-md{top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #3880ff)}@supports (inset-inline-start: 0){.alert-radio-inner.sc-ion-alert-md{inset-inline-start:3px}}@supports not (inset-inline-start: 0){.alert-radio-inner.sc-ion-alert-md{left:3px}[dir=rtl].sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[dir=rtl].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){.alert-radio-inner.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:3px}}}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, #262626)}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon.sc-ion-alert-md{top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373);contain:strict}@supports (inset-inline-start: 0){.alert-checkbox-icon.sc-ion-alert-md{inset-inline-start:26px}}@supports not (inset-inline-start: 0){.alert-checkbox-icon.sc-ion-alert-md{left:26px}[dir=rtl].sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[dir=rtl].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}@supports selector(:dir(rtl)){.alert-checkbox-icon.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:26px}}}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}@supports (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{inset-inline-start:3px}}@supports not (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:3px}[dir=rtl].sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[dir=rtl].sc-ion-alert-md [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:3px}}}.alert-button-group.sc-ion-alert-md{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}.alert-button.sc-ion-alert-md{border-radius:2px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}";
const Alert = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionAlertDidPresent", 7);
    this.willPresent = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionAlertWillPresent", 7);
    this.willDismiss = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionAlertWillDismiss", 7);
    this.didDismiss = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionAlertDidDismiss", 7);
    this.didPresentShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didDismiss", 7);
    this.delegateController = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    this.triggerController = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.e)();
    this.customHTMLEnabled = _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('innerHTMLTemplatesEnabled', _config_80c044f2_js__WEBPACK_IMPORTED_MODULE_3__.E);
    this.processedInputs = [];
    this.processedButtons = [];
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.B);
    };
    this.dispatchCancelHandler = ev => {
      const role = ev.detail.role;
      if ((0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.i)(role)) {
        const cancelButton = this.processedButtons.find(b => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.cssClass = undefined;
    this.header = undefined;
    this.subHeader = undefined;
    this.message = undefined;
    this.buttons = [];
    this.inputs = [];
    this.backdropDismiss = true;
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
  onKeydown(ev) {
    const inputTypes = new Set(this.processedInputs.map(i => i.type));
    // The only inputs we want to navigate between using arrow keys are the radios
    // ignore the keydown event if it is not on a radio button
    if (!inputTypes.has('radio') || ev.target && !this.el.contains(ev.target) || ev.target.classList.contains('alert-button')) {
      return;
    }
    // Get all radios inside of the radio group and then
    // filter out disabled radios since we need to skip those
    const query = this.el.querySelectorAll('.alert-radio');
    const radios = Array.from(query).filter(radio => !radio.disabled);
    // The focused radio is the one that shares the same id as
    // the event target
    const index = radios.findIndex(radio => radio.id === ev.target.id);
    // We need to know what the next radio element should
    // be in order to change the focus
    let nextEl;
    // If hitting arrow down or arrow right, move to the next radio
    // If we're on the last radio, move to the first radio
    if (['ArrowDown', 'ArrowRight'].includes(ev.key)) {
      nextEl = index === radios.length - 1 ? radios[0] : radios[index + 1];
    }
    // If hitting arrow up or arrow left, move to the previous radio
    // If we're on the first radio, move to the last radio
    if (['ArrowUp', 'ArrowLeft'].includes(ev.key)) {
      nextEl = index === 0 ? radios[radios.length - 1] : radios[index - 1];
    }
    if (nextEl && radios.includes(nextEl)) {
      const nextProcessed = this.processedInputs.find(input => input.id === (nextEl === null || nextEl === void 0 ? void 0 : nextEl.id));
      if (nextProcessed) {
        this.rbClick(nextProcessed);
        nextEl.focus();
      }
    }
  }
  buttonsChanged() {
    const buttons = this.buttons;
    this.processedButtons = buttons.map(btn => {
      return typeof btn === 'string' ? {
        text: btn,
        role: btn.toLowerCase() === 'cancel' ? 'cancel' : undefined
      } : btn;
    });
  }
  inputsChanged() {
    const inputs = this.inputs;
    // Get the first input that is not disabled and the checked one
    // If an enabled checked input exists, set it to be the focusable input
    // otherwise we default to focus the first input
    // This will only be used when the input is type radio
    const first = inputs.find(input => !input.disabled);
    const checked = inputs.find(input => input.checked && !input.disabled);
    const focusable = checked || first;
    // An alert can be created with several different inputs. Radios,
    // checkboxes and inputs are all accepted, but they cannot be mixed.
    const inputTypes = new Set(inputs.map(i => i.type));
    if (inputTypes.has('checkbox') && inputTypes.has('radio')) {
      console.warn(`Alert cannot mix input types: ${Array.from(inputTypes.values()).join('/')}. Please see alert docs for more info.`);
    }
    this.inputType = inputTypes.values().next().value;
    this.processedInputs = inputs.map((i, index) => {
      var _a;
      return {
        type: i.type || 'text',
        name: i.name || `${index}`,
        placeholder: i.placeholder || '',
        value: i.value,
        label: i.label,
        checked: !!i.checked,
        disabled: !!i.disabled,
        id: i.id || `alert-input-${this.overlayIndex}-${index}`,
        handler: i.handler,
        min: i.min,
        max: i.max,
        cssClass: (_a = i.cssClass) !== null && _a !== void 0 ? _a : '',
        attributes: i.attributes || {},
        tabindex: i.type === 'radio' && i !== focusable ? -1 : 0
      };
    });
  }
  connectedCallback() {
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.j)(this.el);
    this.triggerChanged();
  }
  componentWillLoad() {
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.k)(this.el);
    this.inputsChanged();
    this.buttonsChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  componentDidLoad() {
    /**
     * Do not create gesture if:
     * 1. A gesture already exists
     * 2. App is running in MD mode
     * 3. A wrapper ref does not exist
     */
    if (this.gesture || (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this) === 'md' || !this.wrapperEl) {
      return;
    }
    this.gesture = (0,_button_active_2fcba83d_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.wrapperEl, refEl => refEl.classList.contains('alert-button'));
    this.gesture.enable(true);
  }
  /**
   * Present the alert overlay after it has been created.
   */
  present() {
    var _this = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * When using an inline alert
       * and dismissing an alert it is possible to
       * quickly present the alert while it is
       * dismissing. We need to await any current
       * transition to allow the dismiss to finish
       * before presenting again.
       */
      if (_this.currentTransition !== undefined) {
        yield _this.currentTransition;
      }
      yield _this.delegateController.attachViewToDom();
      _this.currentTransition = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.f)(_this, 'alertEnter', iosEnterAnimation, mdEnterAnimation);
      yield _this.currentTransition;
      _this.currentTransition = undefined;
    })();
  }
  /**
   * Dismiss the alert overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the alert.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the alert.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    var _this2 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.currentTransition = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.g)(_this2, data, role, 'alertLeave', iosLeaveAnimation, mdLeaveAnimation);
      const dismissed = yield _this2.currentTransition;
      if (dismissed) {
        _this2.delegateController.removeViewFromDom();
      }
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the alert did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el, 'ionAlertDidDismiss');
  }
  /**
   * Returns a promise that resolves when the alert will dismiss.
   */
  onWillDismiss() {
    return (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el, 'ionAlertWillDismiss');
  }
  rbClick(selectedInput) {
    for (const input of this.processedInputs) {
      input.checked = input === selectedInput;
      input.tabindex = input === selectedInput ? 0 : -1;
    }
    this.activeId = selectedInput.id;
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.s)(selectedInput.handler, selectedInput);
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  cbClick(selectedInput) {
    selectedInput.checked = !selectedInput.checked;
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.s)(selectedInput.handler, selectedInput);
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  buttonClick(button) {
    var _this3 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const role = button.role;
      const values = _this3.getValues();
      if ((0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.i)(role)) {
        return _this3.dismiss({
          values
        }, role);
      }
      const returnData = yield _this3.callButtonHandler(button, values);
      if (returnData !== false) {
        return _this3.dismiss(Object.assign({
          values
        }, returnData), button.role);
      }
      return false;
    })();
  }
  callButtonHandler(button, data) {
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (button === null || button === void 0 ? void 0 : button.handler) {
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        const returnData = yield (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.s)(button.handler, data);
        if (returnData === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
        if (typeof returnData === 'object') {
          return returnData;
        }
      }
      return {};
    })();
  }
  getValues() {
    if (this.processedInputs.length === 0) {
      // this is an alert without any options/inputs at all
      return undefined;
    }
    if (this.inputType === 'radio') {
      // this is an alert with radio buttons (single value select)
      // return the one value which is checked, otherwise undefined
      const checkedInput = this.processedInputs.find(i => !!i.checked);
      return checkedInput ? checkedInput.value : undefined;
    }
    if (this.inputType === 'checkbox') {
      // this is an alert with checkboxes (multiple value select)
      // return an array of all the checked values
      return this.processedInputs.filter(i => i.checked).map(i => i.value);
    }
    // this is an alert with text inputs
    // return an object of all the values with the input name as the key
    const values = {};
    this.processedInputs.forEach(i => {
      values[i.name] = i.value || '';
    });
    return values;
  }
  renderAlertInputs() {
    switch (this.inputType) {
      case 'checkbox':
        return this.renderCheckbox();
      case 'radio':
        return this.renderRadio();
      default:
        return this.renderInput();
    }
  }
  renderCheckbox() {
    const inputs = this.processedInputs;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    if (inputs.length === 0) {
      return null;
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-checkbox-group"
    }, inputs.map(i => (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      onClick: () => this.cbClick(i),
      "aria-checked": `${i.checked}`,
      id: i.id,
      disabled: i.disabled,
      tabIndex: i.tabindex,
      role: "checkbox",
      class: Object.assign(Object.assign({}, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.g)(i.cssClass)), {
        'alert-tappable': true,
        'alert-checkbox': true,
        'alert-checkbox-button': true,
        'ion-focusable': true,
        'alert-checkbox-button-disabled': i.disabled || false
      })
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-button-inner"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-checkbox-icon"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-checkbox-inner"
    })), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-checkbox-label"
    }, i.label)), mode === 'md' && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null))));
  }
  renderRadio() {
    const inputs = this.processedInputs;
    if (inputs.length === 0) {
      return null;
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-radio-group",
      role: "radiogroup",
      "aria-activedescendant": this.activeId
    }, inputs.map(i => (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      onClick: () => this.rbClick(i),
      "aria-checked": `${i.checked}`,
      disabled: i.disabled,
      id: i.id,
      tabIndex: i.tabindex,
      class: Object.assign(Object.assign({}, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.g)(i.cssClass)), {
        'alert-radio-button': true,
        'alert-tappable': true,
        'alert-radio': true,
        'ion-focusable': true,
        'alert-radio-button-disabled': i.disabled || false
      }),
      role: "radio"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-button-inner"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-radio-icon"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-radio-inner"
    })), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-radio-label"
    }, i.label)))));
  }
  renderInput() {
    const inputs = this.processedInputs;
    if (inputs.length === 0) {
      return null;
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-input-group"
    }, inputs.map(i => {
      var _a, _b, _c, _d;
      if (i.type === 'textarea') {
        return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: "alert-input-wrapper"
        }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("textarea", Object.assign({
          placeholder: i.placeholder,
          value: i.value,
          id: i.id,
          tabIndex: i.tabindex
        }, i.attributes, {
          disabled: (_b = (_a = i.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : i.disabled,
          class: inputClass(i),
          onInput: e => {
            var _a;
            i.value = e.target.value;
            if ((_a = i.attributes) === null || _a === void 0 ? void 0 : _a.onInput) {
              i.attributes.onInput(e);
            }
          }
        })));
      } else {
        return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: "alert-input-wrapper"
        }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", Object.assign({
          placeholder: i.placeholder,
          type: i.type,
          min: i.min,
          max: i.max,
          value: i.value,
          id: i.id,
          tabIndex: i.tabindex
        }, i.attributes, {
          disabled: (_d = (_c = i.attributes) === null || _c === void 0 ? void 0 : _c.disabled) !== null && _d !== void 0 ? _d : i.disabled,
          class: inputClass(i),
          onInput: e => {
            var _a;
            i.value = e.target.value;
            if ((_a = i.attributes) === null || _a === void 0 ? void 0 : _a.onInput) {
              i.attributes.onInput(e);
            }
          }
        })));
      }
    }));
  }
  renderAlertButtons() {
    const buttons = this.processedButtons;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const alertButtonGroupClass = {
      'alert-button-group': true,
      'alert-button-group-vertical': buttons.length > 2
    };
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: alertButtonGroupClass
    }, buttons.map(button => (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      id: button.id,
      class: buttonClass(button),
      tabIndex: 0,
      onClick: () => this.buttonClick(button)
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      class: "alert-button-inner"
    }, button.text), mode === 'md' && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null))));
  }
  renderAlertMessage(msgId) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        id: msgId,
        class: "alert-message",
        innerHTML: (0,_config_80c044f2_js__WEBPACK_IMPORTED_MODULE_3__.a)(message)
      });
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      id: msgId,
      class: "alert-message"
    }, message);
  }
  render() {
    const {
      overlayIndex,
      header,
      subHeader,
      message,
      htmlAttributes
    } = this;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const hdrId = `alert-${overlayIndex}-hdr`;
    const subHdrId = `alert-${overlayIndex}-sub-hdr`;
    const msgId = `alert-${overlayIndex}-msg`;
    const role = this.inputs.length > 0 || this.buttons.length > 0 ? 'alertdialog' : 'alert';
    /**
     * If the header is defined, use that. Otherwise, fall back to the subHeader.
     * If neither is defined, don't set aria-labelledby.
     */
    const ariaLabelledBy = header ? hdrId : subHeader ? subHdrId : null;
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      role: role,
      "aria-modal": "true",
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": message !== undefined ? msgId : null,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${20000 + overlayIndex}`
      },
      class: Object.assign(Object.assign({}, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.cssClass)), {
        [mode]: true,
        'overlay-hidden': true,
        'alert-translucent': this.translucent
      }),
      onIonAlertWillDismiss: this.dispatchCancelHandler,
      onIonBackdropTap: this.onBackdropTap
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      tappable: this.backdropDismiss
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-wrapper ion-overlay-wrapper",
      ref: el => this.wrapperEl = el
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "alert-head"
    }, header && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("h2", {
      id: hdrId,
      class: "alert-title"
    }, header), subHeader && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("h2", {
      id: subHdrId,
      class: "alert-sub-title"
    }, subHeader)), this.renderAlertMessage(msgId), this.renderAlertInputs(), this.renderAlertButtons()), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }));
  }
  get el() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"],
      "buttons": ["buttonsChanged"],
      "inputs": ["inputsChanged"]
    };
  }
};
const inputClass = input => {
  var _a, _b, _c;
  return Object.assign(Object.assign({
    'alert-input': true,
    'alert-input-disabled': ((_b = (_a = input.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : input.disabled) || false
  }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.g)(input.cssClass)), (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.g)(input.attributes ? (_c = input.attributes.class) === null || _c === void 0 ? void 0 : _c.toString() : ''));
};
const buttonClass = button => {
  return Object.assign({
    'alert-button': true,
    'ion-focusable': true,
    'ion-activatable': true,
    [`alert-button-role-${button.role}`]: button.role !== undefined
  }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.g)(button.cssClass));
};
Alert.style = {
  ios: alertIosCss,
  md: alertMdCss
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
//# sourceMappingURL=337.js.map