function manufacture (gifts, materials) {
  return gifts.reduce((acc, gift) => {
    if (
      gift.split('')
        .every(c => materials.includes(c))
    ) acc.push(gift)

    return acc
  }, [])
}

module.exports = { manufacture }
