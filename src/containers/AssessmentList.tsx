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
}

export interface State { 

}

export default class AssessmentList extends React.Component<Props, State> {
  
  public static defaultProps: Partial<Props> = {

  }

  
  constructor(props){
    super(props);
    console.log(props);
  }

  handleItemClick = (assessment: AssessmentInterface) => {
    const {itemClick} = this.props;

    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      itemClick(assessment);
    }
  }

  render(){
    const {assessments} = this.props;
    return <div>
              <h1>Assessments List</h1>
            <GridList
              cols={2}
              cellHeight={200}
            >
              {assessments.map(assess => {
                return         (
                                 
                                  <GridTile
                                    onTouchTap={this.handleItemClick(assess)}
                                    title={assess.title}
                                  >
                                    <img src={assess.image} />
                                  </GridTile>
                                  
                                );
              })}

            </GridList>
            </div>;
  }
}