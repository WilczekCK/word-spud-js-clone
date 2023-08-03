import { useState } from 'react';
import config from '../config';

function PlayerList(props) {
    
    const renderPlayers = () => {
        return (
            props.players.list.map(player => (
                <div key={player.id} style={{display:'flex', flexDirection:'column'}}>
                    <h1 style={{padding:0, margin:0}}>&#x263B;</h1>
                    <b>{player.name}</b>
                    <small style={{fontSize: '10px'}}>{player.points} points</small>

                    {props.turns.typingPlayer === player.id && <small>&#x270E;</small>} 
                </div>
            ))
        )
    }


    return (
        <>
           <small>Players in game:</small>
           <div style={{display: 'flex', justifyContent:'space-around',width:'60vw', flexWrap: 'wrap'}}>
            {renderPlayers()} 
           </div>
        </>
    )
}

export default PlayerList;