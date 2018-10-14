import { takeLatest } from "redux-saga/effects";
import { registerUser } from "./registerUserSaga";
import { connectChatManager } from "./chatSaga";
import { createRoom } from './createChatRoom';


export default function* helloSaga() {
  console.log('Hello Sagas!');
  yield takeLatest('POST_REGISTER_USER', registerUser);
  yield takeLatest('CONNECT_CHAT_MANAGER', connectChatManager);
  yield takeLatest('CREATE_CHAT_ROOM', createRoom);
}