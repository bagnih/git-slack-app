import { CONNECT_SAGA } from "../actions/chatSaga";
import { defaultState } from "./defaultState";

export default function registerUserReducer(state = defaultState, action) {
  if (CONNECT_SAGA.test(action)) {
    console.log(action);
    if (action.data.message) {
      state = Object.assign({}, state, { messages: [...state.messages, action.data.message] });
    }

    if (action.data.usersWhoAreTyping) {
      state = Object.assign({}, state, { usersWhoAreTyping: [...state.usersWhoAreTyping, action.data.usersWhoAreTyping] });
    }

    if (action.data.usersWhoStoppedTyping) {
      state = Object.assign({}, state, { usersWhoAreTyping: state.usersWhoAreTyping.filter(username => username !== action.data.usersWhoStoppedTyping) });
    }
    state = Object.assign({}, state, action.data);
  }
  console.log(state);
  return state;
}