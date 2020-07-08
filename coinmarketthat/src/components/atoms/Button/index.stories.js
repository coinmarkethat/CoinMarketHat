import React from "react";
import "./style.css";
import { storiesOf } from "@storybook/react";
import Button from "./index";
import { action } from "@storybook/addon-actions";

storiesOf("atom", module)
  .add("button", () => <Button onClick={action("clicked")}>Learn more</Button>)
  .add("button", () => <Button> Header </Button>);
