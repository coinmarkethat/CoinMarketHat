import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MoonCardList from '.';
import { LiteCoin, LogoBitcoin, Master, Steller } from '../../../assets';

storiesOf('molecule/mooncardlist')
  .add('MoonCardList-LiteCoin', () => (
    <MoonCardList
      title={'LiteCoin'}
      src={LiteCoin}
      border={true}
      type={'link'}
      btnTitle={'ADD'}
      onClick={action('LiteCoin Add')}
    />
  ))
  .add('MoonCardList-LogoBitcoin', () => (
    <MoonCardList
      title={'LogoBitcoin'}
      src={LogoBitcoin}
      border={true}
      type={'danger'}
      btnTitle={'REMOVE'}
      onClick={action('LogoBitcoin Remove')}
    />
  ))

  .add('MoonCardList-Master', () => (
    <MoonCardList
      title={'Master'}
      src={Master}
      border={true}
      type={'link'}
      btnTitle={'ADD'}
      onClick={action('MoonCardList Add')}
    />
  ))
  .add('MoonCardList-Steller', () => (
    <MoonCardList
      title={'Steller'}
      src={Steller}
      border={true}
      type={'danger'}
      btnTitle={'REMOVE'}
      onClick={action('MoonCardList Remove')}
    />
  ));
