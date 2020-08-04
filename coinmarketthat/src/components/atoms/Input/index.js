import React from 'react';
import { FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

const Input = ({ type, placeholder, value, onChange, theme }) => {
  let setMode;
  switch (theme) {
    case 'dark':
      setMode = 'atom-input-dark';
      break;
    case 'white':
      setMode = 'atom-input-white';
      break;
    default:
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
