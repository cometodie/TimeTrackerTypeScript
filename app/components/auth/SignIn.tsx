import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import { setSnackBar } from 'actions/utilities';
import SignUpLink from 'components/auth/SignUpLink';
import SignInForm from 'components/forms/SignInForm';

import './auth.scss';

interface SignProps extends RouteComponentProps<void> {
  setSnackBar: (text: string) => void;
}

const SignInPage: React.SFC<SignProps> = (props: SignProps) => (
  <div className="container">
    <div className="page-wrapper">
      <h1>SignIn</h1>
      <SignInForm {...props} />
      <SignUpLink />
    </div>
  </div>
);

export default SignInPage;
