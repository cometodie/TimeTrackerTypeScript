import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import TypeField from 'components/typeField/TypeField';
import RaisedButton from 'material-ui/RaisedButton';

import { auth } from 'config/firebase';
import { validateEmail, validatePassword } from '../../helpers/validateLogic';
import * as routes from 'constants/routes';

interface ISignProps extends RouteComponentProps<void> {
  setSnackBar: (text: string) => void;
}

interface ISignUpFormState {
  username: string;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  error: Error;
}

let nameField: TypeField;
let emailField: TypeField;
let passwdField: TypeField;
let passwdConfField: TypeField;

class SignUpForm extends React.Component<ISignProps, ISignUpFormState> {
  constructor(props: ISignProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    };
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      passwdField.state.value === passwdConfField.state.value &&
      nameField.state.valid &&
      emailField.state.valid &&
      passwdField.state.valid &&
      passwdConfField.state.valid
    ) {
      this.setState(
        {
          username: nameField.state.value,
          email: emailField.state.value,
          passwordOne: passwdField.state.value,
          passwordTwo: passwdConfField.state.value
        },
        () => {
          auth
            .createUserWithEmailAndPassword(this.state.email, this.state.passwordTwo)
            .then(data => {
              this.props.history.push(routes.ADD);
              this.props.setSnackBar('Account has successfully created!');
            })
            .catch(error => {
              this.setState({ error: error });
            });
        }
      );
    } else {
      this.props.setSnackBar('Incorrect data!');
    }
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <label>Name:</label>
        <TypeField
          value={username}
          ref={field => {
            nameField = field;
          }}
          validate={(name: string) => name.length > 2}
          type="text"
          name="FullName"
          placeholder="Full Name"
        />
        <label>Email:</label>
        <TypeField
          value={email}
          ref={field => {
            emailField = field;
          }}
          validate={validateEmail}
          type="email"
          name="EmailAddress"
          placeholder="Email Address"
        />
        <label>Password:</label>
        <TypeField
          value={passwordOne}
          ref={field => {
            passwdField = field;
          }}
          validate={validatePassword}
          type="password"
          name="Password"
          placeholder="Password"
        />
        <label>Confirm Password:</label>
        <TypeField
          value={passwordTwo}
          ref={field => {
            passwdConfField = field;
          }}
          validate={validatePassword}
          name="ConfirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <RaisedButton type="submit" className="submit-button" label="Sign Up" />

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default SignUpForm;
