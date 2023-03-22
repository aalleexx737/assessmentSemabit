import { getFiveRandomCards } from "./Cards"
import { NumberOfPlayers } from "./players"

export const getInitialConfig = () => {
    let result = []
    for (let i = 0; i < NumberOfPlayers; i++) {
        result.push({
            playerId: i,
            hiddenCards: getFiveRandomCards(),
            openCards: []
        })
    }

    return result
}

export const play = (config, player, diceResult) => {
    let newConfig = config
    if (newConfig[player].hiddenCards.includes(diceResult)) {
        newConfig[player].hiddenCards.splice(newConfig[player].hiddenCards.indexOf(diceResult), 1)
        newConfig[player].openCards.push(diceResult)
    }
    return newConfig
}

export const hasWon = (config, player) => {
    if (config[player].hiddenCards.length === 0) return true
    return false
}

export const orderPlayersByCards = (config) => {
    return config.sort((a, b) => {
        return a.hiddenCards.length - b.hiddenCards.length
    })
}