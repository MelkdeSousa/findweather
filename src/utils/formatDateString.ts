const formatDateString = (date: string) => {
  const dateString = new Date(date.substring(0, 10))

  const weekdayFormatted = Intl.DateTimeFormat('pt-BR', {
    weekday: 'short',
  }).format(dateString)

  const monthFormatted = Intl.DateTimeFormat('pt-BR', {
    month: 'short',
  }).format(dateString)

  const dayFormatted = Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
  }).format(dateString)

  const upperCasedWeekday = weekdayFormatted.replace(/^\w/, (l) =>
    l.toUpperCase(),
  )

  const upperCasedMonth = monthFormatted.replace(/^\w/, (l) => l.toUpperCase())

  return {
    weekday: upperCasedWeekday,
    month: upperCasedMonth,
    day: dayFormatted,
  }
}

export default formatDateString
