"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
//import { AppContainer } from 'react-hot-loader';
var injectTapEventPlugin = require("react-tap-event-plugin");
var _1 = require("../");
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
function testOnSuccess(data) {
    console.log(data);
    console.log('testOnSuccess');
}
/*
            <h1>Friendship</h1>
        
            <FriendShipAssessment />
          
            <h1>Marital Satisfaction</h1>

            <MaritalSatisfaction  />

            <h1>Post Deployment Support</h1>

            <PostDeploymentSocialSupport />

            <h1>Social Support</h1>
            
            <SocialSupport />
*/
var render = function () {
    ReactDOM.render(React.createElement("div", { style: { padding: 20 } },
        React.createElement("h1", null, "Marital Satisfaction"),
        React.createElement(_1.MaritalSatisfaction, { onSuccess: testOnSuccess })), document.getElementById("spaApp"));
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
//# sourceMappingURL=index.js.map