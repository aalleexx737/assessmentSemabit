import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from "@fortawesome/free-solid-svg-icons"
import { orderPlayersByCards } from '../mechanics/configuration'
import { Players } from '../mechanics/players'

const Result = ({ rounds, config }) => {
    return (
        <div className="result">
            <div className="header">
                <h2><FontAwesomeIcon icon={faCrown} /> Nach {Math.floor(rounds / 4)} Spielrunden</h2>
            </div>
            <div className="list">
                {orderPlayersByCards(config).map((playerConf, index) => (
                    <div className="listItem" key={index}>
                        <p>{index + 1}. {Players[playerConf.playerId]}</p>
                        {index !== 0 ? <p>{playerConf.hiddenCards.length}</p> : <p></p>}
                    </div>
                ))}
                {/* <div className="listItem">
                    <p>1. Carol</p>
                </div>
                <div className="listItem">
                    <p>2. Alice</p>
                    <p>2</p>
                </div>
                <div className="listItem">
                    <p>3. Bob</p>
                    <p>3</p>
                </div>
                <div className="listItem">
                    <p>4. Mario</p>
                    <p>3</p>
                </div> */}
            </div>
        </div>
    )
}

export default Result