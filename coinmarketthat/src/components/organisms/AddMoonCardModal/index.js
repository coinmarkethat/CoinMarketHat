import React from 'react';
import { Modal } from 'react-bootstrap';

import { Label, Icon, Div } from '../../atoms';
import { SearchBox, CurrencySearchList } from '../../molecules';
import { LogoBitcoin } from '../../../assets';
import './styles.scss';

const availableCurrencies = [
  { id: 1, title: 'Bitcoins' },
  { id: 2, title: 'Master' },
  { id: 3, title: 'Litecoin' },
];

const initialMoonCards = [
  { id: 1, title: 'Bitcoin' },
  { id: 2, title: 'Litecoin' },
];

const AddMoonCardModal = ({ theme, isVisible, onHideModal }) => {
  return (
    <Modal
      backdropClassName="organism-backdrop-add-mooncard-modal"
      size="sm"
      show={isVisible}
      onHide={onHideModal}
      centered
      className={
        theme === 'dark'
          ? 'organism-addmooncard-modal-wrapper modal-dark-content'
          : 'organism-addmooncard-modal-wrapper'
      }
    >
      <Modal.Header>
        <Label>Add Moon Card</Label>
        <Icon name="Cross" color={'#CA1919'} onClick={onHideModal} />
      </Modal.Header>
      <Modal.Body>
        <SearchBox
          theme={theme}
          type="input"
          placeholder="Search Currencies"
          onChange={(e) => console.log(e.target.value)}
          icon="Search"
          color={theme === 'dark' ? '#D0D0D0' : '#858585'}
        />
      </Modal.Body>
      <Modal.Footer>
        {availableCurrencies.map((item, index) => {
          const isAdded = initialMoonCards.find(
            (mooncard) => mooncard.title === item.title
          );
          return (
            <CurrencySearchList
              theme={theme}
              source={LogoBitcoin}
              textTitle={item.title}
              isAdded={isAdded}
              isBorderVisible={index !== availableCurrencies.length - 1}
            />
          );
        })}
      </Modal.Footer>
    </Modal>
  );
};

export default AddMoonCardModal;
