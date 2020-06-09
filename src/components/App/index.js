import React from "react";

// import Main from "./components/Main";
import Wrapper from '../Wrapper';
import Head from '../Head';
// import Table from '../Table';
import DataArea from '../../containers/DataArea';

import '../../assets/App.css';

const App = () => (
  <div className="App">
      <Wrapper>
        <Head />
        <DataArea/>
        {/* <Table/> */}
        {/* <Main /> */}
      </Wrapper>
    </div>
);
// function App() {
//   return (
//     <div className="App">
//       <Wrapper>
//         <Header />
//         <DataArea/>
//         {/* <Table/> */}
//         {/* <Main /> */}
//       </Wrapper>
//     </div>
//   );
// }

export default App;
