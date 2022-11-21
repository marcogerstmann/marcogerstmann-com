"use strict";
(self["webpackChunkmarcogerstmann_com"] = self["webpackChunkmarcogerstmann_com"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.component */ 7664);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 9473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
        children: [
            { path: '', redirectTo: '/about', pathMatch: 'full' },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 8114)).then(m => m.AboutModule)
            },
            {
                path: 'experience',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_experience_experience_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/experience/experience.module */ 2285)).then(m => m.ExperienceModule)
            },
            {
                path: 'education',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_education_education_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/education/education.module */ 9718)).then(m => m.EducationModule)
            },
            {
                path: 'skills',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_skills_skills_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/skills/skills.module */ 6217)).then(m => m.SkillsModule)
            }
        ]
    },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules,
            initialNavigation: 'enabledBlocking',
            relativeLinkResolution: 'legacy'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);





class AppComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["id", "app", 1, "app", "h-100", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.settings.skin);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ 8758);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.component */ 7664);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 9473);
/* harmony import */ var _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/components/menu/menu.component */ 8469);
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/components/footer/footer.component */ 5893);
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @scullyio/ng-lib */ 8265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_app_settings__WEBPACK_IMPORTED_MODULE_4__.AppSettings, { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer, useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_1__.CustomOverlayContainer }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__.ScullyLibModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__.PagesComponent, _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__.MenuComponent, _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__.ScullyLibModule] }); })();


/***/ }),

/***/ 4588:
/*!***************************************!*\
  !*** ./src/app/app.settings.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
class Settings {
    constructor(name, skin, hasBgImage) {
        this.name = name;
        this.skin = skin;
        this.hasBgImage = hasBgImage;
    }
}


/***/ }),

/***/ 1182:
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettings": () => (/* binding */ AppSettings)
/* harmony export */ });
/* harmony import */ var _app_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.settings.model */ 4588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class AppSettings {
    constructor() {
        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_0__.Settings('Marco Gerstmann - Website', // Theme name
        'grey-light', // indigo-light, teal-light, red-light, grey-light, blue-dark, green-dark, pink-dark, amber-dark
        true // Has header background image
        );
    }
}
AppSettings.ɵfac = function AppSettings_Factory(t) { return new (t || AppSettings)(); };
AppSettings.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppSettings, factory: AppSettings.ɵfac });


/***/ }),

/***/ 9473:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);







