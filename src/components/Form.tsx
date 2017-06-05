import * as React from "react";
import Select from './Select';
import RaisedButton from 'material-ui/RaisedButton';
import {flexParentRowStyle,flexRowItemStyle} from './commonStyles'

export interface FormErrorInterface {
  [propName: string]: {name: string,title: string};
}

export interface ValidationResultInterface {
  isValid: boolean;
  data: FormErrorInterface;
  
}

export interface Props { 
  validateData(data: any): ValidationResultInterface;
  cancel(): any;
  items: any[]
  values: any;
  onSubmit(error: any, data: any): void;
}

export interface State { 
  values: any,
  errors: any
}

const reduceCb = (acc,value) => {
  acc[value.id] = '';
  return acc;
}

export default class Form extends React.Component<Props, State>{
    constructor (props) {
      super(props);

      this.state = {
        errors: props.items.reduce(reduceCb,{}),
        values: props.values ? props.values : props.items.reduce(reduceCb,{})
      };
    }

    handleSubmit = (event) => {
      const {validateData,onSubmit} = this.props;
      const validationResponse = validateData(this.state.values);

      this.setState({errors: validationResponse.data});
      if(validationResponse.isValid){
        onSubmit(null,this.state.values);
      }else{
        onSubmit(validationResponse,this.state.values);
      }
      
      event.preventDefault();
    }

    handleClear = (event) => {
      this.setState({values: this.props.items.reduce(reduceCb,{})})
    }
     
    handleCancel = (event) => {
      this.handleClear(event);
      const {cancel} = this.props;
      cancel();
    }

    handleChange = (name) => {
        return (event, index, value) => {
          this.setState({errors: {...this.state.errors, [name]: ''}});
          this.setState({values: {...this.state.values,[name]: value}} as any)
        }
    }

    render() {
        const {items} = this.props;
        const {values, errors} = this.state;
        return (<div>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      {items.map(item => <Select key={item.id} error={errors[item.id]} value={values[item.id]} item={item} handleChange={this.handleChange(item.id)} />)}
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