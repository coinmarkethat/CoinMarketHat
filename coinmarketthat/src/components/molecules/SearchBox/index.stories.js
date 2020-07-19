import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchBox from './index';

storiesOf('molecule/searchbox').add('Search-box', (state, setState) => (
  <SearchBox
    type="input"
    placeholder="Search Currencies"
    text="Please input some text here."
    value={state.value}
    onChange={(e) => setState({ value: e.target.value })}
    icon="Search"
    color="black"
  />
));
