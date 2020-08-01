import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Label, Image, HR, Div, Button } from '../../atoms';
import './styles.scss';

const MoonCardList = ({ theme, title, src, type, onClick, btnTitle }) => {
  return (
    <Div theme={theme} className="molecule-moonlist-wrapper">
      <Row>
        <Col md={2}>
          <Image src={src} />
        </Col>
        <Col md={5}>
          <Label>{title}</Label>
        </Col>
        <Col md={5}>
          <Button
            type={type}
            onClick={onClick && onClick}
            className="text-uppercase float-right"
          >
            {btnTitle}
          </Button>
        </Col>
      </Row>
      <HR />
    </Div>
  );
};

export default MoonCardList;
