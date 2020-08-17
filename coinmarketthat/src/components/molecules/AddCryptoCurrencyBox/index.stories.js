import React from 'react';
import { storiesOf } from '@storybook/react';

import AddCryptoCurrencyBox from './index';

storiesOf('molecule/AddCryptoCurrencyBox').add(
  'White', () => <AddCryptoCurrencyBox theme="white" />
).add(
  'Dark', () => <AddCryptoCurrencyBox theme="dark" />
);
