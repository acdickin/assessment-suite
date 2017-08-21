import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import {Tab} from 'material-ui/Tabs';
import {assessments, AssessmentInterface} from '../res/data/assessments';

export interface Props {
  onCancel?: (err,assessment:{id:number|string, title: string}) => void;
  children?: JSX.Element[] | JSX.Element;
  history: {push: any};
  match: {url: any}
}

export interface State {
  selectedId: number;
}


class AssessmentsList extends React.Component<Props,any> {
  // static defaultProps: Partial<Props> = {
  //   basePath: '/'
  // }
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
    const {history,match} = this.props;
    history.push(match.url + '/' + assessment.id);
    // this.setState({
    //   selectedId: assessment.id,
    //   mode: 'item'
    // });
  }

  handleItemCancel = (err: any, assessment: AssessmentInterface) => {
    const {history,match} = this.props;

    history.push(match.url);
    // this.setState({
    //   selectedId: null,
    //   mode: 'list'
    // });
  }

  renderList = (rProps) => {

    const children = !Array.isArray(this.props.children) ? [this.props.children] : this.props.children;

    const content = (children as any).map(item => {
        return React.cloneElement(item,{mode: 'list',onCancel: this.handleItemCancel,itemClick: this.handleItemClick,selectedId: null})
    });

    return <GridList
                      cellHeight={180}
                    >    
                      {content}

                    </GridList>
  }

  renderAssessment = (rProps) => {
    const children = !Array.isArray(this.props.children) ? [this.props.children] : this.props.children;

    const content = (children as any).map(item => {
        return React.cloneElement(item,{mode: 'default',onCancel: this.handleItemCancel,itemClick: this.handleItemClick,selectedId: parseInt(rProps.match.params.id)})
    });

    return <div>{content}</div>
  }



  render(){

    return <div>
 
      <Switch>
        <Route path={'*/:id(\\d+)'} render={this.renderAssessment} />
        <Route render={this.renderList} />
      </Switch>

    </div>
  }

}

export default withRouter(AssessmentsList);