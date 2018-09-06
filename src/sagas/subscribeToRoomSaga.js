import { call, put } from "redux-saga/effects";
import { store } from "../store/store";

export function* connectToRoom({ roomId, currentUser }) {
  const currentRoom = yield call(currentUser.subscribeToRoom, {
    roomId: roomId,
    messageLimit: 100,
    hooks: {
      onNewMessage: message => {
        store.dispatch({ type: 'CONNECT_SAGA', data: { message } });
      },
      onUserStartedTyping: user => {
        // store.dispatch({ type: 'CONNECT_SAGA', data: { usersWhoAreTyping: user.name } });
      },
      onUserStoppedTyping: user => {
        // store.dispatch({ type: 'CONNECT_SAGA', data: { usersWhoStoppedTyping: user.name } });
      },
      onUserCameOnline: () => {
        currentUser.updateRoom({ roomId: roomId })
      },
      onUserWentOffline: () => {
        currentUser.updateRoom({ roomId: roomId })
      },
      onUserJoined: () => {
        currentUser.updateRoom({ roomId: roomId })
      }
    }
  });

  yield put({ type: 'CONNECT_SAGA', data: { currentRoom } });
}