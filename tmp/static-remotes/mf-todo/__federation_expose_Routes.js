(self["webpackChunkmf_todo"] = self["webpackChunkmf_todo"] || []).push([["__federation_expose_Routes"],{

/***/ 3986:
/*!******************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/filter/filter.reducer.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterReducer: () => (/* binding */ filterReducer)
/* harmony export */ });
/* harmony import */ var _filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.actions */ 7209);

//const initialState: FilterType = 'all';
function filterReducer(state = 'all', action) {
  switch (action.type) {
    case _filter_actions__WEBPACK_IMPORTED_MODULE_0__.SET_FILTER:
      return action.filter;
    default:
      {
        return state;
      }
  }
  return state;
}

/***/ }),

/***/ 4725:
/*!**************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/models/todo.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(content) {
    this.id = Math.random();
    this.content = `${content.charAt(0).toLowerCase()}${content.slice(1)}`;
    this.completion = false;
  }
}

/***/ }),

/***/ 5157:
/*!***********************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/mf-todo/store/todo.actions.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_TODO: () => (/* binding */ ADD_TODO),
/* harmony export */   AddTodoAction: () => (/* binding */ AddTodoAction),
/* harmony export */   DELETE_COMPLETED_TODO: () => (/* binding */ DELETE_COMPLETED_TODO),
/* harmony export */   DELETE_TODO: () => (/* binding */ DELETE_TODO),
/* harmony export */   DeleteAllCompletedTodoAction: () => (/* binding */ DeleteAllCompletedTodoAction),
/* harmony export */   DeleteTodoAction: () => (/* binding */ DeleteTodoAction),
/* harmony export */   EDIT_TODO: () => (/* binding */ EDIT_TODO),
/* harmony export */   EditTodoAction: () => (/* binding */ EditTodoAction),
/* harmony export */   TOGGLE_ALL_TODO: () => (/* binding */ TOGGLE_ALL_TODO),
/* harmony export */   TOGGLE_TODO: () => (/* binding */ TOGGLE_TODO),
/* harmony export */   ToggleAllTodoAction: () => (/* binding */ ToggleAllTodoAction),
/* harmony export */   ToggleTodoAction: () => (/* binding */ ToggleTodoAction)
/* harmony export */ });
const ADD_TODO = '[TODO] add todo';
const TOGGLE_TODO = '[TODO] toggle todo';
const EDIT_TODO = '[TODO] Edit todo';
const DELETE_TODO = '[TODO] Delete todo';
const TOGGLE_ALL_TODO = '[TODO] toggle all todo';
const DELETE_COMPLETED_TODO = '[TODO] delete all completed todos';
class AddTodoAction {
  constructor(content) {
    this.content = content;
    this.type = ADD_TODO;
    console.log("action construct", content);
  }
}
class ToggleTodoAction {
  constructor(id) {
    this.id = id;
    this.type = TOGGLE_TODO;
  }
}
class EditTodoAction {
  constructor(id, newContent) {
    this.id = id;
    this.newContent = newContent;
    this.type = EDIT_TODO;
  }
}
class DeleteTodoAction {
  constructor(id) {
    this.id = id;
    this.type = DELETE_TODO;
  }
}
class ToggleAllTodoAction {
  constructor() {
    this.type = TOGGLE_ALL_TODO;
  }
}
class DeleteAllCompletedTodoAction {
  constructor() {
    this.type = DELETE_COMPLETED_TODO;
  }
}

/***/ }),

/***/ 5286:
/*!********************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/todo.router.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   route: () => (/* binding */ route)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6999);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mf_todo_store_todo_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mf-todo/store/todo.reducer */ 9110);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store-devtools */ 7514);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__);




