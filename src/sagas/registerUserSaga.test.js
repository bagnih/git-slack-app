import { registerUser } from "./registerUserSaga";
import { put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

const callObj = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'me' })
};

const putObj = { type: 'REGISTER_USER', data: { currentUsername: 'me', currentScreen: 'ChatScreen' } }

describe('Testing registerUserSaga', () => {
    const generator = cloneableGenerator(registerUser)({ payload: 'me' });
    const genVal = generator.next().value;

    test('should make an api call', () => {
        expect(genVal.CALL.args[1]).toEqual(callObj);
    });

    test('Next call', () => {
        expect(generator.next().value).toEqual(put(putObj))
    });
});