const calculateTime = require('./index')

test('calculateTime return a string', () => {
  expect(typeof calculateTime([]))
    .toBe('string')
})

test('calculateTime return "07:00:00" when passed an empty array', () => {
  expect(calculateTime([]))
    .toBe('07:00:00')
})

test('calculateTime return the time left when the deliveries do not suprass "07:00:00"', () => {
  expect(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
    .toBe('-02:20:00')
})

test('calculateTime return the time left when the deliveries suprass "07:00:00"', () => {
  expect(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
    .toBe('00:30:00')
})
