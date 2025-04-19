(self["webpackChunktest_lib"] = self["webpackChunktest_lib"] || []).push([["common"],{

/***/ 1417:
/*!*********************************************************************************!*\
  !*** ./frontend/angular/views/test-lib/src/app/remote-entry/entry.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteEntryComponent: () => (/* binding */ RemoteEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6877);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_test_lib_test_lib_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/test-lib/test-lib.component */ 8522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class RemoteEntryComponent {
  static {
    this.ɵfac = function RemoteEntryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RemoteEntryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RemoteEntryComponent,
      selectors: [["app-tes-lib-remote-entry"]],
      decls: 1,
      vars: 0,
      template: function RemoteEntryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-lib-test-lib-bootstrap");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _lib_test_lib_test_lib_component__WEBPACK_IMPORTED_MODULE_2__.TestLibComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 6742:
/*!******************************************************************************!*\
  !*** ./frontend/angular/views/test-lib/src/app/remote-entry/entry.routes.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   remoteRoutes: () => (/* binding */ remoteRoutes)
/* harmony export */ });
/* harmony import */ var _entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry.component */ 1417);

const remoteRoutes = [{
  path: '',
  component: _entry_component__WEBPACK_IMPORTED_MODULE_0__.RemoteEntryComponent
}];

/***/ }),

/***/ 8522:
/*!********************************************************************************!*\
  !*** ./frontend/angular/views/test-lib/src/lib/test-lib/test-lib.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestLibComponent: () => (/* binding */ TestLibComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6877);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class TestLibComponent {
  static {
    this.ɵfac = function TestLibComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TestLibComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TestLibComponent,
      selectors: [["app-lib-test-lib-bootstrap"]],
      decls: 38,
      vars: 0,
      consts: [[1, "bi", "bi-0-circle"], ["id", "accordionExample", 1, "accordion"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"]],
      template: function TestLibComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h2", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Accordion Item #1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "This is the first item's accordion body.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ".accordion-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ", though the transition does limit overflow. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2)(15, "h2", 3)(16, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Accordion Item #2 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8)(19, "div", 6)(20, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "This is the second item's accordion body.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ".accordion-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, ", though the transition does limit overflow. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2)(27, "h2", 3)(28, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Accordion Item #3 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10)(31, "div", 6)(32, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "This is the third item's accordion body.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, ".accordion-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, ", though the transition does limit overflow. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWxpYi5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2Zyb250ZW5kL2FuZ3VsYXIvdmlld3MvdGVzdC1saWIvc3JjL2xpYi90ZXN0LWxpYi90ZXN0LWxpYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8571:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/weak_ref-DrMdAIDh.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ setAlternateWeakRefImpl)
/* harmony export */ });
/**
 * @license Angular v19.2.2
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

function setAlternateWeakRefImpl(impl) {
  // TODO: remove this function
}


/***/ })

}])
//# sourceMappingURL=common.js.map