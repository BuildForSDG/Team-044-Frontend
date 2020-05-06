import React from "react";
import Wrapper from "./Components/Wrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Pages
import Home from "./Components/Pages/Home";

function App() {
  return (
    <Router>
      <Wrapper>
        <Route exact={true} path="/" component={Home} />
      </Wrapper>
    </Router>
  );
}

export default App;
