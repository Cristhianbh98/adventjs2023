const checkIsValidCopy = require('./index')

test('checkIsValidCopy returns a boolean', () => {
  expect(typeof checkIsValidCopy('', ''))
    .toBe('boolean')
})

test('checkIsValidCopy returns true when the copy is a valid copy of the original', () => {
  expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#'))
    .toBe(true)
  expect(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'))
    .toBe(false)
  expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s'))
    .toBe(true)
  expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'))
    .toBe(false)
  expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s'))
    .toBe(false)
})
