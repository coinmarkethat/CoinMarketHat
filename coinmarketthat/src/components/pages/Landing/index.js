import React from 'react';

import { Navbar, Footer } from '../../organisms';
import LandingTemplate from '../../templates/Landing';

class Landing extends React.Component {
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
    const { history, ...rest } = this.props;
    return (
      <>
        <Navbar
          theme={theme}
          showMoonList={true}
          history={history}
          toggleMode={(newTheme) => this.handleChangeTheme(newTheme)}
        />
        <LandingTemplate
          theme={theme}
          cryptocurrenciesValue="5,563"
          marketValue="545,563"
          volume="$678,445,563"
          btcDominance="64.8%"
          marketCap="$5,454,563"
          {...rest}
        />
        <Footer theme={theme} />
      </>
    );
  }
}

export default Landing;
