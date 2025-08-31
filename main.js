const a = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
]

const res = []
const ids = new Set()

a.map((obj => {
    if (!ids.has(obj.id)) {
        ids.add(obj.id)
        res.push(obj)
    }
}))
