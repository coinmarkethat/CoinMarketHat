import React from 'react';

import CustomTable from '../../atoms/CustomTable';
import Icon from '../../atoms/Icon';
import IconText from '../../molecules/IconText';
import './styles.scss';

const tableHeaders = [
  {
    id: 9,
    key: 'hash',
    name: '#',
  },
  {
    id: 8,
    key: 'bitcoin',
    name: 'Bitcoin',
  },
  {
    id: 1,
    name: '',
    key: 'tagName',
  },
  {
    id: 2,
    name: 'Price',
    key: 'price',
  },
  {
    id: 3,
    name: 'Change(24hr)',
    key: 'change',
  },
  {
    id: 4,
    name: 'Volume(24hr)',
    key: 'volume',
  },
  {
    id: 5,
    name: 'Circulating Supply',
    key: 'circulatingSupply',
  },
  {
    id: 6,
    name: 'Market Cap',
    key: 'marketCap',
  },
  {
    id: 7,
    name: 'Github Activity(7days)',
    key: 'githubActivity',
  },
];

const tableData = [
  {
    id: 1,
    data: {
      bitcoin: 'Bit Coin',
      tagName: 'BTC',
      price: '$23532535',
      change: '0.74%',
      volume: '$324983242309',
      circulatingSupply: '29345823 BTC',
      marketCap: '$32983493',
      githubActivity: '',
    },
  },
  {
    id: 2,
    data: {
      bitcoin: 'Meat Coin',
      tagName: 'BTC',
      price: '$6463294',
      change: '0.53%',
      volume: '$9309483405',
      circulatingSupply: '2987347 BTC',
      marketCap: '$93493402',
      githubActivity: '',
    },
  },
];

class CryptoCurrencyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  render() {
    return (
      <CustomTable className="organism-cryptotable-wrapper">
        <tr>
          {tableHeaders.map((item) => {
            return <td key={item.id}>{item.name}</td>;
          })}
        </tr>
        {tableData.map((item, index) => {
          return (
            <tr>
              <td>
                <Icon name="Star" />
              </td>
              <td>
                <IconText
                  iconName="Star"
                  textTitle={item.data.bitcoin}
                  color="black"
                  labelClassName=""
                />
              </td>
              <td>{item.data.tagName}</td>
              <td>{item.data.price}</td>
              <td>{item.data.change}</td>
              <td>{item.data.volume}</td>
              <td>{item.data.circulatingSupply}</td>
              <td>{item.data.marketCap}</td>
              <td>{item.data.githubActivity}</td>
              <td>...</td>
            </tr>
          );
        })}
      </CustomTable>
    );
  }
}

export default CryptoCurrencyTable;
