import React from 'react';

import { Div } from '../../atoms';
import { SummaryHeader } from '../../molecules';
import { AddCryptoCurrencyBox } from '../../molecules';

class MoonBoardTemplate extends React.Component {
  render() {
    const {
      theme,
      cryptocurrenciesValue,
      marketValue,
      volume,
      btcDominance,
      marketCap,
    } = this.props;
    return (
      <Div theme={theme} className="template-moonboard-container">
        <SummaryHeader
          theme={theme}
          cryptocurrenciesValue={cryptocurrenciesValue}
          marketValue={marketValue}
          volume={volume}
          btcDominance={btcDominance}
          marketCap={marketCap}
        />
        <AddCryptoCurrencyBox theme={theme} />
      </Div>
    );
  }
}

export default MoonBoardTemplate;
