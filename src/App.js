import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Components/Wrapper';

// Pages
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import ProductsDisplay from './Components/Pages/ProductsDisplay';

const App = () => (
  <Router>
    <Wrapper />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/display" component={ProductsDisplay} />
    </Switch>
  </Router>
);

export default App;
