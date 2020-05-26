//turning into class based component
import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';

import Navbar from './../../components/Navbar';


class App extends Component {
  render() {
    return (
      // <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Navbar/>
      // </Grid>
    );
  }
}

//HOC = now we have access to auth (token authentication) in the App folder rendering the routes passed down as state
// function mapStateToProps(state) {
//   return { authenticated: state.auth.authenticated }
// }


// export default connect(mapStateToProps)(App);
export default App;
