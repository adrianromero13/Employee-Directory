import React from 'react';
import { Table, Image, Icon } from 'semantic-ui-react';

import './../../../assets/custom.css';

function TableContent({ users }) {
  function formatDate(date) {
    const dateArray = date.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split('T');
    const day = dayArray[0];
    const formattedDate = [month, day, year].join('-');
    return formattedDate;
  }

  return (
    <Table.Body className='customTable'>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <Table.Row key={login.uuid} className='customTable customText'>
              <Table.Cell data-th="Image">
                <Image
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                />
              </Table.Cell>
              <Table.Cell data-th="Name">
                <Icon name='user' />
                {name.first} {name.last}
              </Table.Cell>
              <Table.Cell data-th="Phone">
                {phone}
              </Table.Cell>
              <Table.Cell data-th="Email">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </Table.Cell>
              <Table.Cell data-th="DOB">
                {formatDate(dob.date)}
              </Table.Cell>
            </Table.Row>
          );
        })
      ) : (
          <></>
        )}
    </Table.Body>
  );
}

export default TableContent;
