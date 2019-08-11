'use strict';

exports.__esModule = true;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create default mutations and merge them with mutations defined by a user.
 */
var createMutations = function createMutations(_ref) {
  var mutations = _ref.mutations,
      only = _ref.only,
      idAttribute = _ref.idAttribute;

  var crudMutations = {};

  if (only.includes('FETCH_LIST')) {
    Object.assign(crudMutations, {
      fetchListStart: function fetchListStart(state) {
        state.isFetchingList = true;
      },
      fetchListSuccess: function fetchListSuccess(state, response) {
        var data = response.data;


        data.forEach(function (m) {
          _vue2.default.set(state.entities, m[idAttribute].toString(), m);
        });
        state.list = data.map(function (m) {
          return m[idAttribute].toString();
        });
        state.isFetchingList = false;
        state.fetchListError = null;
      },
      fetchListError: function fetchListError(state, err) {
        state.list = [];
        state.fetchListError = err;
        state.isFetchingList = false;
      }
    });
  }

  if (only.includes('FETCH_SINGLE')) {
    Object.assign(crudMutations, {
      fetchSingleStart: function fetchSingleStart(state) {
        state.isFetchingSingle = true;
      },
      fetchSingleSuccess: function fetchSingleSuccess(state, response) {
        var data = response.data;

        var id = data[idAttribute].toString();

        _vue2.default.set(state.entities, id, data);
        state.isFetchingSingle = false;
        state.fetchSingleError = null;
      },
      fetchSingleError: function fetchSingleError(state, err) {
        state.fetchSingleError = err;
        state.isFetchingSingle = false;
      }
    });
  }

  if (only.includes('CREATE')) {
    Object.assign(crudMutations, {
      createStart: function createStart(state) {
        state.isCreating = true;
      },
      createSuccess: function createSuccess(state, response) {
        var data = response.data;

        if (data) {
          var id = data[idAttribute].toString();
          _vue2.default.set(state.entities, id, data);
        }
        state.isCreating = false;
        state.createError = null;
      },
      createError: function createError(state, err) {
        state.createError = err;
        state.isCreating = false;
      }
    });
  }

  if (only.includes('UPDATE')) {
    Object.assign(crudMutations, {
      updateStart: function updateStart(state) {
        state.isUpdating = true;
      },
      updateSuccess: function updateSuccess(state, response) {
        var data = response.data;


        var id = data[idAttribute].toString();

        _vue2.default.set(state.entities, id, data);

        var listIndex = state.list.indexOf(id);

        if (listIndex >= 0) {
          _vue2.default.set(state.list, listIndex, id);
        }

        state.isUpdating = false;
        state.updateError = null;
      },
      updateError: function updateError(state, err) {
        state.updateError = err;
        state.isUpdating = false;
      }
    });
  }

  if (only.includes('REPLACE')) {
    Object.assign(crudMutations, {
      replaceStart: function replaceStart(state) {
        state.isReplacing = true;
      },
      replaceSuccess: function replaceSuccess(state, response) {
        var data = response.data;


        var id = data[idAttribute].toString();

        _vue2.default.set(state.entities, id, data);

        var listIndex = state.list.indexOf(id);

        if (listIndex >= 0) {
          _vue2.default.set(state.list, listIndex, id);
        }

        state.isReplacing = false;
        state.replaceError = null;
      },
      replaceError: function replaceError(state, err) {
        state.replaceError = err;
        state.isReplacing = false;
      }
    });
  }

  if (only.includes('DESTROY')) {
    Object.assign(crudMutations, {
      destroyStart: function destroyStart(state) {
        state.isDestroying = true;
      },
      destroySuccess: function destroySuccess(state, id) {
        var listIndex = state.list.indexOf(id.toString());

        if (listIndex >= 0) {
          _vue2.default.delete(state.list, listIndex);
        }

        _vue2.default.delete(state.entities, id.toString());

        state.isDestroying = false;
        state.destroyError = null;
      },
      destroyError: function destroyError(state, err) {
        state.destroyError = err;
        state.isDestroying = false;
      }
    });
  }

  return Object.assign(crudMutations, mutations);
};

exports.default = createMutations;