class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goHome() {
        this.router.navigate(['/']);
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 17, vars: 0, consts: [[1, "h-100"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "h-100"], ["fxFlex", "80", "fxFlex.gt-sm", "30", "fxFlex.sm", "60"], [1, "p-0", "mat-elevation-z16"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "bg-primary", "py-4", "white-color"], [1, "mat-icon-xlg"], [1, "error"], ["fxLayout", "column", "fxLayoutAlign", "end center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mat-elevation-z8", "box"], [1, "px-2", "py-3"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mat-elevation-z8", "mx-1", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0)(1, "div", 1)(2, "div", 2)(3, "mat-card", 3)(4, "div", 4)(5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content", 7)(10, "mat-card", 8)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Opps, it seems that this page does not exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_14_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer], styles: [".box[_ngcontent-%COMP%] {\n  margin-top: -1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FBQ0YiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XG4gIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 7664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.settings */ 1182);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/components/menu/menu.component */ 8469);
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/components/footer/footer.component */ 5893);













const _c0 = ["drawer"];
class PagesComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.showBackToTop = false;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() { }
    changeSkin(skin) {
        this.settings.skin = skin;
    }
    onWindowResize() {
        if (window.innerWidth > 960) {
            this.drawer.close();
        }
    }
    onWindowScroll() {
        window.scrollY > 250
            ? (this.showBackToTop = true)
            : (this.showBackToTop = false);
    }
    ngAfterViewInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                if (window.innerWidth <= 960) {
                    this.drawer.close();
                }
            }
        });
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
PagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], viewQuery: function PagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, hostBindings: function PagesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function PagesComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("scroll", function PagesComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 18, vars: 0, consts: [["color", "primary", "ngClass.gt-sm", "px-0", 1, "horizontal-menu"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxHide", "false", "fxHide.gt-sm", "", 1, "w-100"], ["mat-icon-button", "", 3, "click"], [1, "person-name"], ["fxShow", "false", "fxShow.gt-sm", "", 1, "container"], ["mode", "over", "autoFocus", "false", 1, "sidenav"], ["drawer", ""], [1, "h-100", 3, "perfectScrollbar"], [1, "wrapper"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagesComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Marco Gerstmann");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-drawer-container")(10, "mat-drawer", 5, 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-drawer-content")(15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultShowHideDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".horizontal-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 64px;\n  z-index: 9;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  min-height: 100%;\n  height: auto !important;\n  padding-top: 64px;\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  top: 64px;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 140px;\n  position: fixed;\n  overflow: hidden;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  min-height: calc(100vh - (64px + 48px));\n}\n\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n}\n\n.back-to-top[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.options[_ngcontent-%COMP%] {\n  position: fixed;\n  max-height: 278px;\n  width: 122px;\n  overflow: hidden;\n  z-index: 99;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   button.mat-raised-button[_ngcontent-%COMP%] {\n  min-width: 40px;\n  line-height: 39px;\n  padding: 0;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   button.mat-raised-button.indigo-light[_ngcontent-%COMP%] {\n  background: #3F51B5;\n  background: linear-gradient(135deg, #3F51B5 50%, #ececec 50%);\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   button.mat-raised-button.teal-light[_ngcontent-%COMP%] {\n  background: #009688;\n  background: linear-gradient(135deg, #009688 50%, #ececec 50%);\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   button.mat-raised-button.red-light[_ngcontent-%COMP%] {\n  background: #F44336;\n  background: linear-gradient(135deg, #F44336 50%, #ececec 50%);\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   button.mat-raised-button.grey-light[_ngcontent-%COMP%] {\n  background: #455A64;\n  background: linear-gradient(135deg, #455A64 50%, #ececec 50%);\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   button.mat-raised-button.blue-dark[_ngcontent-%COMP%] {\n  background: #0277bd;\n  background: linear-gradient(135deg, #0277bd 50%, #262626 50%);\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   button.mat-raised-button.green-dark[_ngcontent-%COMP%] {\n  background: #388E3C;\n  background: linear-gradient(135deg, #388E3C 50%, #262626 50%);\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   button.mat-raised-button.pink-dark[_ngcontent-%COMP%] {\n  background: #D81B60;\n  background: linear-gradient(135deg, #D81B60 50%, #262626 50%);\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   button.mat-raised-button.amber-dark[_ngcontent-%COMP%] {\n  background: #FFA000;\n  background: linear-gradient(135deg, #FFA000 50%, #262626 50%);\n}\n\n.options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n\n.options[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.options-icon[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 110px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.options-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  animation: spin 8s linear infinite;\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLmNvbXBvbmVudC5zY3NzIiwiLi4vdGhlbWUvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxZQ0RlO0VERWYsVUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQ1JlO0FET2pCOztBQUlBO0VBQ0UsU0NaZTtBRFdqQjs7QUFJQTtFQUNFLDJCQUFBO0FBREY7O0FBSUE7RUFDRSxZQ25CYztFRG9CZCxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHVDQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0U7RUFDRSxZQUFBO0FBREo7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRkY7O0FBSUU7RUFDRSxpQkFBQTtBQUZKOztBQUlJO0VBQ0UsY0FBQTtBQUZOOztBQUtJO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtBQUhOOztBQU1JO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUpOOztBQU1NO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtBQUpSOztBQU9NO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtBQUxSOztBQVFNO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtBQU5SOztBQVNNO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtBQVBSOztBQVVNO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtBQVJSOztBQVdNO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtBQVRSOztBQVlNO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtBQVZSOztBQWFNO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtBQVhSOztBQWdCRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUFkSjs7QUFnQkk7RUFDRSxhQUFBO0FBZE47O0FBa0JFO0VBQ0UsWUFBQTtBQWhCSjs7QUFvQkE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBakJGOztBQW1CRTtFQUdFLGtDQUFBO0FBakJKOztBQWlDQTtFQUNFO0lBQ0UseUJBQUE7RUFwQkY7QUFDRiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZS9zdHlsZXMvX3ZhcmlhYmxlc1wiO1xuXG4uaG9yaXpvbnRhbC1tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcbiAgei1pbmRleDogOTtcbn1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAkdG9vbGJhci1oZWlnaHQ7XG59XG5cbi5tYXQtZHJhd2VyIHtcbiAgdG9wOiAkdG9vbGJhci1oZWlnaHQ7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6ICRzaWRlbmF2LXdpZHRoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItaGVpZ2h0fSkpO1xufVxuXG4uYmFjay10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk5OTk5O1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBvcGFjaXR5OiAuNTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjc1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxufVxuXG4ub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWF4LWhlaWdodDogMjc4cHg7XG4gIHdpZHRoOiAxMjJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogOTk7XG5cbiAgLmNvbnRyb2wge1xuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xuXG4gICAgZGl2IHtcbiAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XG4gICAgfVxuXG4gICAgYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzOXB4O1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgJi5pbmRpZ28tbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM0Y1MUI1O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM0Y1MUI1IDUwJSwgI2VjZWNlYyA1MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnRlYWwtbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5Njg4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA5Njg4IDUwJSwgI2VjZWNlYyA1MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnJlZC1saWdodCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNDQzMzY7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGNDQzMzYgNTAlLCAjZWNlY2VjIDUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuZ3JleS1saWdodCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NTVBNjQ7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0NTVBNjQgNTAlLCAjZWNlY2VjIDUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuYmx1ZS1kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAyNzdiZDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAyNzdiZCA1MCUsICMyNjI2MjYgNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5ncmVlbi1kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzM4OEUzQztcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM4OEUzQyA1MCUsICMyNjI2MjYgNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5waW5rLWRhcmsge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRDgxQjYwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRDgxQjYwIDUwJSwgIzI2MjYyNiA1MCUpO1xuICAgICAgfVxuXG4gICAgICAmLmFtYmVyLWRhcmsge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZBMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkZBMDAwIDUwJSwgIzI2MjYyNiA1MCUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDJweCAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLm9wdGlvbnMtaWNvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMTBweDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OTk7XG5cbiAgLm1hdC1pY29uIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIiwiJGxvZ28tZm9udC1mYW1pbHk6ICdBc3RlcmEnO1xuJG1haW4tZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XG4kc2lkZW5hdi13aWR0aDogMTQwcHg7XG4kZm9vdGVyLWhlaWdodDogNDhweDtcbiJdfQ== */"] });


