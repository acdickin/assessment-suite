import * as React from "react";
import * as ReactDOM from "react-dom";
import Theme from './components/Theme';
import Home from './components/Home';
import PageContainer from './components/AppBarPage';
//import { AppContainer } from 'react-hot-loader';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, hashHistory} from 'react-router';
import {syncRoute} from '../lib/helper';
import {AssessmentInterface} from '../res/data/assessments';


import {
  assessments,
  createRoutes
} from '../';

const {
  FriendShip,
  MaritalSatisfaction,
  PostDeploymentSocialSupport,
  SocialSupport 
} = assessments;

const itemClick = (assessment: AssessmentInterface) => {
  hashHistory.push('/main/assessment/'+assessment.id);
}
const onCancel = (error: any, assessment: AssessmentInterface) => {
  console.log('me canceled');
  hashHistory.push('/main/assessments');
}

const onSubmit = (errors,data,assessment: AssessmentInterface) => {

}

const configSubroutes = {
  ids: [1,2],
  itemClick,
  onCancel,
  loadImages: true,
  onSubmit
}

const subroutes = createRoutes(configSubroutes,(assessment: AssessmentInterface) => {
  console.log(assessment);
  // assessment.image = require('../'+assessment.image);
   return assessment;
});

const siteRoutes = [

  {
    component: Theme,
    indexRoute: Home,
    childRoutes: [
      syncRoute('/',PageContainer, [], Home),
      syncRoute('/main',PageContainer, subroutes, Home)
    ]
  }
];

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const render = () => {
    ReactDOM.render(
          <div>
            <Router routes={siteRoutes} history={hashHistory} />
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




