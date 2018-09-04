import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import registerUser from './registerUserReducer';
import connectChatManager from './connectChatManagerReducer';

const rootReducer = combineReducers({
  routing,
  registerUser,
  connectChatManager
});

export default rootReducer;