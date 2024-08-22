const { drawGift } = require('./index')

test('drawGift is a function', () => {
  expect(typeof drawGift).toEqual('function')
})

test('drawGift returns a string', () => {
  expect(typeof drawGift(1, '#')).toEqual('string')
})

test('drawGift returns tehe gift"', () => {
  expect(drawGift(1, '^')).toEqual('#\n')
  expect(drawGift(4, '+')).toEqual('   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n')
})
