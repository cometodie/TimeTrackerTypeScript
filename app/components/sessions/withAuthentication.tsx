import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { auth } from 'config/firebase';
import { setUser } from 'actions/sessionActions';
import { User } from 'firebase';

interface MapDispatchToProps {
  onSetAuthUser?: (authUser: User) => void;
}

const withAuthentication = (Component: React.StatelessComponent) => {
  class WithAuthentication extends React.Component<MapDispatchToProps> {
    componentDidMount() {
      const { onSetAuthUser } = this.props;
      auth.onAuthStateChanged(authUser => {
        authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
      });
    }

    render() {
      return <Component />;
    }
  }

  const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    onSetAuthUser: authUser => dispatch(setUser(authUser))
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
