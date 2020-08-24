import React from 'react';

import { ForgotTemplate } from '../../templates';

const Forgot = ({ history }) => {
  const theme = localStorage.getItem('theme') || 'white';
  return (
    <ForgotTemplate theme={theme} history={history} />
  );
};

export default Forgot;
