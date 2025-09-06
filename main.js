const timerHtml = document.querySelector('.time')
const endOfYear = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0)

const timeToYearEnd = () => {
    const interval = setInterval(() => {
        const now = new Date()
        const dif = endOfYear - now

        if (dif <= 0) {
            timerHtml.innerHTML("С новым годом!")
        } else {
            const res = calculateTimeToNewYear(now, endOfYear)
            timerHtml.innerHTML = `${res.months} месяцев, ${res.days} дней, ${res.hours} часов, ${res.minutes} минут, ${res.seconds} секунд`
        }
    }, 1000)
}

const calculateTimeToNewYear = (now, target) => {
    let years = target.getFullYear() - now.getFullYear();
    let months = target.getMonth() - now.getMonth();
    let days = target.getDate() - now.getDate();

    if (days < 0) {
        months--;
        const daysInPrevMonth = new Date(target.getFullYear(), target.getMonth(), 0).getDate();
        days += daysInPrevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfTargetDay = new Date(target.getFullYear(), target.getMonth(), target.getDate());
    const timeDiff = target - now;

    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { months: months + years * 12, days, hours, minutes, seconds };
};

timeToYearEnd()