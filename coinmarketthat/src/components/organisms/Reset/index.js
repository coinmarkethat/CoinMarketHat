import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { LabelTextInput } from '../../molecules';
import { Div, H3, Label, Button, Image } from '../../atoms';
import { Close } from '../../../assets';
import './styles.scss';

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      confrimPassword: null,
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
    };
  }

  render() {
    const {
      password,
      confirmPassword,
      isPasswordVisible,
      isConfirmPasswordVisible,
    } = this.state;
    const { theme, history } = this.props;
    return (
      <Div theme={theme} className="organism-reset-wrapper">
        <Row>
          <Col md={6}>
            <Image
              src={
                'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg'
              }
              alt="LOGO"
            />
          </Col>
          <Col md={6}>
            <Image src={Close} alt="LOGO" />
          </Col>
        </Row>
        <H3>Reset Password</H3>
        <Label>Enter new password for your account</Label>
        <Div theme={theme} className="col-md-4 mt-5">
          <LabelTextInput
            theme={theme}
            type={isPasswordVisible ? 'input' : 'password'}
            placeholder="New Password"
            value={password}
            onChange={(text) => {
              return this.setState({ password: text.target.value });
            }}
            labelTitle="New Password"
            onClick={() =>
              this.setState({ isPasswordVisible: !isPasswordVisible })
            }
            hideShowText={isPasswordVisible ? 'HIDE' : 'SHOW'}
          />
          <br />
          <LabelTextInput
            theme={theme}
            type={isConfirmPasswordVisible ? 'input' : 'password'}
            placeholder="Confirm new Password"
            value={confirmPassword}
            onChange={(text) => {
              return this.setState({ confrimPassword: text.target.value });
            }}
            labelTitle="Confirm new Password"
            onClick={() =>
              this.setState({
                isConfirmPasswordVisible: !isConfirmPasswordVisible,
              })
            }
            hideShowText={isConfirmPasswordVisible ? 'HIDE' : 'SHOW'}
          />
          <Button
            className="mt-5"
            type="primary"
            onClick={() => history.push('/login')}
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
