import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Input, Label } from '../../atoms';
import './styles.css';

const LabelTextInput = ({
  theme,
  type,
  placeholder,
  text,
  value,
  onChange,
  labelTitle,
  className
}) => {
  return (
    <Container className={'container-textinput-label' + '' + className}>
      <Row>
        <Label>{labelTitle}</Label>
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

export default LabelTextInput;
