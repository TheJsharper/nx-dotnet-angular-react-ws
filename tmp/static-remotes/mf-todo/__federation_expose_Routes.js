(self["webpackChunkmf_todo"] = self["webpackChunkmf_todo"] || []).push([["__federation_expose_Routes"],{

/***/ 819:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subject.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousSubject: () => (/* binding */ AnonymousSubject),
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ 3942);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ 2510);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 1910);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ 967);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ 23);





class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable {
  constructor() {
    super();
    this.closed = false;
    this.currentObservers = null;
    this.observers = [];
    this.isStopped = false;
    this.hasError = false;
    this.thrownError = null;
  }
  lift(operator) {
    const subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  }
  _throwIfClosed() {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
    }
  }
  next(value) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        if (!this.currentObservers) {
          this.currentObservers = Array.from(this.observers);
        }
        for (const observer of this.currentObservers) {
          observer.next(value);
        }
      }
    });
  }
  error(err) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.hasError = this.isStopped = true;
        this.thrownError = err;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  }
  complete() {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.isStopped = true;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  }
  unsubscribe() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  }
  get observed() {
    var _a;
    return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  _trySubscribe(subscriber) {
    this._throwIfClosed();
    return super._trySubscribe(subscriber);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  }
  _innerSubscribe(subscriber) {
    const {
      hasError,
      isStopped,
      observers
    } = this;
    if (hasError || isStopped) {
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(() => {
      this.currentObservers = null;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
    });
  }
  _checkFinalizedStatuses(subscriber) {
    const {
      hasError,
      thrownError,
      isStopped
    } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  }
  asObservable() {
    const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    observable.source = this;
    return observable;
  }
}
Subject.create = (destination, source) => {
  return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
  }
}

/***/ }),

/***/ 1383:
/*!**********************************************************!*\
  !*** ./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTIVE_RUNTIME_CHECKS: () => (/* binding */ ACTIVE_RUNTIME_CHECKS),
/* harmony export */   ActionsSubject: () => (/* binding */ ActionsSubject),
/* harmony export */   FEATURE_REDUCERS: () => (/* binding */ FEATURE_REDUCERS),
/* harmony export */   FEATURE_STATE_PROVIDER: () => (/* binding */ FEATURE_STATE_PROVIDER),
/* harmony export */   INIT: () => (/* binding */ INIT),
/* harmony export */   INITIAL_REDUCERS: () => (/* binding */ INITIAL_REDUCERS),
/* harmony export */   INITIAL_STATE: () => (/* binding */ INITIAL_STATE),
/* harmony export */   META_REDUCERS: () => (/* binding */ META_REDUCERS),
/* harmony export */   REDUCER_FACTORY: () => (/* binding */ REDUCER_FACTORY),
/* harmony export */   ROOT_STORE_PROVIDER: () => (/* binding */ ROOT_STORE_PROVIDER),
/* harmony export */   ReducerManager: () => (/* binding */ ReducerManager),
/* harmony export */   ReducerManagerDispatcher: () => (/* binding */ ReducerManagerDispatcher),
/* harmony export */   ReducerObservable: () => (/* binding */ ReducerObservable),
/* harmony export */   STORE_FEATURES: () => (/* binding */ STORE_FEATURES),
/* harmony export */   ScannedActionsSubject: () => (/* binding */ ScannedActionsSubject),
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   StateObservable: () => (/* binding */ StateObservable),
/* harmony export */   Store: () => (/* binding */ Store),
/* harmony export */   StoreFeatureModule: () => (/* binding */ StoreFeatureModule),
/* harmony export */   StoreModule: () => (/* binding */ StoreModule),
/* harmony export */   StoreRootModule: () => (/* binding */ StoreRootModule),
/* harmony export */   UPDATE: () => (/* binding */ UPDATE),
/* harmony export */   USER_PROVIDED_META_REDUCERS: () => (/* binding */ USER_PROVIDED_META_REDUCERS),
/* harmony export */   USER_RUNTIME_CHECKS: () => (/* binding */ USER_RUNTIME_CHECKS),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   createAction: () => (/* binding */ createAction),
/* harmony export */   createActionGroup: () => (/* binding */ createActionGroup),
/* harmony export */   createFeature: () => (/* binding */ createFeature),
/* harmony export */   createFeatureSelector: () => (/* binding */ createFeatureSelector),
/* harmony export */   createReducer: () => (/* binding */ createReducer),
/* harmony export */   createReducerFactory: () => (/* binding */ createReducerFactory),
/* harmony export */   createSelector: () => (/* binding */ createSelector),
/* harmony export */   createSelectorFactory: () => (/* binding */ createSelectorFactory),
/* harmony export */   defaultMemoize: () => (/* binding */ defaultMemoize),
/* harmony export */   defaultStateFn: () => (/* binding */ defaultStateFn),
/* harmony export */   emptyProps: () => (/* binding */ emptyProps),
/* harmony export */   isNgrxMockEnvironment: () => (/* binding */ isNgrxMockEnvironment),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   props: () => (/* binding */ props),
/* harmony export */   provideState: () => (/* binding */ provideState),
/* harmony export */   provideStore: () => (/* binding */ provideStore),
/* harmony export */   reduceState: () => (/* binding */ reduceState),
/* harmony export */   resultMemoize: () => (/* binding */ resultMemoize),
/* harmony export */   select: () => (/* binding */ select),
/* harmony export */   setNgrxMockEnvironment: () => (/* binding */ setNgrxMockEnvironment),
/* harmony export */   union: () => (/* binding */ union)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5842);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5424);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 3927);





const REGISTERED_ACTION_TYPES = {};
function resetRegisteredActionTypes() {
  for (const key of Object.keys(REGISTERED_ACTION_TYPES)) {
    delete REGISTERED_ACTION_TYPES[key];
  }
}

/**
 * @description
 * Creates a configured `Creator` function that, when called, returns an object in the shape of the `Action` interface.
 *
 * Action creators reduce the explicitness of class-based action creators.
 *
 * @param type Describes the action that will be dispatched
 * @param config Additional metadata needed for the handling of the action.  See {@link createAction#usage-notes Usage Notes}.
 *
 * @usageNotes
 *
 * **Declaring an action creator**
 *
 * Without additional metadata:
 * ```ts
 * export const increment = createAction('[Counter] Increment');
 * ```
 * With additional metadata:
 * ```ts
 * export const loginSuccess = createAction(
 *   '[Auth/API] Login Success',
 *   props<{ user: User }>()
 * );
 * ```
 * With a function:
 * ```ts
 * export const loginSuccess = createAction(
 *   '[Auth/API] Login Success',
 *   (response: Response) => response.user
 * );
 * ```
 *
 * **Dispatching an action**
 *
 * Without additional metadata:
 * ```ts
 * store.dispatch(increment());
 * ```
 * With additional metadata:
 * ```ts
 * store.dispatch(loginSuccess({ user: newUser }));
 * ```
 *
 * **Referencing an action in a reducer**
 *
 * Using a switch statement:
 * ```ts
 * switch (action.type) {
 *   // ...
 *   case AuthApiActions.loginSuccess.type: {
 *     return {
 *       ...state,
 *       user: action.user
 *     };
 *   }
 * }
 * ```
 * Using a reducer creator:
 * ```ts
 * on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
 * ```
 *
 *  **Referencing an action in an effect**
 * ```ts
 * effectName$ = createEffect(
 *   () => this.actions$.pipe(
 *     ofType(AuthApiActions.loginSuccess),
 *     // ...
 *   )
 * );
 * ```
 */
function createAction(type, config) {
  REGISTERED_ACTION_TYPES[type] = (REGISTERED_ACTION_TYPES[type] || 0) + 1;
  if (typeof config === 'function') {
    return defineType(type, (...args) => ({
      ...config(...args),
      type
    }));
  }
  const as = config ? config._as : 'empty';
  switch (as) {
    case 'empty':
      return defineType(type, () => ({
        type
      }));
    case 'props':
      return defineType(type, props => ({
        ...props,
        type
      }));
    default:
      throw new Error('Unexpected config.');
  }
}
function props() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return {
    _as: 'props',
    _p: undefined
  };
}
function union(creators) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return undefined;
}
function defineType(type, creator) {
  return Object.defineProperty(creator, 'type', {
    value: type,
    writable: false
  });
}
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.substring(1);
}
function uncapitalize(text) {
  return text.charAt(0).toLowerCase() + text.substring(1);
}
function assertDefined(value, name) {
  if (value === null || value === undefined) {
    throw new Error(`${name} must be defined.`);
  }
}

/**
 * @description
 * A function that creates a group of action creators with the same source.
 *
 * @param config An object that contains a source and dictionary of events.
 * An event is a key-value pair of an event name and event props.
 * @returns A dictionary of action creators.
 * The name of each action creator is created by camel casing the event name.
 * The type of each action is created using the "[Source] Event Name" pattern.
 *
 * @usageNotes
 *
 * ```ts
 * const authApiActions = createActionGroup({
 *   source: 'Auth API',
 *   events: {
 *     // defining events with payload using the `props` function
 *     'Login Success': props<{ userId: number; token: string }>(),
 *     'Login Failure': props<{ error: string }>(),
 *
 *     // defining an event without payload using the `emptyProps` function
 *     'Logout Success': emptyProps(),
 *
 *     // defining an event with payload using the props factory
 *     'Logout Failure': (error: Error) => ({ error }),
 *   },
 * });
 *
 * // action type: "[Auth API] Login Success"
 * authApiActions.loginSuccess({ userId: 10, token: 'ngrx' });
 *
 * // action type: "[Auth API] Login Failure"
 * authApiActions.loginFailure({ error: 'Login Failure!' });
 *
 * // action type: "[Auth API] Logout Success"
 * authApiActions.logoutSuccess();
 *
 * // action type: "[Auth API] Logout Failure";
 * authApiActions.logoutFailure(new Error('Logout Failure!'));
 * ```
 */
function createActionGroup(config) {
  const {
    source,
    events
  } = config;
  return Object.keys(events).reduce((actionGroup, eventName) => ({
    ...actionGroup,
    [toActionName(eventName)]: createAction(toActionType(source, eventName), events[eventName])
  }), {});
}
function emptyProps() {
  return props();
}
function toActionName(eventName) {
  return eventName.trim().split(' ').map((word, i) => i === 0 ? uncapitalize(word) : capitalize(word)).join('');
}
function toActionType(source, eventName) {
  return `[${source}] ${eventName}`;
}
const INIT = '@ngrx/store/init';
class ActionsSubject extends rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject {
  constructor() {
    super({
      type: INIT
    });
  }
  next(action) {
    if (typeof action === 'function') {
      throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);
    } else if (typeof action === 'undefined') {
      throw new TypeError(`Actions must be objects`);
    } else if (typeof action.type === 'undefined') {
      throw new TypeError(`Actions must have a type property`);
    }
    super.next(action);
  }
  complete() {
    /* noop */
  }
  ngOnDestroy() {
    super.complete();
  }
  /** @nocollapse */
  static {
    this.ɵfac = function ActionsSubject_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ActionsSubject)();
    };
  }
  /** @nocollapse */
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ActionsSubject,
      factory: ActionsSubject.ɵfac
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionsSubject, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [], null);
})();
const ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];
const _ROOT_STORE_GUARD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Root Guard');
const _INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Initial State');
const INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Initial State');
const REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Reducer Factory');
const _REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Reducer Factory Provider');
const INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Initial Reducers');
const _INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Initial Reducers');
const STORE_FEATURES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Store Features');
const _STORE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Store Reducers');
const _FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Feature Reducers');
const _FEATURE_CONFIGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Feature Configs');
const _STORE_FEATURES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Store Features');
const _FEATURE_REDUCERS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Feature Reducers Token');
const FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Feature Reducers');
/**
 * User-defined meta reducers from StoreModule.forRoot()
 */
