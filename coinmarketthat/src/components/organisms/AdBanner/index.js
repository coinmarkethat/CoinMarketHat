import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Icon } from '../../atoms';
import './styles.scss';

const AdBanner = ({ onClick, isClosedAd }) => {
  return (
    <>
      {isClosedAd && (
        <Row className="align-items-center bg-color">
          <Col className="col-10 d-flex justify-content-center align-items-end  pl txt-color ">
            AD
          </Col>
          <Col className="col-2 d-flex justify-content-end">
            <Icon name="Cross" color={'#000000'} onClick={onClick} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default AdBanner;
