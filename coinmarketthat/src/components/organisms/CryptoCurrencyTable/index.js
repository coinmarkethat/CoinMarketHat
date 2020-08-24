import React from 'react';

import CustomTable from '../../atoms/CustomTable';
import Icon from '../../atoms/Icon';
import { CurrencyIconText } from '../../molecules';
import { LogoBitcoin, LiteCoin, Master, Steller } from '../../../assets';

import './styles.scss';

const tableHeaders = [
  {
    id: 9,
    key: 'hash',
    name: '#',
  },
  {
    id: 10,
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
  {
    id: 8,
    name: '',
    key: 'remarks',
  },
];

const tableData = [
  {
    id: 1,
    data: {
      coin: 'Bit Coin',
      image: LogoBitcoin,
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
      coin: 'Ethereum',
      image: LiteCoin,
      tagName: 'BTC',
      price: '$6463294',
      change: '0.53%',
      volume: '$9309483405',
      circulatingSupply: '2987347 BTC',
      marketCap: '$93493402',
      githubActivity: '',
    },
  },
  {
    id: 3,
    data: {
      coin: 'XRP',
      image: Master,
      tagName: 'BTC',
      price: '$6463294',
      change: '0.53%',
      volume: '$9309483405',
      circulatingSupply: '2987347 BTC',
      marketCap: '$93493402',
      githubActivity: '',
    },
  },
  {
    id: 4,
    data: {
      coin: 'Tether',
      image: Steller,
      tagName: 'BTC',
      price: '$6463294',
      change: '0.53%',
      volume: '$9309483405',
      circulatingSupply: '2987347 BTC',
      marketCap: '$93493402',
      githubActivity: '',
    },
  },
  {
    id: 5,
    data: {
      coin: 'Bitcoin Cash',
      image: LogoBitcoin,
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
    const { theme } = this.props;
    return (
      <CustomTable className={'organism-table-container'}>
        <tbody>
          <tr className={theme === 'dark' ? 'organism-dark-table-row' : ''}>
            {tableHeaders.map((item) => {
              return <td key={item.id}>{item.name}</td>;
            })}
          </tr>
          {tableData.map((item, index) => {
            return (
              <tr
                key={index}
                className={
                  theme === 'dark'
                    ? index % 2 === 0
                      ? 'organism-dark-table-row1'
                      : 'organism-dark-table-row'
                    : null
                }
              >
                <td>
                  <Icon
                    name="Star"
                    color={theme === 'dark' ? '#858585' : '#000000'}
                  />
                </td>
                <td>
                  <CurrencyIconText
                    theme={theme}
                    source={item.data.image}
                    textTitle={item.data.coin}
                  />
                </td>
                <td style={{ color: '#858585' }}>{item.data.tagName}</td>
                <td>{item.data.price}</td>
                <td style={{ color: '#2eaf71' }}>{item.data.change}</td>
                <td>{item.data.volume}</td>
                <td>{item.data.circulatingSupply}</td>
                <td>{item.data.marketCap}</td>
                <td>{item.data.githubActivity}</td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </CustomTable>
    );
  }
}

export default CryptoCurrencyTable;
