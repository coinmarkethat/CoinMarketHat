import React from 'react';

import { LoginTemplate } from '../../templates';

const Login = ({ history }) => {
  const theme = localStorage.getItem('theme') || 'white';
  return <LoginTemplate theme={theme} history={history} />;
};

export default Login;
