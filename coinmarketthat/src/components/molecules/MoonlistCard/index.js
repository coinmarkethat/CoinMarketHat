import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { Div, Icon, Label, Paragraph } from '../../atoms';
import './styles.scss';
import IconText from '../IconText';

const MoonlistCard = ({ theme }) => {
  return (
    <Div
      className={theme === 'dark'
        ? "molecules-moonlistCard-wrapper molecules-moonlistCard-dark"
        : "molecules-moonlistCard-wrapper"}
      theme={theme}
    >
      <Col>
        <Row className="top-row">
          <Paragraph>1200</Paragraph>
        </Row></Col>
      <Col className="pl-4 pr-4 pb-4">
        <Row className="molecules-bitcoin-percent-row">
          <IconText
            iconName="Star"
            textTitle="Bitcoin"
            color="black"
            labelClassName="organism-crypto-table"
          />
          <Paragraph className="molecules-percent-text">0.34%</Paragraph>
        </Row>
        <Row className="molecules-price-row">
          <Label className="molecules-price-label">$9748.58</Label>
          <Label className="molecules-dot-separator">·</Label>
          <Paragraph className="molecules-btc-text">1.000000 BTC</Paragraph>
        </Row>
        <Row>
          <Col md={4} className="molecules-market-cap">
            <Row>
              <Label>Market Cap</Label>
            </Row>
            <Row>
              <Label>170.93 B</Label>
            </Row>
          </Col>
          <Col className="ml-4 molecules-value-column">
            <Row>
              <Label className="molecules-value-label">Value</Label>
            </Row>
            <Row>
              <Label className="molecules-add-btc-label">Add BTC</Label>
            </Row>
          </Col>
        </Row>
      </Col>
    </Div>
  );
}

export default MoonlistCard;
