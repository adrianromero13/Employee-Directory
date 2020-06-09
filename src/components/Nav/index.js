import React from "react";
import SearchBox from '../SearchBox';
// import "../styles/Nav.css";
import { Grid } from "semantic-ui-react";

// const Nav = ({ handleSearchChange }) => {
//   return (
//     <Grid.Row centered textAlign='center'>
//       <SearchBox handleSearchChange={handleSearchChange} />
//     </Grid.Row>

//   )
// }
function Nav({ handleSearchChange }) {
  return (
    <Grid.Row textAlign='center'>
      <SearchBox handleSearchChange={handleSearchChange} />
    </Grid.Row>
  );
}
export default Nav;
