export const ConvertingDateTime = (fullDateTime) => {
  const ConvertingDate = (fullDate) => {
    const date = fullDate.substr(0, 10).split("/")
    const newDate = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    const dateNow = newDate.substr(0, 10).split("/")
    const day = dateNow[0] - date[0]
    const month = (dateNow[1] - date[1]) * 30
    const year = (dateNow[2] - date[2]) * 365
    const everyDay = day + month + year

    if (everyDay > 365) {
      const dayForYear = (everyDay / 365).toFixed()

      if (dayForYear < 2 ) {
        return dayForYear + " ano"
      }
      return dayForYear + " anos"
    }
    if (everyDay === 0) {
      return 0
    }
    if (everyDay >= 1 && everyDay <= 30) {
      if (everyDay === 1) {
        return everyDay + " dia"
      }
      return everyDay + " dias"
    }
    if (everyDay => 31 && everyDay <= 365) {
      const dayForMonth = (everyDay / 30).toFixed()
      if (dayForMonth < 2) {
        return dayForMonth + " mês"
      }
      return dayForMonth + " meses"
    }
  }
  const ConvertingTime = (fullTime) => {

    const hour = fullTime.substr(11, 5).split(":")

    const newDate = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })

    const hourNew = newDate.substr(11, 5).split(":")

    const hours = (hourNew[0] - hour[0]) * 60
    const min = hourNew[1] - hour[1]

    const everyMinute = hours + min

    if (everyMinute > 60) {
      if (everyMinute < 120) {
        return (everyMinute / 60).toFixed() + " hora"
      }
      return (everyMinute / 60).toFixed() + " horas"
    }
    if (everyMinute < 60 && everyMinute > 1) {
      return everyMinute + " min"
    }
    if (everyMinute <= 1) {
      return "Agora mesmo"
    }
  }
  
    const date = ConvertingDate(fullDateTime)
    const hour = ConvertingTime(fullDateTime)

    return date !== 0 ? date : hour
}
