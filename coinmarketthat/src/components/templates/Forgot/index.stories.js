import React from 'react';
import { storiesOf } from '@storybook/react';

import ForgotTemplate from './index';

storiesOf('templates/Forgot')
  .add('ForgotWhite', () => {
    return <ForgotTemplate theme="white" />;
  })
  .add('ForgotDark', () => {
    return <ForgotTemplate theme="dark" />;
  });
