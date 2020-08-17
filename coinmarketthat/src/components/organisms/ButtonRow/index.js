import React, { useState } from 'react';

import IconText from '../../molecules/IconText';
import Div from '../../atoms/Div';
import SearchBox from '../../molecules/SearchBox';
import { Col, Row } from 'react-bootstrap';
import './styles.scss';

const ButtonRow = ({ theme }) => {
  const [select, setSelect] = useState('Landing');
  const selectBtn = (btnName) => {
    setSelect(btnName);
  };
  return (
    <Div theme={theme} className="organism-button-row">
      <Row>
        <Col md={4}>
          <IconText
            isSelect={select == 'Landing' ? true : false}
            theme={theme}
            iconName="Hamburger"
            textTitle="Cryptocurrencies"
            color={select == 'Landing' ? '#0C2DC8' : '#BEBEBE'}
            onClick={() => selectBtn('Landing')}
          />

          <IconText
            isSelect={select == 'Exchange' ? true : false}
            theme={theme}
            iconName="Hamburger"
            textTitle="Exchange"
            color={select == 'Exchange' ? '#0C2DC8' : '#BEBEBE'}
            onClick={() => selectBtn('Exchange')}
          />
        </Col>
        <Col md={8}>
          <SearchBox
            theme={theme}
            type="input"
            placeholder="Search Currencies"
            icon="Search"
            isSelect={select == 'Search' ? true : false}
            color={select == 'Search' ? '#0C2DC8' : '#BEBEBE'}
          />
          <IconText
            theme={theme}
            iconName="Filter"
            textTitle="Filter"
            isSelect={select == 'Filter' ? true : false}
            color={select == 'Filter' ? '#0C2DC8' : '#BEBEBE'}
            onClick={() => selectBtn('Filter')}
          />
          <IconText
            theme={theme}
            iconName="Arrow"
            textTitle="Show All"
            isSelect={select == 'ShowAll' ? true : false}
            color={select == 'ShowAll' ? '#0C2DC8' : '#BEBEBE'}
            onClick={() => selectBtn('ShowAll')}
          />
        </Col>
      </Row>
    </Div>
  );
};

export default ButtonRow;
