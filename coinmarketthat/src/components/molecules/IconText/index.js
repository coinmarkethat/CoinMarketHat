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
  isSelect,
}) => {
  return (
    <>
      <Button
        theme={theme}
        className={
          isSelect
            ? 'molecules-icontext-wrapper' + ' ' + 'select'
            : 'molecules-icontext-wrapper'
        }
        type={type}
        onClick={onClick && onClick}
      >
        <Icon
          name={iconName}
          height={iconHeight}
          color={color}
          width={iconWidth}
        />

        <Label className={isSelect ? 'atom-label-select' : 'atom-label'}>
          {textTitle}
        </Label>
      </Button>
    </>
  );
};

export default IconText;
