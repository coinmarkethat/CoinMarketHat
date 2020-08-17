import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginTemplate from './index';

storiesOf('templates/Login').add('LoginWhite', () => {
  return (
    <LoginTemplate theme="white" />
  );
}).add('LoginDark', () => {
  return (
    <LoginTemplate theme="dark" />
  );
});
