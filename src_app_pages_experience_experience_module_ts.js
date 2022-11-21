"use strict";
(self["webpackChunkmarcogerstmann_com"] = self["webpackChunkmarcogerstmann_com"] || []).push([["src_app_pages_experience_experience_module_ts"],{

/***/ 2469:
/*!**********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/experience.service */ 8398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/content-header/content-header.component */ 3497);







function ExperienceComponent_div_6_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bullet_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bullet_r5, " ");
} }
function ExperienceComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "mat-chip-list", 8)(2, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card", 10)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 11)(8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ExperienceComponent_div_6_li_13_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Focus Areas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    const first_r2 = ctx.first;
    const odd_r3 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayoutAlign", odd_r3 ? "end" : "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", first_r2 ? "primary" : "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](experience_r1.dateRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("first", first_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](experience_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](experience_r1.fullDateRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", experience_r1.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", experience_r1.bullets);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](experience_r1.focusAreas);
} }
class ExperienceComponent {
    constructor(experienceService) {
        this.experienceService = experienceService;
    }
    ngOnInit() {
        this.experiences = this.experienceService.get();
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_experience_service__WEBPACK_IMPORTED_MODULE_0__.ExperienceService)); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 7, vars: 1, consts: [["icon", "touch_app", "headerTitle", "Experience"], [1, "container", "p-3"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "100", "fxFlex.gt-md", "85", "fxFlex.md", "90", 1, "p-3"], [1, "timeline-container"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayout", "row wrap", "class", "timeline-block", 3, "fxLayoutAlign", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxLayout", "row wrap", 1, "timeline-block", 3, "fxLayoutAlign"], [1, "timeline-date"], ["selected", "true", 1, "mat-elevation-z2", 3, "color"], ["fxFlex", "100", "fxFlex.gt-sm", "45", 1, "timeline-content"], [1, "secondary-text-color"], [1, "secondary-text-color", "company"], [4, "ngFor", "ngForOf"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-content-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ExperienceComponent_div_6_Template, 18, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChip, _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_1__.ContentHeaderComponent], styles: [".timeline-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2px;\n  box-sizing: border-box;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 72px;\n  margin-top: 24px;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -72px;\n  top: 16px;\n  z-index: 1;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 1rem 2.5rem;\n  min-height: 150px;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p.company[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.timeline-container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 20px;\n  height: 100%;\n  width: 4px;\n}\n@media screen and (min-width: 960px) {\n  .timeline-container[_ngcontent-%COMP%]::before {\n    left: 50%;\n    margin-left: -2px;\n  }\n\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-top: -70px;\n  }\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n    left: 50%;\n    margin-left: -74px;\n  }\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    padding: 1rem 2.5rem 1rem 1rem;\n  }\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]:nth-child(even)   .timeline-date[_ngcontent-%COMP%] {\n    margin-left: -19px;\n  }\n  .timeline-container[_ngcontent-%COMP%]   .timeline-block[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 1rem 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDTjtBQUVJO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQUFOO0FBRU07RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFHTTtFQUNFLGtCQUFBO0FBRFI7QUFLSTtFQUNFLGFBQUE7QUFITjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUxKO0FBU0E7RUFDRTtJQUNFLFNBQUE7SUFDQSxpQkFBQTtFQU5GOztFQVNFO0lBQ0UsU0FBQTtJQUNBLGlCQUFBO0VBTko7RUFRSTtJQUNFLFNBQUE7SUFDQSxrQkFBQTtFQU5OO0VBU0k7SUFDRSw4QkFBQTtFQVBOO0VBV007SUFDRSxrQkFBQTtFQVRSO0VBWU07SUFDRSw4QkFBQTtFQVZSO0FBQ0YiLCJmaWxlIjoiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAudGltZWxpbmUtYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gICAgLnRpbWVsaW5lLWRhdGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogLTcycHg7XG4gICAgICB0b3A6IDE2cHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC50aW1lbGluZS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDIuNXJlbTtcbiAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuXG4gICAgICBoMyB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG5cbiAgICAgIHAuY29tcGFueSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDRweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAudGltZWxpbmUtY29udGFpbmVyOjpiZWZvcmUge1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgfVxuICAudGltZWxpbmUtY29udGFpbmVyIHtcbiAgICAudGltZWxpbmUtYmxvY2sge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luLXRvcDogLTcwcHg7XG5cbiAgICAgIC50aW1lbGluZS1kYXRlIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTc0cHg7XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMXJlbSAyLjVyZW0gMXJlbSAxcmVtO1xuICAgICAgfVxuXG4gICAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgIC50aW1lbGluZS1kYXRlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGltZWxpbmUtY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMi41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 2285:
/*!*******************************************************!*\
  !*** ./src/app/pages/experience/experience.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceModule": () => (/* binding */ ExperienceModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.component */ 2469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: '', component: _experience_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceComponent, pathMatch: 'full' },
];
class ExperienceModule {
}
ExperienceModule.ɵfac = function ExperienceModule_Factory(t) { return new (t || ExperienceModule)(); };
ExperienceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExperienceModule });
ExperienceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExperienceModule, { declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 8398:
/*!************************************************!*\
  !*** ./src/app/services/experience.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceService": () => (/* binding */ ExperienceService)
