function drawClock (time) {
  const digitGrid = {
    '00': '1',
    '01': '14',
    '02': 'A',
    10: '1237',
    11: 'N',
    12: '56',
    20: '1237',
    21: 'N',
    22: '56',
    30: '17',
    31: '170',
    32: 'A',
    40: '134579',
    41: 'N',
    42: '2',
    50: '134579',
    51: 'N',
    52: '2',
    60: '147',
    61: '147',
    62: 'A'
  }

  // Create an empty 7x17 grid
  const clockGrid = []
  for (let i = 0; i < 7; i++) {
    clockGrid[i] = new Array(17).fill(' ')
  }

  // Place the colon in the clock grid
  clockGrid[2][8] = '*'
  clockGrid[4][8] = '*'

  // Split the time into digits
  const digits = [...time.replace(':', '')]
  let currentDigit = digits.shift()

  // Define the column indices for each digit
  for (const index of [0, 4, 10, 14]) {
    for (let row = 0; row < 7; ++row) {
      for (let col = 0; col < 3; ++col) {
        const notFill = digitGrid[`${row}${col}`]
        if (notFill === 'N') continue // Skip rows/columns marked as 'N'

        // Fill only the valid cells based on the digit patterns
        if (!notFill.includes(currentDigit) || notFill === 'A') {
          clockGrid[row][col + index] = '*'
        }
      }
    }
    currentDigit = digits.shift()
  }

  return clockGrid
}

module.exports = drawClock
