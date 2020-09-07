import React from 'react';
import { storiesOf } from '@storybook/react';

import MoonList from './index';

storiesOf('organism/MoonList')
  .add('White', () => <MoonList theme="white" />)
  .add('Dark', () => <MoonList theme="dark" />);
