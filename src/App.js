import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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


const App = () => (
  <Provider store={store}>
    <Router>
      <Wrapper />
      <Switch>
        <Route exact path="/" component={Home} />
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
