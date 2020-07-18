import React from 'react';

const Arrow = (props) => (
  <svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 7 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 4.2L0 0.7L0.7 0L3.5 2.8L6.3 0L7 0.7L3.5 4.2Z"
      fill={props.color || '#000000'}
    />
  </svg>
);

export default Arrow;
