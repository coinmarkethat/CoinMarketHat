import React, { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

import { Label, Input, Button } from '../../atoms';
import FilterList from '../../molecules/FilterList';
import './styles.scss';

const FilterModal = ({ theme, isVisible, onHideFilterModal }) => {
  const [price, showPrice] = useState(false);
  const [volume, showVolume] = useState(false);
  const [supply, showSupply] = useState(false);
  const [cap, showCap] = useState(true);
  return (
    <Modal
      size="sm"
      backdropClassName="organism-backdrop-invisible"
      show={isVisible}
      onHide={onHideFilterModal}
      className={
        theme === 'dark'
          ? 'organism-filter-modal-wrapper dark-content'
          : 'organism-filter-modal-wrapper'
      }
    >
      <Modal.Header>
        <Label className="organism-modal-header-filter">Filter</Label>
        <Label className="organism-modal-header-clear">Clear Filter</Label>
      </Modal.Header>
      <Modal.Body>
        <FilterList
          title="Price"
          className={!price ? null : 'organism-filterlist-market-cap'}
          icon={price ? 'Dash' : 'Plus'}
          border={!price}
          onClick={() => showPrice(!price)}
          type="link"
          color={
            theme === 'dark'
              ? !price
                ? '#858585'
                : '#46CCFF'
              : !price
              ? '#858585'
              : '#2A53D5'
          }
        />
        {price && (
          <Row className="organism-filter-modal-inputrow">
            <Col md={5}>
              <Input
                theme={theme}
                type="input"
                placeholder="0"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col>
            <Col md={2}>
              <Label>to</Label>
            </Col>
            <Col md={5}>
              <Input
                theme={theme}
                type="input"
                placeholder="9999"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col>
          </Row>
        )}
        <FilterList
          title="Volume 24(hr)"
          className={!volume ? null : 'organism-filterlist-market-cap'}
          icon={volume ? 'Dash' : 'Plus'}
          border={!volume}
          onClick={() => showVolume(!volume)}
          type="link"
          color={
            theme === 'dark'
              ? !volume
                ? '#858585'
                : '#46CCFF'
              : !volume
              ? '#858585'
              : '#2A53D5'
          }
        />
        {volume && (
          <Row className="organism-filter-modal-inputrow">
            <Col md={5}>
              <Input
                theme={theme}
                type="input"
                placeholder="0"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col>
            <Col md={2}>
              <Label>to</Label>
            </Col>
            <Col md={5}>
              <Input
                theme={theme}
                type="input"
                placeholder="9999"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col>
          </Row>
        )}
        <FilterList
          title="Circulating Supply"
          className={!supply ? null : 'organism-filterlist-market-cap'}
          icon={supply ? 'Dash' : 'Plus'}
          border={!supply}
          onClick={() => showSupply(!supply)}
          type="link"
          color={
            theme === 'dark'
              ? !supply
                ? '#858585'
                : '#46CCFF'
              : !supply
              ? '#858585'
              : '#2A53D5'
          }
        />
        {supply && (
          <Row className="organism-filter-modal-inputrow">
            <Col md={5}>
              <Input
                theme={theme}
                type="input"
                placeholder="0"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col>
            <Col md={2}>
              <Label>to</Label>
            </Col>
            <Col md={5}>
              <Input
                theme={theme}
                type="input"
                placeholder="9999"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col>
          </Row>
        )}
        <FilterList
          className={!cap ? null : 'organism-filterlist-market-cap'}
          title="Market Cap"
          border={!cap}
          icon={!cap ? 'Plus' : 'Dash'}
          onClick={() => showCap(!cap)}
          type="link"
          color={
            theme === 'dark'
              ? !cap
                ? '#858585'
                : '#46CCFF'
              : !cap
              ? '#858585'
              : '#2A53D5'
          }
        />
        {cap && (
          <Row className="organism-filter-modal-inputrow">
            <Col md={5}>
              <Input
                theme={theme}
                type="input"
                placeholder="0"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col>
            <Col md={2}>
              <Label>to</Label>
            </Col>
            <Col md={5}>
              <Input
                theme={theme}
                type="input"
                placeholder="9999"
                onChange={(e) => console.log(e.target.value)}
              />
            </Col>
          </Row>
        )}
        <Row className="organism-filter-clear">
          <Label>Clear Filter</Label>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="organism-filter-modal-cancel-btn"
          onClick={onHideFilterModal}
        >
          Cancel
        </Button>
        <Button
          className="organism-filter-modal-apply-btn"
          onClick={() => console.log('Click me')}
        >
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
