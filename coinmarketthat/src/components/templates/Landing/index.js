import React from 'react';

import { CryptoCurrencyTable } from '../../organisms';
import { SummaryHeader } from '../../molecules';
import { H4, Div } from '../../atoms';
import ButtonRow from '../../organisms/ButtonRow';
import './styles.scss';

class Landing extends React.Component {
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
      <Div theme={theme} className="template-landing-container">
        <SummaryHeader
          theme={theme}
          cryptocurrenciesValue={cryptocurrenciesValue}
          marketValue={marketValue}
          volume={volume}
          btcDominance={btcDominance}
          marketCap={marketCap}
        />
        <H4>Top 100 Coins By Market Capitalization</H4>
        <ButtonRow theme={theme} />
        <CryptoCurrencyTable theme={theme} />
      </Div>
    );
  }
}

export default Landing;
