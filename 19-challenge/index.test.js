const revealSabotage = require('./index')

test('Reveal sabotage in a 3x3 store', () => {
  const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
  ]
  const expected = [
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
  ]
  expect(revealSabotage(store)).toEqual(expected)
})
