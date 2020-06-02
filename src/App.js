import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
