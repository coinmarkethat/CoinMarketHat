import React from 'react';
import CryptoCurrencyTable from './index';

export default {
  title: 'organism',
};

export const tableListWhite = () => {
  return <CryptoCurrencyTable theme="white" />;
};

export const tableListDark = () => {
  return <CryptoCurrencyTable theme="dark" />;
};
