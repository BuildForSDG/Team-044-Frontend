import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Components/Wrapper';

// Pages
import Home from './Components/Pages/Home';
import ConsumerDashboard from './Components/Pages/ConsumerDashboard';
import EditConsumerProfile from './Components/Pages/EditConsumerProfile';

function App() {
  return (
    <Router>
      <Wrapper />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard/consumer" component={ConsumerDashboard} />
        <Route path="/dashboard/consumer/edit" component={EditConsumerProfile} />
      </Switch>
    </Router>
  );
}

export default App;
