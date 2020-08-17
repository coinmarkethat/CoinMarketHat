import React from 'react';
import { storiesOf } from '@storybook/react';

import MoonBoardTemplate from './index';

storiesOf('templates/MoonBoardTemplate')
  .add('MoonBoardTemplateWhite', () => {
    return (
      <MoonBoardTemplate
        theme="white"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  })

  .add('MoonBoardTemplateDark', () => {
    return (
      <MoonBoardTemplate
        theme="dark"
        cryptocurrenciesValue="5,563"
        marketValue="545,563"
        volume="$678,445,563"
        btcDominance="64.8%"
        marketCap="$5,454,563"
      />
    );
  });
