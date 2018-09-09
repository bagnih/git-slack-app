import { call, put } from "redux-saga/effects";

export function* registerUser({ payload }) {
  try {
    yield call(fetch, `${process.env.REACT_APP_URL}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: payload })
    });

    const data = { currentUsername: payload, currentScreen: 'ChatScreen' };
    yield put({ type: 'REGISTER_USER', data });

  } catch (err) {
    throw err;
  }
}