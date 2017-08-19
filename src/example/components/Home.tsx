import * as React from "react";
import { Link } from 'react-router-dom';


export interface Props { 

}

export interface State { 

}


export default class Home extends React.Component<Props, State> {
    handleCancel = (error: any, assessment: any) => {
          alert("you clicked cancel");
    }

    handleSubmit = (error: any, assessment: any) => {
          alert("you clicked SUBMIT");
    }

    render() {
        return (<div>

                    <h3>Home Page</h3>

                    <Link to={'/assessments'}>To Assessments</Link>

                </div>
                  );
    }
}