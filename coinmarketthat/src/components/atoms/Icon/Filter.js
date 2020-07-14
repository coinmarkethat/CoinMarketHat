import React from "react";

const Filter = (props) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.11325 11.0001C3.25099 10.6097 3.50641 10.2717 3.84432 10.0326C4.18223 9.79352 4.58598 9.66512 4.99992 9.66512C5.41386 9.66512 5.81761 9.79352 6.15552 10.0326C6.49343 10.2717 6.74885 10.6097 6.88659 11.0001H13.6666V12.3334H6.88659C6.74885 12.7238 6.49343 13.0618 6.15552 13.3009C5.81761 13.54 5.41386 13.6684 4.99992 13.6684C4.58598 13.6684 4.18223 13.54 3.84432 13.3009C3.50641 13.0618 3.25099 12.7238 3.11325 12.3334H0.333252V11.0001H3.11325ZM7.11325 6.33342C7.25099 5.94307 7.50641 5.60504 7.84432 5.36595C8.18223 5.12685 8.58598 4.99845 8.99992 4.99845C9.41386 4.99845 9.81761 5.12685 10.1555 5.36595C10.4934 5.60504 10.7489 5.94307 10.8866 6.33342H13.6666V7.66675H10.8866C10.7489 8.05711 10.4934 8.39513 10.1555 8.63423C9.81761 8.87332 9.41386 9.00172 8.99992 9.00172C8.58598 9.00172 8.18223 8.87332 7.84432 8.63423C7.50641 8.39513 7.25099 8.05711 7.11325 7.66675H0.333252V6.33342H7.11325ZM3.11325 1.66675C3.25099 1.2764 3.50641 0.938377 3.84432 0.699281C4.18223 0.460184 4.58598 0.331787 4.99992 0.331787C5.41386 0.331787 5.81761 0.460184 6.15552 0.699281C6.49343 0.938377 6.74885 1.2764 6.88659 1.66675H13.6666V3.00009H6.88659C6.74885 3.39044 6.49343 3.72847 6.15552 3.96756C5.81761 4.20666 5.41386 4.33505 4.99992 4.33505C4.58598 4.33505 4.18223 4.20666 3.84432 3.96756C3.50641 3.72847 3.25099 3.39044 3.11325 3.00009H0.333252V1.66675H3.11325ZM4.99992 3.00009C5.17673 3.00009 5.3463 2.92985 5.47132 2.80483C5.59635 2.6798 5.66659 2.51023 5.66659 2.33342C5.66659 2.15661 5.59635 1.98704 5.47132 1.86202C5.3463 1.73699 5.17673 1.66675 4.99992 1.66675C4.82311 1.66675 4.65354 1.73699 4.52851 1.86202C4.40349 1.98704 4.33325 2.15661 4.33325 2.33342C4.33325 2.51023 4.40349 2.6798 4.52851 2.80483C4.65354 2.92985 4.82311 3.00009 4.99992 3.00009ZM8.99992 7.66675C9.17673 7.66675 9.3463 7.59652 9.47132 7.47149C9.59635 7.34647 9.66659 7.1769 9.66659 7.00009C9.66659 6.82328 9.59635 6.65371 9.47132 6.52868C9.3463 6.40366 9.17673 6.33342 8.99992 6.33342C8.82311 6.33342 8.65354 6.40366 8.52851 6.52868C8.40349 6.65371 8.33325 6.82328 8.33325 7.00009C8.33325 7.1769 8.40349 7.34647 8.52851 7.47149C8.65354 7.59652 8.82311 7.66675 8.99992 7.66675ZM4.99992 12.3334C5.17673 12.3334 5.3463 12.2632 5.47132 12.1382C5.59635 12.0131 5.66659 11.8436 5.66659 11.6668C5.66659 11.4899 5.59635 11.3204 5.47132 11.1953C5.3463 11.0703 5.17673 11.0001 4.99992 11.0001C4.82311 11.0001 4.65354 11.0703 4.52851 11.1953C4.40349 11.3204 4.33325 11.4899 4.33325 11.6668C4.33325 11.8436 4.40349 12.0131 4.52851 12.1382C4.65354 12.2632 4.82311 12.3334 4.99992 12.3334Z"
      fill={props.color || "#000000"}
    />
  </svg>
);

export default Filter;
