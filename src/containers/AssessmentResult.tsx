import * as React from "react";
import AssessmentResultComponent from '../components/AssessmentResult';
import {AssessmentInterface} from '../res/data/assessments';


function getDescription(tally, assessment) {

      let score = assessment.scoring.filter(function (criteria) {
        if (criteria.min <= tally && criteria.max >= tally) {
          return true;
        }
        return false;
      });


      return score.length ? score[0] : assessment.scoring[0]
}

export interface Props { 
  assessment: AssessmentInterface;
  results: any;
  backClick(): void;
}

export interface State { 
    minScore: number;
    maxScore: number;
    score: number;
    result: string;
    assessment: AssessmentInterface;
    middleScore: number;
    highIsGood: boolean;
    id: string;
}

export default class AssessmentResult extends React.Component<Props, State> {
  public static defaultProps: Partial<Props>= {

  }
  
  constructor(props){
    super(props);
    this.state = this.handleAssessmentState(this.props.assessment,this.props.results);
  }

  handleAssessmentState = (assessment: AssessmentInterface,results: any) => {
    const score = assessment.calcScore(results);
    console.log(score);
    return {
      minScore: assessment.minScore,
      maxScore: assessment.maxScore,
      score: score,
      result: getDescription(score,assessment),
      assessment: assessment,
      middleScore: assessment.middleScore,
      highIsGood: assessment.scoringMode === 1,
      id: assessment.id + ''
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState(this.handleAssessmentState(nextProps.assessment,nextProps.results))
  }

  render(){

    return <AssessmentResultComponent  backClick={this.props.backClick} {...this.state} />
  }
}