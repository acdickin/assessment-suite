import * as React from "react";
import Select from './Select';
import RaisedButton from 'material-ui/RaisedButton';
import {flexParentRowStyle,flexRowItemStyle} from './commonStyles'

export interface FormErrorInterface {
  [propName: string]: number|string;
}

export interface ValidationResultInterface {
  isValid: boolean;
  data: FormErrorInterface;
  
}

export interface Props { 
  validateData(data: any): ValidationResultInterface;
  handleChange(any);
  cancel(): any;
  items: any[]
  values: any;
  onSubmit(error: any, data: any): void;
}

export interface State { 
  errors: any
}

const reduceCb = (acc,value) => {
  acc[value.id] = '';
  return acc;
}
const getField = (item,values,errors,handleChange) => {
  let comp = null;
  switch(item.type){
    case 'select':
      comp = <Select key={item.id} error={errors[item.id]} value={values[item.id]} item={item} handleChange={handleChange(item.id)} />;
      break;
    case 'label':
      comp = <h3 key={item.id}>{item.title}</h3>;
      break;
    default:
      comp = <h3 key={item.id}>{item.title}</h3>;
  }
  return comp;
}
export default class Form extends React.Component<Props, State>{
    constructor (props) {
      super(props);

      this.state = {
        errors: props.items.reduce(reduceCb,{}),
      };
    }

    handleSubmit = (event) => {
      const {validateData,onSubmit} = this.props;
      const validationResponse = validateData(this.props.values);

      this.setState({errors: validationResponse.data});
      if(validationResponse.isValid){
        onSubmit(null,this.props.values);
      }else{
        onSubmit(validationResponse,this.props.values);
      }
      
      event.preventDefault();
    }

    handleClear = (event) => {
      const {handleChange} = this.props;
      handleChange({});
    }
     
    handleCancel = (event) => {
      this.handleClear(event);
      const {cancel} = this.props;
      cancel();
    }

    handleChange = (name) => {
        const {handleChange} = this.props;
        return (event, index, value) => {
          let newValues = {...this.props.values,[name]: value};
          this.setState({errors: {...this.state.errors, [name]: ''}});
          handleChange(newValues);
        }
    }

    render() {
        const {items,values} = this.props;
        const {errors} = this.state;
        return (<div>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      {items.map(item => getField(item,values,errors,this.handleChange))}
                    </div>
                    <div style={flexParentRowStyle as any}>
                      <span style={flexRowItemStyle as any}>
                        <RaisedButton primary={true} type="submit" label="Submit" />
                      </span>
                      <span style={flexRowItemStyle as any}>
                        <RaisedButton onTouchTap={this.handleCancel} secondary={true} type="button" label="Cancel" />
                      </span>
                      <span style={flexRowItemStyle as any}>
                        <RaisedButton  onTouchTap={this.handleClear} type="button" label="Clear" />
                      </span>
                    </div>
                  </form>
                </div>
                );
    }
}