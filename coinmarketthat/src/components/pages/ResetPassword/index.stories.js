import React from 'react';
import { storiesOf } from '@storybook/react';

import ResetPassword from './index';

storiesOf('pages/ResetPassword')
  .add('ResetPasswordWhite', () => {
    return <ResetPassword theme="white" />;
  })
  .add('ResetPasswordDark', () => {
    return <ResetPassword theme="dark" />;
  });
