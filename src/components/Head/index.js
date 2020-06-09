import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

// import SearchBox from './../SearchBox';
// import './header.css';

const Head = () => (

  <Grid.Row className='selfHeader'>
    <Header as='h2' icon>
      <Icon name='settings' size='huge' />
    Employee Directory
    <Header.Subheader>
      Search through the employees using.
      Use the input box to narrow your search.
          </Header.Subheader>
        </Header>
  </Grid.Row>)

export default Head;
