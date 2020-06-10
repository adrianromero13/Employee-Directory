import React from "react";
import SearchBox from '../SearchBox';
import { Container } from "semantic-ui-react";

function Nav({ handleSearchChange }) {
  return (
    <Container>
      <SearchBox handleSearchChange={handleSearchChange} />
    </Container>
  );
}
export default Nav;
