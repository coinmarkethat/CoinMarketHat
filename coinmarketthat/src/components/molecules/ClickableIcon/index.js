import React from 'react';

import { Icon, Div } from '../../atoms';
import './styles.scss';

const ClickableIcon = ({
  theme,
  onClick,
  iconName,
  color,
  height,
  width,
  className,
}) => {
  return (
    <Div theme={theme} onClick={onClick && onClick} className={className}>
      <Icon name={iconName} color={color} height={height} width={width} />
    </Div>
  );
};

export default ClickableIcon;
