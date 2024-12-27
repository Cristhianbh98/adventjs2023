function getStaircasePaths (steps, maxJump) {
  function findPaths (remainingSteps, currentPath) {
    if (remainingSteps === 0) {
      results.push(currentPath)
      return
    }

    for (let jump = 1; jump <= Math.min(maxJump, remainingSteps); jump++) {
      findPaths(remainingSteps - jump, [...currentPath, jump])
    }
  }

  const results = []
  findPaths(steps, [])
  return results
}

module.exports = getStaircasePaths
