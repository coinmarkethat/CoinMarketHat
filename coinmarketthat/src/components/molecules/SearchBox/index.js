import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Input, Icon } from '../../atoms';

const SearchBox = ({
  theme,
  type,
  placeholder,
  text,
  value,
  onChange,
  icon,
  color,
  height,
  width,
}) => {
  return (
    <Container>
      <Row>
        <Icon name={icon} color={color} height={height} width={width} />
        <Input
          theme={theme}
          type={type}
          placeholder={placeholder}
          text={text}
          onChange={onChange}
          value={value}
        />
      </Row>
    </Container>
  );
};

export default SearchBox;
