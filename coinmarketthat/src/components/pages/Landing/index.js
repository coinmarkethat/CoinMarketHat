import React from 'react';

import { Navbar, Footer, AdBanner } from '../../organisms';
import LandingTemplate from '../../templates/Landing';
import { Div } from '../../atoms';
import './styles.scss';

class Landing extends React.Component {
  state = {
    theme: localStorage.getItem('theme') || 'white',
    closeAd: true,
  };

  handleChangeTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    const { theme, closeAd } = this.state;
    const { history, ...rest } = this.props;
    return (
      <Div theme={theme} className="page-landing-wrapper">
        <AdBanner
          onClick={() => this.setState({ closeAd: false })}
          isClosedAd={closeAd}
        />
        <Navbar
          theme={theme}
          showMoonList={true}
          history={history}
          toggleMode={(newTheme) => this.handleChangeTheme(newTheme)}
        />
        <LandingTemplate
          theme={theme}
          history={history}
          cryptocurrenciesValue="5,563"
          marketValue="545,563"
          volume="$678,445,563"
          btcDominance="64.8%"
          marketCap="$5,454,563"
          {...rest}
        />
        <Footer theme={theme} />
      </Div>
    );
  }
}

export default Landing;
