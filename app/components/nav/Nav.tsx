import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link, BrowserRouter } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { IStore } from 'store/store';
import { toggleSidebar, IUtilActions } from 'actions/utilities';
import './nav.scss';

interface INavProps {
  isOpen?: boolean;
  toggleSidebar?: (value: boolean) => void;
}

class Nav extends React.Component<INavProps, {}> {
  constructor(props: INavProps) {
    super(props);
    this.openSideBar = this.openSideBar.bind(this);
  }

  openSideBar() {
    this.props.toggleSidebar(true);
  }

  render() {
    return (
      <AppBar
        iconElementLeft={
          this.props.isOpen ? (
            <IconButton>
              <NavigationClose />
            </IconButton>
          ) : null
        }
        onLeftIconButtonClick={this.openSideBar}
      />
    );
  }
}

const mapStateToProps = (state: IStore): INavProps => {
  return {
    isOpen: state.sideBar
  };
};

export default connect(mapStateToProps, (dispatch: Dispatch<IUtilActions>): INavProps => {
  return {
    toggleSidebar: (state: boolean) => {
      dispatch(toggleSidebar(state));
    }
  };
})(Nav);
