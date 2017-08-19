import * as React from "react";
import * as ReactDOM from "react-dom";
import Theme from './components/Theme';
import AppRoutes from './components/AppRoutes';
import PageContainer from './components/AppBarPage';
//import { AppContainer } from 'react-hot-loader';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, hashHistory, Route} from 'react-router';
import {syncRoute} from '../lib/helper';
import {AssessmentInterface} from '../res/data/assessments';
import { HashRouter } from 'react-router-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const render = () => {
    ReactDOM.render(

            <Theme>
              <HashRouter>
                <PageContainer>
                  <AppRoutes />
                </PageContainer>
              </HashRouter>
            </Theme>
          ,
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




