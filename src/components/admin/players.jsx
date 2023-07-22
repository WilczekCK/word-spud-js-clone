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

    return (
        <div className="admin__players__container">
            <button onClick={listPlayers}>Show players</button>
            <button onClick={props.addPlayer}>Add Player</button>
            
            <button onClick={removePlayer}>
                Remove player 
            </button>
            <input type="number" value={playerToRemove} style={{width:'50px'}} onChange={changePlayerToRemove}/>
        </div>
    )
}

export default __players;