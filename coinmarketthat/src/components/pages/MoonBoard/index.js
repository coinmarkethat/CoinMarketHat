import React from 'react';

import { Navbar, Footer } from '../../organisms';
import { MoonBoardTemplate } from '../../templates';

class MoonBoard extends React.Component {
  state = {
    theme: localStorage.getItem('theme') || 'white',
  };

  handleChangeTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    const { theme } = this.state;
    const {
      history,
      showMoonList,
      ...rest
    } = this.props;
    return (
      <>
        <Navbar
          theme={theme}
          showMoonList={false}
          history={history}
          toggleMode={(newTheme) => this.handleChangeTheme(newTheme)}
        />
        <MoonBoardTemplate
          theme={theme}
          cryptocurrenciesValue="5,563"
          marketValue="545,563"
          volume="$678,445,563"
          btcDominance="64.8%"
          marketCap="$5,454,563"
        />
        <Footer theme={theme} />
      </>
    );
  }
}

export default MoonBoard;
