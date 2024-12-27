function organizeChristmasDinner (dishes) {
  const dict = {}

  for (const dish of dishes) {
    for (let i = 1; i < dish.length; i++) {
      if (dict[dish[i]]) {
        dict[dish[i]].push(dish[0])
      } else {
        dict[dish[i]] = [dish[0]]
      }
    }
  }

  return Object.entries(dict)
    .filter(([ingredient, dishes]) => dishes.length > 1)
    .map(([ingredient, dishes]) => [ingredient, ...dishes.sort()])
    .sort((a, b) => a[0].localeCompare(b[0]))
}

module.exports = organizeChristmasDinner
