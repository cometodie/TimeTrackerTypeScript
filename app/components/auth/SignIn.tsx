import * as React from 'react';
import TypeField from '../../components/typeField/TypeField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { SignUpLink } from './SignUp';
import { auth } from '../../../config/firebase';
import * as routes from '../../../constants/routes';
import { setSnackBar } from '../../actions/utilities';
import { History } from 'history';
require('./auth.scss');

interface ISignProps extends RouteComponentProps<void> {
  setSnackBar: (text: string) => void;
}

interface ISignInFormState {
  email: string;
  password: string;
  error: Error;
}

const SignInPage = (props: ISignProps) => (
  <div className="container">
    <div className="page-wrapper">
      <h1>SignIn</h1>
      <SignInForm {...props} />
      <SignUpLink />
    </div>
  </div>
);

let emailField: TypeField;
let passwdField: TypeField;

class SignInForm extends React.Component<ISignProps, ISignInFormState> {
  constructor(props: ISignProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState(
      {
        email: emailField.state.value,
        password: passwdField.state.value
      },
      () => {
        auth
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(currentUser => {
            if (currentUser) {
              this.props.setSnackBar(`You have successfully logged in, ${this.state.email}`);
              this.props.history.push(routes.ADD);
            }
          })
          .catch(error => {
            this.props.setSnackBar(`Incorrect password or email, please recheck data.`);
            this.setState({ error: error });
          });
      }
    );
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <label>Email:</label>
        <TypeField
          value={email}
          ref={field => {
            emailField = field;
          }}
          type="email"
          name="EmailAddress"
          placeholder="Email Address"
        />
        <label>Password:</label>
        <TypeField
          value={password}
          ref={field => {
            passwdField = field;
          }}
          type="password"
          name="Password"
          placeholder="Password"
        />
        <RaisedButton type="submit" className="submit-button" label="Sign In" />
      </form>
    );
  }
}

export default SignInPage;

export { SignInForm };
