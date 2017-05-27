import * as React from "react";
import AssessmentComponent from '../components/Assessment';
import {AssessmentInterface} from '../res/data/assessments';
import AssessmentResultContainer from './AssessmentResult';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
export interface Props { 
  item: AssessmentInterface
  onSubmit?(error: any, data: any): void;
  values?: any;
}

export interface State { 
  isComplete: boolean;
  values: any;
}

export default class Assessment extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    values: false,
    onSubmit: (error: any, data: any):void => {
      //default
    }
  }
  constructor(props){
    super(props);
    this.state = {
      isComplete: false,
      values: false
    }
  }

  handleSubmitData = (data: any) => {
    const {onSubmit} = this.props;
    onSubmit(null, data);
    this.handleSetComplete();
    this.setState({
      values: data
    });
  }

  handleSetComplete = () => {
    this.setState({
      isComplete: true
    });
  }

  handleResultBack = () => {
    this.handleSetIncomplete();
  }

  handleSetIncomplete = () => {
    this.setState({
      isComplete: false
    });
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
    let {item} = this.props;
    let {values} = this.state;
    values = values || item.questions.reduce((acc,question) => {
                                                acc[question.id] = typeof values[question.id] !== 'undefined' ?  values[question.id] : "";
                                                return acc;
                                              },{});
    return values;
  }

  render(){
    const {item} = this.props;
     let content;
     if(this.state.isComplete){
       content = <AssessmentResultContainer backClick={this.handleResultBack} results={this.state.values} assessment={item} />;
     }else{
       content = <AssessmentComponent item={item} values={this.handleFormValues()} cancel={this.handleCancel} submitData={this.handleSubmitData} validateData={this.handleValidateData} />;
     }
     return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>{content}</MuiThemeProvider>;
  }
}