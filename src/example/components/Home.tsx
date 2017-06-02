import * as React from "react";
import { Link } from 'react-router';

import {
  assessments,
  createRoutes
} from '../../';
const {FriendShip} = assessments;


export interface Props { 

}

export interface State { 

}


export default class Home extends React.Component<Props, State> {
    render() {
        return (<div>
                  <h1>Home Page</h1>
                  <Link to="/main/assessments">Assessments List</Link>
                  <FriendShip />
                </div>
                  );
    }
}