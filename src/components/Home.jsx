import React from 'react'
import GameScreen from './GameScreen'
import Result from './Result'
import Start from './Start'

const Home = ({ dice, rounds, state, config, handleStart, handleDice, handleNextTurn, isNextTurnVisible, currentPlayer }) => {
    return (
        <div className="home">
            {
                state === 0 ? <Start handleClick={handleStart} /> : state === 1 ? <GameScreen dice={dice} handleClick={handleDice} config={config} handleNextTurn={handleNextTurn} isNextTurnVisible={isNextTurnVisible} currentPlayer={currentPlayer} /> : <Result rounds={rounds} config={config} />
            }
        </div>
    )
}

export default Home