const { maxDistance } = require('./index')

test('maxDistance returns a number', () => {
  expect(typeof maxDistance('>>'))
    .toBe('number')
})

test('maxDistance returns 0 for no movements', () => {
  expect(maxDistance(''))
    .toBe(0)
})

test('maxDistance returns the max distance', () => {
  expect(maxDistance('>>*<'))
    .toBe(2)

  expect(maxDistance('<<<>'))
    .toBe(2)

  expect(maxDistance('>***>'))
    .toBe(5)
})
