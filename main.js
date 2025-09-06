const timerHtml = document.querySelector('.time')
const endOfYear = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59)

const timeToYearEnd = () => {
    const interval = setInterval(() => {
        const now = new Date()

        const months = (endOfYear.getMonth() - now.getMonth())
        const days = (endOfYear.getDate() - now.getDate())
        const hours = (endOfYear.getHours() - now.getHours())
        const minutes = (endOfYear.getMinutes() - now.getMinutes())
        const seconds = (endOfYear.getSeconds() - now.getSeconds())

        timerHtml.innerHTML = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`
    }, 1000)
}

timeToYearEnd()