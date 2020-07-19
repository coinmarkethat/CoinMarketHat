import React from 'react';

import './style.css';

const Div = ({ children, theme, className, onClick }) => {
  return (
    <div
      className={
        theme === 'dark' ? 'dark-theme' : 'main-theme' + ' ' + className
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Div;
