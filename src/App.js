import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Components/Wrapper';

// Pages
import Home from './Components/Pages/Home';
import InvestorDashboard from './Components/Pages/InvestorDashboard';
import EditInvestorProfile from './Components/Pages/EditInvestorProfile';

const App = () => (
  <Router>
    <Wrapper />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard/investor" component={InvestorDashboard} />
      <Route path="/dashboard/edit" component={EditInvestorProfile} />
    </Switch>
  </Router>
);

export default App;
