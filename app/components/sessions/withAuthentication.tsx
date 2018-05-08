import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { auth } from 'config/firebase';
import { setUser } from 'actions/sessionActions';
import { User } from 'firebase';
import { Store } from 'store/store';

interface MapStateToProps {
  authUser: User;
}

interface MapDispatchToProps {
  onSetAuthUser?: (authUser: User) => void;
}

const withAuthentication = (Component: React.StatelessComponent) => {
  class WithAuthentication extends React.Component<MapDispatchToProps & MapStateToProps, {}> {
    componentWillMount() {
      const { onSetAuthUser } = this.props;
      auth.onAuthStateChanged(authUser => {
        authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
      });
    }

    render() {
      return <Component />;
    }
  }

  const mapStateToProps = (state: Store): MapStateToProps => ({
    authUser: state.sessionState.authUser
  });

  const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    onSetAuthUser: authUser => dispatch(setUser(authUser))
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
