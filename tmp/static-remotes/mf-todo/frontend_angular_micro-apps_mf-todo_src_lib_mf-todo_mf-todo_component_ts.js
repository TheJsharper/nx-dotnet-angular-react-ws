(self["webpackChunkmf_todo"] = self["webpackChunkmf_todo"] || []).push([["frontend_angular_micro-apps_mf-todo_src_lib_mf-todo_mf-todo_component_ts"],{

/***/ 659:
/*!********************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/footer/footer.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6877);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6999);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3063);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter/filter.actions */ 7209);
/* harmony import */ var _mf_todo_store_todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mf-todo/store/todo.actions */ 5157);
/* harmony import */ var _mf_todo_store_todo_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mf-todo/store/todo.selectors */ 6580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);








const _c0 = a0 => ({
  selected: a0
});
function FooterComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FooterComponent_li_7_Template_li_click_0_listener() {
      const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.changeFilter(filter_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r2.selectedFilter$) === filter_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](filter_r2);
  }
}
class FooterComponent {
  constructor(store) {
    this.store = store;
    this.filterTypes = ['all', 'completed', 'pending'];
    this.selectedFilter$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('all');
  }
  ngOnInit() {
    this.selectedFilter$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(_mf_todo_store_todo_selectors__WEBPACK_IMPORTED_MODULE_5__.selectFilter));
    this.pendingTodos$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(_mf_todo_store_todo_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPendingTodos));
  }
  changeFilter(filter) {
    this.store.dispatch(new _filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__.SetFilterAction(filter));
  }
  clearCompletedTodos() {
    this.store.dispatch(new _mf_todo_store_todo_actions__WEBPACK_IMPORTED_MODULE_4__.DeleteAllCompletedTodoAction());
  }
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["lib-app-footer"]],
      decls: 10,
      vars: 4,
      consts: [[1, "footer"], [1, "todo-count"], [1, "filters"], [3, "click", 4, "ngFor", "ngForOf"], [1, "clear-completed", 3, "click"], [3, "click"], [3, "ngClass"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "footer", 0)(1, "span", 1)(2, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " item left");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ul", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, FooterComponent_li_7_Template, 4, 6, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_8_listener() {
            return ctx.clearCompletedTodos();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Clear completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, ctx.pendingTodos$));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filterTypes);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgFor],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2Zyb250ZW5kL2FuZ3VsYXIvbWljcm8tYXBwcy9tZi10b2RvL3NyYy9saWIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1436:
/*!***************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/filter/filter.pipe.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class FilterPipe {
  transform(todos, filter) {
    if (!todos) {
      return [];
    }
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completion);
      case 'pending':
        return todos.filter(todo => !todo.completion);
      default:
        {
          return todos;
        }
    }
  }
  static {
    this.ɵfac = function FilterPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filterTodo",
      type: FilterPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 3267:
/*!**************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/add/add.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddComponent: () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 1499);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6999);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mf_todo_store_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mf-todo/store/todo.actions */ 5157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






class AddComponent {
  constructor(store) {
    this.store = store;
    this.contentInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
  }
  addTodo() {
    if (this.contentInput?.invalid) return;
    const action = new _mf_todo_store_todo_actions__WEBPACK_IMPORTED_MODULE_2__.AddTodoAction(this.contentInput.value ?? '');
    this.store.dispatch(action);
    this.contentInput?.setValue('');
  }
  static {
    this.ɵfac = function AddComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AddComponent,
      selectors: [["lib-app-add"]],
      decls: 4,
      vars: 1,
      consts: [[1, "header"], ["placeholder", "What needs to be done?", "autofocus", "", 1, "new-todo", 3, "keyup.enter", "formControl"]],
      template: function AddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "todos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function AddComponent_Template_input_keyup_enter_3_listener() {
            return ctx.addTodo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.contentInput);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2Zyb250ZW5kL2FuZ3VsYXIvbWljcm8tYXBwcy9tZi10b2RvL3NyYy9saWIvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4014:
/*!*******************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/list/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListComponent: () => (/* reexport safe */ _list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent)
/* harmony export */ });
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component */ 9541);


