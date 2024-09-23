function checkIsValidCopy (original, copy) {
  function isNumber (value) {
    const int = parseInt(value)
    return !isNaN(int)
  }

  function isCapitalized (value) {
    return value === value.toUpperCase()
  }

  if (original.length !== copy.length) {
    return false
  }

  const specialCharacter = ['#', '+', ':', '.', ' ']

  for (let i = 0; i < original.length; i++) {
    const o = original[i]; const c = copy[i]
    if (
      isNumber(o) &&
      o !== c
    ) {
      return false
    } else if (
      o.toLowerCase() !== c.toLowerCase() &&
      !specialCharacter.includes(c)
    ) {
      return false
    } else if (
      !isCapitalized(o) &&
      isCapitalized(c) &&
      !specialCharacter.includes(c)
    ) {
      return false
    } else if (o === ' ' && c !== ' ') {
      return false
    } else if (
      specialCharacter.includes(o) &&
      specialCharacter.includes(c)
    ) {
      const po = specialCharacter.indexOf(o)
      const pc = specialCharacter.indexOf(c)
      if (po > pc) return false
    }
  }

  return true
}

module.exports = checkIsValidCopy
