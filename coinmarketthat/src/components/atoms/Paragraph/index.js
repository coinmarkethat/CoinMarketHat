import React from 'react';

import './style.css';

const Paragraph = ({ children, className }) => {
  return <p className={'atom-p' + ' ' + className}>{children}</p>;
};

export default Paragraph;
