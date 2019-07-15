import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';

import history from '../../services/history';
import { dragonsParser } from '../../helpers/parsers';

import * as notifier from '../../services/notifier';

import { Types, Creators as DragonsActions } from '../ducks/dragons.js';

import api from '../../services/api';

export function* getDragons() {
  try {
    const dragons = yield call(api.get);
    yield put(DragonsActions.setDragonsSuccess(dragonsParser(dragons)));
  } catch (err) {
    yield put(DragonsActions.dragonsError());
    notifier.error();
  }
}

export function* addDragon({ payload }) {
  try {
    const dragons = yield select(state => state.dragons.list);

    history.push('/');

    const dragon = yield call(api.post, '/', payload);

    yield put(DragonsActions.setDragonsSuccess(dragonsParser([...dragons, dragon])));

    notifier.success(`O dragão ${payload.name} foi adicionado.`, 2000);
  } catch (err) {
    yield put(DragonsActions.dragonsError());
    notifier.error(`Erro na tentativa de adicionar o dragão ${payload.name}.`);
  }
}

export function* deleteDragon({ payload }) {
  try {
    history.push('/');

    yield call(api.delete, `/${payload.id}`);
    yield put(DragonsActions.deleteDragonSuccess(payload));

    notifier.success(`O dragão ${payload.name} foi deletado.`, 2000);
  } catch (err) {
    yield put(DragonsActions.dragonsError());
    notifier.error(`Erro na tentativa de deletar o dragão ${payload.name}.`);
  }
}

export function* updateDragon({ payload }) {
  try {
    history.push('/');

    yield call(api.put, `/${payload.id}`, payload);
    yield put(DragonsActions.updateDragonSuccess(payload));

    notifier.success(`O dragão ${payload.name} foi atualizado.`, 2000);
  } catch (err) {
    yield put(DragonsActions.dragonsError());
    notifier.error(`Erro na tentativa de atualizar o dragão ${payload.name}.`);
  }
}

export function* sortDragons() {
  try {
    const dragons = yield select(state => state.dragons.list);
    yield put(DragonsActions.setDragonsSuccess(dragonsParser(dragons)));
  } catch (err) {
    yield put(DragonsActions.dragonsError());
    notifier.error();
  }
}

export default function* dragonsSaga() {
  yield all([
    takeLatest(Types.GET_DRAGONS, getDragons),
    takeLatest(Types.ADD_DRAGON, addDragon),
    takeLatest(Types.DELETE_DRAGON, deleteDragon),
    takeLatest(Types.UPDATE_DRAGON, updateDragon),
    takeLatest(Types.UPDATE_DRAGON_SUCCESS, sortDragons),
  ]);
}
