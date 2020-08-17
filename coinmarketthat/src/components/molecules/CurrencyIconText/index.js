import React from 'react';

import {Div, Image, Label  } from '../../atoms';
import './styles.scss';

const CurrencyIconText = ({
    theme,
    source,
    textTitle
}) => {
  return (
    <Div theme={theme} className="molecules-currencyicontext-container">
        <Image src={source} />
        <Label>{textTitle}</Label>
    </Div>
  );
};

export default CurrencyIconText;
