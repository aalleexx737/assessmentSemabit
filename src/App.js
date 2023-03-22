import { useState } from "react";
import Home from "./components/Home";
import { hasWon } from "./mechanics/configuration";
import { play } from "./mechanics/configuration";
import { getInitialConfig } from "./mechanics/configuration";
import { rollDice } from "./mechanics/dice";
import "./style.scss"

function App() {
  const [state, setState] = useState(0)
  const [config, setConfig] = useState()
  const [rounds, setRounds] = useState(0)
  const [dice, setDice] = useState(0)
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [isNextTurnVisible, setIsNextTurnVisible] = useState(false)

  const handleStart = () => {
    setConfig(getInitialConfig());
    setState(1)
    setDice(rollDice())
  }

  const handleDice = () => {
    setConfig(play(config, currentPlayer, dice))
    setIsNextTurnVisible(true)
    setRounds(rounds + 1)
    if (hasWon(config, currentPlayer)) setState(2)
  }

  const handleNextTurn = () => {
    setIsNextTurnVisible(false)
    setCurrentPlayer((currentPlayer + 1) % 4)
    setDice(rollDice())
  }


  return (
    <div className="app">
      <Home dice={dice} rounds={rounds} state={state} config={config} handleStart={handleStart} handleDice={handleDice} handleNextTurn={handleNextTurn} isNextTurnVisible={isNextTurnVisible} currentPlayer={currentPlayer} />
    </div>
  );
}

export default App;
