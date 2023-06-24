(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 2577:
/*!***********************************************!*\
  !*** ./src/app/app-routing.landing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/landing/landing.component */ 1286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  redirectTo: 'landing',
  pathMatch: "full"
}, {
  path: 'landing',
  component: _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_window_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/utils/window.util */ 3338);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/element/bundle */ 4861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _shared_services_rtl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/rtl.service */ 7282);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4210);






(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_1__.register)();
class AppComponent {
  constructor(translate, rtlService) {
    var _getWindow, _getWindow2, _getWindow4;
    this.translate = translate;
    this.rtlService = rtlService;
    const cachedLang = (_getWindow = (0,_shared_utils_window_util__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _getWindow === void 0 ? void 0 : _getWindow.localStorage.getItem('lang');
    translate.setDefaultLang(cachedLang && cachedLang !== 'null' ? String(cachedLang) : 'fa');
    translate.use(cachedLang && cachedLang !== 'null' ? String(cachedLang) : 'fa');
    const theme = (_getWindow2 = (0,_shared_utils_window_util__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _getWindow2 === void 0 ? void 0 : _getWindow2.localStorage.getItem('theme');
    if (theme === 'dark') {
      var _getWindow3;
      (_getWindow3 = (0,_shared_utils_window_util__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _getWindow3 === void 0 ? void 0 : _getWindow3.document.body.classList.add('dark');
    }
    const direction = (_getWindow4 = (0,_shared_utils_window_util__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _getWindow4 === void 0 ? void 0 : _getWindow4.localStorage.getItem('dir');
    if (direction === 'rtl') {
      var _getWindow5;
      (_getWindow5 = (0,_shared_utils_window_util__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _getWindow5 === void 0 ? void 0 : _getWindow5.document.body.setAttribute('dir', 'rtl');
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_rtl_service__WEBPACK_IMPORTED_MODULE_2__.RtlService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-app");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing_landing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.landing.module */ 2577);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ 4495);
/* harmony import */ var _shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/tabs.service */ 5547);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/landing/landing.component */ 1286);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lottie-web */ 2466);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lord_icon_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lord-icon-element */ 2842);
/* harmony import */ var _shared_utils_window_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/utils/window.util */ 3338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);


















class AppModule {
  constructor() {
    if ((0,_shared_utils_window_util__WEBPACK_IMPORTED_MODULE_5__.getWindow)()) {
      (0,lord_icon_element__WEBPACK_IMPORTED_MODULE_6__.defineElement)((lottie_web__WEBPACK_IMPORTED_MODULE_4___default().loadAnimation));
    }
  }
}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
  }, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService, _shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_2__.TabsService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot({
    mode: 'ios',
    platform: {
      desktop: win => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
        return !isMobile;
      }
    }
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
    }
  }), _app_routing_landing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _app_routing_landing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule]
  });
})();
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__.TranslateHttpLoader(http);
}

/***/ }),

