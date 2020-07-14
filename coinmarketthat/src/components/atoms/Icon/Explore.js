import React from "react";

const Explore = (props) => (
  <svg
    width="44"
    height="30"
    viewBox="0 0 44 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M16.1818 7.27786L38 1L27.8182 14.4526L6 20.7304L16.1818 7.27786Z"
        stroke={props.color || "black"}
      />
      <ellipse
        cx="22.0002"
        cy="10.865"
        rx="2.9091"
        ry="1.79373"
        fill={props.color || "#000000"}
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.694916"
        y="0.104248"
        width="42.6101"
        height="29.522"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Explore;
