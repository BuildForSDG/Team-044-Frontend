import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Wrapper from './Components/Wrapper';

// Pages
import Home from './Components/Pages/Home';
import FarmerDashboard from './Components/Pages/FarmerDashboard';
import EditFarmerProfile from './Components/Pages/EditFarmerProfile';
import FarmProduce from './Components/Pages/FarmProduce';
import ConsumerDashboard from './Components/Pages/ConsumerDashboard';
import EditConsumerProfile from './Components/Pages/EditConsumerProfile';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import ProductsDisplay from './Components/Pages/ProductsDisplay';
import SignUp from './Components/Pages/SignUp';
import SignIn from './Components/Pages/SignIn';
import NotFoundPage from './Components/Pages/NotFoundPage';
import MainChat from './Components/Pages/MainChat';


const App = () => (
  <Router>
    <Wrapper />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route exact path="/dashboard/00" component={FarmerDashboard} />
      <Route path="/dashboard/00/:id/edit" component={EditFarmerProfile} />
      <Route path="/dashboard/00/:id/products/add" component={FarmProduce} />
      <Route path="/dashboard/00/:id/products/view" component={FarmProduce} />
      <Route path="/dashboard/00/chat" component={MainChat} />
      <Route exact path="/dashboard/01" component={ConsumerDashboard} />
      <Route path="/dashboard/01/:id/edit" component={EditConsumerProfile} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/display" component={ProductsDisplay} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>


);

export default App;
