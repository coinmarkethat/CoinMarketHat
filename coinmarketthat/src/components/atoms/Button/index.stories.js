import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

storiesOf("atom/button")
  .add("primary", () => (
    <Button type="primary" click={action(console.log("Click me"))}>
      Subscribe
    </Button>
  ))
  .add("secondary", () => <Button type="secondary">Secondary</Button>)
  .add("success", () => <Button type="success">success</Button>)
  .add("danger", () => <Button type="danger">danger</Button>)
  .add("warning", () => <Button type="warning">warning</Button>)
  .add("light", () => <Button type="light">light</Button>)
  .add("link", () => <Button type="link">link</Button>);
