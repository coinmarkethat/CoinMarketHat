import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { LabelTextInput } from '../../molecules';
import { Div, H3, Label, Anchor, Button, Image } from '../../atoms';
import { Close } from '../../../assets';
import './styles.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      isPasswordVisible: false,
    };
  }

  render() {
    const { email, password, isPasswordVisible } = this.state;
    const { theme, history } = this.props;
    const imageClick = () => {
      alert('Click');
    };
    return (
      <Div theme={theme} className="organism-signup-wrapper">
        <Row>
          <Col md={6}>
            <Image
              src={
                'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg'
              }
              alt="LOGO"
              style={{ height: '25px', width: '25px' }}
              onClick={() => history.push('/dashboard')}
            />
          </Col>
          <Col md={6}>
            <Image
              src={Close}
              alt="Close"
              style={{ height: '20px', width: '20px' }}
              onClick={() => history.push('/dashboard')}
            />
          </Col>
        </Row>
        <H3>Sign Up</H3>
        <Label>
          Already have an account ?&nbsp;
          <Label className="organisms-signup-signin-text" onClick={() => history.push('/login')}>
            Sign in
          </Label>
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
            type={isPasswordVisible ? 'input' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={(text) => {
              return this.setState({ password: text.target.value });
            }}
            labelTitle="Password"
            onClick={() =>
              this.setState({ isPasswordVisible: !isPasswordVisible })
            }
            hideShowText={isPasswordVisible ? 'HIDE' : 'SHOW'}
          />
          <Button
            className="mt-5"
            type="primary"
            onClick={() => history.push('/login')}
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
