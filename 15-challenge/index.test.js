const autonomousDrive = require('./index')

test('test 1', () => {
  const store = ['..!....', '...*.*.']

  const movements = ['R', 'R', 'D', 'L']

  expect(autonomousDrive(store, movements))
    .toStrictEqual(
      [
        '.......',
        '...*!*.'
      ]
    )
})

test('test 2', () => {
  const store = ['..!....']

  const movements = ['R', 'L']

  expect(autonomousDrive(store, movements))
    .toStrictEqual(
      [
        '..!....'
      ]
    )
})
