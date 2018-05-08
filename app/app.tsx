import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import * as routes from 'constants/routes';
import Nav from 'components/nav/Nav';
import SideBar from 'components/utilities/sideBar/SideBar';
import SnackBar from 'components/utilities/snackBar/SnackBar';
import SignUpPage from 'components/auth/SignUp';
import withAuthentication from 'components/sessions/withAuthentication';
import HomeContainer from 'containers/HomeContainer';
import TimeTrackerAddContainer from 'containers/TimeTrackerAddContainer';
import SignInContainer from 'containers/SignInContainer';
import NotFoundCountainer from 'containers/NotFoundCountainer';
import SignUpContainer from 'containers/SignUpContainer';

import './app.scss';

const App = () => (
  <Router>
    <div className="app-container">
      {/* <Loader /> */}
      <Nav />
      <SideBar />
      <Switch>
        <Route exact path={routes.HOME} component={HomeContainer} />
        <Route exact path={routes.SIGN_IN} component={SignInContainer} />
        <Route exact path={routes.SIGN_UP} component={SignUpContainer} />
        <Route exact path={routes.ADD} component={TimeTrackerAddContainer} />
        <Route path="*" component={NotFoundCountainer} />
      </Switch>
      <SnackBar />
    </div>
  </Router>
);

export default withAuthentication(App);
