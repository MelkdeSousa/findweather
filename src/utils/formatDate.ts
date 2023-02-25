const formatDate = () => {
  const dateFormatted = Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date())

  const upperCasedWeekday = dateFormatted.replace(/^\w/, (l) => l.toUpperCase())

  return upperCasedWeekday
}

export default formatDate
