"use strict";
exports.id = 6717;
exports.ids = [6717];
exports.modules = {

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

/***/ 66717:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_infinite_scroll: () => (/* binding */ InfiniteScroll),
/* harmony export */   ion_infinite_scroll_content: () => (/* binding */ InfiniteScrollContent)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-36a5fd75.js */ 15698);
/* harmony import */ var _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-a9abd569.js */ 64778);
/* harmony import */ var _index_7373924f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-7373924f.js */ 31150);
/* harmony import */ var _config_80c044f2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-80c044f2.js */ 30580);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 41099);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-e86f0117.js */ 99614);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */






const infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";
const InfiniteScroll = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionInfinite = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionInfinite", 7);
    this.thrPx = 0;
    this.thrPc = 0;
    this.didFire = false;
    this.isBusy = false;
    this.onScroll = () => {
      const scrollEl = this.scrollEl;
      if (!scrollEl || !this.canStart()) {
        return 1;
      }
      const infiniteHeight = this.el.offsetHeight;
      if (infiniteHeight === 0) {
        // if there is no height of this element then do nothing
        return 2;
      }
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight;
      const height = scrollEl.offsetHeight;
      const threshold = this.thrPc !== 0 ? height * this.thrPc : this.thrPx;
      const distanceFromInfinite = this.position === 'bottom' ? scrollHeight - infiniteHeight - scrollTop - threshold - height : scrollTop - infiniteHeight - threshold;
      if (distanceFromInfinite < 0) {
        if (!this.didFire) {
          this.isLoading = true;
          this.didFire = true;
          this.ionInfinite.emit();
          return 3;
        }
      } else {
        this.didFire = false;
      }
      return 4;
    };
    this.isLoading = false;
    this.threshold = '15%';
    this.disabled = false;
    this.position = 'bottom';
  }
  thresholdChanged() {
    const val = this.threshold;
    if (val.lastIndexOf('%') > -1) {
      this.thrPx = 0;
      this.thrPc = parseFloat(val) / 100;
    } else {
      this.thrPx = parseFloat(val);
      this.thrPc = 0;
    }
  }
  disabledChanged() {
    const disabled = this.disabled;
    if (disabled) {
      this.isLoading = false;
      this.isBusy = false;
    }
    this.enableScrollEvents(!disabled);
  }
  connectedCallback() {
    var _this = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const contentEl = (0,_index_7373924f_js__WEBPACK_IMPORTED_MODULE_3__.f)(_this.el);
      if (!contentEl) {
        (0,_index_7373924f_js__WEBPACK_IMPORTED_MODULE_3__.p)(_this.el);
        return;
      }
      _this.scrollEl = yield (0,_index_7373924f_js__WEBPACK_IMPORTED_MODULE_3__.g)(contentEl);
      _this.thresholdChanged();
      _this.disabledChanged();
      if (_this.position === 'top') {
        (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
          if (_this.scrollEl) {
            _this.scrollEl.scrollTop = _this.scrollEl.scrollHeight - _this.scrollEl.clientHeight;
          }
        });
      }
    })();
  }
  disconnectedCallback() {
    this.enableScrollEvents(false);
    this.scrollEl = undefined;
  }
  /**
   * Call `complete()` within the `ionInfinite` output event handler when
   * your async operation has completed. For example, the `loading`
   * state is while the app is performing an asynchronous operation,
   * such as receiving more data from an AJAX request to add more items
   * to a data list. Once the data has been received and UI updated, you
   * then call this method to signify that the loading has completed.
   * This method will change the infinite scroll's state from `loading`
   * to `enabled`.
   */
  complete() {
    var _this2 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scrollEl = _this2.scrollEl;
      if (!_this2.isLoading || !scrollEl) {
        return;
      }
      _this2.isLoading = false;
      if (_this2.position === 'top') {
        /**
         * New content is being added at the top, but the scrollTop position stays the same,
         * which causes a scroll jump visually. This algorithm makes sure to prevent this.
         * (Frame 1)
         *    - complete() is called, but the UI hasn't had time to update yet.
         *    - Save the current content dimensions.
         *    - Wait for the next frame using _dom.read, so the UI will be updated.
         * (Frame 2)
         *    - Read the new content dimensions.
         *    - Calculate the height difference and the new scroll position.
         *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
         * (Still frame 2, if I'm correct)
         *    - Change the scroll position (= visually maintain the scroll position).
         *    - Change the state to re-enable the InfiniteScroll.
         *    - This should be after changing the scroll position, or it could
         *    cause the InfiniteScroll to be triggered again immediately.
         * (Frame 3)
         *    Done.
         */
        _this2.isBusy = true;
        // ******** DOM READ ****************
        // Save the current content dimensions before the UI updates
        const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
        // ******** DOM READ ****************
        requestAnimationFrame(() => {
          (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.e)(() => {
            // UI has updated, save the new content dimensions
            const scrollHeight = scrollEl.scrollHeight;
            // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
            const newScrollTop = scrollHeight - prev;
            // ******** DOM WRITE ****************
            requestAnimationFrame(() => {
              (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
                scrollEl.scrollTop = newScrollTop;
                _this2.isBusy = false;
              });
            });
          });
        });
      }
    })();
  }
  canStart() {
    return !this.disabled && !this.isBusy && !!this.scrollEl && !this.isLoading;
  }
  enableScrollEvents(shouldListen) {
    if (this.scrollEl) {
      if (shouldListen) {
        this.scrollEl.addEventListener('scroll', this.onScroll);
      } else {
        this.scrollEl.removeEventListener('scroll', this.onScroll);
      }
    }
  }
  render() {
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const disabled = this.disabled;
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: {
        [mode]: true,
        'infinite-scroll-loading': this.isLoading,
        'infinite-scroll-enabled': !disabled
      }
    });
  }
  get el() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "threshold": ["thresholdChanged"],
      "disabled": ["disabledChanged"]
    };
  }
};
InfiniteScroll.style = infiniteScrollCss;
const infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
const infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
const InfiniteScrollContent = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.customHTMLEnabled = _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('innerHTMLTemplatesEnabled', _config_80c044f2_js__WEBPACK_IMPORTED_MODULE_4__.E);
    this.loadingSpinner = undefined;
    this.loadingText = undefined;
  }
  componentDidLoad() {
    if (this.loadingSpinner === undefined) {
      const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
      this.loadingSpinner = _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('infiniteLoadingSpinner', _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.c.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
    }
  }
  renderLoadingText() {
    const {
      customHTMLEnabled,
      loadingText
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "infinite-loading-text",
        innerHTML: (0,_config_80c044f2_js__WEBPACK_IMPORTED_MODULE_4__.a)(loadingText)
      });
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "infinite-loading-text"
    }, this.loadingText);
  }
  render() {
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: {
        [mode]: true,
        // Used internally for styling
        [`infinite-scroll-content-${mode}`]: true
      }
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "infinite-loading"
    }, this.loadingSpinner && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "infinite-loading-spinner"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-spinner", {
      name: this.loadingSpinner
    })), this.loadingText !== undefined && this.renderLoadingText()));
  }
};
InfiniteScrollContent.style = {
  ios: infiniteScrollContentIosCss,
  md: infiniteScrollContentMdCss
};


/***/ })

};
;
//# sourceMappingURL=6717.js.map