import React from 'react';
import { Grid } from 'semantic-ui-react';

function Wrapper({ children }) {
  return (
      <Grid celled>
          {children}
      </Grid>
  );
}

export default Wrapper;
