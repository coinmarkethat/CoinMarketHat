import React from 'react';

import { Navbar, Footer } from '../../organisms';
import LandingTemplate from '../../templates/Landing';

class Landing extends React.Component {
  state = {
    mode: true,
  };

  handleMode() {
    this.setState({
      mode: !this.state.mode,
    });
  }

  render() {
    let { mode } = this.state;
    const { theme = mode ? 'white' : 'dark', history, ...rest } = this.props;
    return (
      <>
        <Navbar
          theme={theme}
          showMoonList={true}
          history={history}
          toggleMode={this.handleMode.bind(this)}
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
