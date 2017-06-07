import * as React from "react";
import Form, {ValidationResultInterface} from './Form';

export interface ItemInterface{
  title: string;
  questions: {id:number|string,title: string,type: string, choices: any[]}[];
}


export interface Props { 
  item: ItemInterface;
  values: any;
  validateData(data: any): ValidationResultInterface; 
  cancel(): void;
  onSubmit(error: any, data: any): void;
}

export interface State { 

}

export default class Assessment extends React.Component<Props, State> {
    constructor(props){
      super(props);
    }
    componentWillMount () {
   
      //window.scrollTo(0,0);
    }

    componentWillReceiveProps(nextProps) {
    
    }

    render() {
        const {item, onSubmit, validateData,cancel,values} = this.props;
        return (<Form values={values} items={item.questions} cancel={cancel} validateData={validateData} onSubmit={onSubmit} />);
    }
}