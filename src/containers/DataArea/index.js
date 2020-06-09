import React, { Component } from 'react';
// import Table from './../../components/Table';
import Nav from '../../components/Nav';
import Axios from '../../utils/Axios';
import { Container } from 'semantic-ui-react';
import EmployeeTable from '../../components/EmployeeTable';

// styles

export default class DataArea extends Component {
  state = {
    users: [],
    order: 'descend',
    filteredUsers: []
  }

  headings = [
    { name: 'Image', width: '10%' },
    { name: 'Name', width: '10%' },
    { name: 'Phone', width: '20%' },
    { name: 'Email', width: '20%' },
    { name: 'DOB', width: '10%' }
  ]

  handleSort = heading => {
    if (this.state.order === 'descend') {
      this.setState({
        order: 'ascend'
      })
    } else {
      this.setState({
        order: 'descend'
      })
    }

    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }

    }
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  }

  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }

  componentDidMount() {
    Axios.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
    });
      console.log(this.state);
    });
  }

  render() {
    console.log('state in render', this.state);
    return (
      <Container>
        {/* {this.state.filteredUsers.length && <EmployeeTable users={this.state.filteredUsers} />} */}
        <Nav handleSearchChange={this.handleSearchChange} />
        <p>Here lies a container</p>
        <Container>
        
          <EmployeeTable
            // useThis={this.state}
            headings={this.headings}
            users={this.state.filteredUsers}
            handleSort={this.handleSort}
          />
        </Container>
      </Container>
    );
  }
}
