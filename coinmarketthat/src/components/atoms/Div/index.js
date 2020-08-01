import React from 'react';

import './style.css';

const Div = ({ children, theme, className, onClick }) => {
  let setTheme;
  switch (theme) {
    case 'dark':
      setTheme = 'dark-theme' + ' ' + className;
      break;
    case 'white':
      setTheme = 'white-theme' + ' ' + className;
      break;
    default:
      setTheme = 'no-theme' + ' ' + className;
      break;
  }
  return (
    <div className={setTheme} onClick={onClick}>
      {children}
    </div>
  );
};

export default Div;
