import React from "react";
import Wrapper from "./Components/Wrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Pages
import Home from "./Components/Pages/Home";
import ConsumerDashboard from './Components/Pages/ConsumerDashboard'
import EditConsumerProfile from './Components/Pages/EditConsumerProfile'
function App() {
  return (
    <Router>
      <Wrapper/>
        <Route exact={true} path="/" component={Home} />
        <Route exact ={true} path="/dashboard/consumer" component={ConsumerDashboard} />
        <Route path="/dashboard/consumer/edit" component={EditConsumerProfile} />

    </Router>
  );
}

export default App;
