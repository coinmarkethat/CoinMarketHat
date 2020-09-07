import React from 'react';

import { Div, Image, Label } from '../../atoms';
import './styles.scss';

const CurrencyIconText = ({ theme, source, textTitle, onClick }) => {
  return (
    <Div
      onClick={onClick}
      theme={theme}
      className="molecules-currencyicontext-container"
    >
      <Image src={source} />
      <Label>{textTitle}</Label>
    </Div>
  );
};

export default CurrencyIconText;
