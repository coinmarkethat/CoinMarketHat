import React from 'react';
import { storiesOf } from '@storybook/react';

import LabelTextInput from './index';

storiesOf('molecule/LabelTextInput')
  .add('LabelTextInput-email-dark', (state, setState) => (
    <LabelTextInput
      theme="dark"
      type="input"
      placeholder="white theme"
      text="Please input some text here."
      value={state.value}
      onChange={(text) => setState({ value: text.target.value })}
      labelTitle={'Email-Address'}
    />
  ))
  .add('LabelTextInput-email', (state, setState) => (
    <LabelTextInput
      theme="white"
      type="input"
      placeholder="white theme"
      text="Password here ."
      value={state.value}
      onChange={(text) => setState({ value: text.target.value })}
      labelTitle={'Email-Address'}
    />
  ))
  .add('LabelTextInput-password-dark', (state, setState) => (
    <LabelTextInput
      theme="dark"
      type="password"
      placeholder="dark theme"
      text="Please input some text here."
      value={state.value}
      onChange={(text) => setState({ value: text.target.value })}
      labelTitle={'Password'}
    />
  ))
  .add('LabelTextInput-password', (state, setState) => (
    <LabelTextInput
      theme="white"
      type="password"
      placeholder="white theme"
      text="Please input some text here."
      value={state.value}
      onChange={(text) => setState({ value: text.target.value })}
      labelTitle={'Password'}
    />
  ));
