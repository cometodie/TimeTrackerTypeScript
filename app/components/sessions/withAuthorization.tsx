import * as React from 'react';
import * as routes from '../../../constants/routes';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { auth } from '../../../config/firebase';
import { User } from 'firebase';
import { IStore } from '../../store/store';

interface StateFromProps {
  authUser: User;
  currentMonth: number;
  currentYear: number;
}

const withAuthorization = (condition: Function) => (Component: typeof React.Component) => {
  class WithAuthorization extends React.Component<StateFromProps & RouteComponentProps<void>, {}> {
    componentDidMount() {
      console.log('props: ', this.props);
      auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }else{
          console.log('props: ', this.props);
        }
      });
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = (state: IStore) => ({
    authUser: state.sessionState.authUser
  });

  return compose(withRouter, connect(mapStateToProps))(WithAuthorization);
};

export default withAuthorization;
