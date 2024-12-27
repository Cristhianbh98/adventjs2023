const organizeChristmasDinner = require('./index')

test('Test #1', () => {
  const dishes = [
    ['christmas turkey', 'turkey', 'sauce', 'herbs'],
    ['cake', 'flour', 'sugar', 'egg'],
    ['hot chocolate', 'chocolate', 'milk', 'sugar'],
    ['pizza', 'sauce', 'tomato', 'cheese', 'ham']
  ]

  const result = [
    ['sauce', 'christmas turkey', 'pizza'],
    ['sugar', 'cake', 'hot chocolate']
  ]

  expect(organizeChristmasDinner(dishes)).toEqual(result)
})
