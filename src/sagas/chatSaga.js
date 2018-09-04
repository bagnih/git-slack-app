import { call, put } from "redux-saga/effects";
import Chatkit from '@pusher/chatkit';
import { store } from "../store/store";

export function* connectChatManager({ payload }) {
  try {

    const chatManager = yield new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:555c30df-ce5c-4cc6-8363-b36a9eae6f15',
      userId: payload,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate',
      })
    });

    const currentUser = yield call(chatManager.connect);

    yield put({ type: 'CONNECT_SAGA', data: { currentUser } });

    const currentRoom = yield call(currentUser.subscribeToRoom, {
      roomId: 15252954,
      messageLimit: 100,
      hooks: {
        onNewMessage: message => {
          store.dispatch({ type: 'CONNECT_SAGA', data: { message } });
        }
      }
    });

    yield put({ type: 'CONNECT_SAGA', data: { currentRoom } });

  } catch (err) {
    throw err;
  }
}