/***/ }),

/***/ 3497:
/*!*******************************************************************!*\
  !*** ./src/app/shared/content-header/content-header.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentHeaderComponent": () => (/* binding */ ContentHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);





function ContentHeaderComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ContentHeaderComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.icon);
} }
function ContentHeaderComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.headerTitle);
} }
function ContentHeaderComponent_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.desc);
} }
class ContentHeaderComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() { }
}
ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) { return new (t || ContentHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings)); };
ContentHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentHeaderComponent, selectors: [["app-content-header"]], inputs: { image: "image", icon: "icon", headerTitle: "headerTitle", desc: "desc" }, decls: 5, vars: 6, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "content-header", "bg-primary", "p-5"], ["alt", "image", "class", "mb-2", 3, "src", 4, "ngIf"], ["class", "mat-icon-xlg", 4, "ngIf"], [4, "ngIf"], ["class", "lighter-color mt-2", 4, "ngIf"], ["alt", "image", 1, "mb-2", 3, "src"], [1, "mat-icon-xlg"], [1, "lighter-color", "mt-2"]], template: function ContentHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentHeaderComponent_img_1_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContentHeaderComponent_mat_icon_2_Template, 2, 1, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContentHeaderComponent_h1_3_Template, 2, 1, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContentHeaderComponent_h4_4_Template, 2, 1, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-bg-image", ctx.settings.hasBgImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.headerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.desc);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".content-header[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n.content-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n}\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 400;\n  margin: 0;\n}\n.content-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 580px;\n  text-align: center;\n  margin: 0;\n}\n.content-header.has-bg-image[_ngcontent-%COMP%] {\n  background-image: url('bg-img.png');\n  background-blend-mode: overlay;\n  background-size: 300px;\n}\n@media screen and (min-width: 960px) {\n  .content-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n  .content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .content-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .content-header.has-bg-image[_ngcontent-%COMP%] {\n    background-size: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQURKO0FBSUU7RUFDRSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQU1BO0VBRUk7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUpKO0VBT0U7SUFDRSxlQUFBO0VBTEo7RUFRRTtJQUNFLGVBQUE7RUFOSjtFQVNFO0lBQ0Usc0JBQUE7RUFQSjtBQUNGIiwiZmlsZSI6ImNvbnRlbnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgJi5oYXMtYmctaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmctaW1nLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAuY29udGVudC1oZWFkZXIge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgJi5oYXMtYmctaW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA0ODBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6816:
/*!***************************************************************!*\
  !*** ./src/app/shared/image-loader/image-loader.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageLoaderComponent": () => (/* binding */ ImageLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);




function ImageLoaderComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class ImageLoaderComponent {
    constructor() {
        this.class = '';
        this.loaded = false;
    }
    ngOnInit() { }
}
ImageLoaderComponent.ɵfac = function ImageLoaderComponent_Factory(t) { return new (t || ImageLoaderComponent)(); };
ImageLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageLoaderComponent, selectors: [["app-image-loader"]], inputs: { src: "src", class: "class" }, decls: 2, vars: 6, consts: [[4, "ngIf"], [1, "transition", 3, "hidden", "src", "ngClass", "load"]], template: function ImageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageLoaderComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageLoaderComponent_Template_img_load_1_listener() { return ctx.loaded = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-block", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loaded)("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", ctx.class);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__.DefaultClassDirective, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinner], encapsulation: 2 });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-swiper-wrapper */ 598);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _image_loader_image_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader/image-loader.component */ 6816);
/* harmony import */ var _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-header/content-header.component */ 3497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: false,
    suppressScrollX: true,
};
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_image_loader_image_loader_component__WEBPACK_IMPORTED_MODULE_0__.ImageLoaderComponent, _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_1__.ContentHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarModule], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarModule,
        _image_loader_image_loader_component__WEBPACK_IMPORTED_MODULE_0__.ImageLoaderComponent,
        _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_1__.ContentHeaderComponent] }); })();


