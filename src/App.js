import React from "react";
import Wrapper from "./Components/Wrapper";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

//Pages
import Home from "./Components/Pages/Home";
import FarmerDashboard from './Components/Pages/FarmerDashboard';
import EditFarmerProfile from './Components/Pages/EditFarmerProfile';
import FarmProduce from './Components/Pages/FarmProduce';

const App = () => {
  return (
    <Router>
      <Wrapper/>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/dashboard" component={FarmerDashboard} />
          <Route  path="/dashboard/edit" component={EditFarmerProfile} />
          <Route  path="/dashboard/products" component={FarmProduce} />
        </Switch>
    </Router>
  );
}

export default App;
