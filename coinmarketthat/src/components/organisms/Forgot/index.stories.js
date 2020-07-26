import React from 'react';
import Forgot from './index';

export default {
  title: 'organism',
};

export const forgotwhite = () => {
  return <Forgot className="signup-textfields" theme="white" />;
};

export const forgotdark = () => {
  return <Forgot className="signup-textfields" theme="dark" />;
};
