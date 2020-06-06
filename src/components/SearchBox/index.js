import React from "react";
import { Form, Input, Segment } from 'semantic-ui-react';

import "./searchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
    <Segment>
      <Form inverted>
        <Form.Field>
          <Input
          label='Search'
          placeholder='searchbox'
          type='search'
          // onChange={e => handleSearchChange(e)}
          />
        </Form.Field>
      </Form>
    </Segment>
    
    // <div className="searchbox">
    //   <form className="form-inline">
    //     <input
    //       className="form-control"
    //       type="search"
    //       placeholder="Search"
    //       aria-label="Search"
    //       onChange={e => handleSearchChange(e)}
    //     />
    //   </form>
    // </div>
  );
}
export default SearchBox;
