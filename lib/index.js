'use strict';

exports.__esModule = true;
exports.client = undefined;

var _client = require('./vuex-crud/client');

var _client2 = _interopRequireDefault(_client);

var _createActions = require('./vuex-crud/createActions');

var _createActions2 = _interopRequireDefault(_createActions);

var _createGetters = require('./vuex-crud/createGetters');

var _createGetters2 = _interopRequireDefault(_createGetters);

var _createMutations = require('./vuex-crud/createMutations');

var _createMutations2 = _interopRequireDefault(_createMutations);

var _createState = require('./vuex-crud/createState');

var _createState2 = _interopRequireDefault(_createState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates new Vuex CRUD module.
 *
 * @param {Object} configuration
 * @property {String} idAttribute The name of ID attribute.
 * @property {String} resource The name of the resource.
 * @property {String} urlRoot The root url.
 * @property {Function} customUrlFn A custom getter for more complex URL to request data from API.
 * @property {Object} state The default state (will override generated state).
 * @property {Object} actions The default actions (will override generated actions object).
 * @property {Object} mutations The default mutations (will override generated mutations object).
 * @property {Object} getters The default getters (will override generated getters object).
 * @property {Object} client The client that should be used to do API requests.
 * @property {Function} onFetchListStart Mutation method called after collection fetch start.
 * @property {Function} onFetchListSuccess Mutation method called after collection fetch success.
 * @property {Function} onFetchListError Mutation method called after collection fetch error.
 * @property {Function} onFetchSingleStart Mutation method called after single fetch start.
 * @property {Function} onFetchSingleSuccess Mutation method called after single fetch success.
 * @property {Function} onFetchSingleError Mutation method called after single fetch error.
 * @property {Function} onCreateStart Mutation method called after create state.
 * @property {Function} onCreateSuccess Mutation method called after create success.
 * @property {Function} onCreateError Mutation method called after create error.
 * @property {Function} onUpdateStart Mutation method called after update state.
 * @property {Function} onUpdateSuccess Mutation method called after update success.
 * @property {Function} onUpdateError Mutation method called after update error.
 * @property {Function} onReplaceStart Mutation method called after replace state.
 * @property {Function} onReplaceSuccess Mutation method called after replace success.
 * @property {Function} onReplaceError Mutation method called after replace error.
 * @property {Function} onDestroyStart Mutation method called after destroy state.
 * @property {Function} onDestroySuccess Mutation method called after destroy success.
 * @property {Function} onDestroyError Mutation method called after destroy error.
 * @property {Array} only A list of CRUD actions that should be available.
 * @property {Function} parseList A method used to parse list of resources.
 * @property {Function} parseSingle A method used to parse singe resource.
 * @property {Function} parseError A method used to parse error responses.
 * @return {Object} A Vuex module.
 */
var createCrud = function createCrud() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$idAttribute = _ref.idAttribute,
      idAttribute = _ref$idAttribute === undefined ? 'id' : _ref$idAttribute,
      resource = _ref.resource,
      urlRoot = _ref.urlRoot,
      _ref$customUrlFn = _ref.customUrlFn,
      customUrlFn = _ref$customUrlFn === undefined ? null : _ref$customUrlFn,
      _ref$state = _ref.state,
      state = _ref$state === undefined ? {} : _ref$state,
      _ref$actions = _ref.actions,
      actions = _ref$actions === undefined ? {} : _ref$actions,
      _ref$mutations = _ref.mutations,
      mutations = _ref$mutations === undefined ? {} : _ref$mutations,
      _ref$getters = _ref.getters,
      getters = _ref$getters === undefined ? {} : _ref$getters,
      _ref$client = _ref.client,
      client = _ref$client === undefined ? _client2.default : _ref$client,
      _ref$onFetchListStart = _ref.onFetchListStart,
      onFetchListStart = _ref$onFetchListStart === undefined ? function () {} : _ref$onFetchListStart,
      _ref$onFetchListSucce = _ref.onFetchListSuccess,
      onFetchListSuccess = _ref$onFetchListSucce === undefined ? function () {} : _ref$onFetchListSucce,
      _ref$onFetchListError = _ref.onFetchListError,
      onFetchListError = _ref$onFetchListError === undefined ? function () {} : _ref$onFetchListError,
      _ref$onFetchSingleSta = _ref.onFetchSingleStart,
      onFetchSingleStart = _ref$onFetchSingleSta === undefined ? function () {} : _ref$onFetchSingleSta,
      _ref$onFetchSingleSuc = _ref.onFetchSingleSuccess,
      onFetchSingleSuccess = _ref$onFetchSingleSuc === undefined ? function () {} : _ref$onFetchSingleSuc,
      _ref$onFetchSingleErr = _ref.onFetchSingleError,
      onFetchSingleError = _ref$onFetchSingleErr === undefined ? function () {} : _ref$onFetchSingleErr,
      _ref$onCreateStart = _ref.onCreateStart,
      onCreateStart = _ref$onCreateStart === undefined ? function () {} : _ref$onCreateStart,
      _ref$onCreateSuccess = _ref.onCreateSuccess,
      onCreateSuccess = _ref$onCreateSuccess === undefined ? function () {} : _ref$onCreateSuccess,
      _ref$onCreateError = _ref.onCreateError,
      onCreateError = _ref$onCreateError === undefined ? function () {} : _ref$onCreateError,
      _ref$onUpdateStart = _ref.onUpdateStart,
      onUpdateStart = _ref$onUpdateStart === undefined ? function () {} : _ref$onUpdateStart,
      _ref$onUpdateSuccess = _ref.onUpdateSuccess,
      onUpdateSuccess = _ref$onUpdateSuccess === undefined ? function () {} : _ref$onUpdateSuccess,
      _ref$onUpdateError = _ref.onUpdateError,
      onUpdateError = _ref$onUpdateError === undefined ? function () {} : _ref$onUpdateError,
      _ref$onReplaceStart = _ref.onReplaceStart,
      onReplaceStart = _ref$onReplaceStart === undefined ? function () {} : _ref$onReplaceStart,
      _ref$onReplaceSuccess = _ref.onReplaceSuccess,
      onReplaceSuccess = _ref$onReplaceSuccess === undefined ? function () {} : _ref$onReplaceSuccess,
      _ref$onReplaceError = _ref.onReplaceError,
      onReplaceError = _ref$onReplaceError === undefined ? function () {} : _ref$onReplaceError,
      _ref$onDestroyStart = _ref.onDestroyStart,
      onDestroyStart = _ref$onDestroyStart === undefined ? function () {} : _ref$onDestroyStart,
      _ref$onDestroySuccess = _ref.onDestroySuccess,
      onDestroySuccess = _ref$onDestroySuccess === undefined ? function () {} : _ref$onDestroySuccess,
      _ref$onDestroyError = _ref.onDestroyError,
      onDestroyError = _ref$onDestroyError === undefined ? function () {} : _ref$onDestroyError,
      _ref$only = _ref.only,
      only = _ref$only === undefined ? ['FETCH_LIST', 'FETCH_SINGLE', 'CREATE', 'UPDATE', 'REPLACE', 'DESTROY'] : _ref$only,
      _ref$parseList = _ref.parseList,
      parseList = _ref$parseList === undefined ? function (res) {
    return res;
  } : _ref$parseList,
      _ref$parseSingle = _ref.parseSingle,
      parseSingle = _ref$parseSingle === undefined ? function (res) {
    return res;
  } : _ref$parseSingle,
      _ref$parseError = _ref.parseError,
      parseError = _ref$parseError === undefined ? function (res) {
    return res;
  } : _ref$parseError;

  if (!resource) {
    throw new Error('Resource name must be specified');
  }

  var rootUrl = void 0;

  /**
   * Create root url for API requests. By default it is: /api/<resource>.
   * Use custom url getter if given.
   */
  if (typeof customUrlFn === 'function') {
    rootUrl = customUrlFn;
  } else if (typeof urlRoot === 'string') {
    rootUrl = function (url) {
      var lastCharacter = url.substr(-1);

      return lastCharacter === '/' ? url.slice(0, -1) : url;
    }(urlRoot);
  } else {
    rootUrl = '/api/' + resource;
  }

  return {
    namespaced: true,

    state: (0, _createState2.default)({ state: state, only: only }),

    actions: (0, _createActions2.default)({
      actions: actions,
      rootUrl: rootUrl,
      only: only,
      client: client,
      parseList: parseList,
      parseSingle: parseSingle,
      parseError: parseError,
      onFetchListStart: onFetchListStart,
      onFetchListSuccess: onFetchListSuccess,
      onFetchListError: onFetchListError,
      onFetchSingleStart: onFetchSingleStart,
      onFetchSingleSuccess: onFetchSingleSuccess,
      onFetchSingleError: onFetchSingleError,
      onCreateStart: onCreateStart,
      onCreateSuccess: onCreateSuccess,
      onCreateError: onCreateError,
      onUpdateStart: onUpdateStart,
      onUpdateSuccess: onUpdateSuccess,
      onUpdateError: onUpdateError,
      onReplaceStart: onReplaceStart,
      onReplaceSuccess: onReplaceSuccess,
      onReplaceError: onReplaceError,
      onDestroyStart: onDestroyStart,
      onDestroySuccess: onDestroySuccess,
      onDestroyError: onDestroyError
    }),

    mutations: (0, _createMutations2.default)({
      mutations: mutations,
      idAttribute: idAttribute,
      only: only
    }),

    getters: (0, _createGetters2.default)({ getters: getters })
  };
};

exports.default = createCrud;

/**
 * Export client in case user want's to add interceptors.
 */

exports.client = _client2.default;