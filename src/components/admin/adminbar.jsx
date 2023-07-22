import { useState } from 'react';
import config from '../../config';

import __players from './players'
import __turns from './turns'

function __adminbar(props) {
    const [menu, changeMenu] = useState('players');

    const menuSwitcher = ({target}) => {
        changeMenu(target.dataset.switchto);
    }

    return (
        <div className="adminbar__container" style={{position:'fixed', bottom:0, width:'100%', left:'0'}}>
            <div style={{display: menu === 'turns' ? 'flex' : 'none'}}>
                <__turns
                    nextTurn={props.nextTurn} 
                    nextPlayer={props.nextPlayer} 
                />
            </div>

            <div style={{display: menu === 'players' ? 'flex' : 'none'}}>
                <__players   
                    addPlayer={props.addPlayer} 
                    removePlayer={props.removePlayer} 
                    listPlayers={props.listPlayers}
                />
            </div>


            <div style={{display: 'flex'}}>
                <button onClick={menuSwitcher} data-switchTo="players"> Players </button>
                <button onClick={menuSwitcher} data-switchTo="turns"> Turns </button>
            </div>
        </div>
    )
}

export default __adminbar;