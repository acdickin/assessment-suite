import * as React from "react";
import AssessmentComponent from '../components/Assessment';
import {assessments, AssessmentInterface} from '../res/data/assessments';
import AssessmentResultContainer from './AssessmentResult';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {AssessmentProps} from './assessments/interfaces'

export interface Props { 
  item: AssessmentInterface;
  setPageTitle?(title:string): void;
  onSubmit?(error: any, data: any,assessment: AssessmentInterface):void;
  values?: any;
  onCancel?(error: any, assessment: AssessmentInterface): void;
}

export interface State { 
  isComplete: boolean;
  values: any;
}

export default class Assessment extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    values: false,
    setPageTitle: (title: string) => {},
    onSubmit: (error: any, data: any,assessment: AssessmentInterface) => {}
  }
  constructor(props){
    super(props);
    this.state = {
      isComplete: false,
      values: false
    }
  }

  componentDidMount(){
    const {setPageTitle,item} = this.props;
    setPageTitle(item.title);
  }

  handleSubmitData = (error:any, data: any) => {
    const {onSubmit,item} = this.props;
    onSubmit(error, data,item);
    if(!error){
      this.handleSetComplete();
    }
    
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
    const {onCancel,item} = this.props;
    onCancel(null,item);
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
    const {item,onSubmit} = this.props;
     let content;
     if(this.state.isComplete){
       content = <AssessmentResultContainer backClick={this.handleResultBack} results={this.state.values} assessment={item} />;
     }else{
       content = <AssessmentComponent item={item} values={this.handleFormValues()} cancel={this.handleCancel} onSubmit={this.handleSubmitData} validateData={this.handleValidateData} />;
     }
     return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>{content}</MuiThemeProvider>;
  }
}