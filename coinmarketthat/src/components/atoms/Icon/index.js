import React from 'react';
import CarbonClose from './CarbonClose';
import CarbonPassword from './CarbonPassword';
import CloseTag from './CloseTag';
import Cross from './Cross';
import Dash from './Dash';
import Explore from './Explore';
import InfinityOutline from './InfinityOutline';
import More from './More';
import OutlineTag from './OutlineTag';
import Plus from './Plus';
import Search from './Search';
import User from './User';
import Arrow from './Arrow';
import Star from './Star';
import Filter from './Filter';
import Hamburger from './Hamburger';
import ToggleMode from './ToggleMode';

const Icon = (props) => {
  switch (props.name) {
  case 'CarbonClose':
    return <CarbonClose {...props} />;
  case 'CarbonPassword':
    return <CarbonPassword {...props} />;
  case 'CloseTag':
    return <CloseTag {...props} />;
  case 'Cross':
    return <Cross {...props} />;
  case 'Dash':
    return <Dash {...props} />;
  case 'Explore':
    return <Explore {...props} />;
  case 'InfinityOutline':
    return <InfinityOutline {...props} />;
  case 'More':
    return <More {...props} />;
  case 'OutlineTag':
    return <OutlineTag {...props} />;
  case 'Plus':
    return <Plus {...props} />;
  case 'Search':
    return <Search {...props} />;
  case 'User':
    return <User {...props} />;
  case 'Arrow':
    return <Arrow {...props} />;
  case 'Star':
    return <Star {...props} />;
  case 'Filter':
    return <Filter {...props} />;
  case 'Hamburger':
    return <Hamburger {...props} />;
  case 'ToggleMode':
    return <ToggleMode {...props} />;
  default:
    return <div />;
  }
};

export default Icon;
