import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import * as routes from 'constants/routes';
import { User } from 'firebase';

import './notFoundPage.scss';

interface NFProps extends RouteComponentProps<void> {
  authUser: User;
}

const NotFoundPage: React.SFC<NFProps> = (props: NFProps) => {
  return (
    <div className="notFoundBlock">
      <h1>Sorry, page not found</h1>
      {props.authUser ? (
        <Link to={routes.HOME}>Back to the main page</Link>
      ) : (
        <Link to={routes.HOME}>Go to the login page</Link>
      )}
    </div>
  );
};

export default NotFoundPage;
