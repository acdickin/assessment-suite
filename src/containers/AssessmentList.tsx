import * as React from "react";
import AssessmentResultComponent from '../components/AssessmentResult';
import {AssessmentInterface} from '../res/data/assessments';

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
  }

  handleItemClick = (assessment: AssessmentInterface) => {
    const {itemClick} = this.props;

    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      itemClick(assessment);
    }
  }
/*
              {assessments.map(assess => {
                 <div onTouchTap={this.handleItemClick(assess)}>
                   {assess.id}: {assess.title}
                 </div>
              })}
 */
  render(){
   // const {assessments} = this.props;
    return <div>

            </div>;
  }
}