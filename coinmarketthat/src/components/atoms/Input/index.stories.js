import React from "react";
import Input from "./index";
import { storiesOf } from "@storybook/react";
import { Container } from "react-bootstrap";
storiesOf("atom/Input")
  .add("Dark Input", (state, setState) => (
    <Container className="mt-3">
      <Input
        mode="dark"
        type="input"
        placeholder="Dark theme"
        text="Please input some text here."
        value={state.value}
        onChange={(e) => setState({ value: e.target.value })}
      />
      {state.value}
    </Container>
  ))
  .add("White Input", (state, setState) => (
    <Container className="mt-3">
      <Input
        mode="white"
        type="input"
        placeholder="White theme"
        text="Please input some text here."
        value={state.value}
        onChange={(e) => setState({ value: e.target.value })}
      />
    </Container>
  ))
  .add("Password Input Dark", (state, setState) => (
    <Container className="mt-3">
      <Input
        mode="dark"
        type="password"
        placeholder="Password"
        text="Please input some text here."
        value={state.value}
        onChange={(e) => setState({ value: e.target.value })}
      />
    </Container>
  ))
  .add("Password Input white", (state, setState) => (
    <Container className="mt-3">
      <Input
        mode="white"
        type="password"
        placeholder="Password"
        text="Please input some text here."
        value={state.value}
        onChange={(e) => setState({ value: e.target.value })}
      />
    </Container>
  ));
