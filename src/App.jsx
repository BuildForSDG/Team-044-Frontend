import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./Components/Wrapper";
import Services from "./Components/Pages/Services";

// Pages
import Home from "./Components/Pages/Home";

function App() {
  return (
    <Router>
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
      </Wrapper>
    </Router>
  );
}

export default App;
