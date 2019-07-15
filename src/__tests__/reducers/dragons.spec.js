import dragonsReducer, {
  Creators as DragonsActions,
  INITIAL_STATE,
} from '../../store/ducks/dragons';

const dragonsMock = [{ id: 1 }, { id: 2 }];

describe('Reducer dragons', () => {
  it('should be able to get dragons', () => {
    const store = dragonsReducer(INITIAL_STATE, DragonsActions.getDragons());
    expect(store.loading).toBe(true);
  });

  it('should be able to set dragons success', () => {
    const store = dragonsReducer(
      { loading: true, ...INITIAL_STATE },
      DragonsActions.setDragonsSuccess([{}, {}]),
    );

    expect(store.loading).toBe(false);
    expect(store.list.length).toBe(2);
  });

  it('should be able add dragon', () => {
    const store = dragonsReducer(INITIAL_STATE, DragonsActions.addDragon());
    expect(store.loading).toBe(true);
  });

  it('should be able add dragon success', () => {
    const store = dragonsReducer(INITIAL_STATE, DragonsActions.addDragonSuccess({}));
    expect(store.list.length).toBe(1);
  });

  it('should be able delete dragon', () => {
    const store = dragonsReducer(INITIAL_STATE, DragonsActions.deleteDragon());
    expect(store.loading).toBe(true);
  });

  it('should be able delete dragon success', () => {
    const store = dragonsReducer(
      {
        loading: true,
        list: dragonsMock,
      },

      DragonsActions.deleteDragonSuccess({ id: 1 }),
    );

    expect(store.loading).toBe(false);
    expect(store.list.length).toBe(1);
  });

  it('should be able update dragon', () => {
    const store = dragonsReducer(INITIAL_STATE, DragonsActions.updateDragon());
    expect(store.loading).toBe(true);
  });

  it('should be able update dragon success', () => {
    const mockDragon = { id: 1, name: 'Teste', type: 'Fire' };

    const store = dragonsReducer(
      {
        loading: true,
        list: dragonsMock,
      },
      DragonsActions.updateDragonSuccess(mockDragon),
    );

    const dragon = store.list.find(dragonItem => dragonItem.id === mockDragon.id);

    expect(store.loading).toBe(false);
    expect(dragon.name).toBe('Teste');
    expect(dragon.type).toBe('Fire');
  });

  it('should be able to set error', () => {
    const store = dragonsReducer(
      { loading: true, ...INITIAL_STATE },
      DragonsActions.dragonsError(),
    );

    expect(store.loading).toBe(false);
  });
});
