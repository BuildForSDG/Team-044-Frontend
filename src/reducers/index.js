import { combineReducers } from 'redux';
import { room, chatPerson } from './chat';
import welcomeMessage from './welcome';
import { userLoggedId, userLoggedName } from './userLoggedIn';

const allReducers = combineReducers({
  room,
  chatPerson,
  welcomeMessage,
  userLoggedId,
  userLoggedName,
});

export default allReducers;
