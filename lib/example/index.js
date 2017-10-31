"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Theme_1 = require("./components/Theme");
var AppRoutes_1 = require("./components/AppRoutes");
var AppBarPage_1 = require("./components/AppBarPage");
//import { AppContainer } from 'react-hot-loader';
var injectTapEventPlugin = require("react-tap-event-plugin");
var react_router_dom_1 = require("react-router-dom");
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
var render = function () {
    ReactDOM.render(React.createElement(Theme_1.default, null,
        React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement(AppBarPage_1.default, null,
                React.createElement(AppRoutes_1.default, null)))), document.getElementById("spaApp"));
};
render();
// Hot Module Replacement API. Only used when running the dev server.
/*
if ((module as any).hot) {
  (module as any).hot.accept('./Provider', () => {
    render(Provider)
  });
}
*/
