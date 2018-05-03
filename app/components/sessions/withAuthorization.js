import React from 'react';
import * as routes from 'constants/routes';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { auth } from 'config/firebase';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
  });

  return compose(withRouter, connect(mapStateToProps))(WithAuthorization);
};

export default withAuthorization;
