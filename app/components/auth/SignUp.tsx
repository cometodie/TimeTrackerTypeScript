import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import SignUpForm from 'components/forms/SignUpForm';
import { User } from 'firebase';

import './auth.scss';

interface SignProps extends RouteComponentProps<void> {
  setSnackBar: (text: string) => void;
  setUser: (user: User) => void;
}

const SignUpPage: React.SFC<SignProps> = (props: SignProps) => (
  <div className="container">
    <div className="page-wrapper">
      <h1>SignUp</h1>
      <SignUpForm {...props} />
    </div>
  </div>
);

export default withRouter(SignUpPage);
