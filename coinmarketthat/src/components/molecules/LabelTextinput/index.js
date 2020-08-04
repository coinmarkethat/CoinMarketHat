import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { Input, Label } from '../../atoms';
import './styles.scss';

const LabelTextInput = ({
  theme,
  type,
  placeholder,
  text,
  value,
  onChange,
  labelTitle,
}) => {
  return (
    <Container className={'molecule-textinput-label-wrapper'}>
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
        <Label>HIDE</Label>
      </Row>
    </Container>
  );
};

export default LabelTextInput;
