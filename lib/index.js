"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducers_1 = require("./reducers");
exports.navigationReducer = reducers_1.default;
var actions_1 = require("./actions");
var actions_2 = require("./actions");
exports.navigationActions = actions_2.default;
var navigationIds = [];
function addParentProperty(navTree) {
    Object.keys(navTree).map(function (propName) {
        navigationIds.push(propName);
        navTree[propName].childrenIds.forEach(function (cid) {
            navTree[cid]['parentId'] = navTree[propName].id;
        });
    });
    return navTree;
}
var firstLoad = true;
var navigationCreateMiddleware = function (treeRaw) {
    var config = {
        tree: addParentProperty(treeRaw),
        treeIds: navigationIds
    };
    return function (store) { return function (next) {
        store.dispatch(actions_1.init(config));
        return function (action) {
            return next(action);
        };
    }; };
};
exports.navigationCreateMiddleware = navigationCreateMiddleware;
//# sourceMappingURL=index.js.map