const getIndexsForPalindrome = require('./index')

test('getIndexsForPalindrome returns a array or null', () => {
  const isAnArray = Array.isArray(getIndexsForPalindrome('a'))
  const isNull = getIndexsForPalindrome('a') === null

  expect(isAnArray || isNull)
    .toBe(true)
})

test('getIndexsForPalindrome returns a void array it is a palindrome', () => {
  expect(getIndexsForPalindrome('aaa'))
    .toStrictEqual([])
})

test('getIndexsForPalindrome returns null if it is not possible to make it a palindrome', () => {
  expect(getIndexsForPalindrome('abc'))
    .toBe(null)

  expect(getIndexsForPalindrome('caababa'))
    .toBe(null)
})

test('getIndexsForPalindrome returns a array with the indexes of the characters that need to swap to make it', () => {
  expect(getIndexsForPalindrome('abab'))
    .toStrictEqual([0, 1])

  expect(getIndexsForPalindrome('aaababa'))
    .toStrictEqual([1, 3])
})
