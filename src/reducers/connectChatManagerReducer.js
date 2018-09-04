import { CONNECT_SAGA } from "../actions/chatSaga";
import { defaultState } from "./defaultState";

export default function registerUserReducer(state = defaultState, action) {
  if (CONNECT_SAGA.test(action)) {
    console.log(action);
    if (action.data.message) {
      state = Object.assign({}, state, [...state.messages, action.data.message]);
    }
    state = Object.assign({}, state, action.data);
  }

  return state;
}