/***/ }),

/***/ 4259:
/*!****************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/item/item.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemComponent: () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo.model */ 4725);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1499);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6999);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6877);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mf_todo_store_todo_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mf-todo/store/todo.actions */ 5157);









const _c0 = ["contentInput"];
const _c1 = (a0, a1) => ({
  "completed": a0,
  "editing": a1
});
class ItemComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.chkField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.todo.completion);
    this.content = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.todo.content, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.chkField.valueChanges.subscribe(value => this.store.dispatch(new _mf_todo_store_todo_actions__WEBPACK_IMPORTED_MODULE_5__.ToggleTodoAction(this.todo.id)));
  }
  edit() {
    this.editing = true;
    setTimeout(() => {
      this.contentInput.nativeElement.select();
    }, 20);
  }
  leave() {
    this.editing = false;
    this.store.dispatch(new _mf_todo_store_todo_actions__WEBPACK_IMPORTED_MODULE_5__.EditTodoAction(this.todo.id, this.content.value));
  }
  deleteTodo() {
    this.store.dispatch(new _mf_todo_store_todo_actions__WEBPACK_IMPORTED_MODULE_5__.DeleteTodoAction(this.todo.id));
  }
  static {
    this.ɵfac = function ItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemComponent,
      selectors: [["lib-app-item"]],
      viewQuery: function ItemComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentInput = _t.first);
        }
      },
      inputs: {
        todo: "todo"
      },
      decls: 8,
      vars: 7,
      consts: [["contentInput", ""], [3, "ngClass"], [1, "view"], ["type", "checkbox", 1, "toggle", 3, "formControl"], [3, "dblclick"], [1, "destroy", 3, "click"], [1, "edit", 3, "blur", "formControl"]],
      template: function ItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ItemComponent_Template_label_dblclick_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.edit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.deleteTodo());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ItemComponent_Template_input_blur_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.leave());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, ctx.todo.completion, ctx.editing));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.chkField);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.todo.content, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.content);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2Zyb250ZW5kL2FuZ3VsYXIvbWljcm8tYXBwcy9tZi10b2RvL3NyYy9saWIvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4769:
/*!*******************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/item/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemComponent: () => (/* reexport safe */ _item_component__WEBPACK_IMPORTED_MODULE_0__.ItemComponent)
/* harmony export */ });
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.component */ 4259);


/***/ }),

/***/ 4859:
/*!**********************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/mf-todo/mf-todo.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MfTodoComponent: () => (/* binding */ MfTodoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6877);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6999);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add */ 8661);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer */ 9861);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list */ 4014);
/* harmony import */ var _store_todo_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/todo.actions */ 5157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);








