
// Assume const Number of Cards : 6
export const Cards = {
    0: "red",
    1: "blue",
    2: "green",
    3: "orange",
    4: "yellow",
    5: "brown"
}

export const getFiveRandomCards = () => {
    let result = []
    while (result.length !== 5) {
        const index = Math.floor(Math.random() * 6)
        if (!result.includes(index)) result.push(index)
    }

    return result
}
