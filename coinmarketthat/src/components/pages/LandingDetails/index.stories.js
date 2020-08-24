import React from 'react';
import { storiesOf } from '@storybook/react';

import LandingDetails from './index';

storiesOf('pages/LandingDetails')
  .add('LandingDetailsWhite', () => {
    return (
      <LandingDetails
        theme="white"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  })
  .add('LandingDetailsDark', () => {
    return (
      <LandingDetails
        theme="dark"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  });
