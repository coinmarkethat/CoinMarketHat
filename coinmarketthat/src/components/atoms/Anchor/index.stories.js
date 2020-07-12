import React from "react";
import { storiesOf } from "@storybook/react";
import Anchor from "./index";
import { action } from "@storybook/addon-actions";

storiesOf("atom").add("Anchor", () => (
  <Anchor onClick={action("clicked")} link="#">
    Link
  </Anchor>
));
