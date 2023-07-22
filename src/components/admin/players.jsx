import { useState } from 'react';
import config from '../../config';

function __players(props) {
    const [playerToRemove, setPlayerToRemove] = useState(0);

    const changePlayerToRemove = ({target}) => {
        setPlayerToRemove(target.value);
    }

    const listPlayers = () => {
        console.log(props.listPlayers);
    }

    const removePlayer = () => {
        props.removePlayer(playerToRemove);
    }

    const addPlayer = () => {
        props.addPlayer({name: `Player ${props.listPlayers.length}`});
    }

    const setNextPlayer = () => {
        const playerArrayKey = props.playerArrayKey;
    
        if (playerArrayKey === props.listPlayers.length - 1) {
          props.setYourPlayer(props.listPlayers[0].id);
        } else {
          props.setYourPlayer(props.listPlayers[playerArrayKey + 1].id);
        }
      }

    return (
        <div className="admin__players__container">
            <button onClick={listPlayers}>Show players</button>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={setNextPlayer}>Next player</button>
            
            <button onClick={removePlayer}>
                Remove player 
            </button>
            <input type="number" value={playerToRemove} style={{width:'50px'}} onChange={changePlayerToRemove}/>
        </div>
    )
}

export default __players;