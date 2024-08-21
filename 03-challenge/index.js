function findNaughtyStep (original, modified) {
  let toRun = ''
  if (original.length < modified.length) {
    toRun = modified
  } else {
    toRun = original
  }

  for (const index in toRun.split('')) {
    if (original[index] !== modified[index]) {
      return toRun[index]
    }
  }

  return ''
}

module.exports = { findNaughtyStep }
