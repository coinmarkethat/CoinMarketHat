import React from 'react';

import './style.css';

const Image = ({ src, alt }) => {
  return <img className="atom-image" src={src} alt={alt} />;
};

export default Image;