/* harmony export */ });
/* harmony import */ var _assets_data_experience_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/data/experience.json */ 8891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ExperienceService {
    constructor() { }
    get() {
        return _assets_data_experience_json__WEBPACK_IMPORTED_MODULE_0__;
    }
}
ExperienceService.ɵfac = function ExperienceService_Factory(t) { return new (t || ExperienceService)(); };
ExperienceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExperienceService, factory: ExperienceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8891:
/*!*****************************************!*\
  !*** ./src/assets/data/experience.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"position":"Software Developer","dateRange":"2021 - Present","fullDateRange":"Apr 2021 - Present day","company":"flexIT Software Engineering S.L.U (FRS), Palma de Mallorca, Spain","bullets":["Microservices architecture","Frontend (Angular Web App), backend (Java Spring Boot RESTful Service) and database (MySQL)","Test Driven Development (TDD)","Continuous Integration and Continuous Delivery","Agile software development"],"focusAreas":" Angular (2+), Java Spring Boot, Test Driven Development, GitLab, IntelliJ IDEA, MySQL, Docker, Kubernetes, Jira, Scrum"},{"position":"Software Engineer","dateRange":"2018 - 2021","fullDateRange":"Jun 2018 - Mar 2021","company":"Navis Carrier and Vessel Solutions (Kalmar Germany GmbH), Flensburg, Germany","bullets":["Development of a web application for the berth planning of container terminals","Frontend (Angular Web App), backend (Java Spring Boot RESTful Service) and database (PostgreSQL)","Test Driven Development (TDD)","Working in an international team (California, Spain, India, Germany)","Continuous Integration and Continuous Delivery","Agile software development with Extreme Programming"],"focusAreas":"Angular (2+), Java Spring Boot, Test Driven Development, International work, GitHub, IntelliJ IDEA, PostgreSQL, Docker, Kubernetes, CircleCI, G Suite, Pivotal Tracker, Extreme Programming"},{"position":"Software Developer","dateRange":"2016 - 2018","fullDateRange":"Jan 2016 - May 2018","company":"Daarwin Beratungsgesellschaft mbH, Flensburg, Germany","bullets":["Development of a responsive web application for the social sector","Implementation of technical requirements in frontend and backend","Ensuring the greatest possible browser compatibility","Quality assurance and maintenance of the product","Implementation of automated API endpoint tests with Postman"],"focusAreas":"Responsive web development, AngularJS, TypeScript, JavaScript, HTML, CSS, C#.NET, MS SQL, RESTful API, Postman, Git, Visual Studio"},{"position":"Software Developer","dateRange":"2014 - 2015","fullDateRange":"Sep 2014 - Dec 2015","company":"Theodor-Schäfer-Berufsbildungswerk, Husum, Germany","bullets":["Development of an enterprise desktop application for the administration of vocational training centers","Planning and design of software architectures","Planning and design of database architectures","Trained HTML, CSS and PHP to trainees"],"focusAreas":"C#.NET, Windows Forms, Visual Studio, MS SQL, HTML, CSS, PHP"}]');

/***/ })

}]);
//# sourceMappingURL=src_app_pages_experience_experience_module_ts.js.map