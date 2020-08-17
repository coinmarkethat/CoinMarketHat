import React from 'react';
import { storiesOf } from '@storybook/react';

import SummaryHeader from './index';

storiesOf('molecule/SummaryHeader').add('SummaryHeader', () => {
  return (
    <SummaryHeader
      cryptocurrenciesValue="5,563"
      marketValue="545,563"
      volume="$678,445,563"
      btcDominance="64.8%"
      marketCap="$5,454,563"
    />
  );
});
