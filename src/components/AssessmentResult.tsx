import * as React from "react";
import LinearGauge from 'local-t2-linear-gage';
export interface Props { 
  minScore: number;
  maxScore: number;
  score: number;
  assessment: any;
  result: any;
  middleScore: number;
  highIsGood: boolean;
}

export interface State { 

}

export default class Assessment extends React.Component<Props, State> {
    componentWillMount () {
     // window.scrollTo(0,0);
    }

    componentWillReceiveProps(nextProps) {

    }
    
    render() {
        const {minScore,maxScore,middleScore,highIsGood,score,result} = this.props;
   

        return (
          <div>
            <LinearGauge middleScore={middleScore} highIsGood={highIsGood} minScore={minScore} maxScore={maxScore} result={score} />

            <h2>{result.title}</h2>
            <div dangerouslySetInnerHTML={{__html: result.description}} />
            <h3>Recommendations</h3>
            <div dangerouslySetInnerHTML={{__html: result.recommendations}} />
          
          </div>
        );
    }
}

