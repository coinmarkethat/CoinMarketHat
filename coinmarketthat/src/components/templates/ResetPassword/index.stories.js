import React from 'react';
import { storiesOf } from '@storybook/react';

import ResetPasswordTemplate from './index';

storiesOf('templates/ResetPassword').add('ResetPasswordWhite', () => {
  return (
    <ResetPasswordTemplate theme="white" />
  );
}).add('ResetPasswordDark', () => {
  return (
    <ResetPasswordTemplate theme="dark" />
  );
});
