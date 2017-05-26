import * as React from "react";
import LinearGauge from 'local-t2-linear-gage';
import RaisedButton from 'material-ui/RaisedButton';
export interface Props { 
  minScore: number;
  maxScore: number;
  score: number;
  assessment: any;
  result: any;
  middleScore: number;
  highIsGood: boolean;
  id:string;
  backClick(): void;
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
        const {minScore,maxScore,middleScore,highIsGood,score,result,backClick,id} = this.props;
   

        return (
          <div>
            <LinearGauge id={id} middleScore={middleScore} highIsGood={highIsGood} minScore={minScore} maxScore={maxScore} result={score} />

            <h2>{result.title}</h2>
            <RaisedButton style={{float: 'right'}}label="Back" onTouchTap={() => backClick()} />
            <div dangerouslySetInnerHTML={{__html: result.description}} />
            <h3>Recommendations</h3>
            <div dangerouslySetInnerHTML={{__html: result.recommendations}} />
            <RaisedButton label="Back" onTouchTap={() => backClick()} />
          </div>
        );
    }
}

