function cyberReindeer (road, time) {
  let pointer = 0
  return Array.from({ length: time })
    .reduce((acc, _, i) => {
      road = road.replace('S', '.')

      if (i === 5) {
        road = road.replace(/\|/g, '*')
      }

      if (road[pointer] === '|' && i < 5) {
        const part = acc[pointer - 1]
        acc.push(part)
        return acc
      }

      const part = road.slice(0, pointer) + 'S' + road.slice(pointer + 1)
      acc.push(part)

      pointer++
      return acc
    }, [])
}

module.exports = { cyberReindeer }
