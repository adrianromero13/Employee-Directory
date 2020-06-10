import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

import './../../assets/custom.css';

const Head = () => (
  <Grid className='customContainer'>
    <Grid.Column width={7} textAlign='right' fluid verticalAlign='middle'>
      <Icon name='settings' rotated size='massive' />
    </Grid.Column>
    <Grid.Column width={8} textAlign='left' fluid verticalAlign='middle'>
      <Header as='h1' icon>
        Employee Directory
          <Header.Subheader >
          Search through the employees
          </Header.Subheader>
        <Header.Subheader>
          Use the input box to narrow your search.
          </Header.Subheader>
      </Header>
    </Grid.Column>
  </Grid>
)

export default Head;
