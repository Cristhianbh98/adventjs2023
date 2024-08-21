function decode (message) {
  const regex = /\(([^()]*)\)/g
  message = message
    .replace(regex, match =>
      match
        .slice(1, -1)
        .split('')
        .reverse()
        .join('')
    )

  return message.match(regex)
    ? decode(message)
    : message
}

module.exports = { decode }
