import * as React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import * as routes from '../../../../constants/routes';

import HomeIcon from '../icons/HomeIcon';
import ExitIcon from '../icons/ExitIcon';

import { Link } from 'react-router-dom';

interface INavigation {
  email: string;
  logout: () => void;
  onItemClick: () => void;
}

const NavigationAuth: React.SFC<INavigation> = (props: INavigation) => (
  <Menu>
    <MenuItem containerElement={<Link to={routes.HOME} />} leftIcon={<HomeIcon />} primaryText="Home" />
    <MenuItem onClick={props.logout} leftIcon={<ExitIcon />} primaryText={`Logout ${props.email}`} />
  </Menu>
);

export default NavigationAuth;
