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
var _1 = require("../");
var FriendShip = _1.assessments.FriendShip, MaritalSatisfaction = _1.assessments.MaritalSatisfaction, PostDeploymentSocialSupport = _1.assessments.PostDeploymentSocialSupport, SocialSupport = _1.assessments.SocialSupport;
var itemClick = function (assessment) {
    react_router_1.hashHistory.push('/main/assessment/' + assessment.id);
};
var onCancel = function (error, assessment) {
    react_router_1.hashHistory.push('/main/assessments');
};
var onSubmit = function (errors, data, assessment) {
};
var configSubroutes = {
    ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    itemClick: itemClick,
    onCancel: onCancel,
    loadImages: true,
    onSubmit: onSubmit,
    plain: true
};
var AssessmentRoutes = _1.createRoutes(configSubroutes, function (assessment) {
    console.log(assessment);
    // assessment.image = require('../'+assessment.image);
    return assessment;
});
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
var render = function () {
    ReactDOM.render(React.createElement("div", null,
        React.createElement(react_router_1.Router, { history: react_router_1.hashHistory },
            React.createElement(react_router_1.Route, { component: Theme_1.default },
                React.createElement(react_router_1.Route, { component: AppBarPage_1.default },
                    React.createElement(react_router_1.Route, { path: "/", component: Home_1.default }),
                    React.createElement(react_router_1.Route, { path: "/main" }, AssessmentRoutes))))), document.getElementById("spaApp"));
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
