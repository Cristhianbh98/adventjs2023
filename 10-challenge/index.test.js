const createChristmasTree = require('./index')

test('createChristmasTree returns a string', () => {
  expect(typeof createChristmasTree('*@o', 3))
    .toBe('string')
})

test('createChristmasTree returns a string with the correct length', () => {
  expect(createChristmasTree('*@o', 3))
    .toBe('  *\n @ o\n* @ o\n  |\n')

  expect(createChristmasTree('x', 3))
    .toBe('  x\n x x\nx x x\n  |\n')

  expect(createChristmasTree('123', 5))
    .toBe('    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n')
})
