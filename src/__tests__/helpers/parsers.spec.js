import { dragonsParser } from '../../helpers/parsers';

const dragonsMock = [
  {
    createdAt: '2019-07-13T17:00:46.506Z',
    id: '1',
    name: 'NINA',
    type: 'eletricidade',
  },
];

const expectDragons = [
  {
    createdAt: '2019-07-13T17:00:46.506Z',
    date: '2019-7-13 14:00:46',
    id: '1',
    name: 'NINA',
    type: 'eletricidade',
  },
];

describe('Helper parsers', () => {
  it('should be parser dragons', () => {
    const parsedDragons = dragonsParser(dragonsMock);
    expect(parsedDragons[0].date).toBe(expectDragons[0].date);
  });
});
