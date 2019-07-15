import { runSaga } from "redux-saga";

import apiMock from "../../__mocks__/api";

import {
  getDragons,
  addDragon,
  deleteDragon,
  updateDragon,
  sortDragons
} from "../../store/sagas/dragons";

import { Creators as DragonsActions } from "../../store/ducks/dragons";

const store = { dragons: { list: [] } };

describe("Saga dragons", () => {
  it("should be able to get dragons success", async () => {
    const dispatched = [];

    apiMock.onGet().reply(200, []);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getDragons
    ).toPromise();

    expect(dispatched).toContainEqual(DragonsActions.setDragonsSuccess([]));
  });

  it("should be able to get dragons failed", async () => {
    const dispatched = [];

    apiMock.onGet().reply(500);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getDragons
    ).toPromise();

    expect(dispatched).toContainEqual(DragonsActions.dragonsError());
  });

  it("should be able to add dragons success", async () => {
    const dispatched = [];
    const payload = { createdAt: "2019-07-13T17:00:46.506Z" };

    apiMock.onPost().reply(200, payload);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => store
      },
      addDragon,
      { payload }
    ).toPromise();

    expect(dispatched).toContainEqual(
      DragonsActions.setDragonsSuccess([
        { ...payload, date: "2019-7-13 14:00:46" }
      ])
    );
  });

  it("should be able to add dragons error", async () => {
    const dispatched = [];
    const payload = { createdAt: "2019-07-13T17:00:46.506Z" };

    apiMock.onPost().reply(500, payload);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => store
      },
      addDragon,
      { payload }
    ).toPromise();

    expect(dispatched).toContainEqual(DragonsActions.dragonsError());
  });

  it("should be able to delete dragons success", async () => {
    const dispatched = [];
    const payload = { id: 1 };

    apiMock.onDelete(`/${payload.id}`).reply(200, payload);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => store
      },
      deleteDragon,
      { payload }
    ).toPromise();

    expect(dispatched).toContainEqual(
      DragonsActions.deleteDragonSuccess(payload)
    );
  });

  it("should be able to delete dragons error", async () => {
    const dispatched = [];
    const payload = { id: 1 };

    apiMock.onDelete(`/${payload.id}`).reply(500, payload);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => store
      },
      deleteDragon,
      { payload }
    ).toPromise();

    expect(dispatched).toContainEqual(DragonsActions.dragonsError());
  });

  it("should be able to update dragons success", async () => {
    const dispatched = [];
    const payload = { id: 1, name: "Teste" };

    apiMock.onPut(`/${payload.id}`).reply(200, payload);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      updateDragon,
      { payload }
    ).toPromise();

    expect(dispatched).toContainEqual(
      DragonsActions.updateDragonSuccess(payload)
    );
  });

  it("should be able to update dragons error", async () => {
    const dispatched = [];
    const payload = { id: 1, name: "Teste" };

    apiMock.onPut(`/${payload.id}`).reply(500, payload);

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      updateDragon,
      { payload }
    ).toPromise();

    expect(dispatched).toContainEqual(DragonsActions.dragonsError());
  });

  it("should be able to sort dragons success", async () => {
    const dragonsMock = [
      {
        id: "1",
        name: "NINA",
        createdAt: "2019-07-13T17:00:46.506Z"
      },
      {
        id: "2",
        name: "ANA",
        createdAt: "2019-07-13T17:00:46.506Z"
      }
    ];

    const expectDragons = [
      {
        id: "2",
        name: "ANA",
        date: "2019-7-13 14:00:46",
        createdAt: "2019-07-13T17:00:46.506Z"
      },
      {
        id: "1",
        name: "NINA",
        date: "2019-7-13 14:00:46",
        createdAt: "2019-07-13T17:00:46.506Z"
      }
    ];

    const dispatched = [];

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ ...store, dragons: { list: dragonsMock } })
      },
      sortDragons
    ).toPromise();

    expect(dispatched).toContainEqual(
      DragonsActions.setDragonsSuccess(expectDragons)
    );
  });
});
