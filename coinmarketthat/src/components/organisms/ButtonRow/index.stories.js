import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonRow from './index';

storiesOf('organism/ButtonRow')
  .add('ButtonRowDark', () => {
    return <ButtonRow theme="dark" />;
  })
  .add('ButtonRowWhite', () => {
    return <ButtonRow theme="white" />;
  });
