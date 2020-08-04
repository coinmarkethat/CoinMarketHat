import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MoonCardList from '.';
import { LiteCoin, LogoBitcoin, Master, Steller } from '../../../assets';

storiesOf('molecule/mooncardlist')
  .add('MoonCardList-LiteCoin-dark', () => (
    <MoonCardList
      theme="dark"
      title={'LiteCoin'}
      src={LiteCoin}
      type={'link'}
      btnTitle={'ADD'}
      onClick={action('LiteCoin Add')}
    />
  ))
  .add('MoonCardList-LogoBitcoin-dark', () => (
    <MoonCardList
      theme="dark"
      title={'LogoBitcoin'}
      src={LogoBitcoin}
      type={'danger'}
      btnTitle={'REMOVE'}
      onClick={action('LogoBitcoin Remove')}
    />
  ))

  .add('MoonCardList-Master-white', () => (
    <MoonCardList
      theme="white"
      title={'Master'}
      src={Master}
      type={'link'}
      btnTitle={'ADD'}
      onClick={action('MoonCardList Add')}
    />
  ))
  .add('MoonCardList-Steller-white', () => (
    <MoonCardList
      theme="white"
      title={'Steller'}
      src={Steller}
      type={'danger'}
      btnTitle={'REMOVE'}
      onClick={action('MoonCardList Remove')}
    />
  ));
