import React from 'react';

import { ResetPasswordTemplate } from '../../templates';

const ResetPassword = ({ history }) => {
  const theme = localStorage.getItem('theme') || 'white';
  return <ResetPasswordTemplate theme={theme} history={history} />;
};

export default ResetPassword;