const USER_PROVIDED_META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store User Provided Meta Reducers');
/**
 * Meta reducers defined either internally by @ngrx/store or by library authors
 */
const META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Meta Reducers');
/**
 * Concats the user provided meta reducers and the meta reducers provided on the multi
 * injection token
 */
const _RESOLVED_META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Resolved Meta Reducers');
/**
 * Runtime checks defined by the user via an InjectionToken
 * Defaults to `_USER_RUNTIME_CHECKS`
 */
const USER_RUNTIME_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store User Runtime Checks Config');
/**
 * Runtime checks defined by the user via forRoot()
 */
const _USER_RUNTIME_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal User Runtime Checks Config');
/**
 * Runtime checks currently in use
 */
const ACTIVE_RUNTIME_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Internal Runtime Checks');
const _ACTION_TYPE_UNIQUENESS_CHECK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Check if Action types are unique');
/**
 * InjectionToken that registers the global Store.
 * Mainly used to provide a hook that can be injected
 * to ensure the root state is loaded before something
 * that depends on it.
 */
const ROOT_STORE_PROVIDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Root Store Provider');
/**
 * InjectionToken that registers feature states.
 * Mainly used to provide a hook that can be injected
 * to ensure feature state is loaded before something
 * that depends on it.
 */
const FEATURE_STATE_PROVIDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store Feature State Provider');

/**
 * @description
 * Combines reducers for individual features into a single reducer.
 *
 * You can use this function to delegate handling of state transitions to multiple reducers, each acting on their
 * own sub-state within the root state.
 *
 * @param reducers An object mapping keys of the root state to their corresponding feature reducer.
 * @param initialState Provides a state value if the current state is `undefined`, as it is initially.
 * @returns A reducer function.
 *
 * @usageNotes
 *
 * **Example combining two feature reducers into one "root" reducer**
 *
 * ```ts
 * export const reducer = combineReducers({
 *   featureA: featureAReducer,
 *   featureB: featureBReducer
 * });
 * ```
 *
 * You can also override the initial states of the sub-features:
 * ```ts
 * export const reducer = combineReducers({
 *   featureA: featureAReducer,
 *   featureB: featureBReducer
 * }, {
 *   featureA: { counterA: 13 },
 *   featureB: { counterB: 37 }
 * });
 * ```
 */
function combineReducers(reducers, initialState = {}) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  return function combination(state, action) {
    state = state === undefined ? initialState : state;
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
function omit(object, keyToRemove) {
  return Object.keys(object).filter(key => key !== keyToRemove).reduce((result, key) => Object.assign(result, {
    [key]: object[key]
  }), {});
}
function compose(...functions) {
  return function (arg) {
    if (functions.length === 0) {
      return arg;
    }
    const last = functions[functions.length - 1];
    const rest = functions.slice(0, -1);
    return rest.reduceRight((composed, fn) => fn(composed), last(arg));
  };
}
function createReducerFactory(reducerFactory, metaReducers) {
  if (Array.isArray(metaReducers) && metaReducers.length > 0) {
    reducerFactory = compose.apply(null, [...metaReducers, reducerFactory]);
  }
  return (reducers, initialState) => {
    const reducer = reducerFactory(reducers);
    return (state, action) => {
      state = state === undefined ? initialState : state;
      return reducer(state, action);
    };
  };
}
function createFeatureReducerFactory(metaReducers) {
  const reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0 ? compose(...metaReducers) : r => r;
  return (reducer, initialState) => {
    reducer = reducerFactory(reducer);
    return (state, action) => {
      state = state === undefined ? initialState : state;
      return reducer(state, action);
    };
  };
}
class ReducerObservable extends rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable {}
class ReducerManagerDispatcher extends ActionsSubject {}
const UPDATE = '@ngrx/store/update-reducers';
class ReducerManager extends rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject {
  get currentReducers() {
    return this.reducers;
  }
  constructor(dispatcher, initialState, reducers, reducerFactory) {
    super(reducerFactory(reducers, initialState));
    this.dispatcher = dispatcher;
    this.initialState = initialState;
    this.reducers = reducers;
    this.reducerFactory = reducerFactory;
  }
  addFeature(feature) {
    this.addFeatures([feature]);
  }
  addFeatures(features) {
    const reducers = features.reduce((reducerDict, {
      reducers,
      reducerFactory,
      metaReducers,
      initialState,
      key
    }) => {
      const reducer = typeof reducers === 'function' ? createFeatureReducerFactory(metaReducers)(reducers, initialState) : createReducerFactory(reducerFactory, metaReducers)(reducers, initialState);
      reducerDict[key] = reducer;
      return reducerDict;
    }, {});
    this.addReducers(reducers);
  }
  removeFeature(feature) {
    this.removeFeatures([feature]);
  }
  removeFeatures(features) {
    this.removeReducers(features.map(p => p.key));
  }
  addReducer(key, reducer) {
    this.addReducers({
      [key]: reducer
    });
  }
  addReducers(reducers) {
    this.reducers = {
      ...this.reducers,
      ...reducers
    };
    this.updateReducers(Object.keys(reducers));
  }
  removeReducer(featureKey) {
    this.removeReducers([featureKey]);
  }
  removeReducers(featureKeys) {
    featureKeys.forEach(key => {
      this.reducers = omit(this.reducers, key) /*TODO(#823)*/;
    });
    this.updateReducers(featureKeys);
  }
  updateReducers(featureKeys) {
    this.next(this.reducerFactory(this.reducers, this.initialState));
    this.dispatcher.next({
      type: UPDATE,
      features: featureKeys
    });
  }
  ngOnDestroy() {
    this.complete();
  }
  /** @nocollapse */
  static {
    this.ɵfac = function ReducerManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReducerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ReducerManagerDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](INITIAL_STATE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](INITIAL_REDUCERS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](REDUCER_FACTORY));
    };
  }
  /** @nocollapse */
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ReducerManager,
      factory: ReducerManager.ɵfac
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReducerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: ReducerManagerDispatcher
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [INITIAL_STATE]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [INITIAL_REDUCERS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [REDUCER_FACTORY]
    }]
  }], null);
})();
const REDUCER_MANAGER_PROVIDERS = [ReducerManager, {
  provide: ReducerObservable,
  useExisting: ReducerManager
}, {
  provide: ReducerManagerDispatcher,
  useExisting: ActionsSubject
}];
class ScannedActionsSubject extends rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject {
  ngOnDestroy() {
    this.complete();
  }
  /** @nocollapse */
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵScannedActionsSubject_BaseFactory;
      return function ScannedActionsSubject_Factory(__ngFactoryType__) {
        return (ɵScannedActionsSubject_BaseFactory || (ɵScannedActionsSubject_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ScannedActionsSubject)))(__ngFactoryType__ || ScannedActionsSubject);
      };
    })();
  }
  /** @nocollapse */
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScannedActionsSubject,
      factory: ScannedActionsSubject.ɵfac
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScannedActionsSubject, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const SCANNED_ACTIONS_SUBJECT_PROVIDERS = [ScannedActionsSubject];
class StateObservable extends rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable {}
class State extends rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject {
  static {
    this.INIT = INIT;
  }
  constructor(actions$, reducer$, scannedActions, initialState) {
    super(initialState);
    const actionsOnQueue$ = actions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_6__.queueScheduler));
    const withLatestReducer$ = actionsOnQueue$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(reducer$));
    const seed = {
      state: initialState
    };
    const stateAndAction$ = withLatestReducer$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.scan)(reduceState, seed));
    this.stateSubscription = stateAndAction$.subscribe(({
      state,
      action
    }) => {
      this.next(state);
      scannedActions.next(action);
    });
    this.state = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toSignal)(this, {
      manualCleanup: true,
      requireSync: true
    });
  }
  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
    this.complete();
  }
  /** @nocollapse */
  static {
    this.ɵfac = function State_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || State)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ActionsSubject), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ReducerObservable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScannedActionsSubject), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](INITIAL_STATE));
    };
  }
  /** @nocollapse */
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: State,
      factory: State.ɵfac
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](State, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: ScannedActionsSubject
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [INITIAL_STATE]
    }]
  }], null);
})();
function reduceState(stateActionPair = {
  state: undefined
}, [action, reducer]) {
  const {
    state
  } = stateActionPair;
  return {
    state: reducer(state, action),
    action
  };
}
const STATE_PROVIDERS = [State, {
  provide: StateObservable,
  useExisting: State
}];

