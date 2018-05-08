import * as React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

import { setSnackBar, IUtilActions } from 'actions/utilities';
import { IStore } from 'store/store';
import { User } from 'firebase';

interface ISnackBarProps {
  authUser: User;
  textSnack: string;
  setSnackBar: (text: string) => void;
}

interface ISnackBarState {
  open: boolean;
}

class SnackBar extends React.Component<ISnackBarProps, ISnackBarState> {
  constructor(props: ISnackBarProps) {
    super(props);
    this.state = {
      open: false
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillReceiveProps(props: ISnackBarProps) {
    this.setState({
      open: props.textSnack.length > 0
    });
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
    this.props.setSnackBar('');
  }

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.props.textSnack}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default connect(
  (state: IStore) => {
    return {
      textSnack: state.snackBar,
      authUser: state.sessionState.authUser
    };
  },
  dispatch => {
    return {
      setSnackBar: (state: string) => {
        dispatch(setSnackBar(state));
      }
    };
  }
)(SnackBar);
