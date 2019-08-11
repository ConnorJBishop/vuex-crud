'use strict';

exports.__esModule = true;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createActions = function createActions(_ref) {
  var actions = _ref.actions,
      rootUrl = _ref.rootUrl,
      client = _ref.client,
      only = _ref.only,
      parseList = _ref.parseList,
      parseSingle = _ref.parseSingle,
      parseError = _ref.parseError,
      onFetchListStart = _ref.onFetchListStart,
      onFetchListSuccess = _ref.onFetchListSuccess,
      onFetchListError = _ref.onFetchListError,
      onFetchSingleStart = _ref.onFetchSingleStart,
      onFetchSingleSuccess = _ref.onFetchSingleSuccess,
      onFetchSingleError = _ref.onFetchSingleError,
      onCreateStart = _ref.onCreateStart,
      onCreateSuccess = _ref.onCreateSuccess,
      onCreateError = _ref.onCreateError,
      onUpdateStart = _ref.onUpdateStart,
      onUpdateSuccess = _ref.onUpdateSuccess,
      onUpdateError = _ref.onUpdateError,
      onReplaceStart = _ref.onReplaceStart,
      onReplaceSuccess = _ref.onReplaceSuccess,
      onReplaceError = _ref.onReplaceError,
      onDestroyStart = _ref.onDestroyStart,
      onDestroySuccess = _ref.onDestroySuccess,
      onDestroyError = _ref.onDestroyError;
  var FETCH_LIST = 'FETCH_LIST',
      FETCH_SINGLE = 'FETCH_SINGLE',
      CREATE = 'CREATE',
      UPDATE = 'UPDATE',
      REPLACE = 'REPLACE',
      DESTROY = 'DESTROY';

  var crudActions = {};
  var isUsingCustomUrlGetter = typeof rootUrl === 'function';

  var urlGetter = function urlGetter(_ref2) {
    var customUrl = _ref2.customUrl,
        customUrlFnArgs = _ref2.customUrlFnArgs,
        id = _ref2.id,
        type = _ref2.type;

    if (typeof customUrl === 'string') {
      return customUrl;
    } else if (isUsingCustomUrlGetter) {
      var argsArray = Array.isArray(customUrlFnArgs) ? customUrlFnArgs : [customUrlFnArgs];
      var args = [id || null, type || null].concat(argsArray);
      return rootUrl.apply(undefined, _toConsumableArray(args));
    }

    return id ? rootUrl + '/' + id : rootUrl;
  };

  if (only.includes(FETCH_LIST)) {
    Object.assign(crudActions, {
      onFetchListStart: onFetchListStart,
      onFetchListSuccess: onFetchListSuccess,
      onFetchListError: onFetchListError,
      /**
       * GET /api/<resourceName>
       *
       * Fetch list of resources.
       */
      fetchList: function fetchList(_ref3) {
        var commit = _ref3.commit,
            dispatch = _ref3.dispatch;

        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            config = _ref4.config,
            customUrl = _ref4.customUrl,
            _ref4$customUrlFnArgs = _ref4.customUrlFnArgs,
            customUrlFnArgs = _ref4$customUrlFnArgs === undefined ? [] : _ref4$customUrlFnArgs;

        commit('fetchListStart');
        dispatch('onFetchListStart');
        return client.get(urlGetter({ customUrl: customUrl, customUrlFnArgs: customUrlFnArgs, type: FETCH_LIST }), config).then(function (res) {
          var parsedResponse = parseList(res);

          commit('fetchListSuccess', parsedResponse);
          dispatch('onFetchListSuccess', parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('fetchListError', parsedError);
          dispatch('onFetchListError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes(FETCH_SINGLE)) {
    Object.assign(crudActions, {
      onFetchSingleStart: onFetchSingleStart,
      onFetchSingleSuccess: onFetchSingleSuccess,
      onFetchSingleError: onFetchSingleError,
      /**
       * GET /api/<resourceName>/:id
       *
       * Fetch single resource.
       */
      fetchSingle: function fetchSingle(_ref5) {
        var commit = _ref5.commit,
            dispatch = _ref5.dispatch;

        var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            id = _ref6.id,
            config = _ref6.config,
            customUrl = _ref6.customUrl,
            _ref6$customUrlFnArgs = _ref6.customUrlFnArgs,
            customUrlFnArgs = _ref6$customUrlFnArgs === undefined ? [] : _ref6$customUrlFnArgs;

        commit('fetchSingleStart');
        dispatch('onFetchSingleStart');
        return client.get(urlGetter({
          customUrl: customUrl,
          customUrlFnArgs: customUrlFnArgs,
          type: FETCH_SINGLE,
          id: id
        }), config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('fetchSingleSuccess', parsedResponse);
          dispatch('onFetchSingleSuccess', parsedResponse);

          return res;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('fetchSingleError', parsedError);
          dispatch('onFetchSingleError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes(CREATE)) {
    Object.assign(crudActions, {
      onCreateStart: onCreateStart,
      onCreateSuccess: onCreateSuccess,
      onCreateError: onCreateError,
      /**
       * POST /api/<resourceName>
       *
       * Create a new reource.
       */
      create: function create(_ref7) {
        var commit = _ref7.commit,
            dispatch = _ref7.dispatch;

        var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            data = _ref8.data,
            config = _ref8.config,
            customUrl = _ref8.customUrl,
            _ref8$customUrlFnArgs = _ref8.customUrlFnArgs,
            customUrlFnArgs = _ref8$customUrlFnArgs === undefined ? [] : _ref8$customUrlFnArgs;

        commit('createStart');
        dispatch('onCreateStart');
        return client.post(urlGetter({ customUrl: customUrl, customUrlFnArgs: customUrlFnArgs, type: CREATE }), data, config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('createSuccess', parsedResponse);
          dispatch('onCreateSuccess', parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('createError', parsedError);
          dispatch('onCreateError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes(UPDATE)) {
    Object.assign(crudActions, {
      onUpdateStart: onUpdateStart,
      onUpdateSuccess: onUpdateSuccess,
      onUpdateError: onUpdateError,
      /**
       * PATCH /api/<resouceName>/:id
       *
       * Update a single resource.
       */
      update: function update(_ref9) {
        var commit = _ref9.commit,
            dispatch = _ref9.dispatch;

        var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            id = _ref10.id,
            data = _ref10.data,
            config = _ref10.config,
            customUrl = _ref10.customUrl,
            _ref10$customUrlFnArg = _ref10.customUrlFnArgs,
            customUrlFnArgs = _ref10$customUrlFnArg === undefined ? [] : _ref10$customUrlFnArg;

        commit('updateStart');
        dispatch('onUpdateStart');
        return client.patch(urlGetter({
          customUrl: customUrl,
          customUrlFnArgs: customUrlFnArgs,
          type: UPDATE,
          id: id
        }), data, config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('updateSuccess', parsedResponse);
          dispatch('onUpdateSuccess', parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('updateError', parsedError);
          dispatch('onUpdateError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes(REPLACE)) {
    Object.assign(crudActions, {
      onReplaceStart: onReplaceStart,
      onReplaceSuccess: onReplaceSuccess,
      onReplaceError: onReplaceError,
      /**
       * PUT /api/<resouceName>/:id
       *
       * Update a single resource.
       */
      replace: function replace(_ref11) {
        var commit = _ref11.commit,
            dispatch = _ref11.dispatch;

        var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            id = _ref12.id,
            data = _ref12.data,
            config = _ref12.config,
            customUrl = _ref12.customUrl,
            _ref12$customUrlFnArg = _ref12.customUrlFnArgs,
            customUrlFnArgs = _ref12$customUrlFnArg === undefined ? [] : _ref12$customUrlFnArg;

        commit('replaceStart');
        dispatch('onReplaceStart');
        return client.put(urlGetter({
          customUrl: customUrl,
          customUrlFnArgs: customUrlFnArgs,
          type: REPLACE,
          id: id
        }), data, config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('replaceSuccess', parsedResponse);
          dispatch('onReplaceSuccess', parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('replaceError', parsedError);
          dispatch('onReplaceError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  if (only.includes(DESTROY)) {
    Object.assign(crudActions, {
      onDestroyStart: onDestroyStart,
      onDestroySuccess: onDestroySuccess,
      onDestroyError: onDestroyError,
      /**
       * DELETE /api/<resouceName>/:id
       *
       * Destroy a single resource.
       */
      destroy: function destroy(_ref13) {
        var commit = _ref13.commit,
            dispatch = _ref13.dispatch;

        var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            id = _ref14.id,
            config = _ref14.config,
            customUrl = _ref14.customUrl,
            _ref14$customUrlFnArg = _ref14.customUrlFnArgs,
            customUrlFnArgs = _ref14$customUrlFnArg === undefined ? [] : _ref14$customUrlFnArg;

        commit('destroyStart');
        dispatch('onDestroyStart');
        return client.delete(urlGetter({
          customUrl: customUrl,
          customUrlFnArgs: customUrlFnArgs,
          type: DESTROY,
          id: id
        }), config).then(function (res) {
          var parsedResponse = parseSingle(res);

          commit('destroySuccess', id, parsedResponse);
          dispatch('onDestroySuccess', id, parsedResponse);

          return parsedResponse;
        }).catch(function (err) {
          var parsedError = parseError(err);

          commit('destroyError', parsedError);
          dispatch('onDestroyError', parsedError);

          return Promise.reject(parsedError);
        });
      }
    });
  }

  return Object.assign(crudActions, actions);
};

exports.default = createActions;