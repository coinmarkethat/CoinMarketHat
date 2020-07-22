import React, { Component } from 'react';

import { LabelTextInput } from '../../molecules';
import { Div, H3, Label, Anchor, Button } from '../../atoms';
import './styles.css';

const theme = 'white';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <Div theme={theme} className="organism-login-div">
        <H3>Sign In</H3>
        <Label>
          Dont Have an Account ? <Anchor link="">Create Account </Anchor>
        </Label>
        <Div theme={theme} className="organism-login-div col-md-4 mt-5">
          <LabelTextInput
            theme={theme}
            type="input"
            placeholder="Enter email"
            value={email}
            onChange={(text) => {
              return this.setState({ email: text.target.value });
            }}
            labelTitle="Email Address"
          />
          <br />
          <LabelTextInput
            theme={theme}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(text) => {
              return this.setState({ password: text.target.value });
            }}
            labelTitle="Password"
          />
          <Button
            className="mt-5"
            type="primary"
            onClick={console.log('Login')}
            block
          >
            Sign In
          </Button>
          <Div onClick={console.log('Forgot')} className="mt-5">
            Forgot Password ?
          </Div>
        </Div>
      </Div>
    );
  }
}

export default index;
