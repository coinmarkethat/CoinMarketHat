import React from 'react';

import { LabelTextInput } from '../../molecules';
import {
  Div, H3, Label, Button
} from '../../atoms';
import './styles.scss';

class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null
    };
  }

  render() {
    const { email } = this.state;
    const { theme } = this.props;
    return (
      <Div theme={theme} className="organism-forgot-div">
        <H3>Forgot Password</H3>
        <Div theme={theme} className="organism-login-div col-md-4 mt-5">
          <LabelTextInput
            theme={theme}
            type="input"
            placeholder="Enter email"
            value={email}
            onChange={text => {
              return this.setState({ email: text.target.value });
            }}
            labelTitle="Email Address"
          />
          <Button
            className="mt-5"
            type="primary"
            onClick={console.log('forgot reset')}
            block
          >
            Get Reset Link
          </Button>
          <Label className="mt-5">
            *Details related to change password are sent to your email. Please
            check your mail for details.
          </Label>
        </Div>
      </Div>
    );
  }
}

export default Forgot;
