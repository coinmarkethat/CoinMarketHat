import React from 'react';
import { storiesOf } from '@storybook/react';

import CurrencyIconText from './index';
import { LogoBitcoin, LiteCoin } from '../../../assets';

storiesOf('molecule/CurrencyIconText')
  .add('CurrencyIconText-dark', () => (
    <CurrencyIconText theme="dark" source={LogoBitcoin} textTitle="Bitcoin" />
  ))
  .add('CurrencyIconText-white', () => (
    <CurrencyIconText theme="white" source={LiteCoin} textTitle="LiteCoin" />
  ));
