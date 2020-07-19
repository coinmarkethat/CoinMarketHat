import React from 'react';
import { Row, Container } from 'react-bootstrap';

import { Label, Icon, Div } from '../../atoms';
import './styles.css';

const FilterList = ({ title, icon, onClick }) => {
  return (
    <Container>
      <Row className="molecule-filter-list border-line">
        <Label>{title}</Label>
        <Div theme="white" onClick={onClick && onClick}>
          <Icon name={icon} />
        </Div>
      </Row>
    </Container>
  );
};

export default FilterList;
