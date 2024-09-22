function getIndexsForPalindrome (word) {
  const isPalindrome = w => [...w].reverse().join('') === w

  if (isPalindrome(word)) return []
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const newWord = [...word]
      const tempChar = newWord[i]
      newWord[i] = newWord[j]
      newWord[j] = tempChar
      if (isPalindrome(newWord.join(''))) return [i, j]
    }
  }
  return null
}

module.exports = getIndexsForPalindrome
