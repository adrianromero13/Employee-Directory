import React from 'react'
import { Table } from 'semantic-ui-react';

import TableContent from './TableContent';
import './../../assets/custom.css';

function EmployeeTable({ headings, users, handleSort }) {
  return (
    <Table
      celled
      color='teal'
      compact='very'
      selectable
      sortable
      striped
      className='customBackground'
    >
      <Table.Header>
        <Table.Row>
          {headings?.map(({ name, width }) => {
            return (
              <Table.HeaderCell
                key={name}
                style={{ width }}
                onClick={() => {
                  handleSort(name.toLowerCase());
                }}
              >
                {name}
                <span className='pointer'></span>
              </Table.HeaderCell>
            );
          })}
        </Table.Row>
      </Table.Header>
      <TableContent users={users} />
    </Table>
  );
}

export default EmployeeTable;
