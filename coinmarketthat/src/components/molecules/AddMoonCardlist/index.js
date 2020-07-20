import React from 'react';
import { Row, Col } from 'react-bootstrap';

import {
  Label, Image, HR, Div, Button
} from '../../atoms';
import './styles.scss';

const MoonCardList = ({
  title, src, type, onClick, btnTitle
}) => {
  return (
    <Div className="molecule-moon-list">
      <Row>
        <Col md={2}>
          <Image src={src} className="align-center" />
        </Col>
        <Col md={5}>
          <Label className="font-weight-bold">{title}</Label>
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
