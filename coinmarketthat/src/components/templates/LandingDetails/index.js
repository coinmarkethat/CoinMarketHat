import React from 'react';

import { Div, H4 } from '../../atoms';
import { SummaryHeader } from '../../molecules';
import './styles.scss';

class LandingDetailsTemplate extends React.Component {
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
      <Div className="template-landingDetails-container">
        <SummaryHeader
          theme={theme}
          cryptocurrenciesValue={cryptocurrenciesValue}
          marketValue={marketValue}
          volume={volume}
          btcDominance={btcDominance}
          marketCap={marketCap}
        />
        <H4>
          <H4>Landing-Details</H4>
        </H4>
      </Div>
    );
  }
}

export default LandingDetailsTemplate;
