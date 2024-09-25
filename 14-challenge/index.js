function maxGifts (houses) {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]

  const dp = [houses[0], Math.max(houses[0], houses[1])]

  for (let i = 2; i < houses.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i])
  }

  return dp[dp.length - 1]
}

module.exports = maxGifts
