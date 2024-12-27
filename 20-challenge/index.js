function distributeGifts (weights) {
  const rows = weights.length
  const cols = weights[0].length

  function getNeighbors (r, c) {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]

    const neighbors = []

    for (const [dr, dc] of directions) {
      const nr = r + dr
      const nc = c + dc

      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && weights[nr][nc] !== null) {
        neighbors.push(weights[nr][nc])
      }
    }

    return neighbors
  }

  const result = Array.from({ length: rows }, () => Array(cols).fill(null))

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const current = weights[r][c]
      const neighbors = getNeighbors(r, c)

      if (neighbors.length > 0) {
        const sum = neighbors.reduce((acc, val) => acc + val, current !== null ? current : 0)
        const count = neighbors.length + (current !== null ? 1 : 0)
        result[r][c] = Math.round(sum / count)
      } else {
        result[r][c] = current !== null ? current : 0
      }
    }
  }

  return result
}

module.exports = distributeGifts
