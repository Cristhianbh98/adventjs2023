const findBalancedSegment = require('./index')

test('Test #1', () => {
  expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))
    .toEqual([2, 5])
})
