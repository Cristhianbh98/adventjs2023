function createChristmasTree (ornaments, height) {
  function number (n) {
    return (n * (n + 1)) / 2
  }

  const totalOrnaments = []

  for (let i = 0; i < number(height); i++) {
    totalOrnaments.push(ornaments[i % ornaments.length])
  }
  // Left base padding
  const lbp = ' '.repeat(height - 1)
  let tree = ''

  for (let i = 1; i <= height; i++) {
    tree += lbp.slice(i - 1)
    tree += totalOrnaments.splice(0, i).join(' ')
    tree += '\n'
  }

  const base = lbp + '|' + '\n'
  return tree + base
}

module.exports = createChristmasTree
