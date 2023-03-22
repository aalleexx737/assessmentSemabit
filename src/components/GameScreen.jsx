import React from 'react'
import { Cards } from '../mechanics/Cards'
import { Players } from '../mechanics/players'

const GameScreen = ({ dice, handleClick, config, handleNextTurn, isNextTurnVisible, currentPlayer }) => {
    return (
        <div className="gameScreen">
            <div className="header">
                <h2>It's </h2> <h2 className='name'>{Players[currentPlayer]}s</h2><h2> Turn</h2>
            </div>
            <div className="others">
                {config.map((conf, index) => (
                    <>
                        {conf.playerId !== currentPlayer ?
                            <div className="other" key={index}>
                                <h4>{Players[conf.playerId]}s Open Cards: </h4>
                                <div className="openCardsOther">
                                    {conf.openCards.map((card, index) => (
                                        <div className={Cards[card]} key={index}>
                                        </div>
                                    ))}
                                </div>
                            </div> : <div key={index} className='hidden'></div>}
                    </>
                ))}
            </div>
            <div className="ownCards">
                <h2>These are your Open Cards</h2>
                <div className="cards">
                    {config[currentPlayer].openCards.map((card, index) => (
                        <div className={Cards[card]} key={index}>
                        </div>
                    ))}
                </div>
                <h2>These are your Hidden Cards</h2>
                <div className="cards">
                    {config[currentPlayer].hiddenCards.map((card, index) => (
                        <div className={Cards[card]} key={index}>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={isNextTurnVisible ? handleNextTurn : handleClick}>{isNextTurnVisible ? "Continue" : "Roll the dice"}</button>
            {isNextTurnVisible ? <div className='dice'>
                <p>You Rolled the Dice, it landed on: </p>
                <div className={Cards[dice]}>
                </div>
            </div> : <></>}
        </div>
    )
}

export default GameScreen