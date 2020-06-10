import { combineReducers } from 'redux';
import { room, chatPerson } from './chat';
import welcomeMessage from './welcome';
import { userLoggedId, userLoggedName } from './userLoggedIn';
import serviceReducer from './serviceReducer';


const allReducers = combineReducers({
  room,
  chatPerson,
  welcomeMessage,
  userLoggedId,
  userLoggedName,
  serviceReducer,

});

export default allReducers;
