function calculateTime (deliveries) {
  function convertToSeconds (time) {
    const [hours, minutes, seconds] = time.split(':').map(Number)
    return hours * 3600 + minutes * 60 + seconds
  }

  function convertToFormat (seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const sec = seconds % 60

    const hoursStr = String(hours).padStart(2, '0')
    const minutesStr = String(minutes).padStart(2, '0')
    const secStr = String(sec).padStart(2, '0')

    return `${hoursStr}:${minutesStr}:${secStr}`
  }

  if (deliveries.length === 0) return '07:00:00'

  const totalSeconds = deliveries.reduce((acc, time) => {
    return acc + convertToSeconds(time)
  }, 0)
  let timeLeft = totalSeconds - convertToSeconds('07:00:00')
  if (timeLeft >= 0) {
    const timeLeftStr = convertToFormat(timeLeft)
    return timeLeftStr
  } else {
    timeLeft = Math.abs(timeLeft)
    const timeLeftStr = convertToFormat(timeLeft)
    return '-' + timeLeftStr
  }
}

module.exports = calculateTime
