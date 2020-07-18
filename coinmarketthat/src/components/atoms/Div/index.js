import React from 'react';

import './style.css';

const Div = ({ children, theme, className }) => {
  return (
    <div
      className={
        theme === 'dark' ? 'dark-theme' : 'main-theme' + ' ' + className
      }
    >
      {children}
    </div>
  );
};

export default Div;
