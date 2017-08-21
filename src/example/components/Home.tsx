import * as React from "react";
import { Link } from 'react-router-dom';


export interface Props { 

}

export interface State { 

}


export default class Home extends React.Component<Props, State> {

    render() {
        return (<div>

                    <h3>Home Page</h3>

                    <Link to={'/assessments'}>To Assessments</Link>

                </div>
                  );
    }
}