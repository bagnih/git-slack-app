import { REGISTER_USER } from "../actions/registerUser";
import { defaultState } from "./defaultState";

export default function registerUserReducer(state = defaultState, action) {
  if (REGISTER_USER.test(action)) {
    // console.log(action);
    state = Object.assign({}, state, action.data);
  }

  return state;
}