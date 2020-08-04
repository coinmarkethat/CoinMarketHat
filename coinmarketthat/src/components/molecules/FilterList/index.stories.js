import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FilterList from '.';

storiesOf('molecule/filterList').add('FilterList', () => {
  return (
    <FilterList
      title="Price"
      icon="Plus"
      border
      onClick={action('plus clicked')}
      type="link"
      color="#858585"
    />
  );
});
