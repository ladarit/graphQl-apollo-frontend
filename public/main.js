/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3BJ":
/*!************************************!*\
  !*** ./src/apollo/apolloClient.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var apollo_link_http_1 = __webpack_require__(/*! apollo-link-http */ "R44f");

var apollo_cache_inmemory_1 = __webpack_require__(/*! apollo-cache-inmemory */ "K/JX");

var apollo_client_1 = __webpack_require__(/*! apollo-client */ "dMq0");

var client = new apollo_client_1.default({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new apollo_link_http_1.HttpLink({
    uri: 'http://localhost:63267/api/graphqlendpoint/getsheme'
  }),
  cache: new apollo_cache_inmemory_1.InMemoryCache()
});
exports.default = client;

/***/ }),

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:3000 ./src/index.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Projects\GraphQl\graphql-apollo-frontend\graphql-relay-frontend\node_modules\webpack-dev-server\client\index.js?http://localhost:3000 */"5K/i");
module.exports = __webpack_require__(/*! ./src/index.tsx */"2YZa");


/***/ }),

/***/ "2YZa":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "q1tI");

var ReactDOM = __webpack_require__(/*! react-dom */ "i8i4");

__webpack_require__(/*! ./index.css */ "p2bk");

var App_1 = __webpack_require__(/*! root/components/containers/appContainer/App */ "eyvO"); // import * as serviceWorker from './serviceWorker.js';


var react_apollo_1 = __webpack_require__(/*! react-apollo */ "4KRT");

var apolloClient_1 = __webpack_require__(/*! ./apollo/apolloClient */ "/3BJ");

ReactDOM.render(React.createElement(react_apollo_1.ApolloProvider, {
  client: apolloClient_1.default
}, React.createElement(App_1.default, null)), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/***/ }),

/***/ "P3L+":
/*!********************************************************!*\
  !*** ./src/components/containers/appContainer/App.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"App":"App","App-logo":"App-logo","App-logo-spin":"App-logo-spin","App-header":"App-header","App-link":"App-link","CodeMirror-hints":"CodeMirror-hints","graphiql":"graphiql","modal":"modal","graphiql-container":"graphiql-container","dialogContent":"dialogContent","dialogContentDefaultSize":"dialogContentDefaultSize","dialogContentFullSize":"dialogContentFullSize","dialogButtonsContainer":"dialogButtonsContainer","dialogButton":"dialogButton","border":"border","innerBorder":"innerBorder"};

/***/ }),

/***/ "Uj2y":
/*!**********************************************************!*\
  !*** ./src/components/graphiQlViewer/GraphiQlViewer.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GraphiQL = __webpack_require__(/*! graphiql */ "vh1z");

var React = __webpack_require__(/*! react */ "q1tI");

var axios_1 = __webpack_require__(/*! axios */ "vDqi");

var dialogContainter_1 = __webpack_require__(/*! ../hoc/dialogContainter/dialogContainter */ "i9iW");

var websocketURL = 'ws://localhost:8081/askod/graphApi/Subscriptions';

var graphQLFetcher = function graphQLFetcher(graphQLParams) {
  return axios_1.default.post('http://localhost:63267/api/graphqlendpoint/getsheme', graphQLParams).then(function (resp) {
    return resp.data;
  });
};

var GraphiQlViewer =
/** @class */
function (_super) {
  __extends(GraphiQlViewer, _super);

  function GraphiQlViewer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  GraphiQlViewer.prototype.render = function () {
    return React.createElement(dialogContainter_1.default, {
      handleClose: this.props.handleClose,
      disableBackdropClick: true
    }, React.createElement(GraphiQL, {
      fetcher: graphQLFetcher
    }));
  };

  return GraphiQlViewer;
}(React.Component);

exports.default = GraphiQlViewer;

/***/ }),

/***/ "du3O":
/*!******************************************!*\
  !*** ./src/components/orders/orders.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "q1tI");

var graphql_tag_1 = __webpack_require__(/*! graphql-tag */ "lTCR");

var react_apollo_1 = __webpack_require__(/*! react-apollo */ "4KRT");

var GET_ORDERS = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    orders {\n\t\tid\n\t\tstatus\n\t}\n  }\n"], ["\n  {\n    orders {\n\t\tid\n\t\tstatus\n\t}\n  }\n"]))); // interface IAppState {
// 	showGraphiQlViewer: boolean;
// }

