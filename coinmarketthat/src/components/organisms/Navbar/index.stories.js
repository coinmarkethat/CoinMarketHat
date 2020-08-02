import React from 'react';
import Navbar from './index';

export default {
  title: 'organism',
};

export const navbarWhite = () => {
  return <Navbar theme="white" />;
};

export const navbarDark = () => {
  return <Navbar theme="dark" />;
};
