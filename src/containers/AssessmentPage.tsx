import * as React from "react";
import Assessment from './Assessment';
import {assessments, AssessmentInterface} from '../res/data/assessments';


export interface Props { 
  params: {id: string}
}

export interface State { 

}

export default class AssessmentPage extends React.Component<Props, State> {

  render(){
    const {params} = this.props;
    const assessment = typeof assessments[params.id] !== 'undefined' ? assessments[params.id] : false;

    if(assessment){
        return <Assessment item={assessment} />;
    }
    return <div>Invalid Assessment Id</div>
  }
}