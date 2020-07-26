import React from 'react';
import Reset from './index';

export default {
  title: 'organism',
};

export const resetWhite = () => {
  return <Reset theme="white" />;
};

export const resetDark = () => {
  return <Reset theme="dark" />;
};
