const { manufacture } = require('./index')

test('manufacture returns an array', () => {
  expect(Array.isArray(manufacture([], '')))
    .toBe(true)
})

test('manufacture returns an array of gifts that can be manufactured', () => {
  const gifts = ['tren', 'oso', 'pelota']
  const materials = 'tronesa'
  expect(manufacture(gifts, materials))
    .toStrictEqual(['tren', 'oso'])
})

test('manufacture returns an empty array if no gifts can be manufactured', () => {
  const gifts = ['libro', 'ps5']
  const materials = 'psli'

  expect(manufacture(gifts, materials))
    .toStrictEqual([])
})
