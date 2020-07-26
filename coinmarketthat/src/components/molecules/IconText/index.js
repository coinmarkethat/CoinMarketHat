import React from 'react';

import { Icon, Label, Div } from '../../atoms';
import './styles.scss';

const IconText = ({
  iconName, theme, textTitle, color, onClick, type, buttonClassName, labelClassName
}) => {
  return (
    <Div theme={theme} className={buttonClassName} type={type} onClick={onClick && onClick}>
      <Icon name={iconName} color={color} />
      <Label className={'molecule-text-style' + ' ' + labelClassName}>{textTitle}</Label>
    </Div>
  );
};

export default IconText;
