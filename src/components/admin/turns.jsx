import { useState } from 'react';
import config from '../../config';

function __turns(props) {
    console.log(props);

    return (
        <div className="admin__turns__container" style={{position:'fixed', bottom:0}}>
            <button onClick={props.nextPlayer}>Next player</button>
            <button onClick={props.nextTurn}>Next turn</button>
        </div>
    )
}

export default __turns;