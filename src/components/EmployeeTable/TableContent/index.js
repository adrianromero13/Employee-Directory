import React from 'react';
import { Table, Image } from 'semantic-ui-react';

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
  <Table.Body>
  {users[0] !== undefined && users[0].name !== undefined ? (
    users.map(({ login, name, picture, phone, email, dob }) => {
      return (
        <Table.Row key={login.uuid}>
          <Table.Cell data-th="Image" className="align-middle">
            <Image
              src={picture.medium}
              alt={"profile image for " + name.first + " " + name.last}
              className="img-responsive"
            />
          </Table.Cell>
          <Table.Cell data-th="Name" className="name-cell align-middle">
            {name.first} {name.last}
          </Table.Cell>
          <Table.Cell data-th="Phone" className="align-middle">
            {phone}
          </Table.Cell>
          <Table.Cell data-th="Email" className="align-middle">
            <a href={"mailto:" + email} target="__blank">
              {email}
            </a>
          </Table.Cell>
          <Table.Cell data-th="DOB" className="align-middle">
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
