import React from 'react';
import { storiesOf } from '@storybook/react';

import Landing from './index';

storiesOf('pages/Landing')
  .add('LandingPageWhite', () => {
    return (
      <Landing
        theme="white"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  })
  .add('LandingPageDark', () => {
    return (
      <Landing
        theme="dark"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  });
