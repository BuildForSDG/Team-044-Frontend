import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Components/Wrapper';

// Pages
import Home from './Components/Pages/Home';
import ChatList from './Components/Pages/ChatList';
import ChatBox from './Components/Pages/ChatBox';

const App = () => (
  <Router>
    <Wrapper />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard/chat" component={ChatList} />
      <Route path="/dashboard/chat/123" component={ChatBox} />
    </Switch>
  </Router>
);

export default App;
