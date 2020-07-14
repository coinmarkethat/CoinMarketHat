import React from 'react';
import { storiesOf } from '@storybook/react';

import Div from './index';

storiesOf('atom/Div', module)
  .add('Div with gray', () => <Div bgColor="gray">This is gray div</Div>)
  .add('Div with white', () => <Div bgColor="white">This is white div.</Div>);
