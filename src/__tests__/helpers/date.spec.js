import { toLocaleString } from '../../helpers/date';

describe('Helper date', () => {
  it('it should normalize date', () => {
    expect(toLocaleString('2019-07-13T06:49:44.427Z')).toBe('2019-7-13 03:49:44');
  });
});
