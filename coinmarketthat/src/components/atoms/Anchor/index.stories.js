import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Anchor from './index';

storiesOf('atom').add('Anchor', () => (
  <Anchor onClick={action('clicked')} link="#">
    Link
  </Anchor>
));
