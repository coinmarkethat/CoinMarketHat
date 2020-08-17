import React from 'react';

import { Label, Div } from '../../atoms';
import './styles.scss';

const SummaryHeader = ({
  cryptocurrenciesValue,
  marketValue,
  volume,
  btcDominance,
  marketCap
}) => {
  return (
    <Div className="molecule-summary-header-wrapper">
      <Label>
        Cryptocurrencies:
        {cryptocurrenciesValue}
      </Label>
      |
      <Label>
        Market:
        {marketValue}
      </Label>
      |
      <Label>
        Market Cap:
        {marketCap}
      </Label>
      |
      <Label>
        Vol:
        {volume}
      </Label>
      |
      <Label>
        BTC Dominance:
        {btcDominance}
      </Label>
    </Div>
  );
};

export default SummaryHeader;
