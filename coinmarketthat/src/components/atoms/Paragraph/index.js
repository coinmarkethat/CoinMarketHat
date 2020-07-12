import React from "react";
import "./style.css";

const Paragraph = ({ children, txtColor }) => {
  let textColor;
  if (txtColor === "red") {
    textColor = "red";
  } else if (txtColor === "black") {
    textColor = "black";
  } else if (txtColor === "brown") {
    textColor = "brown";
  } else if (txtColor === "blue") {
    textColor = "blue";
  } else if (txtColor === "green") {
    textColor = "green";
  }
  return <p className={`${textColor}`}>{children}</p>;
};

export default Paragraph;
