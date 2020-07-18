import React from 'react';
import { FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

const Input = ({ type, placeholder, value, onChange, theme }) => {
  let setMode;
  switch (theme) {
    case 'dark':
      setMode = 'a__input__dark';
      break;
    case 'white':
      setMode = 'a__input__white';
      break;
    default:
      setMode = 'a__input__noboder';
      break;
  }
  return (
    <FormControl
      type={type}
      value={value}
      className={setMode}
      placeholder={placeholder}
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={onChange}
    />
  );
};

export default Input;
