import { connectToRoom } from './subscribeToRoomSaga';
import { cloneableGenerator } from 'redux-saga/utils';
import { put } from "redux-saga/effects";

describe('Connect to room', () => {
    const currentUser = {
        subscribeToRoom: () => {
            return {
                data: 'dummy'
            };
        }
    };
    const generator = cloneableGenerator(connectToRoom)({ roomId: 'some', currentUser });
    generator.next();

    test('it should trigger the next', () => {
        expect(generator.next().value).toEqual(put({ type: 'CONNECT_SAGA', data: { currentRoom: undefined } }));
    });

    test('it should close the generator', () => {
        expect(generator.next()).toBeTruthy();
    });
});