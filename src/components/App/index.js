import React from "react";

// import Main from "./components/Main";
import Wrapper from '../Wrapper';
import Header from '../Header';

import '../../assets/App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        {/* <Main /> */}
      </Wrapper>
    </div>
  );
}

export default App;
