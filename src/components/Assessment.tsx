import * as React from "react";
import Form, {ValidationResultInterface} from './Form';

export interface ItemInterface{
  title: string;
  questions: {id:number,title: string,type: string, choices: any[]}[];
}


export interface Props { 
  item: ItemInterface;
  values: any;
  submitData(data: any): void;
  validateData(data: any): ValidationResultInterface; 
  cancel(): void;
}

export interface State { 

}

export default class Assessment extends React.Component<Props, State> {
    constructor(props){
      super(props);
    }
    componentWillMount () {
      const {item} = this.props;
      //window.scrollTo(0,0);
    }

    componentWillReceiveProps(nextProps) {
      const {item} = nextProps;
    }

    render() {
        const {item, submitData, validateData,cancel,values} = this.props;
        return (<Form values={values} items={item.questions} cancel={cancel} validateData={validateData} submitData={submitData} />);
    }
}