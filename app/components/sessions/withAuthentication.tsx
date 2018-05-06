import * as React from 'react';

import { connect, Dispatch } from 'react-redux';
import { auth } from '../../../config/firebase';
import { set } from '../../actions/sessionActions';
import { User } from 'firebase';

interface MapDispatchToProps {
  onSetAuthUser?: (authUser: User) => void;
}

const withAuthentication = (Component: React.StatelessComponent) => {
  class WithAuthentication extends React.Component<MapDispatchToProps> {
    componentDidMount() {
      console.log('props: ', this.props);
      const { onSetAuthUser } = this.props;
      auth.onAuthStateChanged(authUser => {
        authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
      });
    }

    render() {
      console.log();
      return <Component />;
    }
  }

  const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    onSetAuthUser: authUser => dispatch(set(authUser))
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
