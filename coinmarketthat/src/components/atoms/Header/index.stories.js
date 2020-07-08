import React from "react";
import "./style.css";
import { storiesOf } from "@storybook/react";
import Header from "./index";

storiesOf("atom", module).add("header", () => <Header> header </Header>);
