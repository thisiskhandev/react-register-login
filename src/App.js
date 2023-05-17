import React from "react";
import Routing from "./Routing";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <main style={{marginTop: 90}}>
        <Routing />
      </main>
    </React.Fragment>
  );
};

export default App;
