import React from 'react';

import { Icon, Label, Button } from '../../atoms';
import './styles.scss';

const IconText = ({
  iconName,
  theme,
  color,
  onClick,
  type,
  textTitle,
  iconHeight,
  iconWidth,
}) => {
  return (
    <>
      <Button
        theme={theme}
        className={'molecules-icontext-wrapper'}
        type={type}
        onClick={onClick && onClick}
      >
        <Icon
          name={iconName}
          color={color}
          height={iconHeight}
          width={iconWidth}
        />
        <Label>{textTitle}</Label>
      </Button>
    </>
  );
};

export default IconText;