const route = [{
  path: '',
  loadComponent: () => {
    console.log("CALLING MAIN TODO COMPONENT");
    return Promise.all(/*! import() */[__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("frontend_angular_micro-apps_mf-todo_src_lib_mf-todo_mf-todo_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mf-todo/mf-todo.component */ 4859)).then(c => c.MfTodoComponent);
  },
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature("todos", _mf_todo_store_todo_reducer__WEBPACK_IMPORTED_MODULE_2__.reducers), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__.StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: true
  }))]
}];

/***/ }),

/***/ 7209:
/*!******************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/filter/filter.actions.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SET_FILTER: () => (/* binding */ SET_FILTER),
/* harmony export */   SetFilterAction: () => (/* binding */ SetFilterAction)
/* harmony export */ });
const SET_FILTER = '[FILTER] Set Filter';
//export type FilterType 'completed' | 'pending' | 'all' | undefined;
class SetFilterAction {
  constructor(filter = 'all') {
    this.filter = filter;
    this.type = SET_FILTER;
  }
}
//export type FilterActions = SetFilterAction;

/***/ }),

/***/ 9110:
/*!***********************************************************************************!*\
  !*** ./frontend/angular/micro-apps/mf-todo/src/lib/mf-todo/store/todo.reducer.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducers: () => (/* binding */ reducers),
/* harmony export */   todoReducer: () => (/* binding */ todoReducer)
/* harmony export */ });
/* harmony import */ var _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../filter/filter.reducer */ 3986);
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/todo.model */ 4725);
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.actions */ 5157);



const initialState = [new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__.Todo('Watch match barcelona vs. manU'), new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__.Todo('Play with valentin'), new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__.Todo('Go to shop')].map((value, index) => {
  if (index === 2) {
    value.completion = true;
  }
  return value;
});
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case _todo_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_TODO:
      if (action instanceof _todo_actions__WEBPACK_IMPORTED_MODULE_2__.AddTodoAction) {
        const newTodo = new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__.Todo(action.content);
        return [...state, newTodo];
      }
      break;
    case _todo_actions__WEBPACK_IMPORTED_MODULE_2__.TOGGLE_TODO:
      if (action instanceof _todo_actions__WEBPACK_IMPORTED_MODULE_2__.ToggleTodoAction) {
        return state.map(todo => {
          if (todo.id === action.id) {
            const todoRef = {
              ...todo,
              completion: !todo.completion
            };
            return todoRef;
          } else {
            return todo;
          }
        });
      }
      break;
    case _todo_actions__WEBPACK_IMPORTED_MODULE_2__.EDIT_TODO:
      if (action instanceof _todo_actions__WEBPACK_IMPORTED_MODULE_2__.EditTodoAction) {
        return state.map(todo => {
          if (todo.id === action.id) {
            const todoRef = {
              ...todo,
              content: action.newContent
            };
            return todoRef;
          } else {
            return todo;
          }
        });
      }
      break;
    case _todo_actions__WEBPACK_IMPORTED_MODULE_2__.DELETE_TODO:
      if (action instanceof _todo_actions__WEBPACK_IMPORTED_MODULE_2__.DeleteTodoAction) {
        return state.filter(todo => todo.id !== action.id);
      }
      break;
    case _todo_actions__WEBPACK_IMPORTED_MODULE_2__.TOGGLE_ALL_TODO:
      if (action instanceof _todo_actions__WEBPACK_IMPORTED_MODULE_2__.ToggleAllTodoAction) {
        return state.map(todo => {
          return {
            ...todo,
            completion: !todo.completion
          };
        });
      }
      break;
    case _todo_actions__WEBPACK_IMPORTED_MODULE_2__.DELETE_COMPLETED_TODO:
      if (action instanceof _todo_actions__WEBPACK_IMPORTED_MODULE_2__.DeleteAllCompletedTodoAction) {
        return state.filter(todo => !todo.completion);
      }
      break;
    default:
      {
        return state;
      }
  }
  return state;
}
const reducers = {
  todos: todoReducer,
  filter: _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_0__.filterReducer
};

/***/ })

}])
//# sourceMappingURL=__federation_expose_Routes.js.map