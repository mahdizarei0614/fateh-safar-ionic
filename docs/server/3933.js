"use strict";
exports.id = 3933;
exports.ids = [3933];
exports.modules = {

/***/ 43933:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-loading.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_loading: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-36a5fd75.js */ 15698);
/* harmony import */ var _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-a9abd569.js */ 64778);
/* harmony import */ var _config_80c044f2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-80c044f2.js */ 30580);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 41099);
/* harmony import */ var _overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-4101c476.js */ 8552);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-7670341c.js */ 35578);
/* harmony import */ var _animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation-258fd22b.js */ 69616);
/* harmony import */ var _framework_delegate_6a45ed30_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework-delegate-6a45ed30.js */ 26419);
/* harmony import */ var _hardware_back_button_490df115_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hardware-back-button-490df115.js */ 93428);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-e86f0117.js */ 99614);
/* harmony import */ var _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-b32cad98.js */ 69830);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */












/**
 * iOS Loading Enter Animation
 */
const iosEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Loading Leave Animation
 */
const iosLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
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
 * Md Loading Enter Animation
 */
const mdEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Loading Leave Animation
 */
const mdLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
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
const loadingIosCss = ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}";
const loadingMdCss = ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}";
const Loading = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionLoadingDidPresent", 7);
    this.willPresent = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionLoadingWillPresent", 7);
    this.willDismiss = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionLoadingWillDismiss", 7);
    this.didDismiss = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionLoadingDidDismiss", 7);
    this.didPresentShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didDismiss", 7);
    this.delegateController = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    this.triggerController = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.e)();
    this.customHTMLEnabled = _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('innerHTMLTemplatesEnabled', _config_80c044f2_js__WEBPACK_IMPORTED_MODULE_3__.E);
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.B);
    };
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.message = undefined;
    this.cssClass = undefined;
    this.duration = 0;
    this.backdropDismiss = false;
    this.showBackdrop = true;
    this.spinner = undefined;
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
  connectedCallback() {
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.j)(this.el);
    this.triggerChanged();
  }
  componentWillLoad() {
    if (this.spinner === undefined) {
      const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
      this.spinner = _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('loadingSpinner', _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
    }
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.k)(this.el);
  }
  componentDidLoad() {
    /**
     * If loading indicator was rendered with isOpen="true"
     * then we should open loading indicator immediately.
     */
    if (this.isOpen === true) {
      (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => this.present());
    }
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  /**
   * Present the loading overlay after it has been created.
   */
  present() {
    var _this = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * When using an inline loading indicator
       * and dismissing a loading indicator it is possible to
       * quickly present the loading indicator while it is
       * dismissing. We need to await any current
       * transition to allow the dismiss to finish
       * before presenting again.
       */
      if (_this.currentTransition !== undefined) {
        yield _this.currentTransition;
      }
      yield _this.delegateController.attachViewToDom();
      _this.currentTransition = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.f)(_this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation);
      yield _this.currentTransition;
      if (_this.duration > 0) {
        _this.durationTimeout = setTimeout(() => _this.dismiss(), _this.duration + 10);
      }
      _this.currentTransition = undefined;
    })();
  }
  /**
   * Dismiss the loading overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the loading.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the loading.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    var _this2 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.durationTimeout) {
        clearTimeout(_this2.durationTimeout);
      }
      _this2.currentTransition = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.g)(_this2, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
      const dismissed = yield _this2.currentTransition;
      if (dismissed) {
        _this2.delegateController.removeViewFromDom();
      }
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the loading did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el, 'ionLoadingDidDismiss');
  }
  /**
   * Returns a promise that resolves when the loading will dismiss.
   */
  onWillDismiss() {
    return (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el, 'ionLoadingWillDismiss');
  }
  renderLoadingMessage(msgId) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "loading-content",
        id: msgId,
        innerHTML: (0,_config_80c044f2_js__WEBPACK_IMPORTED_MODULE_3__.a)(message)
      });
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "loading-content",
      id: msgId
    }, message);
  }
  render() {
    const {
      message,
      spinner,
      htmlAttributes,
      overlayIndex
    } = this;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const msgId = `loading-${overlayIndex}-msg`;
    /**
     * If the message is defined, use that as the label.
     * Otherwise, don't set aria-labelledby.
     */
    const ariaLabelledBy = message !== undefined ? msgId : null;
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": ariaLabelledBy,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${40000 + this.overlayIndex}`
      },
      onIonBackdropTap: this.onBackdropTap,
      class: Object.assign(Object.assign({}, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.cssClass)), {
        [mode]: true,
        'overlay-hidden': true,
        'loading-translucent': this.translucent
      })
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      visible: this.showBackdrop,
      tappable: this.backdropDismiss
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "loading-wrapper ion-overlay-wrapper"
    }, spinner && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "loading-spinner"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-spinner", {
      name: spinner,
      "aria-hidden": "true"
    })), message !== undefined && this.renderLoadingMessage(msgId)), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
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
Loading.style = {
  ios: loadingIosCss,
  md: loadingMdCss
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
//# sourceMappingURL=3933.js.map