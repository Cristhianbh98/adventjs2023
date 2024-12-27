const compile = require('./index')

test('test #1', () => {
  expect(compile('')).toBe(0)
})

test('test #2', () => {
  expect(compile('++*-')).toBe(3)

  expect(compile('++%++<')).toBe(6)

  expect(compile('++<--')).toBe(0)

  expect(compile('++¿+?')).toBe(3)

  expect(compile('-+¿+?')).toBe(0)

  expect(compile('++%++<++¿*?')).toBe(16)
})
