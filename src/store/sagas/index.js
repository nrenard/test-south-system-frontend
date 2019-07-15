import { all } from 'redux-saga/effects';

import dragonsSaga from './dragons';
import userSaga from './user';

export default function* rootSaga() {
  yield all([dragonsSaga(), userSaga()]);
}
