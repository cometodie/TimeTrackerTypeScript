import { connect } from 'react-redux';

import { Store } from 'store/store';
import { User } from 'firebase';
import NotFoundPage from 'components/utilities/notFoundPage/NotFoundPage';

const mapStateToProps = (state: Store) => {
  return {
    authUser: state.sessionState.authUser
  };
};

const authCondition = (authUser: User) => !!authUser;

export default connect(mapStateToProps, null)(NotFoundPage);
