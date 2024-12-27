function compile (code) {
  let acc = 0
  let auxAcc = null
  let loop = 0

  for (let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case '+':
        acc += 1
        break
      case '-':
        acc -= 1
        break
      case '*':
        acc *= 2
        break
      case '%':
        loop = i
        break
      case '<':
        if (loop !== 0) {
          const aux = loop
          loop = i
          i = aux
        }
        break
      case '¿':
        if (acc <= 0) {
          auxAcc = acc
        }
        break
      case '?':
        if (typeof auxAcc === 'number') {
          acc = auxAcc
          auxAcc = null
        }
        break
    }
  }

  return acc
}

module.exports = compile
