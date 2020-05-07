import React from "react";
import Wrapper from "./Components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "./Components/Pages/Home";
import Products from './Components/Pages/Products'


const App = () => {
  return (
      <Router>
      <Wrapper/>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
      
  );
}

export default App;