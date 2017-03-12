var calc = require('../loop-array-calc');
var next = calc.next;
var prev = calc.prev;

describe('loop-calc', () => {
  it('should be return next data', () => {
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 1)).toBe('b');
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 2)).toBe('c');
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 3)).toBe('d');
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 4)).toBe('e');
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 5)).toBe('a');
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 6)).toBe('b');
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 7)).toBe('c');
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 8)).toBe('d');
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 9)).toBe('e');
    expect(next(['a', 'b', 'c', 'd', 'e'], 0, 10)).toBe('a');

    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 1)).toBe('c');
    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 2)).toBe('d');
    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 3)).toBe('e');
    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 4)).toBe('a');
    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 5)).toBe('b');
    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 6)).toBe('c');
    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 7)).toBe('d');
    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 8)).toBe('e');
    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 9)).toBe('a');
    expect(next(['a', 'b', 'c', 'd', 'e'], 1, 10)).toBe('b');

    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 1)).toBe('e');
    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 2)).toBe('a');
    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 3)).toBe('b');
    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 4)).toBe('c');
    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 5)).toBe('d');
    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 6)).toBe('e');
    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 7)).toBe('a');
    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 8)).toBe('b');
    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 9)).toBe('c');
    expect(next(['a', 'b', 'c', 'd', 'e'], 3, 10)).toBe('d');

    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 1)).toBe('a');
    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 2)).toBe('b');
    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 3)).toBe('c');
    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 4)).toBe('d');
    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 5)).toBe('e');
    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 6)).toBe('a');
    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 7)).toBe('b');
    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 8)).toBe('c');
    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 9)).toBe('d');
    expect(next(['a', 'b', 'c', 'd', 'e'], 4, 10)).toBe('e');
  });
  it('should be return prev data', () => {
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 1)).toBe('e');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 2)).toBe('d');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 3)).toBe('c');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 4)).toBe('b');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 5)).toBe('a');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 6)).toBe('e');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 7)).toBe('d');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 8)).toBe('c');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 9)).toBe('b');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 0, 10)).toBe('a');

    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 1)).toBe('a');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 2)).toBe('e');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 3)).toBe('d');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 4)).toBe('c');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 5)).toBe('b');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 6)).toBe('a');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 7)).toBe('e');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 8)).toBe('d');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 9)).toBe('c');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 1, 10)).toBe('b');

    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 1)).toBe('c');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 2)).toBe('b');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 3)).toBe('a');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 4)).toBe('e');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 5)).toBe('d');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 6)).toBe('c');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 7)).toBe('b');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 8)).toBe('a');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 9)).toBe('e');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 3, 10)).toBe('d');

    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 1)).toBe('d');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 2)).toBe('c');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 3)).toBe('b');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 4)).toBe('a');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 5)).toBe('e');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 6)).toBe('d');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 7)).toBe('c');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 8)).toBe('b');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 9)).toBe('a');
    expect(prev(['a', 'b', 'c', 'd', 'e'], 4, 10)).toBe('e');
  });
});
