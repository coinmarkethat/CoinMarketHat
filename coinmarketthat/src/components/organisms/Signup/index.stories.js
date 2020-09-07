import React from 'react';
import Signup from './index';

export default {
  title: 'organism',
};

export const signupWhite = () => {
  return <Signup className="signup-textfields" theme={'white'} />;
};

export const signupDark = () => {
  return <Signup className="signup-textfields" theme={'dark'} />;
};
