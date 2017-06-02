"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}
function loadRoute(cb) {
    return function (module) { return cb(null, module.default); };
}
exports.asynRouteMaker = function (config) {
    if (config === void 0) { config = {}; }
    return function (route, component, childRoutes, indexComponent) {
        if (childRoutes === void 0) { childRoutes = []; }
        if (indexComponent === void 0) { indexComponent = null; }
        return {
            path: route,
            getComponent: function (location, cb) {
                component.then(loadRoute(cb)).catch(errorLoading);
            },
            childRoutes: childRoutes,
            indexRoute: indexComponent ? { component: indexComponent } : null
        };
    };
};
exports.syncRoute = function (route, component, childRoutes, indexComponent) {
    if (childRoutes === void 0) { childRoutes = []; }
    if (indexComponent === void 0) { indexComponent = null; }
    return {
        path: route,
        component: component,
        childRoutes: childRoutes,
        indexRoute: indexComponent ? { component: indexComponent } : null
    };
};
//# sourceMappingURL=helper.js.map