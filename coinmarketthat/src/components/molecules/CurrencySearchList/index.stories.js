import React from 'react';
import { storiesOf } from '@storybook/react';

import CurrencySearchList from './index';
import { LogoBitcoin, LiteCoin } from '../../../assets';

storiesOf('molecule/CurrencySearchList')
  .add('Dark', () => (
    <CurrencySearchList
      theme="dark"
      source={LogoBitcoin}
      textTitle="Bitcoin"
      isAdded={false}
    />
  ))
  .add('White', () => (
    <CurrencySearchList
      theme="white"
      source={LiteCoin}
      textTitle="Litecoin"
      isAdded={true}
    />
  ));
