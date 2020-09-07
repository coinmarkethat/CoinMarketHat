import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Div, Label, Paragraph } from '../../atoms';
import { LogoBitcoin } from '../../../assets';
import CurrencyIconText from '../CurrencyIconText';

import './styles.scss';

const MoonlistCard = ({ theme }) => {
  return (
    <Div
      className={
        theme === 'dark'
          ? 'molecules-moonlistCard-wrapper molecules-moonlistCard-dark'
          : 'molecules-moonlistCard-wrapper'
      }
      theme={theme}
    >
      <Col className="mb-1">
        <Row className="top-row">
          <Paragraph>1200</Paragraph>
        </Row>
      </Col>
      <Col className="pl-4 pr-4 pb-4">
        <Row className="molecules-bitcoin-percent-row">
          <CurrencyIconText
            theme={theme}
            source={LogoBitcoin}
            textTitle="Bitcoin"
          />
          <Paragraph className="molecules-percent-text">0.34%</Paragraph>
        </Row>
        <Row className="molecules-price-row mt-2 mb-2">
          <Label className="molecules-price-label">$9748.58</Label>
          <Label className="molecules-dot-separator">·</Label>
          <Paragraph className="molecules-btc-text">1.000000 BTC</Paragraph>
        </Row>
        <Row>
          <Col className="molecules-market-cap">
            <Row className="molecules-market-cap-row">
              <Label>Market Cap</Label>
            </Row>
            <Row>
              <Label>170.93 B</Label>
            </Row>
          </Col>
          <Col className="ml-3 molecules-value-column">
            <Row>
              <Label className="molecules-value-label">Value</Label>
            </Row>
            <Row>
              <Label className="molecules-add-btc-label">Add BTC</Label>
              <Label className="molecules-value-sub-btc-label ml-2">
                10 BTC
              </Label>
            </Row>
          </Col>
        </Row>
      </Col>
    </Div>
  );
};

export default MoonlistCard;
