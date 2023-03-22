import React from 'react'
import { Players } from '../mechanics/players'

const Start = ({ handleClick }) => {
    return (
        <div className="start">
            <h1>Game</h1>
            <h2>Players: </h2>
            <div className="settings">
                {
                    Object.keys(Players).map((player, index) => (
                        <div key={index} className='player'><h4>{Players[player]}</h4></div>
                    ))
                }
            </div>
            <div>
                <h2>Explanation:</h2>
                <p>Jeder Spieler erhält fünf zufällige Karten, die er verdeckt vor sich auslegt. Jede Karte hat dabei eine andere
                    von sechs Farben. Der Würfel zeigt keine Zahlen, sondern jeweils eine der sechs Farben. Es wird reihum
                    gewürfelt. Würfelt ein Spieler eine Farbe, zu der er eine Karte besitzt, die noch verdeckt ist, dann dreht er
                    diese Karte um. Hat ein Spieler alle Karten umgedreht, hat er gewonnen</p>
            </div>
            <button onClick={handleClick}>Start game</button>
        </div>
    )
}

export default Start