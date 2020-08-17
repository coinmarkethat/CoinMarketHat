import React from 'react';

import { Navbar, Footer } from '../../organisms';
import { MoonBoardTemplate } from '../../templates';

class MoonBoard extends React.Component {
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
    const {
      theme = mode ? 'white' : 'dark',
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
          toggleMode={this.handleMode.bind(this)}
        />
        <MoonBoardTemplate />
        <Footer theme={theme} />
      </>
    );
  }
}

export default MoonBoard;

