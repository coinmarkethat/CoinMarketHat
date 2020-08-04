import React from 'react';
import { Container, Row, InputGroup } from 'react-bootstrap';

import { Input, Button } from '../../atoms';
import './styles.scss';

const SubscribeInput = ({
  type,
  placeholder,
  value,
  onChange,
  theme,
  btnTitle,
  onClick,
  className
}) => {
  return (
    <Container>
      <Row>
        <InputGroup>
          <Input
            theme={theme}
            type={type}
            value={value}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
          />
          <InputGroup.Prepend>
            <Button onClick={onClick && onClick} type={type}>
              {btnTitle}
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </Row>
    </Container>
  );
};

export default SubscribeInput;
