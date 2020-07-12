import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default ({ children, click, type }) => (
  <Button onClick={click} variant={type}>
    {children}
  </Button>
);
