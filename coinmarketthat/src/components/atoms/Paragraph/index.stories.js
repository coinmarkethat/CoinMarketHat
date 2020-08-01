import React from 'react';
import { storiesOf } from '@storybook/react';

import Paragraph from './index';

storiesOf('atom/Paragraph')
  .add('default', () => <Paragraph>This is default paragraph</Paragraph>)
  .add('Black Color', () => (
    <Paragraph className="atom-p-black">Black</Paragraph>
  ))
  .add('Gray Color', () => (
    <Paragraph className="atom-p-gray">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis
      quis adipiscing scelerisque cursus id faucibus. Tincidunt arcu quam netus{' '}
    </Paragraph>
  ))
  .add('Blue Color', () => (
    <Paragraph className="atom-p-blue">Subscribe with us</Paragraph>
  ))
  .add('Green Color', () => <Paragraph className="atom-p-blue">Blue</Paragraph>)
  .add('Green Color', () => (
    <Paragraph className="atom-p-green">Green</Paragraph>
  ))
  .add('Red Color', () => <Paragraph className="atom-p-red">Red</Paragraph>);