class MfTodoComponent {
  constructor(store) {
    this.store = store;
  }
  toggleAll() {
    this.store.dispatch(new _store_todo_actions__WEBPACK_IMPORTED_MODULE_5__.ToggleAllTodoAction());
  }
  static {
    this.ɵfac = function MfTodoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MfTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: MfTodoComponent,
      selectors: [["lib-mf-todo"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([])],
      decls: 8,
      vars: 0,
      consts: [[1, "todoapp"], [1, "main"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all"], ["for", "toggle-all", 3, "click"]],
      template: function MfTodoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "lib-app-add");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "section", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MfTodoComponent_Template_label_click_4_listener() {
            return ctx.toggleAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Mark all as complete");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "lib-app-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "lib-app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _list__WEBPACK_IMPORTED_MODULE_4__.ListComponent, _footer__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _add__WEBPACK_IMPORTED_MODULE_2__.AddComponent],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .footer {\n  height: 50px;\n}\n[_nghost-%COMP%]     .todoapp {\n  flex: 0 1 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1mLXRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtBQUNSO0FBRUk7RUFDSSxhQUFBO0FBQVIiLCJmaWxlIjoibWYtdG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICA6Om5nLWRlZXAgLmZvb3RlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAudG9kb2FwcCB7XHJcbiAgICAgICAgZmxleDogMCAxIDgwJTtcclxuICAgIH1cclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2Zyb250ZW5kL2FuZ3VsYXIvbWljcm8tYXBwcy9tZi10b2RvL3NyYy9saWIvbWYtdG9kby9tZi10b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUVJO0VBQ0ksYUFBQTtBQUFSO0FBQ0Esd2tCQUF3a0IiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgOjpuZy1kZWVwIC5mb290ZXIge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLnRvZG9hcHAge1xyXG4gICAgICAgIGZsZXg6IDAgMSA4MCU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5904:
/*!*********************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/filter/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* reexport safe */ _filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe),
/* harmony export */   SET_FILTER: () => (/* reexport safe */ _filter_actions__WEBPACK_IMPORTED_MODULE_0__.SET_FILTER),
/* harmony export */   SetFilterAction: () => (/* reexport safe */ _filter_actions__WEBPACK_IMPORTED_MODULE_0__.SetFilterAction),
/* harmony export */   filterReducer: () => (/* reexport safe */ _filter_reducer__WEBPACK_IMPORTED_MODULE_2__.filterReducer)
/* harmony export */ });
/* harmony import */ var _filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.actions */ 7209);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.pipe */ 1436);
/* harmony import */ var _filter_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.reducer */ 3986);




/***/ }),

/***/ 6580:
/*!*************************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/mf-todo/store/todo.selectors.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectFeature: () => (/* binding */ selectFeature),
/* harmony export */   selectFilter: () => (/* binding */ selectFilter),
/* harmony export */   selectPendingTodos: () => (/* binding */ selectPendingTodos),
/* harmony export */   selectTodos: () => (/* binding */ selectTodos)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6999);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('todos');
const selectTodos = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, todos => todos.todos);
const selectFilter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, t => t.filter);
const selectPendingTodos = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectFeature, state => state.todos.filter(todo => !todo.completion).length);

/***/ }),

/***/ 8661:
/*!******************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/add/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddComponent: () => (/* reexport safe */ _add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent)
/* harmony export */ });
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.component */ 3267);


/***/ }),

/***/ 9541:
/*!****************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/list/list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListComponent: () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6999);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3063);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mf_todo_store_todo_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mf-todo/store/todo.selectors */ 6580);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item */ 4769);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter */ 5904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6877);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);








const _c0 = () => [];
function ListComponent_lib_app_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "lib-app-item", 2);
  }
  if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("todo", todo_r1);
  }
}
class ListComponent {
  constructor(store) {
    this.store = store;
    this.filterType = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)('all');
    this.todos = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
  }
  ngOnInit() {
    this.todos = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.select)(_mf_todo_store_todo_selectors__WEBPACK_IMPORTED_MODULE_2__.selectTodos));
    this.filterType = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.select)(_mf_todo_store_todo_selectors__WEBPACK_IMPORTED_MODULE_2__.selectFilter));
  }
  static {
    this.ɵfac = function ListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["lib-app-list"]],
      decls: 5,
      vars: 9,
      consts: [[1, "todo-list"], [3, "todo", 4, "ngFor", "ngForOf"], [3, "todo"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListComponent_lib_app_item_1_Template, 1, 1, "lib-app-item", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "filterTodo");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 5, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx.todos)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0), (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, ctx.filterType)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "all"));
        }
      },
      dependencies: [_item__WEBPACK_IMPORTED_MODULE_3__.ItemComponent, _filter__WEBPACK_IMPORTED_MODULE_4__.FilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2Zyb250ZW5kL2FuZ3VsYXIvbWljcm8tYXBwcy9tZi10b2RvL3NyYy9saWIvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9861:
/*!*********************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/footer/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* reexport safe */ _footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent)
/* harmony export */ });
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 659);


/***/ })

}])
//# sourceMappingURL=frontend_angular_micro-apps_mf-todo_src_lib_mf-todo_mf-todo_component_ts.js.map