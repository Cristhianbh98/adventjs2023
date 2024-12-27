function travelDistance (map) {
  const rows = map.split('\n')

  const positions = {}
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      const cell = rows[y][x]
      if (cell === 'S') {
        positions.S = [x, y]
      } else if (!isNaN(cell) && cell !== '0') {
        positions[cell] = [x, y]
      }
    }
  }

  const sortedKids = Object.keys(positions)
    .filter(key => key !== 'S')
    .sort((a, b) => a - b)

  let totalDistance = 0
  let currentPos = positions.S

  for (const kid of sortedKids) {
    const kidPos = positions[kid]
    totalDistance += Math.abs(kidPos[0] - currentPos[0]) + Math.abs(kidPos[1] - currentPos[1])
    currentPos = kidPos
  }

  return totalDistance
}

module.exports = travelDistance
