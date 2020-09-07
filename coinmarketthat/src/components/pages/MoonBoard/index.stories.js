import React from 'react';
import { storiesOf } from '@storybook/react';

import MoonBoard from './index';

storiesOf('pages/MoonBoard')
  .add('MoonBoardWhite', () => {
    return (
      <MoonBoard
        theme="white"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  })
  .add('MoonBoardDark', () => {
    return (
      <MoonBoard
        theme="dark"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  });
