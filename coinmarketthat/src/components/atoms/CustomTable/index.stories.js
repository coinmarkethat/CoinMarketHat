import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomTable from './index';

const tableHeader = (
  <>
    <th>#</th>
    <th>Bitcoin</th>
    <th>Price</th>
    <th>Change(24hr)</th>
    <th>Volume(24hr)</th>
    <th>Circulating Supply</th>
    <th>Market Cap</th>
    <th>Github Activity(7days)</th>
    <th> </th>
  </>
);

const tableBody = (
  <tr>
    <td>#</td>
    <td>Bitcoin BTC</td>
    <td>$123434</td>
    <td>0.24%</td>
    <td>$389532432</td>
    <td>435873458 BTC</td>
    <td>$98384392</td>
    <td>Github Activity(7days)</td>
    <td>...</td>
  </tr>
);

storiesOf('atom').add('Table', () => {
  return (
    <CustomTable>
      {tableHeader}
      {tableBody}
    </CustomTable>
  );
});