// disabled because we have lowercase generics for `select`
class Store extends rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable {
  constructor(state$, actionsObserver, reducerManager, injector) {
    super();
    this.actionsObserver = actionsObserver;
    this.reducerManager = reducerManager;
    this.injector = injector;
    this.source = state$;
    this.state = state$.state;
  }
  select(pathOrMapFn, ...paths) {
    return select.call(null, pathOrMapFn, ...paths)(this);
  }
  /**
   * Returns a signal of the provided selector.
   *
   * @param selector selector function
   * @param options select signal options
   */
  selectSignal(selector, options) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => selector(this.state()), options);
  }
  lift(operator) {
    const store = new Store(this, this.actionsObserver, this.reducerManager);
    store.operator = operator;
    return store;
  }
  dispatch(actionOrDispatchFn, config) {
    if (typeof actionOrDispatchFn === 'function') {
      return this.processDispatchFn(actionOrDispatchFn, config);
    }
    this.actionsObserver.next(actionOrDispatchFn);
  }
  next(action) {
    this.actionsObserver.next(action);
  }
  error(err) {
    this.actionsObserver.error(err);
  }
  complete() {
    this.actionsObserver.complete();
  }
  addReducer(key, reducer) {
    this.reducerManager.addReducer(key, reducer);
  }
  removeReducer(key) {
    this.reducerManager.removeReducer(key);
  }
  processDispatchFn(dispatchFn, config) {
    assertDefined(this.injector, 'Store Injector');
    const effectInjector = config?.injector ?? getCallerInjector() ?? this.injector;
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      const action = dispatchFn();
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => this.dispatch(action));
    }, {
      injector: effectInjector
    });
  }
  /** @nocollapse */
  static {
    this.ɵfac = function Store_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Store)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StateObservable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ActionsSubject), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ReducerManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
    };
  }
  /** @nocollapse */
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Store,
      factory: Store.ɵfac
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Store, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: StateObservable
  }, {
    type: ActionsSubject
  }, {
    type: ReducerManager
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
  }], null);
})();
const STORE_PROVIDERS = [Store];
function select(pathOrMapFn, propsOrPath, ...paths) {
  return function selectOperator(source$) {
    let mapped$;
    if (typeof pathOrMapFn === 'string') {
      const pathSlices = [propsOrPath, ...paths].filter(Boolean);
      mapped$ = source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.pluck)(pathOrMapFn, ...pathSlices));
    } else if (typeof pathOrMapFn === 'function') {
      mapped$ = source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(source => pathOrMapFn(source, propsOrPath)));
    } else {
      throw new TypeError(`Unexpected type '${typeof pathOrMapFn}' in select operator,` + ` expected 'string' or 'function'`);
    }
    return mapped$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)());
  };
}
function getCallerInjector() {
  try {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  } catch (_) {
    return undefined;
  }
}
const RUNTIME_CHECK_URL = 'https://ngrx.io/guide/store/configuration/runtime-checks';
function isUndefined(target) {
  return target === undefined;
}
function isNull(target) {
  return target === null;
}
function isArray(target) {
  return Array.isArray(target);
}
function isString(target) {
  return typeof target === 'string';
}
function isBoolean(target) {
  return typeof target === 'boolean';
}
function isNumber(target) {
  return typeof target === 'number';
}
function isObjectLike(target) {
  return typeof target === 'object' && target !== null;
}
function isObject(target) {
  return isObjectLike(target) && !isArray(target);
}
function isPlainObject(target) {
  if (!isObject(target)) {
    return false;
  }
  const targetPrototype = Object.getPrototypeOf(target);
  return targetPrototype === Object.prototype || targetPrototype === null;
}
function isFunction(target) {
  return typeof target === 'function';
}
function isComponent(target) {
  return isFunction(target) && target.hasOwnProperty('ɵcmp');
}
function hasOwnProperty(target, propertyName) {
  return Object.prototype.hasOwnProperty.call(target, propertyName);
}
let _ngrxMockEnvironment = false;
function setNgrxMockEnvironment(value) {
  _ngrxMockEnvironment = value;
}
function isNgrxMockEnvironment() {
  return _ngrxMockEnvironment;
}
function isEqualCheck(a, b) {
  return a === b;
}
function isArgumentsChanged(args, lastArguments, comparator) {
  for (let i = 0; i < args.length; i++) {
    if (!comparator(args[i], lastArguments[i])) {
      return true;
    }
  }
  return false;
}
function resultMemoize(projectionFn, isResultEqual) {
  return defaultMemoize(projectionFn, isEqualCheck, isResultEqual);
}
function defaultMemoize(projectionFn, isArgumentsEqual = isEqualCheck, isResultEqual = isEqualCheck) {
  let lastArguments = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, , , , ,
  let lastResult = null;
  let overrideResult;
  function reset() {
    lastArguments = null;
    lastResult = null;
  }
  function setResult(result = undefined) {
    overrideResult = {
      result
    };
  }
  function clearResult() {
    overrideResult = undefined;
  }
  /* eslint-disable prefer-rest-params, prefer-spread */
  // disabled because of the use of `arguments`
  function memoized() {
    if (overrideResult !== undefined) {
      return overrideResult.result;
    }
    if (!lastArguments) {
      lastResult = projectionFn.apply(null, arguments);
      lastArguments = arguments;
      return lastResult;
    }
    if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
      return lastResult;
    }
    const newResult = projectionFn.apply(null, arguments);
    lastArguments = arguments;
    if (isResultEqual(lastResult, newResult)) {
      return lastResult;
    }
    lastResult = newResult;
    return newResult;
  }
  return {
    memoized,
    reset,
    setResult,
    clearResult
  };
}
function createSelector(...input) {
  return createSelectorFactory(defaultMemoize)(...input);
}
function defaultStateFn(state, selectors, props, memoizedProjector) {
  if (props === undefined) {
    const args = selectors.map(fn => fn(state));
    return memoizedProjector.memoized.apply(null, args);
  }
  const args = selectors.map(fn => fn(state, props));
  return memoizedProjector.memoized.apply(null, [...args, props]);
}
/**
 *
 * @param memoize The function used to memoize selectors
 * @param options Config Object that may include a `stateFn` function defining how to return the selector's value, given the entire `Store`'s state, parent `Selector`s, `Props`, and a `MemoizedProjection`
 *
 * @usageNotes
 *
 * **Creating a Selector Factory Where Array Order Does Not Matter**
 *
 * ```ts
 * function removeMatch(arr: string[], target: string): string[] {
 *   const matchIndex = arr.indexOf(target);
 *   return [...arr.slice(0, matchIndex), ...arr.slice(matchIndex + 1)];
 * }
 *
 * function orderDoesNotMatterComparer(a: any, b: any): boolean {
 *   if (!Array.isArray(a) || !Array.isArray(b)) {
 *     return a === b;
 *   }
 *   if (a.length !== b.length) {
 *     return false;
 *   }
 *   let tempB = [...b];
 *   function reduceToDetermineIfArraysContainSameContents(
 *     previousCallResult: boolean,
 *     arrayMember: any
 *   ): boolean {
 *     if (previousCallResult === false) {
 *       return false;
 *     }
 *     if (tempB.includes(arrayMember)) {
 *       tempB = removeMatch(tempB, arrayMember);
 *       return true;
 *     }
 *     return false;
 *   }
 *   return a.reduce(reduceToDetermineIfArraysContainSameContents, true);
 * }
 *
 * export const createOrderDoesNotMatterSelector = createSelectorFactory(
 *   (projectionFun) => defaultMemoize(
 *     projectionFun,
 *     orderDoesNotMatterComparer,
 *     orderDoesNotMatterComparer
 *   )
 * );
 * ```
 *
 * **Creating an Alternative Memoization Strategy**
 *
 * ```ts
 * function serialize(x: any): string {
 *   return JSON.stringify(x);
 * }
 *
 * export const createFullHistorySelector = createSelectorFactory(
 *  (projectionFunction) => {
 *    const cache = {};
 *
 *    function memoized() {
 *      const serializedArguments = serialize(...arguments);
 *       if (cache[serializedArguments] != null) {
 *         cache[serializedArguments] = projectionFunction.apply(null, arguments);
 *       }
 *       return cache[serializedArguments];
 *     }
 *     return {
 *       memoized,
 *       reset: () => {},
 *       setResult: () => {},
 *       clearResult: () => {},
 *     };
 *   }
 * );
 * ```
 */
function createSelectorFactory(memoize, options = {
  stateFn: defaultStateFn
}) {
  return function (...input) {
    let args = input;
    if (Array.isArray(args[0])) {
      const [head, ...tail] = args;
      args = [...head, ...tail];
    } else if (args.length === 1 && isSelectorsDictionary(args[0])) {
      args = extractArgsFromSelectorsDictionary(args[0]);
    }
    const selectors = args.slice(0, args.length - 1);
    const projector = args[args.length - 1];
    const memoizedSelectors = selectors.filter(selector => selector.release && typeof selector.release === 'function');
    const memoizedProjector = memoize(function (...selectors) {
      return projector.apply(null, selectors);
    });
    const memoizedState = defaultMemoize(function (state, props) {
      return options.stateFn.apply(null, [state, selectors, props, memoizedProjector]);
    });
    function release() {
      memoizedState.reset();
      memoizedProjector.reset();
      memoizedSelectors.forEach(selector => selector.release());
    }
    return Object.assign(memoizedState.memoized, {
      release,
      projector: memoizedProjector.memoized,
      setResult: memoizedState.setResult,
      clearResult: memoizedState.clearResult
    });
  };
}
function createFeatureSelector(featureName) {
  return createSelector(state => {
    const featureState = state[featureName];
    if (!isNgrxMockEnvironment() && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() && !(featureName in state)) {
      console.warn(`@ngrx/store: The feature name "${featureName}" does ` + 'not exist in the state, therefore createFeatureSelector ' + 'cannot access it.  Be sure it is imported in a loaded module ' + `using StoreModule.forRoot('${featureName}', ...) or ` + `StoreModule.forFeature('${featureName}', ...).  If the default ` + 'state is intended to be undefined, as is the case with router ' + 'state, this development-only warning message can be ignored.');
    }
    return featureState;
  }, featureState => featureState);
}
function isSelectorsDictionary(selectors) {
  return !!selectors && typeof selectors === 'object' && Object.values(selectors).every(selector => typeof selector === 'function');
}
function extractArgsFromSelectorsDictionary(selectorsDictionary) {
  const selectors = Object.values(selectorsDictionary);
  const resultKeys = Object.keys(selectorsDictionary);
  const projector = (...selectorResults) => resultKeys.reduce((result, key, index) => ({
    ...result,
    [key]: selectorResults[index]
  }), {});
  return [...selectors, projector];
}

/**
 * @description
 * A function that accepts a feature name and a feature reducer, and creates
 * a feature selector and a selector for each feature state property.
 * This function also provides the ability to add extra selectors to
 * the feature object.
 *
 * @param featureConfig An object that contains a feature name and a feature
 * reducer as required, and extra selectors factory as an optional argument.
 * @returns An object that contains a feature name, a feature reducer,
 * a feature selector, a selector for each feature state property, and extra
 * selectors.
 *
 * @usageNotes
 *
 * ```ts
 * interface ProductsState {
 *   products: Product[];
 *   selectedId: string | null;
 * }
 *
 * const initialState: ProductsState = {
 *   products: [],
 *   selectedId: null,
 * };
 *
 * const productsFeature = createFeature({
 *   name: 'products',
 *   reducer: createReducer(
 *     initialState,
 *     on(ProductsApiActions.loadSuccess(state, { products }) => ({
 *       ...state,
 *       products,
 *     }),
 *   ),
 * });
 *
 * const {
 *   name,
 *   reducer,
 *   // feature selector
 *   selectProductsState, // type: MemoizedSelector<Record<string, any>, ProductsState>
 *   // feature state properties selectors
 *   selectProducts, // type: MemoizedSelector<Record<string, any>, Product[]>
 *   selectSelectedId, // type: MemoizedSelector<Record<string, any>, string | null>
 * } = productsFeature;
 * ```
 *
 * **Creating Feature with Extra Selectors**
 *
 * ```ts
 * type CallState = 'init' | 'loading' | 'loaded' | { error: string };
 *
 * interface State extends EntityState<Product> {
 *   callState: CallState;
 * }
 *
 * const adapter = createEntityAdapter<Product>();
 * const initialState: State = adapter.getInitialState({
 *   callState: 'init',
 * });
 *
 * export const productsFeature = createFeature({
 *   name: 'products',
 *   reducer: createReducer(initialState),
 *   extraSelectors: ({ selectProductsState, selectCallState }) => ({
 *     ...adapter.getSelectors(selectProductsState),
 *     ...getCallStateSelectors(selectCallState)
 *   }),
 * });
 *
 * const {
 *   name,
 *   reducer,
 *   // feature selector
 *   selectProductsState,
 *   // feature state properties selectors
 *   selectIds,
 *   selectEntities,
 *   selectCallState,
 *   // selectors returned by `adapter.getSelectors`
 *   selectAll,
 *   selectTotal,
 *   // selectors returned by `getCallStateSelectors`
 *   selectIsLoading,
 *   selectIsLoaded,
 *   selectError,
 * } = productsFeature;
 * ```
 */
