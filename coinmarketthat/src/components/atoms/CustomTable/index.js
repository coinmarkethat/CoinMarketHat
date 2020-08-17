import React from 'react';

import { Table } from 'react-bootstrap';
import './style.css';

const CustomTable = ({ children, className }) => {
  return (
    <Table className={'atoms-table' + ' ' + className}>
      {children}
    </Table>
  );
};

export default CustomTable;
