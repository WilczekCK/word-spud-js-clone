import { useState } from 'react';
import config from '../../config';

function __turns(props) {
    return (
        <div className="admin__turns__container">
            <button onClick={props.nextPlayer}>Next player</button>
            <button onClick={props.nextTurn}>Next turn</button>
        </div>
    )
}

export default __turns;