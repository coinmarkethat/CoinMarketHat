import React from 'react';

import { Input, Icon, Div } from '../../atoms';
import './styles.scss';

const SearchBox = ({
  theme,
  type,
  placeholder,
  text,
  value,
  onChange,
  icon,
  color,
  height,
  width,
}) => {
  return (
    <Div theme={theme} className="molecules-searchbox-wrapper">
      <Icon name={icon} color={color} height={height} width={width} />
      <Input
        theme={theme}
        type={type}
        placeholder={placeholder}
        text={text}
        onChange={onChange}
        value={value}
      />
    </Div>
  );
};

export default SearchBox;
