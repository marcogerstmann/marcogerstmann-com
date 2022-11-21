"use strict";
(self["webpackChunkmarcogerstmann_com"] = self["webpackChunkmarcogerstmann_com"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 3794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_about_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/about-data.service */ 3674);
/* harmony import */ var _services_links_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/links.service */ 2186);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/content-header/content-header.component */ 3497);










class AboutComponent {
    constructor(aboutDataService, linksService) {
        this.aboutDataService = aboutDataService;
        this.linksService = linksService;
    }
    ngOnInit() {
        this.aboutData = this.aboutDataService.get();
        this.links = this.linksService.get();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_about_data_service__WEBPACK_IMPORTED_MODULE_0__.AboutDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_links_service__WEBPACK_IMPORTED_MODULE_1__.LinksService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 53, vars: 11, consts: [[3, "image", "headerTitle", "desc"], [1, "container", "p-3"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "100", "fxFlex.gt-md", "85", "fxFlex.md", "90", 1, "p-3"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "text-center", "mb-2"], ["mat-icon-button", "", "matTooltip", "LinkedIn", "matTooltipPosition", "above", 1, "mx-1"], [3, "href"], ["viewBox", "0 0 24 24", 1, "mat-icon", "social-icon", "transition"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], ["mat-icon-button", "", "matTooltip", "XING", "matTooltipPosition", "above", 1, "mx-1"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-14.085 15l2.744-4.825-1.846-3.162h3.292l1.83 3.152-2.744 4.835h-3.276zm8.79-1.445l3.514 6.445h-3.252l-3.55-6.445 5.38-9.555h3.289l-5.381 9.555z"], ["mat-icon-button", "", "matTooltip", "GitHub", "matTooltipPosition", "above", 1, "mx-1"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"], ["fxFlex", "100", "fxFlex.gt-sm", "50", 1, ""], [1, "about-list"], ["mat-line", ""], [1, "list-title"], [1, "secondary-text-color"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-content-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-card")(5, "div", 4)(6, "div", 5)(7, "button", 6)(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 10)(12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 12)(16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14)(20, "mat-list", 15)(21, "mat-list-item")(22, "div", 16)(23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "full name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-list-item")(28, "div", 16)(29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "birthday:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-list-item")(34, "div", 16)(35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "nationality:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 14)(40, "mat-list", 15)(41, "mat-list-item")(42, "div", 16)(43, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "born:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-list-item")(48, "div", 16)(49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("image", ctx.aboutData.imageUrl)("headerTitle", ctx.aboutData.firstName + " " + ctx.aboutData.lastName)("desc", ctx.aboutData.teaser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.links.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.links.xing, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.links.github, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.aboutData.firstName + " " + ctx.aboutData.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.aboutData.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.aboutData.nationality);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.aboutData.birthplace);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.aboutData.address);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderComponent], styles: [".about-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.about-list[_ngcontent-%COMP%]   span.list-title[_ngcontent-%COMP%] {\n  width: 110px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UscUJBQUE7QUFGSjtBQUlJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRk4iLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYWJvdXQtbGlzdCB7XG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICYubGlzdC10aXRsZSB7XG4gICAgICB3aWR0aDogMTEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 3794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, pathMatch: 'full' },
];
class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule] }); })();


/***/ }),

/***/ 3674:
/*!************************************************!*\
  !*** ./src/app/services/about-data.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutDataService": () => (/* binding */ AboutDataService)
/* harmony export */ });
/* harmony import */ var _assets_data_about_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/data/about.json */ 3549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class AboutDataService {
    constructor() { }
    get() {
        return _assets_data_about_json__WEBPACK_IMPORTED_MODULE_0__;
    }
}
AboutDataService.ɵfac = function AboutDataService_Factory(t) { return new (t || AboutDataService)(); };
AboutDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AboutDataService, factory: AboutDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2186:
/*!*******************************************!*\
  !*** ./src/app/services/links.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinksService": () => (/* binding */ LinksService)
/* harmony export */ });
/* harmony import */ var _assets_data_links_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/data/links.json */ 3520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LinksService {
    constructor() { }
    get() {
        return _assets_data_links_json__WEBPACK_IMPORTED_MODULE_0__;
    }
}
LinksService.ɵfac = function LinksService_Factory(t) { return new (t || LinksService)(); };
LinksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LinksService, factory: LinksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3549:
/*!************************************!*\
  !*** ./src/assets/data/about.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"imageUrl":"assets/img/marco.png","teaser":"Full Stack Web Developer","firstName":"Marco","lastName":"Gerstmann","nationality":"German","birthday":"April 6, 1986","birthplace":"Flensburg, Germany","address":"Polígono 4, Parcela 494, 07520 Petra, Spain"}');

/***/ }),

/***/ 3520:
/*!************************************!*\
  !*** ./src/assets/data/links.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"linkedin":"https://www.linkedin.com/in/mage/","xing":"https://www.xing.com/profile/Marco_Gerstmann","github":"https://github.com/marcogerstmann"}');

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map