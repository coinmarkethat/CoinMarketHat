import React from 'react';
import { storiesOf } from '@storybook/react';

import Login from './index';

storiesOf('pages/Login')
  .add('LoginWhite', () => {
    return <Login theme="white" />;
  })
  .add('LoginDark', () => {
    return <Login theme="dark" />;
  });
