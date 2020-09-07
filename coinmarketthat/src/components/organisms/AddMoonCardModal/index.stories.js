import React from 'react';
import { storiesOf } from '@storybook/react';

import AddMoonCardModal from './index';

storiesOf('organism/AddMoonCardModal').add(
  'White', () => <AddMoonCardModal theme="white" isVisible={true} />
).add(
  'Dark', () => <AddMoonCardModal theme="dark" isVisible={true} />
);
