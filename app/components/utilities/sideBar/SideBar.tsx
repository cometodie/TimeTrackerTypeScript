import * as React from 'react';
import Paper from 'material-ui/Paper';
import { connect, Dispatch } from 'react-redux';

import * as routes from 'constants/routes';
import { auth } from 'config/firebase';
import { toggleSidebar, setSnackBar, IUtilActions } from 'actions/utilities';
import { clearTimeStore, TimeClear } from 'actions/timeActions';
import { Store } from 'store/store';
import { User } from 'firebase';
import NavigationAuth from './NavigationAuth';
import NavigationNonAuth from './NavigationNonAuth';
import { RouteComponentProps, withRouter } from 'react-router';

interface SideBarProps extends RouteComponentProps<void> {
  authUser: User;
  isOpen: boolean;
  setSnackBar: (state: string) => void;
  toggleSidebar: (state: boolean) => void;
  onLogout: () => TimeClear;
}

interface SideBarState {
  stylePaper: any;
  styleWrapper: any;
}

class SideBar extends React.Component<SideBarProps, SideBarState> {
  constructor(props: SideBarProps) {
    super(props);
    this.openSideBar = this.openSideBar.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      stylePaper: {
        display: 'inline-block',
        margin: '0 32px 16px 0',
        position: 'fixed',
        width: '336px',
        height: '100%',
        left: 0,
        transform: 'translateX(-336px)',
        zIndex: '1101',
        borderRight: '1px solid #fff'
      },
      styleWrapper: {
        zIndex: '1100',
        width: '100%',
        position: 'absolute',
        height: 'calc(100% - 64px)'
      }
    };
  }

  openSideBar() {
    this.props.toggleSidebar(false);
  }

  logout() {
    this.props.onLogout();
    this.props.setSnackBar('Уou have successfully logged out!');
    auth.signOut();
    this.props.history.push(routes.SIGN_IN);
  }

  render() {
    this.state.stylePaper.transform = this.props.isOpen ? 'translateX(0)' : 'translateX(-336px)';
    return (
      <div>
        <div
          style={this.props.isOpen ? this.state.styleWrapper : null}
          onClick={this.props.isOpen ? this.openSideBar : null}
        />
        <Paper style={this.state.stylePaper}>
          {this.props.authUser ? (
            <NavigationAuth logout={this.logout} email={this.props.authUser.email} onItemClick={this.openSideBar} />
          ) : (
            <NavigationNonAuth onItemClick={this.openSideBar} />
          )}
        </Paper>
      </div>
    );
  }
}

export default connect(
  (state: Store) => {
    return {
      isOpen: state.sideBar,
      authUser: state.sessionState.authUser
    };
  },
  dispatch => {
    return {
      toggleSidebar: (state: boolean) => {
        dispatch(toggleSidebar(state));
      },
      setSnackBar: (state: string) => {
        dispatch(setSnackBar(state));
      },
      onLogout: () => dispatch(clearTimeStore())
    };
  }
)(withRouter(SideBar));
