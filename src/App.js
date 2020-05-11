import React from "react";
import Wrapper from "./Components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "./Components/Pages/Home";
import Chat from './Components/Pages/Chat'

function App() {
  return (
    <Router>
      <Wrapper/>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/dashboard/chat" component={Chat} />
      </Switch>
        
    </Router>
  );
}

export default App;
