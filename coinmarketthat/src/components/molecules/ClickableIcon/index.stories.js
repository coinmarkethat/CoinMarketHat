import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ClickableIcon from './index';

storiesOf('molecule/touchableicon').add('user-icon-touch', () => {
  return (
    <ClickableIcon
      onClick={action('icon touch')}
      iconName="User"
      color="red"
    />
  );
});
