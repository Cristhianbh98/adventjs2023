function findBalancedSegment (message) {
  const r = []

  for (let i = 0; i < message.length - 1; i++) {
    let zeros = 0; let ones = 0
    for (let j = i; j < message.length; j++) {
      message[j] ? ones++ : zeros++
      if (ones === zeros) r.push([i, j])
    }
  }

  const t = r.map(s => s[1] - s[0])
  const i = t.indexOf(Math.max(...t))
  return r[i] ?? []
}
module.exports = findBalancedSegment
