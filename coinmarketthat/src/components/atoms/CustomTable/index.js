import React from 'react';

import { Table } from 'react-bootstrap';

const CustomTable = ({ children, className }) => {
  return (
    <Table className={className}>
      {children}
    </Table>
  );
};

export default CustomTable;
