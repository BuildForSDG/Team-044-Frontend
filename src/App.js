import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Wrapper from './Components/Wrapper';

// Pages
import Home from './Components/Pages/Home';
import FarmerDashboard from './Components/Pages/FarmerDashboard';
import EditFarmerProfile from './Components/Pages/EditFarmerProfile';
import FarmProduce from './Components/Pages/FarmProduce';



import Wrapper from './Components/Wrapper';

// Pages
import Home from './Components/Pages/Home';
import ConsumerDashboard from './Components/Pages/ConsumerDashboard';
import EditConsumerProfile from './Components/Pages/EditConsumerProfile';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Wrapper from './Components/Wrapper';


// Pages
import Home from './Components/Pages/Home';
import ChatList from './Components/Pages/ChatList';
import ChatBox from './Components/Pages/ChatBox';
import MockRegister from './Components/Pages/MockRegister';
import MockChatList from './Components/Pages/MockChatList'

import allReducers from './reducers';

// STORE
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);




import Wrapper from './Components/Wrapper';
import Services from './Components/Pages/Services';

// Pages
import Home from './Components/Pages/Home';



import Wrapper from './Components/Wrapper';

// Pages
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import ProductsDisplay from './Components/Pages/ProductsDisplay';


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


      <Route path="/services" component={Services} />
    </Switch>
  </Router>

      <Route exact path="/products" component={Products} />
      <Route path="/products/display" component={ProductsDisplay} />
    </Switch>
  </Router>


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Wrapper from './Components/Wrapper';
import rootReducer from './reducers/rootReducer';

// Pages
import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import SignIn from './Components/Pages/SignIn';

// Redux store
const store = createStore(
  rootReducer,
);


const App = () => (
  <Provider store={store}>
    <Router>
      <Wrapper />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/dashboard/consumer" component={ConsumerDashboard} />
        <Route path="/dashboard/consumer/edit" component={EditConsumerProfile} />


        <Route path="/mockregister" component={MockRegister} />
        <Route path="/mockchatlist" component={MockChatList} />
        <Route exact path="/dashboard/chat" component={ChatList} />
        <Route path="/dashboard/chat/:id/:id" component={ChatBox} />

      </Switch>
    </Router>
  </Provider>

        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />

      </Switch>
    </Router>
  </Provider>



);

export default App;

// <Route path="/chit/:id/:id" component={Che} />
