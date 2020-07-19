import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconText from './index';

storiesOf('molecule/icontext').add('IconText', () => (
  <IconText
    iconName={'Star'}
    textTitle={'Moonlist'}
    color="white"
    type={'link'}
    onClick={action('click icon text')}
  />
));
