import React from 'react';

import './style.css';

const Label = ({ children, className }) => {
  return <label className={'a__label' + ' ' + className}>{children}</label>;
};

export default Label;
