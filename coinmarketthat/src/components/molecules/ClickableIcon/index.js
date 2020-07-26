import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { Icon, Div } from '../../atoms';
import './styles.scss';

const ClickableIcon = ({
  theme,
  className,
  onClick,
  iconName,
  color,
  height,
  width
}) => {
  return (
    <Container>
      <Row>
        <Div theme={theme} className={className} onClick={onClick && onClick}>
          <Icon name={iconName} color={color} height={height} width={width} />
        </Div>
      </Row>
    </Container>
  );
};

export default ClickableIcon;
