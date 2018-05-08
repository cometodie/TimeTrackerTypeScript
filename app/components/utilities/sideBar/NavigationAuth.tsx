import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import * as routes from 'constants/routes';
import HomeIcon from 'utilities/icons/HomeIcon';
import ExitIcon from 'utilities/icons/ExitIcon';

interface NavigationProps {
  email: string;
  logout: () => void;
  onItemClick: () => void;
}

const NavigationAuth: React.SFC<NavigationProps> = (props: NavigationProps) => (
  <Menu>
    <MenuItem containerElement={<Link to={routes.HOME} />} leftIcon={<HomeIcon />} primaryText="Home" />
    <MenuItem onClick={props.logout} leftIcon={<ExitIcon />} primaryText={`Logout ${props.email}`} />
  </Menu>
);

export default NavigationAuth;
