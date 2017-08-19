import * as React from "react";
import Home from './Home';
import Assessments from './Assessments';
import { Route } from 'react-router-dom';


export interface Props { 

}

export interface State { 

}


export default class AppRoutes extends React.Component<Props, State> {

    render() {
        return (<div>
                    <Route exact path="/" component={Home} />
                    <Route path="/assessments" component={Assessments} />
                </div>
                  );
    }
}