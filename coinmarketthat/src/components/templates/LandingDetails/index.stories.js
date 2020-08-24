import React from 'react';
import { storiesOf } from '@storybook/react';

import LandingDetailsTemplate from './index';

storiesOf('templates/LandingDetailsTemplate')
  .add('LandingDetailsTemplateWhite', () => {
    return (
      <LandingDetailsTemplate
        theme="white"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  })

  .add('LandingDetailsTemplateDark', () => {
    return (
      <LandingDetailsTemplate
        theme="dark"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  });