function createFeature(featureConfig) {
  const {
    name,
    reducer,
    extraSelectors: extraSelectorsFactory
  } = featureConfig;
  const featureSelector = createFeatureSelector(name);
  const nestedSelectors = createNestedSelectors(featureSelector, reducer);
  const baseSelectors = {
    [`select${capitalize(name)}State`]: featureSelector,
    ...nestedSelectors
  };
  const extraSelectors = extraSelectorsFactory ? extraSelectorsFactory(baseSelectors) : {};
  return {
    name,
    reducer,
    ...baseSelectors,
    ...extraSelectors
  };
}
function createNestedSelectors(featureSelector, reducer) {
  const initialState = getInitialState(reducer);
  const nestedKeys = isPlainObject(initialState) ? Object.keys(initialState) : [];
  return nestedKeys.reduce((nestedSelectors, nestedKey) => ({
    ...nestedSelectors,
    [`select${capitalize(nestedKey)}`]: createSelector(featureSelector, parentState => parentState?.[nestedKey])
  }), {});
}
function getInitialState(reducer) {
  return reducer(undefined, {
    type: '@ngrx/feature/init'
  });
}
function _createStoreReducers(reducers) {
  return reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken ? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(reducers) : reducers;
}
function _createFeatureStore(configs, featureStores) {
  return featureStores.map((feat, index) => {
    if (configs[index] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken) {
      const conf = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(configs[index]);
      return {
        key: feat.key,
        reducerFactory: conf.reducerFactory ? conf.reducerFactory : combineReducers,
        metaReducers: conf.metaReducers ? conf.metaReducers : [],
        initialState: conf.initialState
      };
    }
    return feat;
  });
}
function _createFeatureReducers(reducerCollection) {
  return reducerCollection.map(reducer => {
    return reducer instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken ? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(reducer) : reducer;
  });
}
function _initialStateFactory(initialState) {
  if (typeof initialState === 'function') {
    return initialState();
  }
  return initialState;
}
function _concatMetaReducers(metaReducers, userProvidedMetaReducers) {
  return metaReducers.concat(userProvidedMetaReducers);
}
function _provideForRootGuard() {
  const store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(Store, {
    optional: true,
    skipSelf: true
  });
  if (store) {
    throw new TypeError(`The root Store has been provided more than once. Feature modules should provide feature states instead.`);
  }
  return 'guarded';
}
function immutabilityCheckMetaReducer(reducer, checks) {
  return function (state, action) {
    const act = checks.action(action) ? freeze(action) : action;
    const nextState = reducer(state, act);
    return checks.state() ? freeze(nextState) : nextState;
  };
}
function freeze(target) {
  Object.freeze(target);
  const targetIsFunction = isFunction(target);
  Object.getOwnPropertyNames(target).forEach(prop => {
    // Ignore Ivy properties, ref: https://github.com/ngrx/platform/issues/2109#issuecomment-582689060
    if (prop.startsWith('ɵ')) {
      return;
    }
    if (hasOwnProperty(target, prop) && (targetIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true)) {
      const propValue = target[prop];
      if ((isObjectLike(propValue) || isFunction(propValue)) && !Object.isFrozen(propValue)) {
        freeze(propValue);
      }
    }
  });
  return target;
}
function serializationCheckMetaReducer(reducer, checks) {
  return function (state, action) {
    if (checks.action(action)) {
      const unserializableAction = getUnserializable(action);
      throwIfUnserializable(unserializableAction, 'action');
    }
    const nextState = reducer(state, action);
    if (checks.state()) {
      const unserializableState = getUnserializable(nextState);
      throwIfUnserializable(unserializableState, 'state');
    }
    return nextState;
  };
}
function getUnserializable(target, path = []) {
  // Guard against undefined and null, e.g. a reducer that returns undefined
  if ((isUndefined(target) || isNull(target)) && path.length === 0) {
    return {
      path: ['root'],
      value: target
    };
  }
  const keys = Object.keys(target);
  return keys.reduce((result, key) => {
    if (result) {
      return result;
    }
    const value = target[key];
    // Ignore Ivy components
    if (isComponent(value)) {
      return result;
    }
    if (isUndefined(value) || isNull(value) || isNumber(value) || isBoolean(value) || isString(value) || isArray(value)) {
      return false;
    }
    if (isPlainObject(value)) {
      return getUnserializable(value, [...path, key]);
    }
    return {
      path: [...path, key],
      value
    };
  }, false);
}
function throwIfUnserializable(unserializable, context) {
  if (unserializable === false) {
    return;
  }
  const unserializablePath = unserializable.path.join('.');
  const error = new Error(`Detected unserializable ${context} at "${unserializablePath}". ${RUNTIME_CHECK_URL}#strict${context}serializability`);
  error.value = unserializable.value;
  error.unserializablePath = unserializablePath;
  throw error;
}
function inNgZoneAssertMetaReducer(reducer, checks) {
  return function (state, action) {
    if (checks.action(action) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone.isInAngularZone()) {
      throw new Error(`Action '${action.type}' running outside NgZone. ${RUNTIME_CHECK_URL}#strictactionwithinngzone`);
    }
    return reducer(state, action);
  };
}
function createActiveRuntimeChecks(runtimeChecks) {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
    return {
      strictStateSerializability: false,
      strictActionSerializability: false,
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictActionWithinNgZone: false,
      strictActionTypeUniqueness: false,
      ...runtimeChecks
    };
  }
  return {
    strictStateSerializability: false,
    strictActionSerializability: false,
    strictStateImmutability: false,
    strictActionImmutability: false,
    strictActionWithinNgZone: false,
    strictActionTypeUniqueness: false
  };
}
function createSerializationCheckMetaReducer({
  strictActionSerializability,
  strictStateSerializability
}) {
  return reducer => strictActionSerializability || strictStateSerializability ? serializationCheckMetaReducer(reducer, {
    action: action => strictActionSerializability && !ignoreNgrxAction(action),
    state: () => strictStateSerializability
  }) : reducer;
}
function createImmutabilityCheckMetaReducer({
  strictActionImmutability,
  strictStateImmutability
}) {
  return reducer => strictActionImmutability || strictStateImmutability ? immutabilityCheckMetaReducer(reducer, {
    action: action => strictActionImmutability && !ignoreNgrxAction(action),
    state: () => strictStateImmutability
  }) : reducer;
}
function ignoreNgrxAction(action) {
  return action.type.startsWith('@ngrx');
}
function createInNgZoneCheckMetaReducer({
  strictActionWithinNgZone
}) {
  return reducer => strictActionWithinNgZone ? inNgZoneAssertMetaReducer(reducer, {
    action: action => strictActionWithinNgZone && !ignoreNgrxAction(action)
  }) : reducer;
}
function provideRuntimeChecks(runtimeChecks) {
  return [{
    provide: _USER_RUNTIME_CHECKS,
    useValue: runtimeChecks
  }, {
    provide: USER_RUNTIME_CHECKS,
    useFactory: _runtimeChecksFactory,
    deps: [_USER_RUNTIME_CHECKS]
  }, {
    provide: ACTIVE_RUNTIME_CHECKS,
    deps: [USER_RUNTIME_CHECKS],
    useFactory: createActiveRuntimeChecks
  }, {
    provide: META_REDUCERS,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: createImmutabilityCheckMetaReducer
  }, {
    provide: META_REDUCERS,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: createSerializationCheckMetaReducer
  }, {
    provide: META_REDUCERS,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: createInNgZoneCheckMetaReducer
  }];
}
function checkForActionTypeUniqueness() {
  return [{
    provide: _ACTION_TYPE_UNIQUENESS_CHECK,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: _actionTypeUniquenessCheck
  }];
}
function _runtimeChecksFactory(runtimeChecks) {
  return runtimeChecks;
}
function _actionTypeUniquenessCheck(config) {
  if (!config.strictActionTypeUniqueness) {
    return;
  }
  const duplicates = Object.entries(REGISTERED_ACTION_TYPES).filter(([, registrations]) => registrations > 1).map(([type]) => type);
  if (duplicates.length) {
    throw new Error(`Action types are registered more than once, ${duplicates.map(type => `"${type}"`).join(', ')}. ${RUNTIME_CHECK_URL}#strictactiontypeuniqueness`);
  }
}

/**
 * Provides additional slices of state in the Store.
 * These providers cannot be used at the component level.
 *
 * @usageNotes
 *
 * ### Providing Store Features
 *
 * ```ts
 * const booksRoutes: Route[] = [
 *   {
 *     path: '',
 *     providers: [provideState('books', booksReducer)],
 *     children: [
 *       { path: '', component: BookListComponent },
 *       { path: ':id', component: BookDetailsComponent },
 *     ],
 *   },
 * ];
 * ```
 */
function provideState(featureNameOrSlice, reducers, config = {}) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([..._provideState(featureNameOrSlice, reducers, config), ENVIRONMENT_STATE_PROVIDER]);
}
function _provideStore(reducers = {}, config = {}) {
  return [{
    provide: _ROOT_STORE_GUARD,
    useFactory: _provideForRootGuard
  }, {
    provide: _INITIAL_STATE,
    useValue: config.initialState
  }, {
    provide: INITIAL_STATE,
    useFactory: _initialStateFactory,
    deps: [_INITIAL_STATE]
  }, {
    provide: _INITIAL_REDUCERS,
    useValue: reducers
  }, {
    provide: _STORE_REDUCERS,
    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken ? reducers : _INITIAL_REDUCERS
  }, {
    provide: INITIAL_REDUCERS,
    deps: [_INITIAL_REDUCERS, [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject(_STORE_REDUCERS)]],
    useFactory: _createStoreReducers
  }, {
    provide: USER_PROVIDED_META_REDUCERS,
    useValue: config.metaReducers ? config.metaReducers : []
  }, {
    provide: _RESOLVED_META_REDUCERS,
    deps: [META_REDUCERS, USER_PROVIDED_META_REDUCERS],
    useFactory: _concatMetaReducers
  }, {
    provide: _REDUCER_FACTORY,
    useValue: config.reducerFactory ? config.reducerFactory : combineReducers
  }, {
    provide: REDUCER_FACTORY,
    deps: [_REDUCER_FACTORY, _RESOLVED_META_REDUCERS],
    useFactory: createReducerFactory
  }, ACTIONS_SUBJECT_PROVIDERS, REDUCER_MANAGER_PROVIDERS, SCANNED_ACTIONS_SUBJECT_PROVIDERS, STATE_PROVIDERS, STORE_PROVIDERS, provideRuntimeChecks(config.runtimeChecks), checkForActionTypeUniqueness()];
}
function rootStoreProviderFactory() {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ActionsSubject);
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ReducerObservable);
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ScannedActionsSubject);
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(Store);
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ROOT_STORE_GUARD, {
    optional: true
  });
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ACTION_TYPE_UNIQUENESS_CHECK, {
    optional: true
  });
}
/**
 * Environment Initializer used in the root
 * providers to initialize the Store
 */
const ENVIRONMENT_STORE_PROVIDER = [{
  provide: ROOT_STORE_PROVIDER,
  useFactory: rootStoreProviderFactory
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ENVIRONMENT_INITIALIZER,
  multi: true,
  useFactory() {
    return () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ROOT_STORE_PROVIDER);
  }
}];
/**
 * Provides the global Store providers and initializes
 * the Store.
 * These providers cannot be used at the component level.
 *
 * @usageNotes
 *
 * ### Providing the Global Store
 *
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideStore()],
 * });
 * ```
 */
function provideStore(reducers, config) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([..._provideStore(reducers, config), ENVIRONMENT_STORE_PROVIDER]);
}
function featureStateProviderFactory() {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ROOT_STORE_PROVIDER);
  const features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_STORE_FEATURES);
  const featureReducers = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FEATURE_REDUCERS);
  const reducerManager = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ReducerManager);
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ACTION_TYPE_UNIQUENESS_CHECK, {
    optional: true
  });
  const feats = features.map((feature, index) => {
    const featureReducerCollection = featureReducers.shift();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const reducers = featureReducerCollection /*TODO(#823)*/[index];
    return {
      ...feature,
      reducers,
      initialState: _initialStateFactory(feature.initialState)
    };
  });
  reducerManager.addFeatures(feats);
}
/**
 * Environment Initializer used in the feature
 * providers to register state features
 */
