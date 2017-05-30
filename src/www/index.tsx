import * as React from "react";
import * as ReactDOM from "react-dom";
//import { AppContainer } from 'react-hot-loader';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import {
  assessments 
} from '../';
const {  FriendShip,
  MaritalSatisfaction,
  PostDeploymentSocialSupport,
  SocialSupport } = assessments;
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function testOnSuccess(data){
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

const render = () => {
    ReactDOM.render(
          <div style={{padding: 20}}>
          
            <h1>Marital Satisfaction</h1>

            <MaritalSatisfaction onSuccess={testOnSuccess} />

          </div>,
        document.getElementById("spaApp")
    );
}


render();
// Hot Module Replacement API. Only used when running the dev server.
/*
if ((module as any).hot) {
  (module as any).hot.accept('./Provider', () => {
    render(Provider)
  });
}
*/




