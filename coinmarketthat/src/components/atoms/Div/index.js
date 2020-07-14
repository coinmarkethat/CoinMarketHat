import React from 'react';

import './style.css';

const Div = ({ children, bgColor }) => {
  let color;
  if (bgColor === 'white') {
    color = 'white';
  } else {
    color = 'gray';
  }
  return <div className={color}>{children}</div>;
};

export default Div;
