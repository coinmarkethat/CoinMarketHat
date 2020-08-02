import React from 'react';
import { Row, Container,Col } from 'react-bootstrap';

import { Label, Icon, Div, HR } from '../../atoms';
import './styles.scss';

const FilterList = ({ title, icon, onClick }) => {
  return (
    <Div className={'molecule-filterlist-wrapper'}>
        
        <Row>
          
       <Col md={10}><Label>{title}</Label></Col>
        <Col md={2}>
        <Div onClick={onClick && onClick}>
          <Icon name={icon}  />
        </Div>
        </Col>
        </Row>
        <Row><Col md={12}><HR/></Col></Row>
        
    </Div>
  );
};

export default FilterList;
