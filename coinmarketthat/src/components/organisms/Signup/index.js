import React from 'react';

import { LabelTextInput } from '../../molecules';
import { Div, H3, Label, Anchor, Button } from '../../atoms';
import './styles.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  render() {
    const { email, password } = this.state;
    const { theme } = this.props;
    return (
      <Div theme={theme} className="organism-signup-wrapper">
        <H3>Sign Up</H3>
        <Label>
          Already have an account ? <Anchor link=""> Sign in </Anchor>
        </Label>
        <Div theme={theme} className="col-md-4 mt-5">
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
            onClick={console.log('Click me')}
            block
          >
            Sign up
          </Button>
          <Label>
            *By Signing up you agree to <br />
            our Terms of use and to receive
          </Label>
        </Div>
      </Div>
    );
  }
}

export default Signup;
