(self["webpackChunkmf_todo"] = self["webpackChunkmf_todo"] || []).push([["frontend_angular_micro-apps_mf-todo_src_bootstrap_ts"],{

/***/ 1588:
/*!*******************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/app/app.config.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

//import { provideRouter } from '@angular/router';
//import { route } from '../lib/todo.router';
//import { appRoutes } from './app.routes';
const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.provideZoneChangeDetection)({
    eventCoalescing: true
  })
  // provideRouter(route),
  ]
};

/***/ }),

/***/ 4131:
/*!**************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/bootstrap.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2348);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/todo-component */ 8783);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.config */ 1588);

//import { appConfig } from './app/app.config';


(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(/*RemoteEntryComponent,*/_lib_todo_component__WEBPACK_IMPORTED_MODULE_1__.TodoMainComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_2__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 8783:
/*!***********************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/todo-component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoMainComponent: () => (/* binding */ TodoMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6121);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class TodoMainComponent {
  static {
    this.ɵfac = function TodoMainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TodoMainComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TodoMainComponent,
      selectors: [["lib-todo-main"]],
      decls: 1,
      vars: 0,
      template: function TodoMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFGSiIsImZpbGUiOiJ0b2RvLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vQGltcG9ydCAnfm5vZGVfbW9kdWxlcy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzJztcclxuLy9AaW1wb3J0ICd+bm9kZV9tb2R1bGVzL3RvZG9tdmMtY29tbW9uL2Jhc2UuY3NzJztcclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2Zyb250ZW5kL2FuZ3VsYXIvbWljcm8tYXBwcy9tZi10b2RvL3NyYy9saWIvdG9kby1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUZKO0FBQ0Esd2ZBQXdmIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vQGltcG9ydCAnfm5vZGVfbW9kdWxlcy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzJztcclxuLy9AaW1wb3J0ICd+bm9kZV9tb2R1bGVzL3RvZG9tdmMtY29tbW9uL2Jhc2UuY3NzJztcclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}])
//# sourceMappingURL=frontend_angular_micro-apps_mf-todo_src_bootstrap_ts.js.map