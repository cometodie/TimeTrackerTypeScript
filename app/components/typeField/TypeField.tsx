import * as React from 'react';
import TextField from 'material-ui/TextField';

interface TypeFieldProps {
  value: string;
  type: string;
  name?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  validate?: (value: string) => boolean;
}

interface TypeFieldState extends TypeFieldProps {
  valid: boolean;
}

class TypeField extends React.Component<TypeFieldProps, TypeFieldState> {
  constructor(props: TypeFieldProps) {
    super(props);
    this.state = {
      value: props.value,
      valid: false,
      type: props.type,
      name: props.name,
      min: props.min,
      max: props.max,
      placeholder: props.placeholder
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    let val = e.target.value;
    let isValid = this.props.validate ? this.props.validate(val) : false;
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
        // placeholder={this.state.placeholder}  <-- no interface for this
        min={this.state.min}
        max={this.state.max}
      />
    );
  }
}

export default TypeField;
