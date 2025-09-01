const randDice = (dice) => {
    const dices = [
        { dice: "D4", max: 4 },
        { dice: "D6", max: 6 },
        { dice: "D8", max: 8 },
        { dice: "D10", max: 10 },
        { dice: "D12", max: 12 },
        { dice: "D16", max: 16 },
        { dice: "D20", max: 20 },
    ]

    const selectedDice = dices.find(d => d.dice === dice)
    if (!selectedDice) {
        return 'Выбранный dice не найден'
    }

    const rand = Math.random()
    return Math.floor(rand * (selectedDice.max - 0 + 1) + 0)
}

const dice = prompt('Введите название dice')
console.log(randDice(dice))
