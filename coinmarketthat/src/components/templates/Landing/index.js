import React from 'react';

import { CryptoCurrencyTable, FilterModal } from '../../organisms';
import { SummaryHeader } from '../../molecules';
import { H4, Div } from '../../atoms';
import ButtonRow from '../../organisms/ButtonRow';
import './styles.scss';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterModalVisible: false,
    };
  }

  handleShowHideModal = () => {
    const { isFilterModalVisible } = this.state;
    this.setState({ isFilterModalVisible: !isFilterModalVisible });
  };
  render() {
    const {
      theme,
      history,
      cryptocurrenciesValue,
      marketValue,
      volume,
      btcDominance,
      marketCap,
    } = this.props;
    const { isFilterModalVisible } = this.state;
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
        <ButtonRow
          theme={theme}
          setFilterModalVisible={() => this.handleShowHideModal()}
        />
        <CryptoCurrencyTable theme={theme} history={history} />
        <FilterModal
          theme={theme}
          isVisible={isFilterModalVisible}
          onHideFilterModal={() => this.handleShowHideModal()}
        />
      </Div>
    );
  }
}

export default Landing;
