import { all, takeLatest, call, put } from "redux-saga/effects";
import * as notifier from "../../../helpers/notifier";

import { Types, Creators as DragonsActions } from "../../ducks/dragons";

import api from "../../../services/api";

function* getDragons() {
  try {
    const dragons = yield call(api.get);
    yield put(DragonsActions.getDragonsSuccess(dragons));
  } catch (err) {
    notifier.error();
  }
}

export default function* dragonsSaga() {
  yield all([takeLatest(Types.GET_DRAGONS, getDragons)]);
}
