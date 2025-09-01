const randDice = (dice) => {
    const dices = [
        { dice: "D4", max: 4, min: 1 },
        { dice: "D6", max: 6, min: 1 },
        { dice: "D8", max: 8, min: 1 },
        { dice: "D10", max: 10, min: 1 },
        { dice: "D12", max: 12, min: 1 },
        { dice: "D16", max: 16, min: 1 },
        { dice: "D20", max: 20, min: 1 },
    ]

    const selectedDice = dices.find(d => d.dice === dice)
    if (!selectedDice) {
        return 'Выбранный dice не найден'
    }

    const rand = Math.random()
    return Math.floor(rand * (selectedDice.max - selectedDice.min + 1) + selectedDice.min)
}

const dice = prompt('Введите название dice')
console.log(randDice(dice))
