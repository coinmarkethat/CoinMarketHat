import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SubscribeInput from './index';

storiesOf('molecule/SubscribeInput').add('SubscribeInput', () => {
  return (
    <SubscribeInput
      type="primary"
      onClick={action('Click me')}
      btnTitle="Subscribe"
    />
  );
});
