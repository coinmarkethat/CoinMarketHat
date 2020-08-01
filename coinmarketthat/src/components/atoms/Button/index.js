import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

const CustomButton = ({ children, onClick, type, className, ...rest }) => {
  return (
    <Button className={className} onClick={onClick} variant={type} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
