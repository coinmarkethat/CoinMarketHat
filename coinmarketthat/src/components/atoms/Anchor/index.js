import React from 'react';

import './style.css';

const Anchor = ({ children, link }) => {
  return (
    <a href={link} className="atom-anchor">
      {children}
    </a>
  );
};

export default Anchor;
