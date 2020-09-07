import React from 'react';
import Login from './index';

export default {
  title: 'organism',
};

export const loginwhite = () => {
  return <Login theme="white" />;
};

export const logindark = () => {
  return <Login theme="dark" />;
};
