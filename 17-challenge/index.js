function optimizeIntervals (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = []
  let current = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i]
    if (interval[0] <= current[1]) {
      current[1] = Math.max(current[1], interval[1])
    } else {
      result.push(current)
      current = interval
    }
  }
  result.push(current)
  return result
}

module.exports = optimizeIntervals