/***/ }),

/***/ 5893:
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);


class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "footer"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "container", "text-center", "secondary-text-color"], [1, "mx-2"], ["href", "https://angular.io/", "target", "_blank"], ["href", "https://scully.io/", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Implemented with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective], styles: [".footer[_ngcontent-%COMP%] {\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQ0VjO0FESGhCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvX3ZhcmlhYmxlc1wiO1xuXG4uZm9vdGVyIHtcbiAgaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcbn1cbiIsIiRsb2dvLWZvbnQtZmFtaWx5OiAnQXN0ZXJhJztcbiRtYWluLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHNpZGVuYXYtd2lkdGg6IDE0MHB4O1xuJGZvb3Rlci1oZWlnaHQ6IDQ4cHg7XG4iXX0= */"] });


/***/ }),

/***/ 8469:
/*!*********************************************************!*\
  !*** ./src/app/theme/components/menu/menu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);







const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { exact: true }; };
function MenuComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2)(1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, item_r1.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
} }
class MenuComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.isSmallDevice = false;
        this.menuItems = [
            { title: 'about', routerLink: '/about', icon: 'person' },
            { title: 'experience', routerLink: '/experience', icon: 'touch_app' },
            // { title: 'skills', routerLink: '/skills', icon: 'build' },
            // { title: 'education', routerLink: '/education', icon: 'school' }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        window.innerWidth < 960 ? (this.isSmallDevice = true) : (this.isSmallDevice = false);
    }
    onWindowResize() {
        window.innerWidth < 960 ? (this.isSmallDevice = true) : (this.isSmallDevice = false);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], hostBindings: function MenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function MenuComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 3, consts: [[1, "menu", 3, "fxLayout", "fxLayoutAlign"], ["mat-button", "", "class", "menu-item", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["mat-button", "", "routerLinkActive", "active-link", 1, "menu-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "menu-icon"], [1, "menu-title"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_a_1_Template, 5, 7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxLayout", ctx.isSmallDevice ? "column" : "row")("fxLayoutAlign", ctx.isSmallDevice ? "none center" : "center center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: [".menu-item {\n  width: 100%;\n  border-radius: 0 !important;\n  padding: 8px !important;\n  text-transform: capitalize;\n}\n.menu-item .mat-button-wrapper {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.menu-item .menu-title {\n  font-weight: 400;\n  line-height: 1.75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5tZW51LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICB9XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 8758:
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomOverlayContainer": () => (/* binding */ CustomOverlayContainer)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayContainer {
    _createContainer() {
        let container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app')?.appendChild(container);
        this._containerElement = container;
    }
}
CustomOverlayContainer.ɵfac = /*@__PURE__*/ function () { let ɵCustomOverlayContainer_BaseFactory; return function CustomOverlayContainer_Factory(t) { return (ɵCustomOverlayContainer_BaseFactory || (ɵCustomOverlayContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomOverlayContainer)))(t || CustomOverlayContainer); }; }();
CustomOverlayContainer.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomOverlayContainer, factory: CustomOverlayContainer.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map