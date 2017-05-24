"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_redux_1 = require("react-router-redux");
var actions_1 = require("../actions");
/**
 * Eventually this data will come from api
 * @type {[type]}
 */
var navigationIds = [];
var navigationTree = {};
var defaultNav = {
    id: '-1',
    name: 'Default',
    routes: [],
    level: 1,
    pathname: '',
    childrenIds: []
};
exports.navigatinDefaults = {
    tree: {},
    treeIds: [],
    menus: {
        primary: ''
    },
    paths: {
        current: defaultNav,
        last: null,
        parent: null
    }
};
function findRoute(path) {
    for (var id in navigationIds) {
        var navItem = navigationTree[navigationIds[id]];
        var foundRoute = navHasPath(navItem, path);
        if (foundRoute) {
            return foundRoute;
        }
    }
    return false;
}
exports.findRoute = findRoute;
function getRouteNodeId(path, cb) {
    for (var id in navigationIds) {
        var navItem = navigationTree[navigationIds[id]];
        var foundRoute = navHasPath(navItem, path);
        if (foundRoute) {
            return navigationIds[id];
        }
    }
    return false;
}
exports.getRouteNodeId = getRouteNodeId;
function navHasPath(navItem, path) {
    var routes = navItem.routes;
    if (routes.indexOf(path) > -1) {
        return navItem;
    }
    else {
        for (var j = 0; j < routes.length; j++) {
            var route = routes[j];
            if (route instanceof RegExp) {
                if (route.test(path)) {
                    return navItem;
                }
            }
        }
    }
}
exports.navHasPath = navHasPath;
function getParent(route, lastRoute) {
    var parent = typeof navigationTree[route.parentId] !== 'undefined' ? __assign({}, navigationTree[route.parentId]) : null;
    if (parent && parent.id === lastRoute.id) {
        parent = __assign({}, parent, { pathname: lastRoute.pathname });
    }
    return parent;
}
exports.getParent = getParent;
function paths(state, action) {
    switch (action.type) {
        case react_router_redux_1.LOCATION_CHANGE:
            if (action.payload.action.toLowerCase() !== 'push') {
                return state;
            }
            var newRoute = findRoute(action.payload.pathname);
            if (!newRoute) {
                throw new Error("Unregistered route " + action.payload.pathname);
            }
            if (state.current && newRoute && newRoute.id !== state.current.id) {
                return __assign({}, state, { current: __assign({}, newRoute, { pathname: action.payload.pathname }), last: state.current, parent: getParent(newRoute, state.current) });
            }
            if (state.current && newRoute && newRoute.id === state.current.id &&
                state.last.pathname !== newRoute.pathname) {
                return __assign({}, state, { current: __assign({}, newRoute, { pathname: action.payload.pathname }), last: state.current, parent: getParent(newRoute, state.current) });
            }
    }
    return state;
}
exports.paths = paths;
exports.navigation = function (state, action) {
    if (state === void 0) { state = exports.navigatinDefaults; }
    switch (action.type) {
        case actions_1.CONFIG_T2_NAVIGATION:
            navigationTree = action.config.tree;
            navigationIds = action.config.treeIds;
            return __assign({}, state, { tree: action.config.tree || state.tree, treeIds: action.config.treeIds || state.treeIds, paths: paths(state.paths, action) });
        case react_router_redux_1.LOCATION_CHANGE:
            if (action.payload.pathname !== state.paths.current) {
                return __assign({}, state, { paths: paths(state.paths, action) });
            }
    }
    return state;
};
exports.default = exports.navigation;
//# sourceMappingURL=index.js.map