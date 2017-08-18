import * as React from "react";
import AssessmentComponent from '../components/Assessment';
import {assessments, AssessmentInterface} from '../res/data/assessments';
import AssessmentResultContainer from './AssessmentResult';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {AssessmentProps} from './assessments/interfaces'
import {GridList, GridTile} from 'material-ui/GridList';

export interface Props { 
  item: AssessmentInterface;
  setPageTitle?(title:string): void;
  onSubmit?(error: any, data: any,assessment: AssessmentInterface):void;
  values?: any;
  onCancel?(error: any, assessment: AssessmentInterface): void;
  mode?: string;
  itemClick?: (assessment: AssessmentInterface) => void;
  selectedId?: number;
}

export interface State { 
  isComplete: boolean;
  values: any;
  questions: any[];
}

export default class Assessment extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    values: {},
    setPageTitle: (title: string) => {},
    onSubmit: (error: any, data: any,assessment: AssessmentInterface) => {},
    mode: 'default',
    selectedId: null,
    itemClick: (assessment: AssessmentInterface) => {}
  }
  constructor(props){
    super(props);
    this.state = {
      isComplete: false,
      values: this.props.values,
      questions: this.props.item.calcQuestions({})
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
  handleChange = (values) => {
    const {item} = this.props;
    let newQuestions = this.props.item.calcQuestions(values);
    console.log(values,newQuestions);
    this.setState({values: values});
    if(newQuestions){
      this.setState({questions: this.props.item.calcQuestions(values)});
    }
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
    const {item} = this.props;
    return item.validate(data);
  }

  handleCancel = () => {
    const {onCancel,item} = this.props;
    onCancel(null,item);
  }

  shouldDisplay = () => {
    const {selectedId,item} = this.props;
    if(selectedId){
      return selectedId === item.id;
    }
    return true;
  }

  handleItemClick = (assessment: AssessmentInterface) => {
    const {itemClick} = this.props;
    return (event) => {
      itemClick(assessment);
    }
  }

  render(){
    const {item,onSubmit} = this.props;
     let content;
     const image = require('../' + item.image);
     console.log(this.props);
     if(!this.shouldDisplay()){
       return null;
     } else {
       if(this.props.mode === 'list'){
          content = <GridTile
                      onTouchTap={this.handleItemClick(item)}
                      title={item.title}
                      key={"assess" + item.id}
                    >
                      <img src={image} />
                    </GridTile>;
       } else if (this.state.isComplete){
         content = <AssessmentResultContainer backClick={this.handleResultBack} results={this.state.values} assessment={item} />;
       }else {
         content = <AssessmentComponent questions={this.state.questions} handleChange={this.handleChange} item={item} values={this.state.values} cancel={this.handleCancel} onSubmit={this.handleSubmitData} validateData={this.handleValidateData} />;
       }



       return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>{content}</MuiThemeProvider>;
     }

  }
}