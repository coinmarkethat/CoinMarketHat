import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from 'react-bootstrap';

import Input from './index';

storiesOf('atom/Input')
  .add('Dark Input', (state, setState) => (
    <Container className="mt-3">
      <Input
        theme="dark"
        type="input"
        placeholder="Dark theme"
        text="Please input some text here."
        value={state.value}
        onChange={(e) => setState({ value: e.target.value })}
      />
      {state.value}
    </Container>
  ))
  .add('White Input', (state, setState) => (
    <Container className="mt-3">
      <Input
        theme="white"
        type="input"
        placeholder="White theme"
        text="Please input some text here."
        value={state.value}
        onChange={(e) => setState({ value: e.target.value })}
      />
    </Container>
  ))
  .add('Password Input Dark', (state, setState) => (
    <Container className="mt-3">
      <Input
        theme="dark"
        type="password"
        placeholder="Password"
        text="Please input some text here."
        value={state.value}
        onChange={(e) => setState({ value: e.target.value })}
      />
    </Container>
  ))
  .add('Password Input white', (state, setState) => (
    <Container className="mt-3">
      <Input
        theme="white"
        type="password"
        placeholder="Password"
        text="Please input some text here."
        value={state.value}
        onChange={(e) => setState({ value: e.target.value })}
      />
    </Container>
  ));