const ENVIRONMENT_STATE_PROVIDER = [{
  provide: FEATURE_STATE_PROVIDER,
  useFactory: featureStateProviderFactory
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ENVIRONMENT_INITIALIZER,
  multi: true,
  useFactory() {
    return () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FEATURE_STATE_PROVIDER);
  }
}];
function _provideState(featureNameOrSlice, reducers, config = {}) {
  return [{
    provide: _FEATURE_CONFIGS,
    multi: true,
    useValue: featureNameOrSlice instanceof Object ? {} : config
  }, {
    provide: STORE_FEATURES,
    multi: true,
    useValue: {
      key: featureNameOrSlice instanceof Object ? featureNameOrSlice.name : featureNameOrSlice,
      reducerFactory: !(config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken) && config.reducerFactory ? config.reducerFactory : combineReducers,
      metaReducers: !(config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken) && config.metaReducers ? config.metaReducers : [],
      initialState: !(config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken) && config.initialState ? config.initialState : undefined
    }
  }, {
    provide: _STORE_FEATURES,
    deps: [_FEATURE_CONFIGS, STORE_FEATURES],
    useFactory: _createFeatureStore
  }, {
    provide: _FEATURE_REDUCERS,
    multi: true,
    useValue: featureNameOrSlice instanceof Object ? featureNameOrSlice.reducer : reducers
  }, {
    provide: _FEATURE_REDUCERS_TOKEN,
    multi: true,
    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken ? reducers : _FEATURE_REDUCERS
  }, {
    provide: FEATURE_REDUCERS,
    multi: true,
    deps: [_FEATURE_REDUCERS, [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject(_FEATURE_REDUCERS_TOKEN)]],
    useFactory: _createFeatureReducers
  }, checkForActionTypeUniqueness()];
}
class StoreRootModule {
  constructor(actions$, reducer$, scannedActions$, store, guard, actionCheck) {}
  /** @nocollapse */
  static {
    this.ɵfac = function StoreRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StoreRootModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ActionsSubject), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ReducerObservable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScannedActionsSubject), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Store), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ROOT_STORE_GUARD, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ACTION_TYPE_UNIQUENESS_CHECK, 8));
    };
  }
  /** @nocollapse */
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoreRootModule
    });
  }
  /** @nocollapse */
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreRootModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{}]
  }], () => [{
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: ScannedActionsSubject
  }, {
    type: Store
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_ROOT_STORE_GUARD]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_ACTION_TYPE_UNIQUENESS_CHECK]
    }]
  }], null);
})();
class StoreFeatureModule {
  constructor(features, featureReducers, reducerManager, root, actionCheck) {
    this.features = features;
    this.featureReducers = featureReducers;
    this.reducerManager = reducerManager;
    const feats = features.map((feature, index) => {
      const featureReducerCollection = featureReducers.shift();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const reducers = featureReducerCollection /*TODO(#823)*/[index];
      return {
        ...feature,
        reducers,
        initialState: _initialStateFactory(feature.initialState)
      };
    });
    reducerManager.addFeatures(feats);
  }
  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnDestroy() {
    this.reducerManager.removeFeatures(this.features);
  }
  /** @nocollapse */
  static {
    this.ɵfac = function StoreFeatureModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StoreFeatureModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_STORE_FEATURES), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FEATURE_REDUCERS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ReducerManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StoreRootModule), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ACTION_TYPE_UNIQUENESS_CHECK, 8));
    };
  }
  /** @nocollapse */
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoreFeatureModule
    });
  }
  /** @nocollapse */
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFeatureModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{}]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_STORE_FEATURES]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [FEATURE_REDUCERS]
    }]
  }, {
    type: ReducerManager
  }, {
    type: StoreRootModule
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_ACTION_TYPE_UNIQUENESS_CHECK]
    }]
  }], null);
})();
class StoreModule {
  static forRoot(reducers, config) {
    return {
      ngModule: StoreRootModule,
      providers: [..._provideStore(reducers, config)]
    };
  }
  static forFeature(featureNameOrSlice, reducers, config = {}) {
    return {
      ngModule: StoreFeatureModule,
      providers: [..._provideState(featureNameOrSlice, reducers, config)]
    };
  }
  /** @nocollapse */
  static {
    this.ɵfac = function StoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StoreModule)();
    };
  }
  /** @nocollapse */
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoreModule
    });
  }
  /** @nocollapse */
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{}]
  }], null, null);
})();

/**
 * @description
 * Associates actions with a given state change function.
 * A state change function must be provided as the last parameter.
 *
 * @param args `ActionCreator`'s followed by a state change function.
 *
 * @returns an association of action types with a state change function.
 *
 * @usageNotes
 * ```ts
 * on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
 * ```
 */
function on(...args) {
  const reducer = args.pop();
  const types = args.map(creator => creator.type);
  return {
    reducer,
    types
  };
}
/**
 * @description
 * Creates a reducer function to handle state transitions.
 *
 * Reducer creators reduce the explicitness of reducer functions with switch statements.
 *
 * @param initialState Provides a state value if the current state is `undefined`, as it is initially.
 * @param ons Associations between actions and state changes.
 * @returns A reducer function.
 *
 * @usageNotes
 *
 * - Must be used with `ActionCreator`'s (returned by `createAction`). Cannot be used with class-based action creators.
 * - The returned `ActionReducer` does not require being wrapped with another function.
 *
 * **Declaring a reducer creator**
 *
 * ```ts
 * export const reducer = createReducer(
 *   initialState,
 *   on(
 *     featureActions.actionOne,
 *     featureActions.actionTwo,
 *     (state, { updatedValue }) => ({ ...state, prop: updatedValue })
 *   ),
 *   on(featureActions.actionThree, () => initialState);
 * );
 * ```
 */
function createReducer(initialState, ...ons) {
  const map = new Map();
  for (const on of ons) {
    for (const type of on.types) {
      const existingReducer = map.get(type);
      if (existingReducer) {
        const newReducer = (state, action) => on.reducer(existingReducer(state, action), action);
        map.set(type, newReducer);
      } else {
        map.set(type, on.reducer);
      }
    }
  }
  return function (state = initialState, action) {
    const reducer = map.get(action.type);
    return reducer ? reducer(state, action) : state;
  };
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1817:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distinctUntilChanged: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/identity */ 1440);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__.identity) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}

/***/ }),

/***/ 1870:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/share.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   share: () => (/* binding */ share)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 819);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 9285);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 3200);




function share(options = {}) {
  const {
    connector = () => new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject(),
    resetOnError = true,
    resetOnComplete = true,
    resetOnRefCountZero = true
  } = options;
  return wrapperSource => {
    let connection;
    let resetConnection;
    let subject;
    let refCount = 0;
    let hasCompleted = false;
    let hasErrored = false;
    const cancelReset = () => {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = undefined;
    };
    const reset = () => {
      cancelReset();
      connection = subject = undefined;
      hasCompleted = hasErrored = false;
    };
    const resetAndUnsubscribe = () => {
      const conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      const dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(() => {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount > 0) {
        connection = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
          next: value => dest.next(value),
          error: err => {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: () => {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on, ...args) {
  if (on === true) {
    reset();
    return;
  }
  if (on === false) {
    return;
  }
  const onSubscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
    next: () => {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(on(...args)).subscribe(onSubscriber);
}

/***/ }),

/***/ 1910:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/ObjectUnsubscribedError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectUnsubscribedError: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 2384);

const ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});

/***/ }),

/***/ 1925:
/*!****************************************************************************!*\
  !*** ./node_modules/@ngrx/store-devtools/fesm2022/ngrx-store-devtools.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INITIAL_OPTIONS: () => (/* binding */ INITIAL_OPTIONS),
/* harmony export */   RECOMPUTE: () => (/* binding */ RECOMPUTE),
/* harmony export */   REDUX_DEVTOOLS_EXTENSION: () => (/* binding */ REDUX_DEVTOOLS_EXTENSION),
/* harmony export */   StoreDevtools: () => (/* binding */ StoreDevtools),
/* harmony export */   StoreDevtoolsConfig: () => (/* binding */ StoreDevtoolsConfig),
/* harmony export */   StoreDevtoolsModule: () => (/* binding */ StoreDevtoolsModule),
/* harmony export */   provideStoreDevtools: () => (/* binding */ provideStoreDevtools)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3423);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 7046);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 6042);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1870);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1903);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 7470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 4304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 5842);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 2112);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 3927);







const PERFORM_ACTION = 'PERFORM_ACTION';
const REFRESH = 'REFRESH';
const RESET = 'RESET';
const ROLLBACK = 'ROLLBACK';
const COMMIT = 'COMMIT';
const SWEEP = 'SWEEP';
const TOGGLE_ACTION = 'TOGGLE_ACTION';
const SET_ACTIONS_ACTIVE = 'SET_ACTIONS_ACTIVE';
const JUMP_TO_STATE = 'JUMP_TO_STATE';
const JUMP_TO_ACTION = 'JUMP_TO_ACTION';
const IMPORT_STATE = 'IMPORT_STATE';
const LOCK_CHANGES = 'LOCK_CHANGES';
const PAUSE_RECORDING = 'PAUSE_RECORDING';
class PerformAction {
  constructor(action, timestamp) {
    this.action = action;
    this.timestamp = timestamp;
    this.type = PERFORM_ACTION;
    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }
  }
}
class Refresh {
  constructor() {
    this.type = REFRESH;
  }
}
class Reset {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = RESET;
  }
}
class Rollback {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = ROLLBACK;
  }
}
class Commit {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = COMMIT;
  }
}
class Sweep {
  constructor() {
    this.type = SWEEP;
  }
}
class ToggleAction {
  constructor(id) {
    this.id = id;
    this.type = TOGGLE_ACTION;
  }
}
class SetActionsActive {
  constructor(start, end, active = true) {
    this.start = start;
    this.end = end;
    this.active = active;
    this.type = SET_ACTIONS_ACTIVE;
  }
}
class JumpToState {
  constructor(index) {
    this.index = index;
    this.type = JUMP_TO_STATE;
  }
}
class JumpToAction {
  constructor(actionId) {
    this.actionId = actionId;
    this.type = JUMP_TO_ACTION;
  }
}
class ImportState {
  constructor(nextLiftedState) {
    this.nextLiftedState = nextLiftedState;
    this.type = IMPORT_STATE;
  }
}
class LockChanges {
  constructor(status) {
    this.status = status;
    this.type = LOCK_CHANGES;
  }
}
class PauseRecording {
  constructor(status) {
    this.status = status;
    this.type = PAUSE_RECORDING;
  }
}

/**
 * Chrome extension documentation
 * @see https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md
 * Firefox extension documentation
 * @see https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
 */
class StoreDevtoolsConfig {
  constructor() {
    /**
     * Maximum allowed actions to be stored in the history tree (default: `false`)
     */
    this.maxAge = false;
  }
}
const STORE_DEVTOOLS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store-devtools Options');
/**
 * Used to provide a `StoreDevtoolsConfig` for the store-devtools.
 */
const INITIAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store-devtools Initial Config');
function noMonitor() {
  return null;
}
const DEFAULT_NAME = 'NgRx Store DevTools';
function createConfig(optionsInput) {
  const DEFAULT_OPTIONS = {
    maxAge: false,
    monitor: noMonitor,
    actionSanitizer: undefined,
    stateSanitizer: undefined,
    name: DEFAULT_NAME,
    serialize: false,
    logOnly: false,
    autoPause: false,
    trace: false,
    traceLimit: 75,
    // Add all features explicitly. This prevent buggy behavior for
    // options like "lock" which might otherwise not show up.
    features: {
      pause: true,
      // Start/pause recording of dispatched actions
      lock: true,
      // Lock/unlock dispatching actions and side effects
      persist: true,
      // Persist states on page reloading
      export: true,
      // Export history of actions in a file
      import: 'custom',
      // Import history of actions from a file
      jump: true,
      // Jump back and forth (time travelling)
      skip: true,
      // Skip (cancel) actions
      reorder: true,
      // Drag and drop actions in the history list
      dispatch: true,
      // Dispatch custom actions or action creators
      test: true // Generate tests for the selected actions
    },
    connectInZone: false
  };
  const options = typeof optionsInput === 'function' ? optionsInput() : optionsInput;
  const logOnly = options.logOnly ? {
    pause: true,
    export: true,
    test: true
  } : false;
  const features = options.features || logOnly || DEFAULT_OPTIONS.features;
  if (features.import === true) {
    features.import = 'custom';
  }
  const config = Object.assign({}, DEFAULT_OPTIONS, {
    features
  }, options);
  if (config.maxAge && config.maxAge < 2) {
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${config.maxAge}`);
  }
  return config;
}
function difference(first, second) {
  return first.filter(item => second.indexOf(item) < 0);
}
/**
 * Provides an app's view into the state of the lifted store.
 */
function unliftState(liftedState) {
  const {
    computedStates,
    currentStateIndex
  } = liftedState;
  // At start up NgRx dispatches init actions,
  // When these init actions are being filtered out by the predicate or safe/block list options
  // we don't have a complete computed states yet.
  // At this point it could happen that we're out of bounds, when this happens we fall back to the last known state
  if (currentStateIndex >= computedStates.length) {
    const {
      state
    } = computedStates[computedStates.length - 1];
    return state;
  }
  const {
    state
  } = computedStates[currentStateIndex];
  return state;
}
function unliftAction(liftedState) {
  return liftedState.actionsById[liftedState.nextActionId - 1];
}
/**
 * Lifts an app's action into an action on the lifted store.
 */
function liftAction(action) {
  return new PerformAction(action, +Date.now());
}
/**
 * Sanitizes given actions with given function.
 */
function sanitizeActions(actionSanitizer, actions) {
  return Object.keys(actions).reduce((sanitizedActions, actionIdx) => {
    const idx = Number(actionIdx);
    sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
    return sanitizedActions;
  }, {});
}
/**
 * Sanitizes given action with given function.
 */
function sanitizeAction(actionSanitizer, action, actionIdx) {
  return {
    ...action,
    action: actionSanitizer(action.action, actionIdx)
  };
}
/**
 * Sanitizes given states with given function.
 */
function sanitizeStates(stateSanitizer, states) {
  return states.map((computedState, idx) => ({
    state: sanitizeState(stateSanitizer, computedState.state, idx),
    error: computedState.error
  }));
}
/**
 * Sanitizes given state with given function.
 */
function sanitizeState(stateSanitizer, state, stateIdx) {
  return stateSanitizer(state, stateIdx);
}
/**
 * Read the config and tell if actions should be filtered
 */
function shouldFilterActions(config) {
  return config.predicate || config.actionsSafelist || config.actionsBlocklist;
}
/**
 * Return a full filtered lifted state
 */
function filterLiftedState(liftedState, predicate, safelist, blocklist) {
  const filteredStagedActionIds = [];
  const filteredActionsById = {};
  const filteredComputedStates = [];
  liftedState.stagedActionIds.forEach((id, idx) => {
    const liftedAction = liftedState.actionsById[id];
    if (!liftedAction) return;
    if (idx && isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) {
      return;
    }
    filteredActionsById[id] = liftedAction;
    filteredStagedActionIds.push(id);
    filteredComputedStates.push(liftedState.computedStates[idx]);
  });
  return {
    ...liftedState,
    stagedActionIds: filteredStagedActionIds,
    actionsById: filteredActionsById,
    computedStates: filteredComputedStates
  };
}
/**
 * Return true is the action should be ignored
 */
function isActionFiltered(state, action, predicate, safelist, blockedlist) {
  const predicateMatch = predicate && !predicate(state, action.action);
  const safelistMatch = safelist && !action.action.type.match(safelist.map(s => escapeRegExp(s)).join('|'));
  const blocklistMatch = blockedlist && action.action.type.match(blockedlist.map(s => escapeRegExp(s)).join('|'));
  return predicateMatch || safelistMatch || blocklistMatch;
}
/**
 * Return string with escaped RegExp special characters
 * https://stackoverflow.com/a/6969486/1337347
 */
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function injectZoneConfig(connectInZone) {
  const ngZone = connectInZone ? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone) : null;
  return {
    ngZone,
    connectInZone
  };
}
class DevtoolsDispatcher extends _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.ActionsSubject {
  /** @nocollapse */static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵDevtoolsDispatcher_BaseFactory;
      return function DevtoolsDispatcher_Factory(__ngFactoryType__) {
        return (ɵDevtoolsDispatcher_BaseFactory || (ɵDevtoolsDispatcher_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DevtoolsDispatcher)))(__ngFactoryType__ || DevtoolsDispatcher);
      };
    })();
  }
  /** @nocollapse */
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DevtoolsDispatcher,
      factory: DevtoolsDispatcher.ɵfac
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevtoolsDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const ExtensionActionTypes = {
  START: 'START',
  DISPATCH: 'DISPATCH',
  STOP: 'STOP',
  ACTION: 'ACTION'
};
const REDUX_DEVTOOLS_EXTENSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store-devtools Redux Devtools Extension');
class DevtoolsExtension {
  constructor(devtoolsExtension, config, dispatcher) {
    this.config = config;
    this.dispatcher = dispatcher;
    this.zoneConfig = injectZoneConfig(this.config.connectInZone);
    this.devtoolsExtension = devtoolsExtension;
    this.createActionStreams();
  }
  notify(action, state) {
    if (!this.devtoolsExtension) {
      return;
    }
    // Check to see if the action requires a full update of the liftedState.
    // If it is a simple action generated by the user's app and the recording
    // is not locked/paused, only send the action and the current state (fast).
    //
    // A full liftedState update (slow: serializes the entire liftedState) is
    // only required when:
    //   a) redux-devtools-extension fires the @@Init action (ignored by
    //      @ngrx/store-devtools)
    //   b) an action is generated by an @ngrx module (e.g. @ngrx/effects/init
    //      or @ngrx/store/update-reducers)
    //   c) the state has been recomputed due to time-traveling
    //   d) any action that is not a PerformAction to err on the side of
    //      caution.
    if (action.type === PERFORM_ACTION) {
      if (state.isLocked || state.isPaused) {
        return;
      }
      const currentState = unliftState(state);
      if (shouldFilterActions(this.config) && isActionFiltered(currentState, action, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) {
        return;
      }
      const sanitizedState = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex) : currentState;
      const sanitizedAction = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, action, state.nextActionId) : action;
      this.sendToReduxDevtools(() => this.extensionConnection.send(sanitizedAction, sanitizedState));
    } else {
      // Requires full state update
      const sanitizedLiftedState = {
        ...state,
        stagedActionIds: state.stagedActionIds,
        actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, state.actionsById) : state.actionsById,
        computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, state.computedStates) : state.computedStates
      };
      this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, sanitizedLiftedState, this.getExtensionConfig(this.config)));
    }
  }
  createChangesObservable() {
    if (!this.devtoolsExtension) {
      return rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY;
    }
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(subscriber => {
      const connection = this.zoneConfig.connectInZone ?
      // To reduce change detection cycles, we need to run the `connect` method
      // outside of the Angular zone. The `connect` method adds a `message`
      // event listener to communicate with an extension using `window.postMessage`
      // and handle message events.
      this.zoneConfig.ngZone.runOutsideAngular(() => this.devtoolsExtension.connect(this.getExtensionConfig(this.config))) : this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
      this.extensionConnection = connection;
      connection.init();
      connection.subscribe(change => subscriber.next(change));
      return connection.unsubscribe;
    });
  }
  createActionStreams() {
    // Listens to all changes
    const changes$ = this.createChangesObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
    // Listen for the start action
    const start$ = changes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(change => change.type === ExtensionActionTypes.START));
    // Listen for the stop action
    const stop$ = changes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(change => change.type === ExtensionActionTypes.STOP));
    // Listen for lifted actions
    const liftedActions$ = changes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(change => change.type === ExtensionActionTypes.DISPATCH), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(change => this.unwrapAction(change.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.concatMap)(action => {
      if (action.type === IMPORT_STATE) {
        // State imports may happen in two situations:
        // 1. Explicitly by user
        // 2. User activated the "persist state accross reloads" option
        //    and now the state is imported during reload.
        // Because of option 2, we need to give possible
        // lazy loaded reducers time to instantiate.
        // As soon as there is no UPDATE action within 1 second,
        // it is assumed that all reducers are loaded.
        return this.dispatcher.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(action => action.type === _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.UPDATE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.timeout)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => action), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(action)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(action);
      }
    }));
    // Listen for unlifted actions
    const actions$ = changes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(change => change.type === ExtensionActionTypes.ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(change => this.unwrapAction(change.payload)));
    const actionsUntilStop$ = actions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(stop$));
    const liftedUntilStop$ = liftedActions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(stop$));
    this.start$ = start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(stop$));
    // Only take the action sources between the start/stop events
    this.actions$ = this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(() => actionsUntilStop$));
    this.liftedActions$ = this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(() => liftedUntilStop$));
  }
  unwrapAction(action) {
    // indirect eval according to https://esbuild.github.io/content-types/#direct-eval
    return typeof action === 'string' ? (0, eval)(`(${action})`) : action;
  }
  getExtensionConfig(config) {
    const extensionOptions = {
      name: config.name,
      features: config.features,
      serialize: config.serialize,
      autoPause: config.autoPause ?? false,
      trace: config.trace ?? false,
      traceLimit: config.traceLimit ?? 75
      // The action/state sanitizers are not added to the config
      // because sanitation is done in this class already.
      // It is done before sending it to the devtools extension for consistency:
      // - If we call extensionConnection.send(...),
      //   the extension would call the sanitizers.
      // - If we call devtoolsExtension.send(...) (aka full state update),
      //   the extension would NOT call the sanitizers, so we have to do it ourselves.
    };
    if (config.maxAge !== false /* support === 0 */) {
      extensionOptions.maxAge = config.maxAge;
    }
    return extensionOptions;
  }
  sendToReduxDevtools(send) {
    try {
      send();
    } catch (err) {
      console.warn('@ngrx/store-devtools: something went wrong inside the redux devtools', err);
    }
  }
  /** @nocollapse */
  static {
    this.ɵfac = function DevtoolsExtension_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevtoolsExtension)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](REDUX_DEVTOOLS_EXTENSION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STORE_DEVTOOLS_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DevtoolsDispatcher));
    };
  }
  /** @nocollapse */
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DevtoolsExtension,
      factory: DevtoolsExtension.ɵfac
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevtoolsExtension, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [REDUX_DEVTOOLS_EXTENSION]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }, {
    type: DevtoolsDispatcher
  }], null);
})();
const INIT_ACTION = {
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.INIT
};
const RECOMPUTE = '@ngrx/store-devtools/recompute';
const RECOMPUTE_ACTION = {
  type: RECOMPUTE
};
/**
 * Computes the next entry in the log by applying an action.
 */
function computeNextEntry(reducer, action, state, error, errorHandler) {
  if (error) {
    return {
      state,
      error: 'Interrupted by an error up the chain'
    };
  }
  let nextState = state;
  let nextError;
  try {
    nextState = reducer(state, action);
  } catch (err) {
    nextError = err.toString();
    errorHandler.handleError(err);
  }
  return {
    state: nextState,
    error: nextError
  };
}
/**
 * Runs the reducer on invalidated actions to get a fresh computation log.
 */
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused) {
  // Optimization: exit early and return the same reference
  // if we know nothing could have changed.
  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
    return computedStates;
  }
  const nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
  // If the recording is paused, recompute all states up until the pause state,
  // else recompute all states.
  const lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);
  for (let i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
    const actionId = stagedActionIds[i];
    const action = actionsById[actionId].action;
    const previousEntry = nextComputedStates[i - 1];
    const previousState = previousEntry ? previousEntry.state : committedState;
    const previousError = previousEntry ? previousEntry.error : undefined;
    const shouldSkip = skippedActionIds.indexOf(actionId) > -1;
    const entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError, errorHandler);
    nextComputedStates.push(entry);
  }
  // If the recording is paused, the last state will not be recomputed,
  // because it's essentially not part of the state history.
  if (isPaused) {
    nextComputedStates.push(computedStates[computedStates.length - 1]);
  }
  return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
  return {
    monitorState: monitorReducer(undefined, {}),
    nextActionId: 1,
    actionsById: {
      0: liftAction(INIT_ACTION)
    },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: initialCommittedState,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: false,
    isPaused: false
  };
}
/**
 * Creates a history state reducer from an app's reducer.
 */
function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler, monitorReducer, options = {}) {
  /**
   * Manages how the history actions modify the history state.
   */
  return reducer => (liftedState, liftedAction) => {
    let {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    } = liftedState || initialLiftedState;
    if (!liftedState) {
      // Prevent mutating initialLiftedState
      actionsById = Object.create(actionsById);
    }
    function commitExcessActions(n) {
      // Auto-commits n-number of excess actions.
      let excess = n;
      let idsToDelete = stagedActionIds.slice(1, excess + 1);
      for (let i = 0; i < idsToDelete.length; i++) {
        if (computedStates[i + 1].error) {
          // Stop if error is found. Commit actions up to error.
          excess = i;
          idsToDelete = stagedActionIds.slice(1, excess + 1);
          break;
        } else {
          delete actionsById[idsToDelete[i]];
        }
      }
      skippedActionIds = skippedActionIds.filter(id => idsToDelete.indexOf(id) === -1);
      stagedActionIds = [0, ...stagedActionIds.slice(excess + 1)];
      committedState = computedStates[excess].state;
      computedStates = computedStates.slice(excess);
      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
    }
    function commitChanges() {
      // Consider the last committed state the new starting point.
      // Squash any staged actions into a single committed state.
      actionsById = {
        0: liftAction(INIT_ACTION)
      };
      nextActionId = 1;
      stagedActionIds = [0];
      skippedActionIds = [];
      committedState = computedStates[currentStateIndex].state;
      currentStateIndex = 0;
      computedStates = [];
    }
    // By default, aggressively recompute every state whatever happens.
    // This has O(n) performance, so we'll override this to a sensible
    // value whenever we feel like we don't have to recompute the states.
    let minInvalidatedStateIndex = 0;
    switch (liftedAction.type) {
      case LOCK_CHANGES:
        {
          isLocked = liftedAction.status;
          minInvalidatedStateIndex = Infinity;
          break;
        }
      case PAUSE_RECORDING:
        {
          isPaused = liftedAction.status;
          if (isPaused) {
            // Add a pause action to signal the devtools-user the recording is paused.
            // The corresponding state will be overwritten on each update to always contain
            // the latest state (see Actions.PERFORM_ACTION).
            stagedActionIds = [...stagedActionIds, nextActionId];
            actionsById[nextActionId] = new PerformAction({
              type: '@ngrx/devtools/pause'
            }, +Date.now());
            nextActionId++;
            minInvalidatedStateIndex = stagedActionIds.length - 1;
            computedStates = computedStates.concat(computedStates[computedStates.length - 1]);
            if (currentStateIndex === stagedActionIds.length - 2) {
              currentStateIndex++;
            }
            minInvalidatedStateIndex = Infinity;
          } else {
            commitChanges();
          }
          break;
        }
      case RESET:
        {
          // Get back to the state the store was created with.
          actionsById = {
            0: liftAction(INIT_ACTION)
          };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          committedState = initialCommittedState;
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case COMMIT:
        {
          commitChanges();
          break;
        }
      case ROLLBACK:
        {
          // Forget about any staged actions.
          // Start again from the last committed state.
          actionsById = {
            0: liftAction(INIT_ACTION)
          };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case TOGGLE_ACTION:
        {
          // Toggle whether an action with given ID is skipped.
          // Being skipped means it is a no-op during the computation.
          const {
            id: actionId
          } = liftedAction;
          const index = skippedActionIds.indexOf(actionId);
          if (index === -1) {
            skippedActionIds = [actionId, ...skippedActionIds];
          } else {
            skippedActionIds = skippedActionIds.filter(id => id !== actionId);
          }
          // Optimization: we know history before this action hasn't changed
          minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
          break;
        }
      case SET_ACTIONS_ACTIVE:
        {
          // Toggle whether an action with given ID is skipped.
          // Being skipped means it is a no-op during the computation.
          const {
            start,
            end,
            active
          } = liftedAction;
          const actionIds = [];
          for (let i = start; i < end; i++) actionIds.push(i);
          if (active) {
            skippedActionIds = difference(skippedActionIds, actionIds);
          } else {
            skippedActionIds = [...skippedActionIds, ...actionIds];
          }
          // Optimization: we know history before this action hasn't changed
          minInvalidatedStateIndex = stagedActionIds.indexOf(start);
          break;
        }
      case JUMP_TO_STATE:
        {
          // Without recomputing anything, move the pointer that tell us
          // which state is considered the current one. Useful for sliders.
          currentStateIndex = liftedAction.index;
          // Optimization: we know the history has not changed.
          minInvalidatedStateIndex = Infinity;
          break;
        }
      case JUMP_TO_ACTION:
        {
          // Jumps to a corresponding state to a specific action.
          // Useful when filtering actions.
          const index = stagedActionIds.indexOf(liftedAction.actionId);
          if (index !== -1) currentStateIndex = index;
          minInvalidatedStateIndex = Infinity;
          break;
        }
      case SWEEP:
        {
          // Forget any actions that are currently being skipped.
          stagedActionIds = difference(stagedActionIds, skippedActionIds);
          skippedActionIds = [];
          currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
          break;
        }
      case PERFORM_ACTION:
        {
          // Ignore action and return state as is if recording is locked
          if (isLocked) {
            return liftedState || initialLiftedState;
          }
          if (isPaused || liftedState && isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist)) {
            // If recording is paused or if the action should be ignored, overwrite the last state
            // (corresponds to the pause action) and keep everything else as is.
            // This way, the app gets the new current state while the devtools
            // do not record another action.
            const lastState = computedStates[computedStates.length - 1];
            computedStates = [...computedStates.slice(0, -1), computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler)];
            minInvalidatedStateIndex = Infinity;
            break;
          }
          // Auto-commit as new actions come in.
          if (options.maxAge && stagedActionIds.length === options.maxAge) {
            commitExcessActions(1);
          }
          if (currentStateIndex === stagedActionIds.length - 1) {
            currentStateIndex++;
          }
          const actionId = nextActionId++;
          // Mutation! This is the hottest path, and we optimize on purpose.
          // It is safe because we set a new key in a cache dictionary.
          actionsById[actionId] = liftedAction;
          stagedActionIds = [...stagedActionIds, actionId];
          // Optimization: we know that only the new action needs computing.
          minInvalidatedStateIndex = stagedActionIds.length - 1;
          break;
        }
      case IMPORT_STATE:
        {
          // Completely replace everything.
          ({
            monitorState,
            actionsById,
            nextActionId,
            stagedActionIds,
            skippedActionIds,
            committedState,
            currentStateIndex,
            computedStates,
            isLocked,
            isPaused
          } = liftedAction.nextLiftedState);
          break;
        }
      case _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.INIT:
        {
          // Always recompute states on hot reload and init.
          minInvalidatedStateIndex = 0;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            // States must be recomputed before committing excess.
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
            commitExcessActions(stagedActionIds.length - options.maxAge);
            // Avoid double computation.
            minInvalidatedStateIndex = Infinity;
          }
          break;
        }
      case _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.UPDATE:
        {
          const stateHasErrors = computedStates.filter(state => state.error).length > 0;
          if (stateHasErrors) {
            // Recompute all states
            minInvalidatedStateIndex = 0;
            if (options.maxAge && stagedActionIds.length > options.maxAge) {
              // States must be recomputed before committing excess.
              computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
              commitExcessActions(stagedActionIds.length - options.maxAge);
              // Avoid double computation.
              minInvalidatedStateIndex = Infinity;
            }
          } else {
            // If not paused/locked, add a new action to signal devtools-user
            // that there was a reducer update.
            if (!isPaused && !isLocked) {
              if (currentStateIndex === stagedActionIds.length - 1) {
                currentStateIndex++;
              }
              // Add a new action to only recompute state
              const actionId = nextActionId++;
              actionsById[actionId] = new PerformAction(liftedAction, +Date.now());
              stagedActionIds = [...stagedActionIds, actionId];
              minInvalidatedStateIndex = stagedActionIds.length - 1;
              computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
            }
            // Recompute state history with latest reducer and update action
            computedStates = computedStates.map(cmp => ({
              ...cmp,
              state: reducer(cmp.state, RECOMPUTE_ACTION)
            }));
            currentStateIndex = stagedActionIds.length - 1;
            if (options.maxAge && stagedActionIds.length > options.maxAge) {
              commitExcessActions(stagedActionIds.length - options.maxAge);
            }
            // Avoid double computation.
            minInvalidatedStateIndex = Infinity;
          }
          break;
        }
      default:
        {
          // If the action is not recognized, it's a monitor action.
          // Optimization: a monitor action can't change history.
          minInvalidatedStateIndex = Infinity;
          break;
        }
    }
    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
    monitorState = monitorReducer(monitorState, liftedAction);
    return {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    };
  };
}
class StoreDevtools {
  constructor(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler, initialState, config) {
    const liftedInitialState = liftInitialState(initialState, config.monitor);
    const liftReducer = liftReducerWith(initialState, liftedInitialState, errorHandler, config.monitor, config);
    const liftedAction$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(actions$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.skip)(1)), extension.actions$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(liftAction)), dispatcher, extension.liftedActions$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_19__.queueScheduler));
    const liftedReducer$ = reducers$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(liftReducer));
    const zoneConfig = injectZoneConfig(config.connectInZone);
    const liftedStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_20__.ReplaySubject(1);
    this.liftedStateSubscription = liftedAction$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.withLatestFrom)(liftedReducer$),
    // The extension would post messages back outside of the Angular zone
    // because we call `connect()` wrapped with `runOutsideAngular`. We run change
    // detection only once at the end after all the required asynchronous tasks have
    // been processed (for instance, `setInterval` scheduled by the `timeout` operator).
    // We have to re-enter the Angular zone before the `scan` since it runs the reducer
    // which must be run within the Angular zone.
    emitInZone(zoneConfig), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.scan)(({
      state: liftedState
    }, [action, reducer]) => {
      let reducedLiftedState = reducer(liftedState, action);
      // On full state update
      // If we have actions filters, we must filter completely our lifted state to be sync with the extension
      if (action.type !== PERFORM_ACTION && shouldFilterActions(config)) {
        reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
      }
      // Extension should be sent the sanitized lifted state
      extension.notify(action, reducedLiftedState);
      return {
        state: reducedLiftedState,
        action
      };
    }, {
      state: liftedInitialState,
      action: null
    })).subscribe(({
      state,
      action
    }) => {
      liftedStateSubject.next(state);
      if (action.type === PERFORM_ACTION) {
        const unliftedAction = action.action;
        scannedActions.next(unliftedAction);
      }
    });
    this.extensionStartSubscription = extension.start$.pipe(emitInZone(zoneConfig)).subscribe(() => {
      this.refresh();
    });
    const liftedState$ = liftedStateSubject.asObservable();
    const state$ = liftedState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(unliftState));
    Object.defineProperty(state$, 'state', {
      value: (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.toSignal)(state$, {
        manualCleanup: true,
        requireSync: true
      })
    });
    this.dispatcher = dispatcher;
    this.liftedState = liftedState$;
    this.state = state$;
  }
  ngOnDestroy() {
    // Even though the store devtools plugin is recommended to be
    // used only in development mode, it can still cause a memory leak
    // in microfrontend applications that are being created and destroyed
    // multiple times during development. This results in excessive memory
    // consumption, as it prevents entire apps from being garbage collected.
    this.liftedStateSubscription.unsubscribe();
    this.extensionStartSubscription.unsubscribe();
  }
  dispatch(action) {
    this.dispatcher.next(action);
  }
  next(action) {
    this.dispatcher.next(action);
  }
  error(error) {}
  complete() {}
  performAction(action) {
    this.dispatch(new PerformAction(action, +Date.now()));
  }
  refresh() {
    this.dispatch(new Refresh());
  }
  reset() {
    this.dispatch(new Reset(+Date.now()));
  }
  rollback() {
    this.dispatch(new Rollback(+Date.now()));
  }
  commit() {
    this.dispatch(new Commit(+Date.now()));
  }
  sweep() {
    this.dispatch(new Sweep());
  }
  toggleAction(id) {
    this.dispatch(new ToggleAction(id));
  }
  jumpToAction(actionId) {
    this.dispatch(new JumpToAction(actionId));
  }
  jumpToState(index) {
    this.dispatch(new JumpToState(index));
  }
  importState(nextLiftedState) {
    this.dispatch(new ImportState(nextLiftedState));
  }
  lockChanges(status) {
    this.dispatch(new LockChanges(status));
  }
  pauseRecording(status) {
    this.dispatch(new PauseRecording(status));
  }
  /** @nocollapse */
  static {
    this.ɵfac = function StoreDevtools_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StoreDevtools)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DevtoolsDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.ActionsSubject), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.ReducerObservable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DevtoolsExtension), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.ScannedActionsSubject), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.INITIAL_STATE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STORE_DEVTOOLS_CONFIG));
    };
  }
  /** @nocollapse */
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StoreDevtools,
      factory: StoreDevtools.ɵfac
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreDevtools, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: DevtoolsDispatcher
  }, {
    type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.ActionsSubject
  }, {
    type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.ReducerObservable
  }, {
    type: DevtoolsExtension
  }, {
    type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.ScannedActionsSubject
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.INITIAL_STATE]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }], null);
})();
/**
 * If the devtools extension is connected out of the Angular zone,
 * this operator will emit all events within the zone.
 */
function emitInZone({
  ngZone,
  connectInZone
}) {
  return source => connectInZone ? new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(subscriber => source.subscribe({
    next: value => ngZone.run(() => subscriber.next(value)),
    error: error => ngZone.run(() => subscriber.error(error)),
    complete: () => ngZone.run(() => subscriber.complete())
  })) : source;
}
const IS_EXTENSION_OR_MONITOR_PRESENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@ngrx/store-devtools Is Devtools Extension or Monitor Present');
function createIsExtensionOrMonitorPresent(extension, config) {
  return Boolean(extension) || config.monitor !== noMonitor;
}
function createReduxDevtoolsExtension() {
  const extensionKey = '__REDUX_DEVTOOLS_EXTENSION__';
  if (typeof window === 'object' && typeof window[extensionKey] !== 'undefined') {
    return window[extensionKey];
  } else {
    return null;
  }
}
/**
 * Provides developer tools and instrumentation for `Store`.
 *
 * @usageNotes
 *
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideStoreDevtools({
 *       maxAge: 25,
 *       logOnly: !isDevMode(),
 *     }),
 *   ],
 * });
 * ```
 */
function provideStoreDevtools(options = {}) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([DevtoolsExtension, DevtoolsDispatcher, StoreDevtools, {
    provide: INITIAL_OPTIONS,
    useValue: options
  }, {
    provide: IS_EXTENSION_OR_MONITOR_PRESENT,
    deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
    useFactory: createIsExtensionOrMonitorPresent
  }, {
    provide: REDUX_DEVTOOLS_EXTENSION,
    useFactory: createReduxDevtoolsExtension
  }, {
    provide: STORE_DEVTOOLS_CONFIG,
    deps: [INITIAL_OPTIONS],
    useFactory: createConfig
  }, {
    provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StateObservable,
    deps: [StoreDevtools],
    useFactory: createStateObservable
  }, {
    provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.ReducerManagerDispatcher,
    useExisting: DevtoolsDispatcher
  }]);
}
function createStateObservable(devtools) {
  return devtools.state;
}
class StoreDevtoolsModule {
  static instrument(options = {}) {
    return {
      ngModule: StoreDevtoolsModule,
      providers: [provideStoreDevtools(options)]
    };
  }
  /** @nocollapse */
  static {
    this.ɵfac = function StoreDevtoolsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StoreDevtoolsModule)();
    };
  }
  /** @nocollapse */
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoreDevtoolsModule
    });
  }
  /** @nocollapse */
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreDevtoolsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{}]
  }], null, null);
})();

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1962:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 5152);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 2083:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 9103);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 8113);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 967);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 2354:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/timeout.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isDate */ 5602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);
/* harmony import */ var _util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/createErrorClass */ 2384);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/executeSchedule */ 310);







