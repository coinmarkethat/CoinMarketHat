import React from 'react';

import './style.css';

const Image = ({ src, alt }) => {
  return <img className="a__image" src={src} alt={alt} />;
};

export default Image;
