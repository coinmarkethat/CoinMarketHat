import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

import { Label, Input, Button } from '../../atoms';
import FilterList from '../../molecules/FilterList';
import './styles.scss';

const FilterModal = ({ theme, isVisible, onHideFilterModal }) => {
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
          icon="Plus"
          border
          onClick={() => console.log('plus clicked')}
          type="link"
          color="#858585"
        />
        <FilterList
          title="Volume 24(hr)"
          icon="Plus"
          border
          onClick={() => console.log('plus clicked')}
          type="link"
          color="#858585"
        />
        <FilterList
          title="Circulating Supply"
          icon="Plus"
          border
          onClick={() => console.log('plus clicked')}
          type="link"
          color="#858585"
        />
        <FilterList
          className="organism-filterlist-market-cap"
          title="Market Cap"
          icon="Dash"
          onClick={() => console.log('minus clicked')}
          type="link"
          color={theme === 'dark' ? '#46CCFF' : '#2A53D5'}
        />
        <Row className="organism-filter-modal-inputrow">
          <Col md={5}>
            <Input
              theme={theme}
              type="input"
              placeholder="0"
              // value={state.value}
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
              placeholder="9999999"
              // value={state.value}
              onChange={(e) => console.log(e.target.value)}
            />
          </Col>
        </Row>
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
