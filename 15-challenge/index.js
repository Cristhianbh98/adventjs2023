function autonomousDrive (store, movements) {
  let currentLocation = [0, 0]

  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] === '!') {
        currentLocation = [i, j]
      }
    }
  }

  for (const movement of movements) {
    let [x, y] = currentLocation
    if (movement === 'R') y++
    else if (movement === 'L') y--
    else if (movement === 'U') x--
    else if (movement === 'D') x++

    if (
      x < 0 || x >= store.length ||
      y < 0 || y >= store[0].length
    ) {
      continue
    }

    const toMove = store[x][y]

    if (toMove === '*' || toMove === undefined) {
      continue
    }

    currentLocation = [x, y]
  }

  return store.map((row, i) => {
    return row.split('').map((cell, j) => {
      if (i === currentLocation[0] && j === currentLocation[1]) {
        return '!'
      } else if (cell === '!') {
        return '.'
      }
      return cell
    }).join('')
  })
}

module.exports = autonomousDrive
