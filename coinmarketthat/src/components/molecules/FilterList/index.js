import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Label, Icon, Div, HR } from '../../atoms';
import './styles.scss';

const FilterList = ({
  theme,
  title,
  icon,
  onClick,
  color,
  border,
  className = '',
}) => {
  return (
    <Div
      theme={theme}
      className={'molecule-filterlist-wrapper' + ' ' + className}
    >
      <Row className="molecule-filterlist-row">
        <Col md={10}>
          <Label>{title}</Label>
        </Col>
        <Col md={2}>
          <Div onClick={onClick && onClick}>
            <Icon name={icon} color={color} />
          </Div>
        </Col>
      </Row>
      {border && (
        <Row>
          <Col md={12}>
            <HR />
          </Col>
        </Row>
      )}
    </Div>
  );
};

export default FilterList;
