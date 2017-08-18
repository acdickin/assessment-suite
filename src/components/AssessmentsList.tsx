import * as React from 'react';
import { Route } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import {Tab} from 'material-ui/Tabs';
import {assessments, AssessmentInterface} from '../res/data/assessments';

export interface Props {
  onCancel?: (err,assessment:{id:number|string, title: string}) => void;
  basePath?: string;
  children?: JSX.Element[] | JSX.Element;
}

export interface State {
  mode?: any;
  selectedId: number;
}


export default class AssessmentsList extends React.Component<Props,any> {
  static defaultProps: Partial<Props> = {
    basePath: ''
  }
  constructor(props){
    super(props);
    this.state = {
      selectedId: null,
      mode: 'list'
    }
  }
  componentWillMount(){

  }

  componentWillUpdate(nextProps, nextState){

  }

  handleItemClick = (assessment: AssessmentInterface) => {
    this.setState({
      selectedId: assessment.id,
      mode: 'item'
    });
  }

  handleItemCancel = (err: any, assessment: AssessmentInterface) => {
    this.setState({
      selectedId: null,
      mode: 'list'
    });
  }
      // <div>
      //   <Route exact path={basePath} mode={'image'} components={this.props.children} />
      //   <Route exact path={basePath + '/:id'} components={this.props.children} />
      // </div>
  render() {
    const {basePath} = this.props;
    const children = !Array.isArray(this.props.children) ? [this.props.children] : this.props.children;


    const content = (children as any).map(item => {
        return React.cloneElement(item,{mode: this.state.mode,onCancel: this.handleItemCancel,itemClick: this.handleItemClick,selectedId: this.state.selectedId})
    });
    console.log(this.state);
    if(this.state.mode !== 'list'){
      return <div>{content}</div>;
    }


    return (
    <GridList
      cellHeight={180}
    >    
      {content}

    </GridList>
    );
  }
}