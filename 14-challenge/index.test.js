const maxGifts = require('./index')

test('maxGifts returns a number', () => {
  expect(typeof maxGifts([1, 2, 3]))
    .toBe('number')
})

test('maxGifts returns 0 for an empty array', () => {
  expect(maxGifts([]))
    .toBe(0)
})

test('maxGifts returns the valid value', () => {
  expect(maxGifts([2, 4, 2]))
    .toBe(4)

  expect(maxGifts([5, 1, 1, 5]))
    .toBe(10) // 5 + 5

  expect(maxGifts([4, 1, 1, 4, 2, 1]))
    .toBe(9) // 4 + 4 + 1

  expect(maxGifts([1, 3, 1, 3, 100]))
    .toBe(103) // 3 + 100
})
