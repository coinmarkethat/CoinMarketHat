import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl } from "react-bootstrap";
function Input({ type, placeholder, value, onChange, mode }) {
  let setMode;
  if (mode === "white") {
    setMode = "a__input__dark";
  } else {
    setMode = "a__input__white";
  }
  return (
    <FormControl
      type={type}
      value={value}
      className={setMode}
      placeholder={placeholder}
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={onChange}
    />
  );
}

export default Input;
