import React from 'react';
import { Grid } from 'semantic-ui-react';

const Wrapper = ({ children }) => {
  return (
    <Grid celled>
      {children}
    </Grid>
  )
}
// function Wrapper({ children }) {
//   return (
//       <Grid celled>
//           {children}
//       </Grid>
//   );
// }

export default Wrapper;
