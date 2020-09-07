import React from 'react';
import { storiesOf } from '@storybook/react';

import Forgot from './index';

storiesOf('pages/Forgot')
  .add('ForgotWhite', () => {
    return <Forgot theme="white" />;
  })
  .add('ForgotDark', () => {
    return <Forgot theme="dark" />;
  });
