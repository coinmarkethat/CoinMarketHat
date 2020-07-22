import React from 'react';

import { LabelTextInput } from '../../molecules';
import { Div, H3, Label, Anchor, Button } from '../../atoms';
import './styles.css';

const theme = 'white';

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      confrimPassword: null,
    };
  }

  render() {
    const { password, confrimPassword } = this.state;
    return (
      <Div theme={theme} className="organism-reset-div">
        <H3>Reset Password</H3>
        <Label>Enter new password for your account</Label>
        <Div theme={theme} className="organism-login-div col-md-4 mt-5">
          <LabelTextInput
            theme={theme}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(text) => {
              return this.setState({ password: text.target.value });
            }}
            labelTitle="New Password"
          />
          <br />
          <LabelTextInput
            theme={theme}
            type="password"
            placeholder="Confrim new Password"
            value={confrimPassword}
            onChange={(text) => {
              return this.setState({ confrimPassword: text.target.value });
            }}
            labelTitle="Confrim new Password"
          />
          <Button
            className="mt-5"
            type="primary"
            onClick={console.log('change my password')}
            block
          >
            Change my Password
          </Button>
        </Div>
      </Div>
    );
  }
}

export default Reset;
