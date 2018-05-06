import * as React from 'react';
import TypeField from '../../components/typeField/TypeField';
import RaisedButton from 'material-ui/RaisedButton';
import * as routes from '../../../constants/routes';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { auth } from '../../../config/firebase';
require('./auth.scss');

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

const SignUpPage = (props: ISignProps) => (
  <div className="container">
    <div className="page-wrapper">
      <h1>SignUp</h1>
      <SignUpForm {...props} />
    </div>
  </div>
);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

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

  onSubmit(event: React.FormEvent<{}>) {
    event.preventDefault();

    this.setState(
      {
        username: nameField.state.value,
        email: emailField.state.value,
        passwordOne: passwdField.state.value,
        passwordTwo: passwdConfField.state.value
      },
      () => {
        console.log(this.props);
        // auth
        // .createUserWithEmailAndPassword(this.state.email, this.state.passwordTwo)
        // .then(data => {
          
          this.props.setSnackBar(`Account has successfully created!`);
          // })
          // .catch(error => {
            // this.setState({ error: error });
          // });
      }
    );
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <TypeField
          value={username}
          ref={field => {
            nameField = field;
          }}
          type="text"
          name="FullName"
          placeholder="Full Name"
        />
        <TypeField
          value={email}
          ref={field => {
            emailField = field;
          }}
          type="email"
          name="EmailAddress"
          placeholder="Email Address"
        />
        <TypeField
          value={passwordOne}
          ref={field => {
            passwdField = field;
          }}
          type="password"
          name="Password"
          placeholder="Password"
        />
        <TypeField
          value={passwordTwo}
          ref={field => {
            passwdConfField = field;
          }}
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

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink, SignUpPage };