/***/ 1286:
/*!******************************************************!*\
  !*** ./src/app/modules/landing/landing.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 67);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4210);




function LandingComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lord-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/landing/", f_r5.iconSrc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r5.label);
  }
}
function LandingComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lord-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("lg:ml-8", index_r7 !== ctx_r1.features.length - 1)("lg:mb-0", index_r7 !== ctx_r1.features.length - 1)("mb-6", index_r7 !== ctx_r1.features.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/landing/", f_r6.iconSrc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r6.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r6.description, " ");
  }
}
function LandingComponent_div_30_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80)(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, card_r8.toman, "1.0-0"), " \u062A\u0648\u0645\u0627\u0646 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, card_r8.dollar, "1.0-0"), " \u062F\u0644\u0627\u0631 ");
  }
}
function LandingComponent_div_30_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fill", card_r8.buttonStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u062E\u0631\u06CC\u062F ", card_r8.label, " ");
  }
}
function LandingComponent_div_30_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0628\u0647 \u0632\u0648\u062F\u06CC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LandingComponent_div_30_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r16);
  }
}
function LandingComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66)(1, "div", 67)(2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LandingComponent_div_30_div_6_Template, 7, 8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LandingComponent_div_30_ion_button_7_Template, 2, 2, "ion-button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LandingComponent_div_30_ng_template_8_Template, 2, 0, "ng-template", null, 73, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 74)(11, "div", 75)(12, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0633\u0642\u0641 \u062A\u0631\u0627\u06A9\u0646\u0634 \u0645\u0627\u0647\u06CC\u0627\u0646\u0647");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LandingComponent_div_30_li_18_Template, 2, 1, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const card_r8 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/images/landing/", card_r8.cardImgSrc, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r8.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r8.toman && card_r8.dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r8.toman && card_r8.dollar)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 7, card_r8.maxMonthlyTransactions, "1.0-0"), " \u062F\u0644\u0627\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", card_r8.features);
  }
}
function LandingComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85)(1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r17 = ctx.$implicit;
    const index_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r17);
  }
}
function LandingComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const faq_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](faq_r19.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](faq_r19.answer);
  }
}
const _c0 = function () {
  return {
    slidesPerView: 1,
    spaceBetween: 24
  };
};
const _c1 = function () {
  return {
    slidesPerView: 2,
    spaceBetween: 24
  };
};
const _c2 = function () {
  return {
    slidesPerView: 4,
    spaceBetween: 24
  };
};
const _c3 = function (a0, a1, a2) {
  return {
    "320": a0,
    "860": a1,
    "1024": a2
  };
};
class LandingComponent {
  constructor() {
    this.swiperModules = [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicSlides];
    this.features = [{
      iconSrc: 'cart.json',
      label: 'خرید از پایانه‌های فروشگاهی',
      description: 'با مسترکارت مسافرتی امکان خرید از تمام پایانه‌های فروشگاهی را در سفر خود به ترکیه یا سایر کشورها خواهید داشت. این کارت‌ها قابلیت پرداخت مگنتی، بدون تماس و با استفاده از چیپ را دارا هستند.'
    }, {
      iconSrc: 'payment.json',
      label: 'درگاه پرداخت بین‌المللی',
      description: ' شما می‌توانید برای تکمیل پرداخت‌های آنلاین بین‌المللی از مسترکارت مسافرتی اختصاصی خود استفاده کنید. برای مثال، خرید آنلاین از فروشگاه‌ها، پرداخت هزینه‌ آزمون‌های زبان خارجی و سایر موارد با استفاده از مسترکارت مسافرتی امکان‌پذیر خواهد بود.'
    }, {
      iconSrc: 'wallet.json',
      label: 'برداشت وجه از دستگاه‌های خودپرداز',
      description: 'با وجود مسترکارت مسافرتی، دیگر نیازی به حمل وجه نقد در سفرهای خارجی خود نخواهید داشت. شما می‌توانید به راحتی با استفاده از مسترکارت مسافرتی و مراجعه به دستگاه‌های خودپرداز، به وجه نقد مورد نیاز خود در سفر دسترسی داشته باشید.'
    }];
    this.cards = [{
      vip: true,
      cardImgSrc: 'vip.png',
      label: 'مستر کارت VIP',
      toman: 21129339,
      dollar: 420,
      features: ['خریدهای آنلاین بین‌المللی'],
      maxMonthlyTransactions: 100000,
      buttonStyle: "solid"
    }, {
      cardImgSrc: 'black.png',
      label: 'مسترکارت پلاتینیوم',
      toman: 6540034,
      dollar: 130,
      features: ['خریدهای آنلاین بین‌المللی'],
      maxMonthlyTransactions: 10000,
      buttonStyle: "outline"
    }, {
      cardImgSrc: 'gold.png',
      label: 'مسترکارت گلد',
      features: ['خریدهای آنلاین بین‌المللی'],
      maxMonthlyTransactions: 1000,
      comingSoon: true
    }, {
      cardImgSrc: 'classic.png',
      label: 'مسترکارت کلاسیک',
      features: ['خریدهای آنلاین بین‌المللی'],
      maxMonthlyTransactions: 200,
      comingSoon: true
    }];
    this.steps = ['مطالعه شرایط و قوانین مسترکارت', 'ثبت‌نام', 'احراز هویت', 'تکمیل اطلاعات و ارسال عکس صفحه اول پاسپورت', 'انتخاب کارت و پرداخت هزینه', 'احراز هویت حضوری و دریافت کارت در ترکیه', 'افزودن کارت در داشبورد'];
    this.faqs = [{
      question: 'آیا نام درخواست دهنده روی مسترکارت مسافرتی درج می شود؟',
      answer: 'بله هر مسترکارت مسافرتی با نام مالک اصلی آن صادر می شود.'
    }, {
      question: 'امکان شارژ حساب مسترکارت مسافرتی از ایران وجود دارد؟',
      answer: 'بله کاربران می توانند با مراجعه به داشبورد خود در او ام پی فینکس با پرداخت ریال، مسترکارت خود را در لحظه شارژ کنند.'
    }, {
      question: 'آیا نیاز به احراز هویت فیزیکی برای مسترکارت مسافرتی وجود دارد؟',
      answer: 'خیر، تمام مراحل احراز هویت به صورت آنلاین در سایت او ام پی فینکس انجام می شود. فقط برای دریافت مسترکارت مسافرتی نیاز به حضور در دفتر ترکیه خواهید داشت.'
    }];
  }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)();
};
LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-root"]],
  decls: 95,
  vars: 14,
  consts: [[1, "overflow-scroll"], [1, "ease-in-out", "duration-300", "z-[100]", "fixed", "top-0", "w-full", "h-[74px]"], [1, "flex", "items-center", "h-full", "justify-between", "mx-auto", "px-6", "lg:px-24"], [1, "items-center", "justify-between", "grow-1"], [1, "sticky", "top-0", "z-0", "mesh-bg", "w-full", "h-[100vh]", "flex", "shrink-0", "min-h-[100vh]", "mx-auto", "py-12", "md:py-20", "px-6", "md:px-24", "lg:px-36", "xl:px-48", "items-start", "justify-center", "md:items-center", "md:justify-start"], [1, "flex", "justify-center", "md:justify-between", "items-center", "w-full", "h-full", "flex-col-reverse", "md:flex-row"], [1, "z-[2]", "flex", "flex-col", "items-center", "md:items-start", "w-full"], [1, "mb-3", "md:mb-5", "text-3xl", "lg:text-6xl", "md:text-5xl", "ion-color-primary", "whitespace-nowrap", "font-bold", "md:w-1/2", "text-center", "md:text-start"], [1, "mb-2", "md:mb-4", "text-xl", "lg:text-4xl", "md:text-3xl", "italic", "text-white", "text-center", "md:text-start"], [1, "flex", "mt-2"], ["fill", "outline"], [1, "mt-3", "md:mt-6"], ["class", "flex items-center mb-2 md:mb-4", 4, "ngFor", "ngForOf"], ["src", "../../../assets/images/landing/illustration.png", "alt", "", 1, "z-[1]", "w-[80%]", "max-w-[300px]", "md:max-w-[400px]", "lg:max-w-[500px]", "shrink-1", "mb-8", "md:mb-0"], [1, "relative", "z-[2]", "bg-secondary-5", "backdrop-blur-md", "py-6", "md:py-24"], [1, "mb-6", "md:mb-24", "px-6", "md:px-24"], [1, "flex", "flex-wrap", "px-0", "xl:px-32"], ["class", "w-full lg:w-[calc((100%-64px)/3)] px-3 py-6 bg-primary-3 border flex flex-col items-center border-primary-4 rounded-3xl shadow backdrop-blur-md", 3, "lg:ml-8", "lg:mb-0", "mb-6", 4, "ngFor", "ngForOf"], [1, "h-full", "w-full", "mt-12", "md:mt-20", "px-6", "md:px-24"], [1, "flex", "flex-col", "h-full"], [1, "flex", "flex-wrap"], [1, "text-3xl", "lg:text-5xl", "md:text-4xl", "text-white", "w-full", "text-center", "md:text-start", "whitespace-normal", "flex-shrink-0", "flex-grow-0"], [1, "flex", "w-full", "flex-wrap", "flex-shrink", "flex-grow", "justify-center", "px-0", "xl:px-32"], ["class", "mt-8 md:mt-16 mx-auto lg:mx-4 relative", 4, "ngFor", "ngForOf"], [1, "p-6", "md:p-24", "bg-primary-5", "backdrop-blur-md"], [1, "flex", "flex-wrap", "px-0", "xl:px-32", "mt-8", "md:mt-16", "mx-auto"], ["dir", "rtl", "pagination", "true", "pagination-clickable", "true", "space-between", "24", 3, "breakpoints", "modules"], [1, "bg-basic-1100", "cursor-pointer", "flex", "items-center", "justify-center", "relative", "rounded-md", "overflow-hidden", "h-36"], [1, "flex", "px-6", "gap-4", "items-center"], [1, "z-10"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_12524_157327)"], ["d", "M1 28.4999C1 13.3119 13.312 0.999931 28.5 0.999931C43.688 0.999931 56 13.3119 56 28.4999C56 43.688 43.688 55.9999 28.5 55.9999C13.312 55.9999 1 43.688 1 28.4999Z", "fill", "#1ED760", "stroke", "white", "stroke-width", "2"], ["d", "M40.9552 40.4863C40.8356 40.6827 40.6785 40.8536 40.4928 40.9892C40.3071 41.1248 40.0964 41.2224 39.873 41.2765C39.6495 41.3305 39.4175 41.3399 39.1904 41.3042C38.9632 41.2685 38.7454 41.1883 38.5493 41.0682C31.9587 37.0402 23.6616 36.1306 13.8897 38.3619C13.6658 38.4131 13.4341 38.4196 13.2077 38.3812C12.9813 38.3428 12.7647 38.2602 12.5702 38.138C12.1775 37.8914 11.8988 37.4989 11.7955 37.0467C11.7444 36.8229 11.7378 36.5911 11.7762 36.3648C11.8146 36.1384 11.8972 35.9218 12.0194 35.7273C12.266 35.3346 12.6586 35.0559 13.1107 34.9526C23.8041 32.5075 32.9752 33.5597 40.3757 38.0805C41.1998 38.5852 41.4599 39.6622 40.9552 40.4863ZM44.3894 32.8436C44.0856 33.3382 43.5979 33.6919 43.0334 33.8271C42.469 33.9622 41.8739 33.8678 41.3791 33.5644C33.8361 28.9272 22.3328 27.5842 13.4087 30.2928C12.8532 30.4609 12.2536 30.4017 11.7416 30.1284C11.2296 29.855 10.8469 29.3897 10.6775 28.8346C10.5099 28.2792 10.5694 27.68 10.843 27.1684C11.1166 26.6569 11.5819 26.2747 12.1369 26.1057C22.3316 23.0123 35.0058 24.5097 43.6698 29.8345C44.1641 30.1382 44.5176 30.6258 44.6525 31.1901C44.7874 31.7543 44.6928 32.3491 44.3894 32.8436ZM44.6863 24.885C35.6363 19.5103 20.713 19.0175 12.0752 21.6383C11.7453 21.7385 11.3989 21.7726 11.0558 21.7389C10.7127 21.7051 10.3796 21.6041 10.0755 21.4416C9.77144 21.2791 9.50235 21.0584 9.28361 20.7919C9.06486 20.5254 8.90075 20.2185 8.80063 19.8886C8.70052 19.5587 8.66636 19.2123 8.70011 18.8692C8.73386 18.5261 8.83486 18.193 8.99735 17.8889C9.15983 17.5848 9.38061 17.3157 9.64709 17.097C9.91356 16.8783 10.2205 16.7141 10.5504 16.614C20.466 13.6049 36.9485 14.1856 47.3665 20.3689C47.663 20.5449 47.922 20.7776 48.1286 21.0536C48.3352 21.3297 48.4854 21.6437 48.5706 21.9779C48.6559 22.312 48.6745 22.6596 48.6254 23.0009C48.5763 23.3422 48.4604 23.6705 48.2844 23.967C48.1084 24.2636 47.8758 24.5225 47.5997 24.7291C47.3236 24.9357 47.0096 25.086 46.6755 25.1712C46.3413 25.2564 45.9937 25.275 45.6524 25.2259C45.3111 25.1768 44.9828 25.061 44.6863 24.885Z", "fill", "white"], ["id", "clip0_12524_157327"], ["width", "57", "height", "57", "fill", "white"], [1, "font-normal", "text-normal", "md:text-large", "text-right"], ["width", "57", "height", "41", "viewBox", "0 0 57 41", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_12524_157321)"], ["d", "M6.96756 38.3504L6.96406 38.3497C5.59251 38.0709 4.44177 37.4603 3.61734 36.6131L3.61738 36.613L3.60999 36.6056C3.01655 36.0084 2.47477 35.022 2.02955 33.4848L2.02958 33.4848L2.02733 33.4772C1.65795 32.2385 1.50714 31.2076 1.28528 28.4872C0.945976 22.3423 0.86664 17.3433 1.28338 11.7675C1.31737 11.463 1.3493 11.1585 1.38116 10.8547C1.51717 9.55755 1.65185 8.27313 1.94029 7.05615C2.29369 5.56507 2.85003 4.31794 3.80382 3.42857C4.76511 2.54144 5.86836 1.98097 7.10613 1.7482L7.10874 1.7477C8.13365 1.55214 10.9845 1.36188 14.9 1.22346C18.7762 1.08643 23.6059 1.00237 28.521 1.00237C33.4251 1.00237 38.2545 1.08643 42.1335 1.22346C46.0519 1.36188 48.9085 1.55214 49.9346 1.74774L49.9365 1.7481C51.4863 2.04042 52.9202 2.91386 53.7441 3.98444C55.4841 6.76135 55.6883 10.156 55.8748 13.2567C55.8945 13.5842 55.9141 13.9085 55.9352 14.2284C56.0215 15.7509 56.0215 24.4818 55.9351 26.0031C55.6002 31.1527 55.3349 32.8175 54.6436 34.534L54.6409 34.5406C54.2113 35.6297 53.8784 36.1339 53.3021 36.7128C52.3705 37.6287 51.1871 38.2409 49.9063 38.4712C40.57 39.1752 32.6366 39.3281 23.624 39.1832C12.723 38.9815 9.132 38.7986 6.96756 38.3504Z", "fill", "#CD201F", "stroke", "white", "stroke-width", "2"], ["d", "M37.9706 19.5316C32.7444 16.7248 27.7402 14.1444 22.625 11.4503V27.5671C28.0077 24.6264 33.6813 21.9334 37.9928 19.5316H37.9706Z", "fill", "white"], ["id", "clip0_12524_157321"], ["width", "57", "height", "40.2353", "fill", "white"], [1, "font-normal", "text-normal", "md:text-large", "z-10", "text-right"], ["cx", "28.5", "cy", "28.5", "r", "28.5", "fill", "white"], ["d", "M28.3437 10.6675C29.3232 11.2321 30.3623 11.9588 31.153 12.729L30.8425 13.0411C29.2816 12.8751 27.6379 13.0824 26.1583 13.1052C25.9935 12.9387 25.6611 12.6884 25.9705 12.4792L28.3437 10.6675ZM55.9392 30.0566C55.96 30.761 56.0262 31.366 55.7514 32.0872C52.9002 32.8984 51.0274 29.8792 48.2609 30.3344L48.5737 31.8994C51.1331 31.9836 52.7319 34.4383 55.3758 34.3328C55.0002 35.083 55.5434 37.0601 53.8793 36.2699C52.1516 35.8545 50.9024 34.3328 49.0096 34.3328C48.7812 34.752 48.9259 35.3328 48.8857 35.8291C50.8828 36.1423 52.3192 37.8305 54.3155 38.1422C54.1277 38.8284 53.9418 39.5968 53.3791 40.0151C51.755 39.6198 50.4862 38.1609 48.757 38.2026L48.4493 39.6396C50.0923 39.6819 51.1544 41.1359 52.631 41.5726C52.6716 42.1786 52.1301 42.7204 51.8177 43.2612C50.5068 42.8676 49.5071 41.741 48.009 41.8242C47.9882 41.2596 48.3232 40.6188 48.1968 40.0151C46.5144 40.5157 45.3862 38.9523 44.1393 38.0142C44.1035 34.9453 40.873 32.9317 40.7024 30.0568C40.6695 29.4834 40.7568 28.8716 41.0182 28.2138C42.0799 25.7587 41.7464 22.571 40.5823 20.2818C40.2282 19.6792 39.6017 19.2038 39.0176 18.8495C39.872 20.6612 40.9138 22.8016 40.3938 25.0283C40.3335 26.7476 39.3189 28.3992 39.3075 30.0568C39.3036 30.6478 39.4298 31.2388 39.7697 31.8356C41.1229 34.2735 43.5581 36.5815 42.6424 39.6393C42.3906 40.5784 41.6413 41.3045 41.4538 42.2603C43.0373 43.572 44.5345 45.0501 46.6356 45.1332C47.3842 44.655 46.9684 42.5344 48.5084 43.5127L50.7571 44.6376C50.5934 45.2394 50.0893 45.779 49.6328 46.1936C48.7797 45.7784 47.9474 45.2804 46.8836 45.321C46.5701 45.654 46.3002 46.0276 46.3239 46.5053C47.0726 46.6286 47.7594 46.9444 48.3846 47.3823C48.0941 48.0077 47.5282 48.3995 47.008 48.8786L45.2639 48.2549C44.9726 48.6717 44.3677 49.1095 44.58 49.5671C44.9737 49.7355 45.4101 49.9633 45.6997 50.2554C44.93 51.0877 43.9541 51.6233 43.015 52.1882C42.2062 49.5441 39.5409 47.6904 39.7699 44.6327L39.6461 44.5089C39.0198 45.2134 39.2289 46.3397 39.2693 47.254C40.0191 49.169 41.8074 50.6483 42.0786 52.7485C41.7655 53.2891 41.0597 53.3969 40.5178 53.6255C40.581 49.8391 34.8377 46.9672 38.5207 43.137C39.749 41.2615 41.807 39.4716 41.0778 36.8895C40.3292 34.3962 37.6812 32.8514 37.7046 30.0568L37.7089 29.8386C38.3118 26.9242 40.144 23.8229 38.6453 20.7224C38.2274 19.4753 37.2942 18.0581 36.025 17.5369C37.9175 19.7031 38.6676 23.2379 37.585 26.1531C37.0392 27.3128 36.288 28.6941 36.2128 30.0572H36.2081C36.1679 30.769 36.313 31.4771 36.7726 32.1482C38.2093 34.4802 40.7052 37.0414 39.2695 40.0802C37.6466 42.5142 34.8166 44.9901 36.3972 48.1961C37.5415 50.1106 39.312 52.0211 38.834 54.3748L36.9616 54.9987C38.21 50.6086 32.0911 48.0291 34.6529 43.6373C36.2341 41.2858 39.0626 39.0791 37.4614 35.958C36.5042 34.0241 34.5266 32.8795 34.5887 30.4629L34.657 30.057C35.3014 26.6296 37.9068 23.385 36.0848 19.7224C35.6061 18.6407 34.6497 17.5382 33.5879 16.9133L33.524 16.9773C35.6475 19.0377 36.2934 22.4278 35.1484 25.1529C34.6143 26.7517 33.4419 28.3444 33.2037 30.0575C33.0902 30.8655 33.1858 31.7028 33.6523 32.5847C35.0047 34.7266 37.3767 36.9987 35.8966 39.768C34.3381 42.0551 31.736 44.2808 32.7754 47.2553C33.9204 49.8576 36.3104 52.3369 35.0201 55.5635L33.0874 56C34.6267 52.8555 32.3187 49.7349 30.9665 47.0078C29.3217 43.0947 34.5002 41.2211 34.5835 37.6438C34.5638 35.3346 32.1092 34.0235 31.5909 31.9011C30.5284 31.0046 29.4273 32.2573 28.1574 32.0247C27.22 32.2131 25.7801 30.734 25.2204 32.3375C24.5541 34.6881 21.5175 36.416 22.8518 39.2041C24.1218 41.6817 27.1776 43.4932 26.1568 46.6997C25.2428 49.6943 22.2235 52.5459 24.0961 56C23.3268 55.7508 21.8905 56.2281 21.9113 54.9989C20.7257 50.8161 25.7815 48.3789 24.22 44.1981C23.4932 41.6373 20.1821 40.2228 20.9111 37.1426C21.45 34.6072 24.2946 32.8348 23.8956 30.0575C23.8601 29.8134 23.8028 29.573 23.7243 29.3391C22.6625 26.3422 20.4964 23.3444 21.7874 19.8466C22.1419 18.8478 22.8499 17.9947 23.4721 17.1017C21.4118 18.2042 20.3725 20.5359 20.4152 22.9079C20.3254 25.4874 22.2306 27.6971 22.5016 30.0575C22.6083 31.0102 22.4523 31.9858 21.7874 33.0206C20.4359 34.8546 18.6684 36.7885 19.4787 39.2035C20.2492 41.6396 23.2871 43.1155 23.1 45.9468C23.0793 49.2964 19.1879 51.3816 20.2908 55.1276L18.3539 54.4992C17.5849 51.1704 21.1219 49.4676 21.1625 46.3876C21.663 42.8461 17.1465 41.532 17.4175 38.0793C17.3981 35.4562 19.7068 33.7949 20.7264 31.5884C20.9012 31.0515 20.9595 30.5443 20.9361 30.0577C20.8112 27.6181 18.6132 25.711 18.978 22.968C19.1007 20.9493 19.7874 19.1797 21.0989 17.6617C19.2894 18.3885 18.5419 20.4717 18.0421 22.2202C17.1747 25.024 19.2453 27.5459 19.4527 30.0577C19.5448 31.1671 19.2739 32.27 18.2303 33.3975C16.7312 35.1642 15.211 37.3937 16.2933 39.7683C17.4394 42.3885 21.0401 44.4279 19.4784 47.6957C18.6263 49.7566 16.586 51.3163 16.6698 53.7507C16.1292 53.5217 15.5684 53.2934 15.109 52.8781C15.109 49.7779 19.5188 47.8414 17.4177 44.574C17.2316 45.2185 17.1916 46.0948 17.0458 46.8231C16.3167 48.7179 14.7566 50.2344 14.1728 52.1934C13.1965 51.8166 12.1757 51.0249 11.3637 50.1923L12.4885 49.5041C12.3635 49.0869 12.0311 48.7334 11.7403 48.3797C11.01 48.2771 10.5303 48.7565 9.92801 48.9443C9.40779 48.4854 8.90572 48.0691 8.49101 47.5071C8.86438 46.4437 11.7818 47.323 10.3038 45.5743C9.30603 44.9506 8.30451 45.8419 7.43075 46.2579L6.24629 44.7616C7.26595 44.1379 8.283 43.2616 9.55127 43.513C9.86385 44.076 9.88555 44.9036 10.4877 45.1975C12.6314 45.156 14.1503 43.5342 15.7937 42.2642C14.6483 40.5599 13.716 38.2067 14.7334 36.1453C15.5484 34.0798 17.6727 32.34 17.7688 30.0564C17.7907 29.5369 17.7097 28.99 17.4824 28.4015C16.3593 25.5082 15.9629 21.5978 18.1067 19.0369C16.9411 19.3501 16.2538 20.8032 15.8578 21.9063C14.5692 24.7314 16.199 27.3489 16.2553 30.0562C16.263 30.5434 16.2235 31.0313 16.1055 31.523C15.0022 33.7496 13.2147 35.7034 12.9243 38.2657C11.6546 39.0758 10.6121 40.4924 8.80284 40.0144C8.73924 40.4926 8.88496 41.2214 9.05088 41.7632C7.61613 41.7028 6.63781 42.7606 5.42996 43.2599C4.78629 43.0534 4.61887 42.2214 4.3697 41.6394C5.78369 41.1618 6.80373 39.744 8.42723 39.7663C8.61541 39.2434 8.32172 38.7643 8.23886 38.2653C6.21935 37.369 3.01819 42.697 2.74901 38.0775C4.76702 37.9527 6.05642 36.079 8.05516 35.8923L8.11484 34.396C5.84673 34.167 4.38766 36.4988 2.12049 36.2691L1.62048 34.2722C4.24307 34.4361 5.80557 32.0855 8.3032 31.9591C8.63505 31.5226 8.67508 30.8775 8.73906 30.2745C6.01284 29.9191 4.14224 32.9409 1.2486 32.0232C1.2486 32.0232 1.1489 30.7657 1.09484 30.0564H1.09877C1.08782 29.8995 1.07503 29.7427 1.06042 29.5861C3.64054 30.5872 5.90752 28.7337 8.11484 27.7772C8.6762 27.6091 9.55164 27.9004 9.80324 27.2765C9.78173 26.7978 10.6545 26.238 9.92782 25.9041C6.70084 25.4659 4.55714 29.3588 1.24823 27.5888L1 27.0881C1.68782 17.6821 6.99173 8.58863 15.7933 4.11375C19.3577 2.0764 23.7862 1.03808 28.2522 1.00104C33.6418 0.956136 39.0883 2.37031 43.1396 5.23851C47.0737 7.6519 50.8368 11.6295 52.8791 15.6673C54.8326 19.2053 55.7314 23.1751 56 27.4011C52.5865 29.9806 50.2965 24.9711 46.8206 26.0923C47.0076 26.6343 47.1115 27.1953 47.509 27.6531C50.5897 27.6312 52.7109 30.8575 55.9358 29.5859L55.9392 30.0566ZM16.7291 18.4725C14.5645 17.057 11.8203 18.39 9.80305 19.161C9.61581 17.2662 8.84643 15.5399 7.2422 14.2913C7.08656 14.2137 6.87144 14.0509 6.67765 14.0388C6.56167 14.0315 6.45131 14.0784 6.36563 14.2266C7.09274 18.7006 4.18489 21.8222 2.12423 25.216C2.81037 25.7767 3.91271 25.693 4.74494 25.528C6.92943 24.6545 9.01029 23.1337 11.6114 23.6549C12.3807 22.3438 13.673 21.0739 14.7326 20.0335C15.3803 19.473 16.2695 19.1174 16.7291 18.4725ZM23.3475 21.2821C23.3058 21.5515 23.3683 22.032 23.7836 21.8462C24.4297 20.9514 25.5735 21.6595 26.2806 21.7224V21.4705C25.8927 20.8612 25.0947 20.5553 24.2839 20.5856C24.0969 20.5924 23.9068 20.6195 23.7239 20.6621C23.4528 20.7224 23.2639 20.9705 23.3475 21.2821ZM33.523 18.6012C32.9418 17.3105 31.61 16.7882 30.4017 16.4759C29.8091 16.403 29.1943 16.3538 28.5845 16.3478C28.4702 16.3467 28.3561 16.3452 28.2421 16.3478C26.5365 16.3822 24.9067 16.8202 23.9109 18.2244C23.768 18.6209 23.1397 19.1776 23.7231 19.5329C25.0342 19.4493 26.5303 19.2848 27.4043 20.41C27.4043 21.4101 28.05 22.7403 26.9683 23.219C26.0721 22.3891 25.0107 23.5724 24.0355 22.9064C23.577 22.6353 23.2869 22.9515 23.0991 23.347C22.8281 25.9269 24.179 28.7745 26.5923 30.21C27.5704 30.5628 28.8853 30.8983 29.906 30.3978C32.3612 29.2544 33.3783 26.6337 33.8358 24.2192C33.7744 23.7597 33.796 22.8643 33.1515 22.8424C32.4237 23.303 31.3621 23.0308 30.5909 22.8424C30.1346 22.9897 30.1137 23.6572 29.5946 23.7836L29.2783 23.5313C29.0072 22.3882 28.8402 20.7645 29.9027 19.9735C31.0898 19.4947 32.4839 19.2858 33.7114 19.6614C33.9406 19.2659 33.587 18.9548 33.523 18.6012ZM32.2703 20.6532C32.1878 20.6554 32.1077 20.6595 32.0262 20.6621C31.5903 20.9531 30.3196 20.7439 30.7785 21.7224C31.5696 21.0966 32.6725 21.5351 33.4632 21.8462C33.7554 21.7012 33.6923 21.4097 33.7112 21.1583C33.4572 20.6859 32.8507 20.6417 32.2703 20.6532ZM41.3302 11.8536C39.7899 11.7719 38.5001 12.6465 37.0848 13.042C36.9618 11.8375 37.8765 10.5656 38.0852 9.35643C35.7971 9.50366 33.9845 10.8814 32.0913 11.9818C31.6519 10.9207 31.2144 9.85879 30.7789 8.79611L33.2761 6.42312L33.3401 6.11032L29.9668 5.92249C29.386 4.90438 29.1569 3.67803 28.4704 2.74148C27.9084 3.803 27.5309 4.92626 26.9696 5.98647L23.6006 6.17487V6.42312L26.1575 8.73213C25.845 9.91899 25.5545 11.2086 24.7851 12.1054C23.2871 11.208 21.8101 10.2314 20.1677 9.60805C19.7724 9.48065 19.209 9.27317 18.8553 9.54407C19.3747 10.6892 20.1022 11.9208 19.9799 13.1705C19.2926 13.0441 18.7526 12.6035 18.107 12.4182C17.335 12.2074 16.4192 11.796 15.6702 12.0463C16.919 13.7933 17.9383 15.6221 18.2909 17.7247C22.4337 15.7248 27.2651 14.6249 32.2802 15.4797C34.6312 15.8537 36.7927 16.8116 38.8948 17.6003C38.977 15.3957 40.3707 13.6242 41.3302 11.8536ZM48.4446 23.8429C50.5655 24.4042 52.693 26.7154 54.9388 25.216C52.9827 21.9699 50.0715 18.972 50.8813 14.7273C50.966 14.4375 50.7786 14.1441 50.5094 14.1029C49.2406 14.6215 48.2578 15.8718 47.7557 17.1006C47.5492 17.8276 47.4272 18.6001 47.1363 19.2854C45.6161 18.494 43.9943 17.7277 42.1424 17.9127C41.4742 17.996 40.5172 18.0398 40.3938 18.7256C42.4952 19.8489 44.2234 21.7233 45.5115 23.7197C46.4087 23.5735 47.5084 23.6983 48.4446 23.8429ZM26.2208 26.7768L26.2806 27.153C27.0938 27.6946 27.3439 28.6129 28.4698 28.5296C29.4679 28.5887 30.2169 27.6533 30.7141 26.9046C29.3636 26.7179 27.7193 27.0066 26.2208 26.7768ZM27.3448 25.0921C27.3854 25.2586 27.2417 25.5084 27.4686 25.5928C28.1348 25.4481 29.3411 25.9471 29.713 25.1561C29.4532 24.8652 29.0295 24.7331 28.5845 24.7331C28.1398 24.7331 27.6785 24.8626 27.3448 25.0921Z", "fill", "#106E33"], ["cx", "28.5", "cy", "28.5", "r", "28", "stroke", "white"], ["width", "23", "height", "40", "viewBox", "0 0 23 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_12511_283818)"], ["d", "M8.45262 22.3818V30.643C8.43629 38.496 8.41996 38.9369 8.33833 38.9369C8.04445 38.9369 5.56282 39.1001 4.73017 39.1818C4.19139 39.2307 3.09751 39.345 2.31384 39.443C1.51384 39.5409 0.860778 39.6062 0.844452 39.5899C0.844452 39.5736 0.828125 30.7573 0.828125 19.9818V0.40625L8.45262 22.3818ZM22.0363 0.422577H14.4771V9.09196L14.4608 17.794L22.02 39.5736C22.02 39.5736 22.0526 30.7246 22.0526 19.9654V0.422577H22.0363Z", "fill", "#AD080F", "stroke", "white", "stroke-width", "0.795851", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22.02 39.5736H21.9547C21.824 39.5736 21.5628 39.5573 21.2526 39.5246C19.5057 39.3124 17.2036 39.1001 15.3424 39.0185C14.7383 38.9858 14.2322 38.9532 14.2159 38.9532C14.2159 38.9532 13.7424 37.5818 12.8445 35.0185C11.9791 32.5205 10.7057 28.8634 9.0567 24.1124L8.45262 22.3818L0.828125 0.40625H8.41996L8.74649 1.33686L10.1832 5.46747L22.02 39.5736Z", "fill", "#DF0D12", "stroke", "white", "stroke-width", "0.795851", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_12511_283818"], ["width", "22.0408", "height", "40", "fill", "white", "transform", "translate(0.429688)"], [1, "relative", "z-[2]", "bg-secondary-5", "backdrop-blur-md", "p-6", "md:p-24"], [1, "flex", "flex-wrap", "gap-6", "md:gap-12", "mt-6", "md:mt-18"], ["class", "flex justify-center items-center gap-4", 4, "ngFor", "ngForOf"], [1, "relative", "z-[2]", "bg-primary-5", "backdrop-blur-md", "p-6", "md:p-24"], [1, "flex", "flex-col", "mt-6", "md:mt-18"], ["class", "mb-8 md:mb-12 text-xl flex flex-col", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "mb-2", "md:mb-4"], ["trigger", "hover", 1, "md:scale-150", "mx-2", "md:mx-4", 3, "src"], [1, "font-bold", "text-sm", "md:text-xl"], [1, "w-full", "lg:w-[calc((100%-64px)/3)]", "px-3", "py-6", "bg-primary-3", "border", "flex", "flex-col", "items-center", "border-primary-4", "rounded-3xl", "shadow", "backdrop-blur-md"], ["trigger", "hover", 1, "scale-150", "mb-3", "md:mb-6", 3, "src"], [1, "mb-2", "md:mb-4", "text-md", "md:text-2xl", "font-bold", "tracking-tight", "text-center", "text-white"], [1, "font-normal", "text-sm", "md:text-md", "text-white", "text-center"], [1, "mt-8", "md:mt-16", "mx-auto", "lg:mx-4", "relative"], [1, "w-full", "sm:max-w-[320px]"], [1, "relative", "mb-2", "transform", "ease-in-out", "duration-300", "hover:scale-105", "hover:-rotate-2"], ["alt", "product image", 1, "w-full", "rounded-xl", 3, "src"], [1, "absolute", "top-0", "right-0", "transform", "-translate-y-1/4", "w-full", "text-center", "backdrop-blur-xl", "rounded-t-xl", "p-2", "text-xl", "whitespace-nowrap"], ["class", "flex flex-col justify-center items-center absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2", 4, "ngIf"], ["size", "small", "class", "absolute bottom-2 left-2 whitespace-normal text-lg", 3, "fill", 4, "ngIf", "ngIfElse"], ["Else", ""], [1, "w-full", "border-primary", "shadow", "border-gray-200", "rounded-lg", "p-2", "bg-primary-3"], [1, "flex", "justify-between"], [1, "text-gray-300"], [1, "text-white"], [1, "list-inside", "list-disc"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "justify-center", "items-center", "absolute", "top-1/2", "right-1/2", "transform", "-translate-y-1/2", "translate-x-1/2"], [1, "text-lg", "font-bold", "text-white", "whitespace-nowrap"], [1, "text-md", "text-white", "whitespace-nowrap"], ["size", "small", 1, "absolute", "bottom-2", "left-2", "whitespace-normal", "text-lg", 3, "fill"], ["color", "light", 1, "absolute", "bottom-2", "left-2", "text-sm"], [1, "flex", "justify-center", "items-center", "gap-4"], [1, "flex", "justify-center", "items-center", "rounded-full", "w-12", "h-12", "border-primary-4", "shrink-0", "font-bold", "text-xl"], [1, "text-xl", "whitespace-normal"], [1, "mb-8", "md:mb-12", "text-xl", "flex", "flex-col"], [1, "mb-2", "md:mb-4", "text-xl", "font-bold"], [1, "text-lg"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A \u0645\u0633\u0627\u0641\u0631\u062A\u06CC ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0646\u0647\u0627 \u06A9\u0627\u0631\u062A\u06CC \u06A9\u0647 \u0628\u0647 \u0622\u0646 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div")(13, "ion-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u062E\u0631\u06CC\u062F \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u062F\u0627\u0634\u0628\u0648\u0631\u062F");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LandingComponent_li_18_Template, 4, 2, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LandingComponent_div_23_Template, 6, 9, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0627\u0646\u0648\u0627\u0639 \u06A9\u0627\u0631\u062A \u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u06CC\u0646 \u0627\u0644\u0645\u0644\u0644\u06CC ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LandingComponent_div_30_Template, 19, 10, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24)(32, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u062E\u062F\u0645\u0627\u062A \u0648\u06CC\u0698\u0647 \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A \u0645\u0633\u0627\u0641\u0631\u062A\u06CC ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25)(35, "swiper-container", 26)(36, "swiper-slide")(37, "div", 27)(38, "div", 28)(39, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 30)(41, "g", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 32)(43, "path", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "defs")(45, "clipPath", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "rect", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u062E\u0631\u06CC\u062F \u0627\u0634\u062A\u0631\u0627\u06A9 \u0645\u0627\u0647\u06CC\u0627\u0646\u0647 \u0627\u0633\u067E\u0627\u062A\u06CC\u0641\u0627\u06CC \u0628\u0627 \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 60 \u062F\u0631\u0635\u062F \u0628\u0627\u0632\u06AF\u0634\u062A \u0648\u062C\u0647");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "swiper-slide")(50, "div", 27)(51, "div", 28)(52, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "svg", 37)(54, "g", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 39)(56, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "defs")(58, "clipPath", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "rect", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u062E\u0631\u06CC\u062F \u0627\u0634\u062A\u0631\u0627\u06A9 \u0645\u0627\u0647\u06CC\u0627\u0646\u0647 \u06CC\u0648\u062A\u06CC\u0648\u0628 \u0628\u0627 \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A \u0645\u0633\u0627\u0641\u0631\u062A\u06CC \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 60 \u062F\u0631\u0635\u062F \u0628\u0627\u0632\u06AF\u0634\u062A \u0648\u062C\u0647");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "swiper-slide")(63, "div", 27)(64, "div", 28)(65, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "svg", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "circle", 44)(68, "path", 45)(69, "circle", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0647\u0631 \u062E\u0631\u06CC\u062F \u0627\u0632 \u0627\u0633\u062A\u0627\u0631\u0628\u0627\u06A9\u0633 \u0628\u0627 \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A \u0645\u0633\u0627\u0641\u0631\u062A\u06CC \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 4 \u062F\u0631\u0635\u062F \u0628\u0627\u0632\u06AF\u0634\u062A \u0648\u062C\u0647");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "swiper-slide")(73, "div", 27)(74, "div", 28)(75, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 47)(77, "g", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 49)(79, "path", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "defs")(81, "clipPath", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "rect", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u062E\u0631\u06CC\u062F \u0627\u0634\u062A\u0631\u0627\u06A9 \u0645\u0627\u0647\u06CC\u0627\u0646\u0647 \u0646\u062A\u0641\u0644\u06CC\u06A9\u0633 \u0628\u0627 \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A \u0645\u0633\u0627\u0641\u0631\u062A\u06CC \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 60 \u062F\u0631\u0635\u062F \u0628\u0627\u0632\u06AF\u0634\u062A \u0648\u062C\u0647");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 53)(86, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " \u0645\u0631\u0627\u062D\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0627\u0631\u062A ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, LandingComponent_div_89_Template, 5, 2, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 56)(91, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u0633\u0648\u0627\u0644\u0627\u062A \u0645\u062A\u062F\u0627\u0648\u0644 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, LandingComponent_div_94_Template, 5, 2, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2)))("modules", ctx.swiperModules);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faqs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
  styles: [".mesh-bg[_ngcontent-%COMP%] {\n  background-color: hsl(219, 57%, 30%);\n  background-image: radial-gradient(at 92% 32%, hsl(217, 65%, 59%) 0px, transparent 50%), radial-gradient(at 42% 70%, hsl(217, 53%, 57%) 0px, transparent 50%), radial-gradient(at 93% 85%, hsl(217, 88%, 34%) 0px, transparent 50%), radial-gradient(at 75% 79%, hsl(217, 51%, 51%) 0px, transparent 50%), radial-gradient(at 36% 12%, hsl(217, 51%, 51%) 0px, transparent 50%), radial-gradient(at 33% 45%, hsl(217, 51%, 51%) 0px, transparent 50%), radial-gradient(at 4% 64%, hsl(217, 51%, 51%) 0px, transparent 50%);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHlmQUNFO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzaC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6aHNsYSgyMTksNTclLDMwJSwxKTtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgOTIlIDMyJSwgaHNsYSgyMTcsNjUlLDU5JSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGF0IDQyJSA3MCUsIGhzbGEoMjE3LDUzJSw1NyUsMSkgMHB4LCB0cmFuc3BhcmVudCA1MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChhdCA5MyUgODUlLCBoc2xhKDIxNyw4OCUsMzQlLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgNzUlIDc5JSwgaHNsYSgyMTcsNTElLDUxJSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGF0IDM2JSAxMiUsIGhzbGEoMjE3LDUxJSw1MSUsMSkgMHB4LCB0cmFuc3BhcmVudCA1MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChhdCAzMyUgNDUlLCBoc2xhKDIxNyw1MSUsNTElLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgNCUgNjQlLCBoc2xhKDIxNyw1MSUsNTElLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 7282:
/*!************************************************!*\
  !*** ./src/app/shared/services/rtl.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RtlService: () => (/* binding */ RtlService)
