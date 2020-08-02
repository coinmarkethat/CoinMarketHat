import React from 'react';

import { LabelTextInput } from '../../molecules';
import { Div, H3, Label, Button } from '../../atoms';
import './styles.scss';

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      confrimPassword: null,
    };
  }

  render() {
    const { password, confirmPassword } = this.state;
    const { theme } = this.props;
    return (
      <Div theme={theme} className="organism-reset-wrapper">
        <H3>Reset Password</H3>
        <Label>Enter new password for your account</Label>
        <Div theme={theme} className="col-md-4 mt-5">
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
            placeholder="Confirm new Password"
            value={confirmPassword}
            onChange={(text) => {
              return this.setState({ confrimPassword: text.target.value });
            }}
            labelTitle="Confirm new Password"
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
