import React from 'react';
import { storiesOf } from '@storybook/react';

import Div from './index';

storiesOf('atom/Div', module)
  .add('Div with gray', () => <Div theme="dark">This is dark theme div</Div>)
  .add('Div with white', () => <Div theme="white">This is white div.</Div>);
