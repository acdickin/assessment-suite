import * as React from "react";
import * as ReactDOM from "react-dom";
//import { AppContainer } from 'react-hot-loader';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import FriendShipAssessment from './containers/FriendShipAssessment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
function testOnSuccess(data){
  console.log(data);
  console.log('testOnSuccess');
}

const render = () => {
    ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                        <FriendShipAssessment onSuccess={testOnSuccess} />
                    </MuiThemeProvider>,
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




