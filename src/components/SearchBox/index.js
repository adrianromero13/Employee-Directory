import React from "react";
import { Form, Input, Container, Grid, Segment, Header } from 'semantic-ui-react';

import "./searchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
    <Container>
      <Grid textAlign='center'>
        <Grid.Column width={8}>
          <Form >
            <Form.Field>
              <Input
                inverted
                label='Search'
                type='search'
                onChange={e => handleSearchChange(e)}
                />
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid>
      <Segment 
        textAlign='center'
        color='teal' 
        piled 
        tertiary
        className='customText customBackground'
        >
        <Header as='h2' content='Employees'/>
        </Segment>
    </Container>
  );
}
export default SearchBox;
