import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Components/Wrapper';

// Pages
import Home from './Components/Pages/Home';
import FarmerDashboard from './Components/Pages/FarmerDashboard';
import EditFarmerProfile from './Components/Pages/EditFarmerProfile';
import FarmProduce from './Components/Pages/FarmProduce';

const App = () => (
  <Router>
    <Wrapper />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={FarmerDashboard} />
      <Route path="/dashboard/edit" component={EditFarmerProfile} />
      <Route path="/dashboard/products" component={FarmProduce} />
    </Switch>
  </Router>
);

export default App;
