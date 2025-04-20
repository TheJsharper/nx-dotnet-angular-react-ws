(self["webpackChunkmy_mf_todo"] = self["webpackChunkmy_mf_todo"] || []).push([["common"],{

/***/ 5797:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/BehaviorSubject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BehaviorSubject: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 3200);

class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  }
  getValue() {
    const {
      hasError,
      thrownError,
      _value
    } = this;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  }
  next(value) {
    super.next(this._value = value);
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


/***/ }),

/***/ 9518:
/*!*************************************************************************************!*\
  !*** ./frontend/angular/micro-apps/my-mf-todo/src/app/remote-entry/entry.routes.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   remoteRoutes: () => (/* binding */ remoteRoutes)
/* harmony export */ });
/* harmony import */ var _entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry.component */ 7873);

const remoteRoutes = [{
  path: '',
  component: _entry_component__WEBPACK_IMPORTED_MODULE_0__.RemoteEntryComponent
}];

/***/ })

}])
//# sourceMappingURL=common.js.map