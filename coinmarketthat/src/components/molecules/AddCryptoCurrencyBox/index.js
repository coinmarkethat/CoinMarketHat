import React from 'react';

import { Div, Icon, Label } from '../../atoms';
import './styles.scss';

const AddCryptoCurrencyBox = ({ theme, onClick }) => {
  return (
    <Div
      className="molecules-addcryptoCurrency-wrapper"
      theme={theme}
      onClick={onClick && onClick}
    >
      <Div className="addCrypto-icon-wrapper">
        <Label className={'plus-icon-label'}>+</Label>
      </Div>
      <Label
        className={theme === 'dark' ? 'dark-label mt-2' : 'white-label mt-2'}
      >
        Add Cryptocurrencies
      </Label>
    </Div>
  );
};

export default AddCryptoCurrencyBox;
