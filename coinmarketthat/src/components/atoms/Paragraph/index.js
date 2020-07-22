import React from 'react';

import './style.css';

const Paragraph = ({ children, txtColor }) => {
  let textColor;
  switch (txtColor) {
    case 'red':
      textColor = 'red';
      break;
    case 'black':
      textColor = 'black';
      break;
    case 'gray':
      textColor = 'gray';
      break;
    case 'blue':
      textColor = 'blue';
      break;
    case 'green':
      textColor = 'green';
      break;
    default:
      break;
  }
  return <p className={`${textColor}`}>{children}</p>;
};

export default Paragraph;
