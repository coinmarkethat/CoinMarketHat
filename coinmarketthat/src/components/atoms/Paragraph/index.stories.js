import React from "react";
import { storiesOf } from "@storybook/react";
import Paragraph from "./index";

storiesOf("atom/Paragraph")
  .add("Red Color", () => (
    <Paragraph txtColor="red">This is paragraph</Paragraph>
  ))
  .add("Black Color", () => <Paragraph txtColor="black">Black</Paragraph>)
  .add("Brown Color", () => (
    <Paragraph txtColor="brown">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis
      quis adipiscing scelerisque cursus id faucibus. Tincidunt arcu quam netus{" "}
    </Paragraph>
  ))
  .add("Blue Color", () => (
    <Paragraph txtColor="blue">Subscribe with us</Paragraph>
  ))
  .add("Green Color", () => <Paragraph txtColor="green">Blue</Paragraph>)
  .add("Green Color", () => <Paragraph txtColor="green">Blue</Paragraph>);
