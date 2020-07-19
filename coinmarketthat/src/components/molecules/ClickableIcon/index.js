import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { Icon, Div } from '../../atoms';
import './styles.scss';

const ClickableIcon = ({ onClick, iconName, color, height, width }) => {
  return (
    <Container>
      <Row>
        <Div onClick={onClick && onClick}>
          <Icon name={iconName} color={color} height={height} width={width} />
        </Div>
      </Row>
    </Container>
  );
};

export default ClickableIcon;
