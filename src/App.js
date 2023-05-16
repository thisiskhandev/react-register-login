import React from "react";
import Routing from "./Routing";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Routing />
    </React.Fragment>
  );
};

export default App;
