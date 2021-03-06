import * as React from 'react';

import SvgIcon from 'material-ui/SvgIcon';

interface Icon {
  onClick?: () => void;
}

export const ArrowRightIcon: React.SFC<Icon> = (props: Icon) => (
  <SvgIcon {...props}>
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
    <path d="M0-.25h24v24H0z" fill="none" />
  </SvgIcon>
);

export default ArrowRightIcon;
