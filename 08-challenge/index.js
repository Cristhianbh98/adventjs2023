function organizeGifts (gifts) {
  return gifts.replace(/\d+[a-zA-Z]/g, match => {
    const letter = match.slice(-1)
    let number = parseInt(match.slice(0, -1))

    let boxes = ''

    const total50 = Math.floor(number / 50)

    if (total50 > 0) {
      boxes += `[${letter}]`.repeat(total50)
      number -= total50 * 50
    }

    const total10 = Math.floor(number / 10)

    if (total10 > 0) {
      boxes += `{${letter}}`.repeat(total10)
      number -= total10 * 10
    }

    if (number > 0) {
      boxes += `(${letter.repeat(number)})`
    }

    return boxes
  })
}

module.exports = { organizeGifts }
