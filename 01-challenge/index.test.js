const { findFirstRepeated } = require('./index')

test('findFirstRepeated returns a number', () => {
  expect(typeof findFirstRepeated([])).toBe('number')
})

test('findFirstRepeated returns -1 when no gifts are repeated', () => {
  expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
})

test('findFirstRepeated returns the first repeated gift', () => {
  const giftIds = [2, 1, 3, 5, 3, 2]
  expect(findFirstRepeated(giftIds)).toBe(3)
})
