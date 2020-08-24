import React from 'react';

import './style.css';

const Image = ({ src, alt , ...props}) => {
  return <img className="atom-image" src={src} alt={alt} {...props} />;
};

export default Image;
