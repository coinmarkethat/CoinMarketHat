import React from 'react';

const Dash = (props) => (
  <svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5 14.8125H26.5C26.6667 14.8125 26.75 14.8958 26.75 15.0625V16.9375C26.75 17.1042 26.6667 17.1875 26.5 17.1875H5.5C5.33333 17.1875 5.25 17.1042 5.25 16.9375V15.0625C5.25 14.8958 5.33333 14.8125 5.5 14.8125Z"
      fill={props.color || '#000000'}
    />
  </svg>
);

export default Dash;
