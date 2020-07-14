import React from "react";
import { storiesOf } from "@storybook/react";

import Icon from "./index";

storiesOf("atom/Icon", module)
  .add("CarbonClose", () => <Icon name="CarbonClose" />)
  .add("CarbonPassword", () => <Icon name="CarbonPassword" />)
  .add("CloseTag", () => <Icon name="CloseTag" />)
  .add("Dash", () => <Icon name="Dash" />)
  .add("Explore", () => <Icon name="Explore" />)
  .add("Cross", () => <Icon name="Cross" />)
  .add("InfinityOutline", () => <Icon name="InfinityOutline" />)
  .add("More", () => <Icon name="More" />)
  .add("OutlineTag", () => <Icon name="OutlineTag" />)
  .add("Dash", () => <Icon name="Dash" />)
  .add("Plus", () => <Icon name="Plus" />)
  .add("Search", () => <Icon name="Search" />)
  .add("User", () => <Icon name="User" />)
  .add("Arrow", () => <Icon name="Arrow" />)
  .add("Star", () => <Icon name="Star" />)
  .add("Filter", () => <Icon name="Filter" />)
  .add("Hamburger", () => <Icon name="Hamburger" />)
  .add("ToggleMode", () => <Icon name="ToggleMode" />)

  .add("Default", () => (
    <>
      <Icon name="CarbonClose" />
      <Icon name="CarbonPassword" />
      <Icon name="CloseTag" />
      <Icon name="Cross" />
      <Icon name="Dash" />
      <Icon name="Explore" />
      <Icon name="InfinityOutline" />
      <Icon name="More" />
      <Icon name="Dash" />
      <Icon name="Plus" />
      <Icon name="Search" />
      <Icon name="User" />
      <Icon name="Arro" />
      <Icon name="Star" />
      <Icon name="Filter" />
      <Icon name="Hamburger" />
      <Icon name="ToggleMode" />
    </>
  ))
  .add("Primary", () => (
    <>
      <Icon name="CarbonClose" color={"blue"} />
      <Icon name="CarbonPassword" color={"blue"} />
      <Icon name="CloseTag" color={"blue"} />
      <Icon name="Cross" color={"blue"} />
      <Icon name="Dash" color={"blue"} />
      <Icon name="Explore" color={"blue"} />
      <Icon name="InfinityOutline" color={"blue"} />
      <Icon name="More" color={"blue"} />
      <Icon name="Dash" color={"blue"} />
      <Icon name="Plus" color={"blue"} />
      <Icon name="Search" color={"blue"} />
      <Icon name="User" color={"blue"} />
      <Icon name="Arro" color={"blue"} />
      <Icon name="Star" color={"blue"} />
      <Icon name="Filter" color={"blue"} />
      <Icon name="Hamburger" color={"blue"} />
      <Icon name="ToggleMode" color={"blue"} />
    </>
  ))
  .add("Danger", () => (
    <>
      <Icon name="CarbonClose" color={"red"} />
      <Icon name="CarbonPassword" color={"red"} />
      <Icon name="CloseTag" color={"red"} />
      <Icon name="Cross" color={"red"} />
      <Icon name="Dash" color={"red"} />
      <Icon name="Explore" color={"red"} />
      <Icon name="InfinityOutline" color={"red"} />
      <Icon name="More" color={"red"} />
      <Icon name="Dash" color={"red"} />
      <Icon name="Plus" color={"red"} />
      <Icon name="Search" color={"red"} />
      <Icon name="User" color={"red"} />
      <Icon name="Arro" color={"gray"} />
      <Icon name="Star" color={"red"} />
      <Icon name="Filter" color={"red"} />
      <Icon name="Hamburger" color={"red"} />
      <Icon name="ToggleMode" color={"red"} />
    </>
  ));
