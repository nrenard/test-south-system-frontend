import sortDragons from '../../helpers/sortDragons';

describe('Helper dragons', () => {
  it('should be sort dragons', () => {
    const dragonsMock = [
      {
        id: '1',
        name: 'NINA',
      },
      {
        id: '2',
        name: 'ANA',
      },
    ];

    const expectDragons = [
      {
        id: '2',
        name: 'ANA',
      },
      {
        id: '1',
        name: 'NINA',
      },
    ];

    const sortedDragons = sortDragons(dragonsMock);
    expect(sortedDragons[0].name).toBe(expectDragons[0].name);
  });
});
