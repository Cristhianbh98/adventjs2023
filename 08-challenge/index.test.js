const { organizeGifts } = require('./index')

test('organizeGifts should return a string', () => {
  expect(organizeGifts('')).toBe('')
})

test('organizeGifts should return the gifts', () => {
  expect(organizeGifts('76a11b'))
    .toBe('[a]{a}{a}(aaaaaa){b}(b)')
})
