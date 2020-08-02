import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconText from './index';

storiesOf('molecule/icontext')
  .add('IconText-Cryptocurrencies', () => (
    <IconText
      theme="white"
      iconName="Hamburger"
      textTitle="Cryptocurrencies"
      color="black"
      iconHeight={15}
      iconWidth={15}
      onClick={action('click icon text')}
    />
  ))
  .add('IconText-Exchange', () => (
    <IconText
      theme="white"
      iconName="Hamburger"
      textTitle="Exchange"
      color="black"
      iconHeight={15}
      iconWidth={15}
      onClick={action('click icon text')}
    />
  ))
  .add('IconText-filter', () => (
    <IconText
      theme="white"
      iconName="Filter"
      textTitle="Filter"
      color="black"
      iconHeight={15}
      iconWidth={15}
      onClick={action('click icon text')}
    />
  ));
