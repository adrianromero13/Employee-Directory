import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

import SearchBox from './../SearchBox';
import './header.css';


export default class Nav extends Component {
  render() {
    return (
      <Grid.Column className='selfHeader'>
        <Header as='h2' icon>
          <Icon name='settings'size='huge' />
    Employee Directory
        </Header>
    <Header.Subheader>
            Search through the employees using.
            Use the input box to narrow your search.
          </Header.Subheader>
          <SearchBox/>
      </Grid.Column>
    )
  }
}
