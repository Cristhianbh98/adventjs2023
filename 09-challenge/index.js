function adjustLights (lights) {
  let first = null
  return lights.reverse().reduce((acc, light, index) => {
    if (index === 0) {
      first = light
      return acc
    }

    if (index % 2 === 0) {
      if (light === first) return acc
      else return acc + 1
    } else {
      if (light === first) return acc + 1
      else return acc
    }
  }, 0)
}

module.exports = { adjustLights }
