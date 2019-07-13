import { all } from "redux-saga/effects";

import dragonsSaga from "./dragons";

export default function* rootSaga() {
  yield all([dragonsSaga()]);
}
