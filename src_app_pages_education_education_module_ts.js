"use strict";
(self["webpackChunkmarcogerstmann_com"] = self["webpackChunkmarcogerstmann_com"] || []).push([["src_app_pages_education_education_module_ts"],{

/***/ 2010:
/*!********************************************************!*\
  !*** ./src/app/pages/education/education.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationComponent": () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/content-header/content-header.component */ 3497);






function EducationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "mat-chip-list", 8)(2, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 10)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 11)(8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const education_r1 = ctx.$implicit;
    const odd_r2 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxLayoutAlign", odd_r2 ? "end" : "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](education_r1.dateRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](education_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", education_r1.centre, " (", education_r1.location, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](education_r1.desc);
} }
class EducationComponent {
    constructor() {
        this.educations = [
            {
                name: 'software engineering',
                dateRange: '2010 - 2013',
                centre: 'University of Oxford',
                location: 'Oxford, United Kingdom',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt, id quibusdam suscipit rerum, deserunt consequatur blanditiis minima nesciunt odit est quidem qui.',
            },
            {
                name: 'master of information technology',
                dateRange: '2008 - 2010',
                centre: 'Stanford University',
                location: 'Stanford, California, USA',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt, id quibusdam suscipit rerum, deserunt consequatur blanditiis minima nesciunt odit est quidem qui.',
            },
            {
                name: 'specialization course',
                dateRange: '2006 - 2008',
                centre: 'Sorbonne University',
                location: 'Paris, France',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt, id quibusdam suscipit rerum, deserunt consequatur blanditiis minima nesciunt odit est quidem qui.',
            },
            {
                name: 'bachelor computer engineering',
                dateRange: '2004 - 2006',
                centre: 'Harvard University',
                location: 'Cambridge, Massachusetts, USA',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sunt, id quibusdam suscipit rerum, deserunt consequatur blanditiis minima nesciunt odit est quidem qui.',
            },
        ];
    }
    ngOnInit() { }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 7, vars: 1, consts: [["icon", "school", "headerTitle", "Education"], [1, "container", "p-3"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "100", "fxFlex.gt-md", "85", "fxFlex.md", "90", 1, "p-3"], [1, "timeline-container"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayout", "row wrap", "class", "timeline-block", 3, "fxLayoutAlign", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxLayout", "row wrap", 1, "timeline-block", 3, "fxLayoutAlign"], [1, "timeline-date"], ["color", "accent", "selected", "true", 1, "mat-elevation-z2"], ["fxFlex", "100", "fxFlex.gt-sm", "45", 1, "timeline-content"], [1, "secondary-text-color", "company"], [1, "secondary-text-color"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-content-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EducationComponent_div_6_Template, 12, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.educations);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChip, _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_0__.ContentHeaderComponent], styles: [".timeline-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2px;\n  box-sizing: border-box;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 72px;\n  margin-top: 24px;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -72px;\n  top: 16px;\n  z-index: 1;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 1rem 2.5rem;\n  min-height: 150px;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p.company[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.timeline-container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 20px;\n  height: 100%;\n  width: 4px;\n}\n@media screen and (min-width: 960px) {\n  .timeline-container[_ngcontent-%COMP%]::before {\n    left: 50%;\n    margin-left: -2px;\n  }\n\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-top: -70px;\n  }\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n    left: 50%;\n    margin-left: -74px;\n  }\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    padding: 1rem 2.5rem 1rem 1rem;\n  }\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]:nth-child(even)   .timeline-date[_ngcontent-%COMP%] {\n    margin-left: -19px;\n  }\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 1rem 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNOO0FBRUk7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBQU47QUFFTTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUdNO0VBQ0Usa0JBQUE7QUFEUjtBQUtJO0VBQ0UsYUFBQTtBQUhOO0FBT0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBTEo7QUFTQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLGlCQUFBO0VBTkY7O0VBU0U7SUFDRSxTQUFBO0lBQ0EsaUJBQUE7RUFOSjtFQVFJO0lBQ0UsU0FBQTtJQUNBLGtCQUFBO0VBTk47RUFTSTtJQUNFLDhCQUFBO0VBUE47RUFXTTtJQUNFLGtCQUFBO0VBVFI7RUFZTTtJQUNFLDhCQUFBO0VBVlI7QUFDRiIsImZpbGUiOiJlZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLnRpbWVsaW5lLWJsb2NrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcblxuICAgIC50aW1lbGluZS1kYXRlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IC03MnB4O1xuICAgICAgdG9wOiAxNnB4O1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAudGltZWxpbmUtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAyLjVyZW07XG4gICAgICBtaW4taGVpZ2h0OiAxNTBweDtcblxuICAgICAgaDMge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICBwLmNvbXBhbnkge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA0cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLnRpbWVsaW5lLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gIH1cbiAgLnRpbWVsaW5lLWNvbnRhaW5lciB7XG4gICAgLnRpbWVsaW5lLWJsb2NrIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuXG4gICAgICAudGltZWxpbmUtZGF0ZSB7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03NHB4O1xuICAgICAgfVxuXG4gICAgICAudGltZWxpbmUtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMi41cmVtIDFyZW0gMXJlbTtcbiAgICAgIH1cblxuICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAudGltZWxpbmUtZGF0ZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDIuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9718:
/*!*****************************************************!*\
  !*** ./src/app/pages/education/education.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationModule": () => (/* binding */ EducationModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _education_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education.component */ 2010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: '', component: _education_component__WEBPACK_IMPORTED_MODULE_1__.EducationComponent, pathMatch: 'full' },
];
class EducationModule {
}
EducationModule.ɵfac = function EducationModule_Factory(t) { return new (t || EducationModule)(); };
EducationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EducationModule });
EducationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EducationModule, { declarations: [_education_component__WEBPACK_IMPORTED_MODULE_1__.EducationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_education_education_module_ts.js.map