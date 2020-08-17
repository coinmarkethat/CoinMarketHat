import React from 'react';
import { storiesOf } from '@storybook/react';

import Signup from './index';

storiesOf('pages/Signup').add('SignupWhite', () => {
  return (
    <Signup theme="white" />
  );
}).add('SignupDark', () => {
  return (
    <Signup theme="dark" />
  );
});
