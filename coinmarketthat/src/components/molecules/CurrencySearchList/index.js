import React from 'react';

import { Div, Label } from '../../atoms';
import { CurrencyIconText } from '../';
import { LogoBitcoin } from '../../../assets';
import './styles.scss';

const CurrencySearchList = ({ theme, textTitle, isAdded, isBorderVisible }) => {
  return (
    <Div
      theme={theme}
      className={
        !isBorderVisible
          ? 'molecules-currencySearchList-container currencySearchList-no-border'
          : 'molecules-currencySearchList-container'
      }
    >
      <CurrencyIconText
        theme={theme}
        source={LogoBitcoin}
        textTitle={textTitle}
      />
      {isAdded ? (
        <Label className="molecules-remove-label">REMOVE</Label>
      ) : (
        <Label className="molecules-add-label">ADD</Label>
      )}
    </Div>
  );
};

export default CurrencySearchList;
