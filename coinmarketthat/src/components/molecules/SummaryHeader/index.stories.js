import React from 'react';
import { storiesOf } from '@storybook/react';

import SummaryHeader from './index';

storiesOf('molecule/SummaryHeader').add('SummaryHeader', () => {
  return (
    <SummaryHeader
      crptocurrenciesValue="5,563"
      MarketValue="545,563"
      Volume="$678,445,563"
      btcDominance="64.8%"
      marketCap="$5,454,563"
    />
  );
});
