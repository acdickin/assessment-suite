import * as React from "react";
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
  gage: any;
}

export default class Assessment extends React.Component<Props, State> {
    constructor(props){
      super(props);
      this.state = {
        gage: null
      }
    }
    componentWillMount () {
     // window.scrollTo(0,0);
     const {minScore,maxScore,middleScore,highIsGood,score,result,backClick,id} = this.props;
     import('local-t2-linear-gage').then((LinearGauge) => {
       this.setState({gage: <LinearGauge.default id={id} middleScore={middleScore} highIsGood={highIsGood} minScore={minScore} maxScore={maxScore} result={score} />});
     });
     
    }

    componentWillReceiveProps(nextProps) {

    }
   
    render() {
        const {minScore,maxScore,middleScore,highIsGood,score,result,backClick,id} = this.props;
         console.log(this.props);

        return (
          <div>
            
            {this.state.gage}
            <h2>{result.title}</h2>

            <div dangerouslySetInnerHTML={{__html: result.description}} />
            <h3>Recommendations</h3>
            <div dangerouslySetInnerHTML={{__html: result.recommendations}} />
            <RaisedButton label="Back" onTouchTap={() => backClick()} />
          </div>
        );
    }
    
}

