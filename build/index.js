/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/filters/index.js":
/*!******************************!*\
  !*** ./src/filters/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5__);

/* eslint-disable no-unused-vars */





const changeParagraphIcon = (settings, name) => {
  if (name === 'core/paragraph') {
    return {
      ...settings,
      icon: 'twitter'
    };
  }
  return settings;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'blocks-u/change-paragraph-icon', changeParagraphIcon);
const modifyEdit = BlockEdit => {
  return props => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, "Custom Panel")));
  };
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'blocks-u/change-edit', modifyEdit);

/* domReady( () => {
	unregisterBlockType( 'core/paragraph' );
} ); */

/***/ }),

/***/ "./src/format-types/highlight.js":
/*!***************************************!*\
  !*** ./src/format-types/highlight.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const HighlightFormatButton = ({
  isActive,
  value,
  onChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichTextToolbarButton, {
    icon: "edit",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Highlight', 'blocks-u'),
    onClick: () => {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.toggleFormat)(value, {
        type: 'blocks-u/highlight',
        attributes: {
          style: 'background-color: #f0ff00'
        }
      }));
    },
    isActive: isActive
  });
};
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.registerFormatType)('blocks-u/highlight', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Highlight', 'blocks-u'),
  tagName: 'span',
  className: 'yellow-text',
  edit: HighlightFormatButton
});

/***/ }),

/***/ "./src/plugins/sidebar.js":
/*!********************************!*\
  !*** ./src/plugins/sidebar.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);






const MetaFieldsInputs = () => {
  const subtitleValue = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return select('core/editor').getEditedPostAttribute('meta')?._blocks_u_post_subtitle || '';
  });
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core/editor');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Subtitle Options', 'blocks-u')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Subtitle Options', 'blocks-u'),
    value: subtitleValue,
    onChange: value => editPost({
      meta: {
        _blocks_u_post_subtitle: value
      }
    })
  }));
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('blocks-u-plugin', {
  render: () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
      title: "My panel",
      icon: "admin-collapse"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Document Setting Panel")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginPostStatusInfo, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Status info content")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginPrePublishPanel, {
      title: "Pre publish content"
    }, "Pre publish content"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginPostPublishPanel, {
      title: "Post publish content"
    }, "Post publish content"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginMoreMenuItem, {
      icon: "admin-customizer"
      // eslint-disable-next-line no-alert, no-undef
      ,
      onClick: () => alert(true)
    }, "Plugin Extra Item"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginBlockSettingsMenuItem, {
      allowedBlocks: ['core/paragraph'],
      icon: "admin-home",
      label: "New Item"
      // eslint-disable-next-line no-alert, no-undef
      ,
      onClick: () => alert(true)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
      name: "meta-fields-sidebar",
      icon: "admin-settings",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Options', 'blocks-u')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MetaFieldsInputs, null)));
  }
});

/***/ }),

/***/ "./src/todos-store/actions.js":
/*!************************************!*\
  !*** ./src/todos-store/actions.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: function() { return /* binding */ addTodo; },
/* harmony export */   populateTodos: function() { return /* binding */ populateTodos; },
/* harmony export */   toggleTodo: function() { return /* binding */ toggleTodo; },
/* harmony export */   updateTodo: function() { return /* binding */ updateTodo; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



function* addTodo(title) {
  try {
    const todo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO,
      todo
    };
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not create todo.');
  }
}
function* toggleTodo(todo, index) {
  try {
    yield updateTodo({
      ...todo,
      loading: true
    }, index);
    const updatedTodo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.toggleTodo)(todo);
    return updateTodo(updatedTodo, index);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not update todo.');
  }
}
const updateTodo = (todo, index) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TODO,
    index,
    todo
  };
};
const populateTodos = todos => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.POPULATE_TODOS,
    todos
  };
};

/***/ }),

/***/ "./src/todos-store/controls.js":
/*!*************************************!*\
  !*** ./src/todos-store/controls.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: function() { return /* binding */ createTodo; },
