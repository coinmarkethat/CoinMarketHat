import React from "react";
import Image from "./index";
import { storiesOf } from "@storybook/react";
storiesOf("atom").add("Image", () => (
  <Image
    src={
      "https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg"
    }
    alt="Hello"
  />
));
