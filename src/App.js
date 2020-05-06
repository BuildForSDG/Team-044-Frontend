import React from "react";
import Wrapper from "./Components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

//Pages
import Home from "./Components/Pages/Home";
import SignUp from "./Components/Pages/SignUp"
import SignIn from "./Components/Pages/SignIn";

// Redux store
const store = createStore(
    rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Wrapper/>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
