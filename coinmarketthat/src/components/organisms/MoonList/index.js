import React from 'react';

import { Div } from '../../atoms';
import { AddCryptoCurrencyBox, MoonlistCard } from '../../molecules';
import './styles.scss';
import AddMoonCardModal from '../AddMoonCardModal';

const data = [1, 2, 3, 4, 5, 6, 7, 8];

class MoonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddMoonCardModalVisible: false
    };
  }

  handleShowHideModal = () => {
    const { isAddMoonCardModalVisible } = this.state;
    this.setState({ isAddMoonCardModalVisible: !isAddMoonCardModalVisible });
  }

  render() {
    const { theme } = this.props;
    const { isAddMoonCardModalVisible } = this.state;
    return (
      <Div theme={theme} className="organism-moonlist-wrapper">
        <AddCryptoCurrencyBox
          theme={theme}
          onClick={() => this.handleShowHideModal()}
        />
        {data.map((item, index) => {
          return (
            <MoonlistCard theme={theme} />
          );
        })}
        <AddMoonCardModal
          theme={theme}
          isVisible={isAddMoonCardModalVisible}
          onHideModal={() => this.handleShowHideModal()}
        />
      </Div>
    );
  }
}

export default MoonList;
