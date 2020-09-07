import React from 'react';
import { storiesOf } from '@storybook/react';

import MoonlistCard from './index';

storiesOf('molecule/MoonlistCard')
  .add('White', () => <MoonlistCard theme="white" />)
  .add('Dark', () => <MoonlistCard theme="dark" />);
