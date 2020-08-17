import React from 'react';

import { Div, Icon, Label } from '../../atoms';
import './styles.scss';

const AddCryptoCurrencyBox = ({ theme }) => {
  return (
    <Div className="molecules-addcryptoCurrency-wrapper" theme={theme}>
      <Div className="addCrypto-icon-wrapper">
        <Label className={"plus-icon-label"}>+</Label>
      </Div>
      <Label className={theme === 'dark' ? "dark-label mt-4" : "white-label mt-4"}>Add Cryptocurrencies</Label>
    </Div>
  );
}

export default AddCryptoCurrencyBox;
