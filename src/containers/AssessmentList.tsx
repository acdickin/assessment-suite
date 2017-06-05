import * as React from "react";
import AssessmentResultComponent from '../components/AssessmentResult';
import {AssessmentInterface} from '../res/data/assessments';
import {GridList, GridTile} from 'material-ui/GridList';

declare module 'react' { //See https://github.com/zilverline/react-tap-event-plugin/issues/58
    interface HTMLProps<T> {
        onTouchTap?: React.EventHandler<React.TouchEvent<T>>;
    }
}


export interface Props { 
  assessments: AssessmentInterface[];
  itemClick(assessment: AssessmentInterface): void;
  setPageTitle?(title:string): void;
  numCols: number;
}

export interface State { 
  numCols: number;
}

export default class AssessmentList extends React.Component<Props, State> {
  
  public static defaultProps: Partial<Props> = {
    setPageTitle: (title: string) => {},
    numCols: null
  }

  
  constructor(props){
    super(props);
    this.state = {
      numCols: this.handleGetCols()
    };

  }

  handleItemClick = (assessment: AssessmentInterface) => {
    const {itemClick} = this.props;

    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      itemClick(assessment);
    }
  }

  componentDidMount(){
    const {setPageTitle} = this.props;
    setPageTitle("Assessments");

    !this.props.numCols && this.registerWidthListenter();

  }

  registerWidthListenter = () => {
    var _timeOutResizeId = null;
    window.onresize = () => {
       if(_timeOutResizeId){
         clearTimeout(_timeOutResizeId);
       }
       _timeOutResizeId = setTimeout(
              () => {
                 const newCols = this.handleGetCols();
                 if(this.state.numCols !== newCols){
                   this.setState({
                     numCols: newCols
                   });
                 }
              },
            1000);
      
    }
  }

  handleGetCols = () => {
    let cols = this.props.numCols
    if(!cols){
      cols = this.handleColCount();
    }
    console.log(cols);
    return cols
  }

  handleColCount = () => {
    const width = window.innerWidth;
    if(!width){
      return 1;
    }
    if(width > 900){
      return 4;
    }
    if(width > 600){
      return 2;
    }
    return 1;
  }


  render(){
    const {assessments} = this.props;
    return <div>
            <GridList
              cols={this.state.numCols}
              cellHeight={200}
            >
              {assessments.map(assess => {
                return         (
                                  <GridTile
                                    onTouchTap={this.handleItemClick(assess)}
                                    title={assess.title}
                                    key={"assess" + assess.id}
                                  >
                                    <img src={assess.image} />
                                  </GridTile>
                                );
              })}
            </GridList>
            </div>;
  }
}