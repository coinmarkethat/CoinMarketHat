import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomButton = ({ children, click, type }) => {
  return (
    <Button onClick={click} variant={type}>
      {children}
    </Button>
  );
};

export default CustomButton;
