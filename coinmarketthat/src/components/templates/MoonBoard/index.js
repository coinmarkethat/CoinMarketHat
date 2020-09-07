import React from 'react';

import { Div } from '../../atoms';
import { SummaryHeader } from '../../molecules';
import { MoonList } from '../../organisms';

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
        <MoonList theme={theme} />
      </Div>
    );
  }
}

export default MoonBoardTemplate;
