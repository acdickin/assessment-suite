"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Theme_1 = require("./components/Theme");
var Home_1 = require("./components/Home");
var AppBarPage_1 = require("./components/AppBarPage");
//import { AppContainer } from 'react-hot-loader';
var injectTapEventPlugin = require("react-tap-event-plugin");
var react_router_1 = require("react-router");
var helper_1 = require("../lib/helper");
var _1 = require("../");
var FriendShip = _1.assessments.FriendShip, MaritalSatisfaction = _1.assessments.MaritalSatisfaction, PostDeploymentSocialSupport = _1.assessments.PostDeploymentSocialSupport, SocialSupport = _1.assessments.SocialSupport;
var itemCb = function (assessment) {
    console.log(assessment);
    react_router_1.hashHistory.push('/main/assessment/' + assessment.id);
};
var configSubroutes = {
    ids: [1, 2],
    itemClick: itemCb
};
var subroutes = _1.createRoutes(configSubroutes, function (assessment) {
    console.log('..' + assessment.image);
    //assessment.image = require('..'+assessment.image);
    return assessment;
});
var siteRoutes = [
    {
        component: Theme_1.default,
        indexRoute: Home_1.default,
        childRoutes: [
            helper_1.syncRoute('/', AppBarPage_1.default, [], Home_1.default),
            helper_1.syncRoute('/main', AppBarPage_1.default, subroutes, Home_1.default)
        ]
    }
];
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
var render = function () {
    ReactDOM.render(React.createElement("div", null,
        React.createElement(react_router_1.Router, { routes: siteRoutes, history: react_router_1.hashHistory })), document.getElementById("spaApp"));
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
