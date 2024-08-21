const { decode } = require('./index')

test('decode function returns a string', () => {
  expect(typeof decode('')).toBe('string')
})

test('decode function returns decoded message', () => {
  expect(decode('hola (odnum)'))
    .toBe('hola mundo')

  expect(decode('(olleh) (dlrow)!'))
    .toBe('hello world!')

  expect(decode('sa(u(cla)atn)s'))
    .toBe('santaclaus')

  expect(decode('(((((a))))'))
    .toBe('(a')

  expect(decode('((hola))'))
    .toBe('hola')
})
