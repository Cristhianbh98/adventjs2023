const { findNaughtyStep } = require('./index')

test('findNaughtyStep returns a string', () => {
  expect(typeof findNaughtyStep('', '')).toBe('string')
})

test('findNaughtyStep returns empty if there is not extra step', () => {
  const original = 'abcde'
  const modified = 'abcde'
  expect(findNaughtyStep(original, modified)).toBe('')
})

test('findNaughtyStep returns the additional step', () => {
  expect(findNaughtyStep('abcde', 'abcxde')).toBe('x')
  expect(findNaughtyStep('abcd', 'abcde')).toBe('e')
  expect(findNaughtyStep('abcde', 'abcd')).toBe('e')
  expect(findNaughtyStep('stepfor', 'stepor')).toBe('f')
  expect(findNaughtyStep('stepfor', 'steppfor')).toBe('p')
})
