const { adjustLights } = require('./index')

test('adjustLights returns a number', () => {
  expect(typeof adjustLights([]))
    .toBe('number')
})

test('adjustLights returns 0 for no changes', () => {
  const lights = ['🟢', '🔴', '🟢', '🔴', '🟢']
  expect(adjustLights(lights))
    .toBe(0)
})

test('adjustLights returns the number of change', () => {
  const lights = ['🔴', '🔴', '🟢', '🟢', '🔴']
  expect(adjustLights(lights))
    .toBe(2)
})
