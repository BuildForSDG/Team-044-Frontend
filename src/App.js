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
import ChatList from './Components/Pages/ChatList';
import ChatBox from './Components/Pages/ChatBox';
import MockRegister from './Components/Pages/MockRegister';
import MockChatList from './Components/Pages/MockChatList'
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import ProductsDisplay from './Components/Pages/ProductsDisplay';
import SignUp from './Components/Pages/SignUp';
import SignIn from './Components/Pages/SignIn';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

// STORE
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


const App = () => (
  <Provider store={store}>
  <Router>
    <Wrapper />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route exact path="/dashboard" component={FarmerDashboard} />
      <Route path="/dashboard/edit" component={EditFarmerProfile} />
      <Route path="/dashboard/products" component={FarmProduce} />
      <Route exact path="/dashboard/consumer" component={ConsumerDashboard} />
      <Route path="/dashboard/consumer/edit" component={EditConsumerProfile} />
      <Route exact path="/products" component={Products} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/products/display" component={ProductsDisplay} />
      <Route path="/mockregister" component={MockRegister} />
      <Route path="/mockchatlist" component={MockChatList} />
      <Route exact path="/dashboard/chat" component={ChatList} />
      <Route path="/dashboard/chat/:id/:id" component={ChatBox} />

    </Switch>
  </Router>
  </Provider>



);

export default App;

// <Route path="/chit/:id/:id" component={Che} />
