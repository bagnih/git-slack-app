import { call, put } from "redux-saga/effects";
import Chatkit from '@pusher/chatkit';
// import { store } from "../store/store";
import { connectToRoom } from "./subscribeToRoomSaga";

export function* connectChatManager({ payload }) {
  try {

    const chatManager = yield new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:555c30df-ce5c-4cc6-8363-b36a9eae6f15',
      userId: payload,
      tokenProvider: new Chatkit.TokenProvider({
        url: `${process.env.REACT_APP_URL}authenticate`,
      })
    });

    const currentUser = yield call(chatManager.connect);

    yield put({ type: 'CONNECT_SAGA', data: { currentUser } });

    const chatRooms = yield call(currentUser.getJoinableRooms);
    yield put({ type: 'CONNECT_SAGA', data: { chatRooms } });

    if (chatRooms.length) {
      yield connectToRoom({ currentUser, roomId: chatRooms[0].id });
    }


  } catch (err) {
    throw err;
  }
}