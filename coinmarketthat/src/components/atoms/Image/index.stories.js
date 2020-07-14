import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './index';

storiesOf('atom').add('Image', () => (
  <Image
    src={
      'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg'
    }
    alt="Hello"
  />
));
