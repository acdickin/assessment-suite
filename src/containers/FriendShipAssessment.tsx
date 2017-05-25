import * as React from "react";
import Form, {ValidationResultInterface} from '../components/Form';
import AssessmentContainer from './Assessment';
import AssessmentResultContainer from './AssessmentResult';
import {FriendShiptAssessment} from '../res/data/assessments';

export interface Props { 
  onSuccess?(data: any): void;
  values?: any;
}

export interface State { 
  isComplete: boolean;
  values: any;
}

export default class FriendShipAssessment extends React.Component<Props, State> {
  public static defaultProps: Partial<Props>= {
    values: false,
    onSuccess: (data: any):void => {
      //default
    }
  }
  constructor(props){
    super(props);
    this.state = {
      isComplete: false,
      values: {}
    }
  }

  handleSuccess = (values: any) => {
    const {onSuccess} = this.props;
    onSuccess(values);
    this.setState({
      isComplete: true,
      values: values
    });
  }

  render(){
     if(this.state.isComplete){
       return <AssessmentResultContainer results={this.state.values} assessment={FriendShiptAssessment} />;
     }
     return <AssessmentContainer values={this.props.values} onSuccess={this.handleSuccess} item={FriendShiptAssessment} />;
  }
}