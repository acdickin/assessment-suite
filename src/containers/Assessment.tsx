import * as React from "react";
import Form, {ValidationResultInterface} from '../components/Form';
import AssessmentComponent from '../components/Assessment';
import {FriendShiptAssessment,AssessmentInterface} from '../res/data/assessments';

export interface Props { 
  item: AssessmentInterface
  onSuccess(data: any): void;
  values?: any;
}

export interface State { 

}

export default class Assessment extends React.Component<Props, State> {

  handleSubmitData = (data: any) => {
    this.props.onSuccess(data);
  }

  handleValidateData = (data: any) => {

    let hasErrors = false;
    const reduceCb = (errors, name) => {
      if(data[name].length === 0){
        hasErrors = true;
        errors[name] = 'Required.';
      } else {
        errors[name] = '';
      }
      
      return errors;
    };

    const errors = Object.keys(data)
      .map((propName) => propName)
      .reduce(reduceCb,{});
    return {
      data: errors,
      isValid: !hasErrors
    }
  }

  handleCancel = () => {
    
  }

  handleFormValues = () => {
    let {values,item} = this.props;


    values = values || item.questions.reduce((acc,question) => {
                                                acc[question.id] = "";
                                                return acc;
                                              },{});
    return values;
  }

  render(){
    const {item,values} = this.props;
    return <AssessmentComponent item={item} values={this.handleFormValues()} cancel={this.handleCancel} submitData={this.handleSubmitData} validateData={this.handleValidateData} />;
  }
}