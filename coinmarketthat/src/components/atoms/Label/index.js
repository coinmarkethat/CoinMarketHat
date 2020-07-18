import React from 'react';

import './style.css';

const Label = ({ children, className }) => {
  return <span className={'a__label' + ' ' + className}>{children}</span>;
};

export default Label;
