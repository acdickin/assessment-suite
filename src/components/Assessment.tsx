import * as React from "react";
import Form, {ValidationResultInterface} from './Form';

export interface ItemInterface{
  title: string;
  questions: {id:number|string,title: string,type: string, choices: any[]}[];
  calcQuestions(values: any): any;
}


export interface Props { 
  item: ItemInterface;
  values: any;
  validateData(data: any): ValidationResultInterface; 
  cancel(): void;
  onSubmit(error: any, data: any): void;
  handleChange(any);
  questions: any[];
}

export interface State { 
}

export default class Assessment extends React.Component<Props, State> {
    public static defaultProps: Partial<Props> = {
      values: {}
    }
    constructor(props){
      super(props);
    }

    componentWillMount () {
   
      //window.scrollTo(0,0);
    }
    

    render() {
        const {item, onSubmit, validateData,cancel,handleChange,values,questions} = this.props;


        return (<Form handleChange={handleChange} values={values} items={questions} cancel={cancel} validateData={validateData} onSubmit={onSubmit} />);
    }
}