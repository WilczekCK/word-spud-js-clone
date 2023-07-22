import { useState } from 'react';
import config from '../config';

function Judging(props) {
    return (
        (props.turnStage === 'judging' && props.yourPlayer !== props.writingPlayer) && (
            <div className={"judge__controller"}>
                <button onClick={props.changeApproveStatus} data-playerid={props.yourPlayer}>Approve</button>
                <button>Disapprove</button>
            </div>
        )
    )
}

export default Judging;