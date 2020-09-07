import React from 'react';
import { storiesOf } from '@storybook/react';

import SignupTemplate from './index';

storiesOf('templates/Signup')
  .add('SignupWhite', () => {
    return <SignupTemplate theme="white" />;
  })
  .add('SignupDark', () => {
    return <SignupTemplate theme="dark" />;
  });