/* harmony export */   fetchTodos: function() { return /* binding */ fetchTodos; },
/* harmony export */   toggleTodo: function() { return /* binding */ toggleTodo; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");

const fetchTodos = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_TODOS
  };
};
const createTodo = title => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.CREATE_TODO,
    title
  };
};
const toggleTodo = todo => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_TODO,
    todo
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  FETCH_TODOS() {
    return window.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Could not fetch');
    });
  },
  CREATE_TODO({
    title
  }) {
    return window.fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed: false,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Could not create todo.');
    });
  },
  TOGGLE_TODO({
    todo
  }) {
    return window.fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !todo.completed
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Could not update todo.');
    });
  }
});

/***/ }),

/***/ "./src/todos-store/index.js":
/*!**********************************!*\
  !*** ./src/todos-store/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/todos-store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/todos-store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/todos-store/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/todos-store/resolvers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");






const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('blocks-u/todos', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"]
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/todos-store/reducer.js":
/*!************************************!*\
  !*** ./src/todos-store/reducer.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");

const DEFAULT_STATE = {
  items: []
};
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.todo]
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.POPULATE_TODOS:
      return {
        ...state,
        items: action.todos
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TODO:
      {
        const itemsCopy = [...state.items];
        itemsCopy[action.index] = action.todo;
        return {
          ...state,
          items: itemsCopy
        };
      }
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/todos-store/resolvers.js":
/*!**************************************!*\
  !*** ./src/todos-store/resolvers.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodos: function() { return /* binding */ getTodos; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/todos-store/actions.js");



function* getTodos() {
  try {
    // eslint-disable-next-line no-unused-vars
    const todos = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.fetchTodos)();
    return (0,_actions__WEBPACK_IMPORTED_MODULE_2__.populateTodos)(todos);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not fetch todos');
  }
}

/***/ }),

/***/ "./src/todos-store/selectors.js":
/*!**************************************!*\
  !*** ./src/todos-store/selectors.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDoneTodos: function() { return /* binding */ getDoneTodos; },
/* harmony export */   getTodos: function() { return /* binding */ getTodos; },
/* harmony export */   getTodosNumber: function() { return /* binding */ getTodosNumber; },
/* harmony export */   getUnDoneTodos: function() { return /* binding */ getUnDoneTodos; }
/* harmony export */ });
const getTodos = state => {
  return state.items;
};
const getTodosNumber = state => {
  return state.items.length;
};
const getDoneTodos = state => {
  return state.items.filter(todo => todo.completed).length;
};
const getUnDoneTodos = state => {
  return state.items.filter(todo => !todo.completed).length;
};

/***/ }),

/***/ "./src/todos-store/types.js":
/*!**********************************!*\
  !*** ./src/todos-store/types.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_TODO: function() { return /* binding */ ADD_TODO; },
/* harmony export */   CREATE_TODO: function() { return /* binding */ CREATE_TODO; },
/* harmony export */   FETCH_TODOS: function() { return /* binding */ FETCH_TODOS; },
/* harmony export */   POPULATE_TODOS: function() { return /* binding */ POPULATE_TODOS; },
/* harmony export */   TOGGLE_TODO: function() { return /* binding */ TOGGLE_TODO; },
/* harmony export */   UPDATE_TODO: function() { return /* binding */ UPDATE_TODO; }
/* harmony export */ });
const ADD_TODO = 'ADD_TODO';
const FETCH_TODOS = 'FETCH_TODOS';
const POPULATE_TODOS = 'POPULATE_TODOS';
const CREATE_TODO = 'CREATE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["richText"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-store */ "./src/todos-store/index.js");
/* harmony import */ var _plugins_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/sidebar */ "./src/plugins/sidebar.js");
/* harmony import */ var _format_types_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format-types/highlight */ "./src/format-types/highlight.js");
/* harmony import */ var _filters_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/index */ "./src/filters/index.js");




}();
/******/ })()
;
//# sourceMappingURL=index.js.map