import React from 'react';

import { storiesOf } from '@storybook/react';

import AdBanner from './index';

storiesOf('organism').add('AdBanner', () => (
  <AdBanner onClick={() => alert('Testing')} />
));
