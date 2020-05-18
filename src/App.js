import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Components/Wrapper';
import Services from './Components/Pages/Services';

// Pages
import Home from './Components/Pages/Home';

const App = () => (
  <Router>
    <Wrapper />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
    </Switch>
  </Router>
);

export default App;
