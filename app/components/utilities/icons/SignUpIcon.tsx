import * as React from 'react';

import SvgIcon from 'material-ui/SvgIcon';

interface Icon {
  onClick?: () => void;
}

export const SignUpIcon: React.SFC<Icon> = (props: Icon) => (
  <SvgIcon {...props}>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>
);

export default SignUpIcon;
