function revealSabotage (store) {
  const rows = store.length
  const cols = store[0].length

  // Helper function to count sabotaged toys around a given cell
  const countAdjacent = (row, col) => {
    let count = 0
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue // Skip the current cell
        const newRow = row + i
        const newCol = col + j
        if (
          newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    store[newRow][newCol] === '*'
        ) {
          count++
        }
      }
    }
    return count
  }

  return store.map((row, rowIndex) =>
    row.map((cell, colIndex) => {
      if (cell === '*') return '*'
      const adjacentCount = countAdjacent(rowIndex, colIndex)
      return adjacentCount > 0 ? adjacentCount.toString() : ' '
    })
  )
}

module.exports = revealSabotage
