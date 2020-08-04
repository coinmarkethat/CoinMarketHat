import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SubscribeInput from './index';

storiesOf('molecule/SubscribeInput').add('SubscribeInput', () => {
  return (
    <SubscribeInput
      theme="white"
      type="primary"
      placeholder="Email Address"
      onClick={action('Click me')}
      btnTitle="Subscribe"
    />
  );
});
