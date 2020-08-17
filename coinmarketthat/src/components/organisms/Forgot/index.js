import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { LabelTextInput } from '../../molecules';
import { Div, H3, Label, Button, Image } from '../../atoms';
import { Close } from '../../../assets';
import './styles.scss';

class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
    };
  }

  render() {
    const { email } = this.state;
    const { theme, history } = this.props;
    return (
      <Div theme={theme} className="organism-forgot-wrapper">
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
        <H3>Forgot Password</H3>
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
          <Button
            className="mt-5"
            type="primary"
            onClick={() => history.push('/reset')}
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
