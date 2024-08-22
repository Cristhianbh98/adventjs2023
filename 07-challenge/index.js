function drawGift (size, symbol) {
  if (size === 1) return '#\n'
  let gift = ''

  let upper = ''
  let lower = ''

  for (let i = 0; i < size - 1; i++) {
    if (i === 0) {
      upper += ' '.repeat(size - (i + 1)) + '#'.repeat(size) + '\n'
      lower += '#'.repeat(size) + '\n'
    } else {
      const upper1 = ' '.repeat(size - (i + 1)) + '#'
      const upper2 = symbol.repeat(size - 2) + '#'
      const upper3 = symbol.repeat(i - 1) + '#' + '\n'
      upper += upper1 + upper2 + upper3

      const lower1 = '#' + symbol.repeat(size - 2)
      const lower2 = '#' + symbol.repeat(i - 1) + '#' + '\n'
      lower += lower1 + lower2
    }
  }

  const middle = '#'.repeat(size) + symbol.repeat(size - 2) + '#\n'
  lower = lower.split('\n').reverse().join('\n').slice(1)
  gift = upper + middle + lower + '\n'

  return gift
}

module.exports = { drawGift }