/* harmony export */ });
/* harmony import */ var _utils_window_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/window.util */ 3338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class RtlService {
  constructor() {
    var _getWindow, _getWindow2;
    this.rtl = false;
    this.rtl = ((_getWindow = (0,_utils_window_util__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _getWindow === void 0 ? void 0 : _getWindow.localStorage.getItem('dir')) === 'rtl' || !((_getWindow2 = (0,_utils_window_util__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) !== null && _getWindow2 !== void 0 && _getWindow2.localStorage.getItem('dir'));
    if (this.rtl) {
      var _getWindow3;
      (_getWindow3 = (0,_utils_window_util__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _getWindow3 === void 0 ? void 0 : _getWindow3.document.body.setAttribute('dir', 'rtl');
    }
  }
  get isRtl() {
    return this.rtl;
  }
  setRtl(config) {
    this.rtl = config;
    this.saveConfig();
  }
  saveConfig() {
    var _getWindow4;
    (_getWindow4 = (0,_utils_window_util__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _getWindow4 === void 0 ? void 0 : _getWindow4.localStorage.setItem('dir', this.rtl ? 'rtl' : 'ltr');
  }
}
RtlService.ɵfac = function RtlService_Factory(t) {
  return new (t || RtlService)();
};
RtlService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RtlService,
  factory: RtlService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 5547:
/*!*************************************************!*\
  !*** ./src/app/shared/services/tabs.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsService: () => (/* binding */ TabsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class TabsService {
  constructor() {
    this.hideTabs = false;
  }
  isShown() {
    return !this.hideTabs;
  }
  hide() {
    this.hideTabs = true;
  }
  show() {
    this.hideTabs = false;
  }
}
TabsService.ɵfac = function TabsService_Factory(t) {
  return new (t || TabsService)();
};
TabsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TabsService,
  factory: TabsService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3338:
/*!*********************************************!*\
  !*** ./src/app/shared/utils/window.util.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   isDesktop: () => (/* binding */ isDesktop)
/* harmony export */ });
function getWindow() {
  if (typeof window !== 'undefined') {
    return window;
  } else {
    return undefined;
  }
}
function isDesktop() {
  if (getWindow()) {
    return getWindow().innerWidth > 768;
  }
  return false;
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7512,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		6470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		5690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		8508,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		3438,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9119,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2319,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		4848,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		4752,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		9870,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		5892,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9118,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9538,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		4969,
		"default-node_modules_ionic_core_dist_esm_data-b8307d99_js-node_modules_ionic_core_dist_esm_th-33339e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		1835,
		"default-node_modules_ionic_core_dist_esm_data-b8307d99_js-node_modules_ionic_core_dist_esm_th-33339e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6719,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		3121,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3025,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3914,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3761,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		6138,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2063,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		4950,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9707,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		234,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		7209,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3068,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9215,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		5635,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		1497,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5922,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3549,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5966,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		3187,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		9092,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		7600,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		1449,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		1657,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		8394,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4574,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		3514,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7502,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		7832,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9805,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7393,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map