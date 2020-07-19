import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FilterList from '.';

storiesOf('molecule/filterList').add('FilterList', () => (
  <FilterList
    title={'Price'}
    icon={'Plus'}
    border={true}
    onClick={action('plus clicked')}
    type="link"
  />
));
