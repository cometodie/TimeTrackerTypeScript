import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import TypeField from 'components/typeField/TypeField';
import RaisedButton from 'material-ui/RaisedButton';

import * as routes from 'constants/routes';
import { User } from 'firebase';
import { auth } from 'config/firebase';
import { validateEmail, validatePassword } from '../../helpers/validateLogic';

interface SignProps extends RouteComponentProps<void> {
  setUser: (user: User) => void;
  setSnackBar: (text: string) => void;
}

interface SignUpFormState {
  username: string;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  error: Error;
}

class SignUpForm extends React.Component<SignProps, SignUpFormState> {
  private nameField: TypeField;
  private emailField: TypeField;
  private passwdField: TypeField;
  private passwdConfField: TypeField;

  constructor(props: SignProps) {
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
      this.passwdField.state.value === this.passwdConfField.state.value &&
      this.nameField.state.valid &&
      this.emailField.state.valid &&
      this.passwdField.state.valid &&
      this.passwdConfField.state.valid
    ) {
      this.setState(
        {
          username: this.nameField.state.value,
          email: this.emailField.state.value,
          passwordOne: this.passwdField.state.value,
          passwordTwo: this.passwdConfField.state.value
        },
        () => {
          auth
            .createUserWithEmailAndPassword(this.state.email, this.state.passwordTwo)
            .then(user => {
              this.props.setUser(user);
              this.props.setSnackBar('Account has successfully created!');
              this.props.history.push(routes.ADD);
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
            this.nameField = field;
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
            this.emailField = field;
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
            this.passwdField = field;
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
            this.passwdConfField = field;
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