var Orders =
/** @class */
function (_super) {
  __extends(Orders, _super);

  function Orders() {
    return _super !== null && _super.apply(this, arguments) || this;
  } // public state: Readonly<IAppState> = {
  // 	showGraphiQlViewer: false
  // };


  Orders.prototype.render = function () {
    return React.createElement(react_apollo_1.Query, {
      query: GET_ORDERS
    }, function (_a) {
      var loading = _a.loading,
          error = _a.error,
          data = _a.data;

      if (loading) {
        return 'Loading...';
      }

      if (error) {
        return "Error! " + error.message;
      }

      return data.orders.map(function (order) {
        return React.createElement("div", {
          key: order.id
        }, order.id, order.status);
      });
    });
  };

  return Orders;
}(React.Component);

exports.default = Orders;
var templateObject_1;

/***/ }),

/***/ "eyvO":
/*!********************************************************!*\
  !*** ./src/components/containers/appContainer/App.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "q1tI");

__webpack_require__(/*! ./App.css */ "P3L+");

var core_1 = __webpack_require__(/*! @material-ui/core */ "DvoB");

var GraphiQlViewer_1 = __webpack_require__(/*! root/components/graphiQlViewer/GraphiQlViewer */ "Uj2y");

var orders_1 = __webpack_require__(/*! ../../orders/orders */ "du3O");

var App =
/** @class */
function (_super) {
  __extends(App, _super);

  function App() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      showGraphiQlViewer: false
    };

    _this.showGraphiQlViewer = function (show) {
      _this.setState({
        showGraphiQlViewer: show
      });
    };

    return _this;
  }

  App.prototype.render = function () {
    var _this = this;

    return React.createElement("div", {
      className: 'App'
    }, React.createElement(core_1.Button, {
      onClick: function onClick() {
        return _this.showGraphiQlViewer(true);
      }
    }, "showGraphiQlViewer"), this.state.showGraphiQlViewer && React.createElement(GraphiQlViewer_1.default, {
      handleClose: function handleClose() {
        return _this.showGraphiQlViewer(false);
      }
    }), React.createElement(orders_1.default, null));
  };

  return App;
}(React.Component);

exports.default = App;

/***/ }),

/***/ "i3Xp":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "dZZH"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "i3Xp";

/***/ }),

/***/ "i9iW":
/*!******************************************************************!*\
  !*** ./src/components/hoc/dialogContainter/dialogContainter.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "q1tI");

var core_1 = __webpack_require__(/*! @material-ui/core */ "DvoB");

var Fullscreen_1 = __webpack_require__(/*! @material-ui/icons/Fullscreen */ "jOUs");

var Close_1 = __webpack_require__(/*! @material-ui/icons/Close */ "ZPUd");

var DialogContainter =
/** @class */
function (_super) {
  __extends(DialogContainter, _super);

  function DialogContainter() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      isMaximized: false
    };

    _this.handleMaximize = function () {
      _this.setState({
        isMaximized: !_this.state.isMaximized
      });
    };

    return _this;
  }

  DialogContainter.prototype.render = function () {
    var dialogContentClass = 'dialogContent';
    dialogContentClass = dialogContentClass + (this.state.isMaximized ? ' dialogContentFullSize' : ' dialogContentDefaultSize');
    return React.createElement(core_1.Modal, {
      disableBackdropClick: Boolean(this.props.disableBackdropClick),
      disableAutoFocus: true,
      className: 'modal',
      onClose: this.props.handleClose,
      style: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      },
      open: true
    }, React.createElement(core_1.DialogContent, {
      className: dialogContentClass
    }, React.createElement("div", {
      className: 'dialogButtonsContainer'
    }, React.createElement(core_1.Button, {
      onClick: this.handleMaximize,
      className: 'dialogButton'
    }, React.createElement(Fullscreen_1.default, null)), React.createElement(core_1.Button, {
      onClick: this.props.handleClose,
      className: 'dialogButton'
    }, React.createElement(Close_1.default, null))), this.props.children));
  };

  return DialogContainter;
}(React.Component);

exports.default = DialogContainter;

/***/ }),

/***/ "p2bk":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "pY8A":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql-language-service-interface/dist sync \.js$ ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./GraphQLLanguageService.js": "CfMl",
	"./autocompleteUtils.js": "WmlL",
	"./getAutocompleteSuggestions.js": "reK8",
	"./getDefinition.js": "I7JT",
	"./getDiagnostics.js": "07Hx",
	"./getHoverInformation.js": "dp2Y",
	"./getOutline.js": "w8mm",
	"./index.js": "LN1l"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "pY8A";

/***/ })

/******/ });
//# sourceMappingURL=main.js.map