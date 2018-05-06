import * as React from 'react';
import TextField from 'material-ui/TextField';

interface ITypeFieldProps {
 value: string;
 type: string;
 name?: string;
 placeholder?: string;
 min?: number;
 max?: number;
}

interface ITypeFieldState extends ITypeFieldProps {
 valid: boolean;
}

class TypeField extends React.Component<ITypeFieldProps, ITypeFieldState> {
  constructor(props: ITypeFieldProps) {
    super(props);
    var isValid = this.validate(props.value);
    this.state = {
      value: props.value,
      valid: isValid,
      type: props.type,
      name: props.name,
      min: props.min,
      max: props.max,
      placeholder: props.placeholder
    };
    this.onChange = this.onChange.bind(this);
  }
  validate(val: string) {
    return val.length > 2;
  }
  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    var val = e.target.value;
    var isValid = this.validate(val);
    this.setState({ value: val, valid: isValid });
  }
  render() {
    var color = this.state.valid === true ? 'green' : 'red';
    return (
      <TextField
        style={{ borderColor: color }}
        name={this.state.name}
        type={this.state.type}
        value={this.state.value}
        onChange={this.onChange}
        // placeholder={this.state.placeholder}
        min={this.state.min}
        max={this.state.max}
      />
    );
  }
}

export default TypeField;
