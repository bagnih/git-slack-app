import { call } from "redux-saga/effects";
import { connectToRoom } from './subscribeToRoomSaga';

export function* createRoom({ payload }) {
    try {
        const { currentUser, user } = payload;
        console.log(currentUser, user);
        const room = yield call(currentUser.createRoom, {
            name: user.id,
            private: true,
            addUserIds: [user.id, currentUser.id]
        });

        yield connectToRoom({ currentUser, roomId: room.id });
    } catch (e) {
        console.log(e);
    }
}