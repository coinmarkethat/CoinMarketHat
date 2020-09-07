import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Paragraph, Div, Button, HR } from '../../atoms';
import './style.scss';
import SubscribeInput from '../../molecules/SubscribeInput';

const Footer = ({ theme }) => {
  return (
    <Div theme={theme} className="organism-footer-container p-2">
      <Row className="p-4 pt-5">
        <Col md={4}>
          <Button type="light" onClick={console.log('Click me')}>
            LOGO
          </Button>
          <Paragraph className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            convallis quis adipiscing scelerisque cursus id faucibus. Tincidunt
            arcu quam netus
          </Paragraph>
        </Col>
        <Col md={4} className="footer-navs-div">
          <Paragraph>About Us</Paragraph>
          <Paragraph>Careers</Paragraph>
          <Paragraph>Advertising</Paragraph>
          <Paragraph>Listing</Paragraph>
        </Col>
        <Col md={4}>
          <Paragraph className="mb-0">For latest news & Updates ??</Paragraph>
          <Paragraph className="footer-subscribe-p">
            Subscribe with us !
          </Paragraph>
          <SubscribeInput
            type="primary"
            placeholder="Email Address"
            onClick={console.log('Click me')}
            btnTitle="Subscribe"
          />
        </Col>
      </Row>
      <HR className="mx-4" />
      <Paragraph>Copyright 2020 Coinmarket Hat</Paragraph>
    </Div>
  );
};

export default Footer;
