import React from 'react';

import { Label, Div } from '../../atoms';
import './styles.scss';

const SummaryHeader = ({
  crptocurrenciesValue,
  MarketValue,
  Volume,
  btcDominance,
  marketCap,
}) => {
  return (
    <Div className="molecule-summary-header-wrapper">
      <Label>Cryptocurrencies: {crptocurrenciesValue} </Label>|
      <Label>Market:{MarketValue} </Label>|
      <Label>Market Cap: {marketCap} </Label>|<Label>Vol: {Volume} </Label>|
      <Label>BTC Dominance: {btcDominance} </Label>
    </Div>
  );
};

export default SummaryHeader;
