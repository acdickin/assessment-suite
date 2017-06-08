import * as React from "react";
import Assessment from './Assessment';
import {assessments, AssessmentInterface} from '../res/data/assessments';


export interface Props { 
  params: {id: string},
  setPageTitle?(title:string): void;
  onCancel(error: any, assessment: AssessmentInterface): void;
  onSubmit(error: any, data: any,assessment: AssessmentInterface):void;
}

export interface State { 

}

export default class AssessmentPage extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    setPageTitle: (title: string) => {}
  }

  handleSetTitle = (title: string) => {
    const {setPageTitle} = this.props;
    setPageTitle(title);
  }
  
  render(){

    const {params,onCancel} = this.props;

    const assessment = typeof assessments[params.id] !== 'undefined' ? assessments[params.id] : false;

    if(assessment){
        return <Assessment onSubmit={this.props.onSubmit} onCancel={onCancel} setPageTitle={this.handleSetTitle} item={assessment} />;
    }
    return <div>Invalid Assessment Id</div>
  }
}