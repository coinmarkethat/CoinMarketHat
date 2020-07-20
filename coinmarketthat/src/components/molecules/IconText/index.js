import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { Icon, Label, Button } from '../../atoms';
import './styles.scss';

const IconText = ({
  iconName, textTitle, color, onClick, type
}) => {
  return (
    <Container>
      <Row className="molecule-icontext-box">
        <Button type={type} onClick={onClick && onClick}>
          <Icon name={iconName} color={color} />
          <Label className="molecule-text-style">{textTitle}</Label>
        </Button>
      </Row>
    </Container>
  );
};

export default IconText;