const TimeoutError = (0,_util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function TimeoutErrorImpl(info = null) {
  _super(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  this.info = info;
});
function timeout(config, schedulerArg) {
  const {
    first,
    each,
    with: _with = timeoutErrorFactory,
    scheduler = schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__.asyncScheduler,
    meta = null
  } = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_2__.isValidDate)(config) ? {
    first: config
  } : typeof config === 'number' ? {
    each: config
  } : config;
  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    let originalSourceSubscription;
    let timerSubscription;
    let lastValue = null;
    let seen = 0;
    const startTimer = delay => {
      timerSubscription = (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__.executeSchedule)(subscriber, scheduler, () => {
        try {
          originalSourceSubscription.unsubscribe();
          (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.innerFrom)(_with({
            meta,
            lastValue,
            seen
          })).subscribe(subscriber);
        } catch (err) {
          subscriber.error(err);
        }
      }, delay);
    };
    originalSourceSubscription = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__.createOperatorSubscriber)(subscriber, value => {
      timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, undefined, undefined, () => {
      if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      }
      lastValue = null;
    }));
    !seen && startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
  });
}
function timeoutErrorFactory(info) {
  throw new TimeoutError(info);
}

/***/ }),

/***/ 2400:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1962);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 2575:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ }),

/***/ 3617:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/merge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ 3222);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ 2645);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ 9400);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 4083);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 5429);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
}

