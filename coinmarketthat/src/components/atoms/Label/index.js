import React from 'react';

import './style.css';

const Label = ({ children, className = '', ...rest }) => {
  return <label className={'atom-label' + ' ' + className} {...rest}>{children}</label>;
};

export default Label;
