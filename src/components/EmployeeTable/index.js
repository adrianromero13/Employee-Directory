import React from 'react'
import { Table } from 'semantic-ui-react';

import TableContent from './TableContent';


function EmployeeTable({ headings, users, handleSort }) {
  console.log('users', users);
  return (
      <Table celled inverted selectable>
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
