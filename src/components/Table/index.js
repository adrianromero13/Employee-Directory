import React from 'react';
import { Table } from 'semantic-ui-react';

function DataBody({ users }) {
    function formData(date) {
        const dateArray = date.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split('T');
        const formattedDate = [month, day, year].join('-');
        return formattedDate;
    }

    return(
        <Table celled inverted selectable>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        
                    )
                })
            )}
        </Table>
    )
}

export default DataBody;
