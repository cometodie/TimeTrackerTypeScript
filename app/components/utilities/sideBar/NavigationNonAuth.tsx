import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import * as routes from 'constants/routes';
import { SignInIcon } from 'utilities/icons/SIgnInIcon';
import { SignUpIcon } from 'utilities/icons/SignUpIcon';

interface NavigateProps {
  onItemClick: () => void;
}

const NavigationNonAuth: React.SFC<NavigateProps> = (props: NavigateProps) => (
  <Menu>
    <MenuItem containerElement={<Link to={routes.SIGN_IN} />} leftIcon={<SignInIcon />} primaryText="Sign In" />
    <MenuItem containerElement={<Link to={routes.SIGN_UP} />} leftIcon={<SignUpIcon />} primaryText="Sign Up" />
  </Menu>
);

export default NavigationNonAuth;