/***/ }),

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _mf_todo_store_todo_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mf-todo/store/todo.reducer */ 9110);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store-devtools */ 1925);




const route = [{
  path: '',
  loadComponent: () => {
    console.log("CALLING MAIN TODO COMPONENT");
    return Promise.all(/*! import() */[__webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("common"), __webpack_require__.e("frontend_angular_micro-apps_mf-todo_src_lib_mf-todo_mf-todo_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mf-todo/mf-todo.component */ 4859)).then(c => c.MfTodoComponent);
  },
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature("todos", _mf_todo_store_todo_reducer__WEBPACK_IMPORTED_MODULE_1__.reducers), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__.StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: true
  }))]
}];

/***/ }),

/***/ 5424:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/pluck.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pluck: () => (/* binding */ pluck)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 271);

function pluck(...properties) {
  const length = properties.length;
  if (length === 0) {
    throw new Error('list of properties cannot be empty.');
  }
  return (0,_map__WEBPACK_IMPORTED_MODULE_0__.map)(x => {
    let currentProp = x;
    for (let i = 0; i < length; i++) {
      const p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
      if (typeof p !== 'undefined') {
        currentProp = p;
      } else {
        return undefined;
      }
    }
    return currentProp;
  });
}

/***/ }),

/***/ 5602:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ }),

/***/ 5797:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/BehaviorSubject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BehaviorSubject: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 819);

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

/***/ 5842:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/withLatestFrom.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withLatestFrom: () => (/* binding */ withLatestFrom)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/identity */ 1440);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/noop */ 4318);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 4083);






function withLatestFrom(...inputs) {
  const project = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(inputs);
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    const len = inputs.length;
    const otherValues = new Array(len);
    let hasValue = inputs.map(() => false);
    let ready = false;
    for (let i = 0; i < len; i++) {
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(inputs[i]).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, value => {
        otherValues[i] = value;
        if (!ready && !hasValue[i]) {
          hasValue[i] = true;
          (ready = hasValue.every(_util_identity__WEBPACK_IMPORTED_MODULE_4__.identity)) && (hasValue = null);
        }
      }, _util_noop__WEBPACK_IMPORTED_MODULE_5__.noop));
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, value => {
      if (ready) {
        const values = [value, ...otherValues];
        subscriber.next(project ? project(...values) : values);
      }
    }));
  });
}

/***/ }),

/***/ 7046:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/queue.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queue: () => (/* binding */ queue),
/* harmony export */   queueScheduler: () => (/* binding */ queueScheduler)
/* harmony export */ });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueAction */ 7380);
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueScheduler */ 8045);


const queueScheduler = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__.QueueScheduler(_QueueAction__WEBPACK_IMPORTED_MODULE_1__.QueueAction);
const queue = queueScheduler;

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

/***/ 7380:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/QueueAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueueAction: () => (/* binding */ QueueAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 2083);

class QueueAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  schedule(state, delay = 0) {
    if (delay > 0) {
      return super.schedule(state, delay);
    }
    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  }
  execute(state, delay) {
    return delay > 0 || this.closed ? super.execute(state, delay) : this._execute(state, delay);
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay != null && delay > 0 || delay == null && this.delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.flush(this);
    return 0;
  }
}

/***/ }),

/***/ 7470:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skip: () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ 1567);

function skip(count) {
  return (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)((_, index) => count <= index);
}

/***/ }),

/***/ 8045:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/QueueScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueueScheduler: () => (/* binding */ QueueScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);

class QueueScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {}

/***/ }),

/***/ 8113:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 8473:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 9103:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

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