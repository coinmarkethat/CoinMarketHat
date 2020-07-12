import React from "react";
import "./style.css";

function Anchor({ children, link }) {
  return (
    <a href={link} className="a__anchor">
      {children}
    </a>
  );
}

export default Anchor;
