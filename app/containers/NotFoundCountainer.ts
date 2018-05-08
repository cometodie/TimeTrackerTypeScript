import { connect } from 'react-redux';

import { IStore } from 'store/store';
import { User } from 'firebase';
import NotFoundPage from 'components/utilities/notFoundPage/NotFoundPage';

const mapStateToProps = (state: IStore) => {
  return {
    authUser: state.sessionState.authUser
  };
};

const authCondition = (authUser: User) => !!authUser;

export default connect(mapStateToProps, null)(NotFoundPage);
