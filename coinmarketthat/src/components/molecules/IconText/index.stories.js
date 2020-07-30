import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconText from './index';

storiesOf('molecule/icontext').add('IconText', () => {
  return (
    <IconText
      iconName="Star"
      textTitle="Moonlist"
      color="black"
      type="link"
      onClick={action('click icon text')}
    />
  );
});
