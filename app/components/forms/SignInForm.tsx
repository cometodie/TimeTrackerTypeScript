import * as React from 'react';
import { auth } from 'config/firebase';
import TypeField from 'components/typeField/TypeField';
import * as routes from 'constants/routes';
import { RouteComponentProps } from 'react-router';
import { RaisedButton } from 'material-ui';
import { User } from 'firebase';

interface SignProps extends RouteComponentProps<void> {
  setSnackBar: (text: string) => void;
  setUser: (user: User) => void;
}

interface SignInFormState {
  email: string;
  password: string;
  error: Error;
}

class SignInForm extends React.Component<SignProps, SignInFormState> {
  private emailField: TypeField;
  private passwdField: TypeField;
  
  constructor(props: SignProps) {
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
        email: this.emailField.state.value,
        password: this.passwdField.state.value
      },
      () => {
        auth
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(currentUser => {
            if (currentUser) {
              this.props.setUser(currentUser);
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
            this.emailField = field;
          }}
          type="email"
          name="EmailAddress"
          placeholder="Email Address"
        />
        <label>Password:</label>
        <TypeField
          value={password}
          ref={field => {
            this.passwdField = field;
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

export default SignInForm;
