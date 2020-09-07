import React from 'react';
import { storiesOf } from '@storybook/react';

import FilterModal from './index';

storiesOf('organism/FilterModal').add(
  'White', () => <FilterModal theme="white" isVisible={true} />
).add(
  'Dark', () => <FilterModal theme="dark" isVisible={true} />
);
