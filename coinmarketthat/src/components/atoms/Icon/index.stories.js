import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./index";
storiesOf("atom/Icon", module)
  .add("Search", () => <Icon name="search" />)
  .add("Moon", () => <Icon name="moon" />)
  .add("User", () => <Icon name="user" />)
  .add("Star", () => <Icon name="star" />)

  .add("Default", () => (
    <>
      <Icon name="search" />
      <Icon name="moon" />
      <Icon name="user" />
      <Icon name="star" />
    </>
  ))
  .add("Primary", () => (
    <>
      <Icon name="search" color="blue" />
      <Icon name="moon" color="blue" />
      <Icon name="user" color="blue" />
      <Icon name="star" color="blue" />
    </>
  ))
  .add("Danger", () => (
    <>
      <Icon name="search" color="red" />
      <Icon name="moon" color="red" />
      <Icon name="user" color="red" />
      <Icon name="star" color="red" />
    </>
  ));
