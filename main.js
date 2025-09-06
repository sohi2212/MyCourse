const validatorAge = (bd) => {
    const now = new Date()
    const isValid = new Date(now)
    isValid.setFullYear(now.getFullYear() - 14)
    if (Number(new Date(bd)) <= Number(isValid)) {
        return true
    } else {
        return false
    }
}

console.log(validatorAge('2023-01-02'))