import React from 'react';

import { Icon, Div } from '../../atoms';
import './styles.scss';

const ClickableIcon = ({ theme, onClick, iconName, color, height, width }) => {
  return (
    <Div theme={theme} onClick={onClick && onClick}>
      <Icon name={iconName} color={color} height={height} width={width} />
    </Div>
  );
};

export default ClickableIcon;
