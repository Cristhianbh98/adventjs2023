const { cyberReindeer } = require('./index')

test('cyberReindeer returns an array', () => {
  expect(Array.isArray(cyberReindeer('', 0))).toBe(true)
})

test('cyberReindeer returns the state of the road', () => {
  const road = 'S..|...|..'
  const time = 10
  expect(cyberReindeer(road, time))
    .toStrictEqual([
      'S..|...|..', // initial state
      '.S.|...|..', // sled advances on the road
      '..S|...|..', // sled advances on the road
      '..S|...|..', // sled stops at the barrier
      '..S|...|..', // sled stops at the barrier
      '...S...*..', // barrier opens, sled advances
      '...*S..*..', // sled advances on the road
      '...*.S.*..', // sled advances on the road
      '...*..S*..', // sled advances on the road
      '...*...S..' // passes through the open barrier
    ])
})
