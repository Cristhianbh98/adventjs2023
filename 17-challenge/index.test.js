const optimizeIntervals = require('./index')

test('test 1', () => {
  expect(optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
  ])).toStrictEqual([
    [2, 8]
  ])
})

test('test 2', () => {
  expect(optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6]
  ])).toStrictEqual([
    [1, 6],
    [8, 10]
  ])
})

test('test 3', () => {
  expect(optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6]
  ])).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6]
  ])
})
