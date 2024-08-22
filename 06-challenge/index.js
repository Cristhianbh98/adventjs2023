function maxDistance (movements) {
  const lc = movements.split('<').length - 1
  const rc = movements.split('>').length - 1
  return Math.abs(
    movements.split('')
      .reduce((acc, mov) => {
        if (mov === '>') acc++
        if (mov === '<') acc--
        if (mov === '*') {
          if (lc > rc) acc--
          else acc++
        }
        return acc
      }, 0)
  )
}

module.exports = { maxDistance }
