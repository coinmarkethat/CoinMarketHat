import React from 'react';

import { SignupTemplate } from '../../templates';

const Signup = ({ history }) => {
  const theme = localStorage.getItem('theme') || 'white';
  return (
    <SignupTemplate theme={theme} history={history} />
  );
};

export default Signup;
