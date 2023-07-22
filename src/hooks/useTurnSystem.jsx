import config from '../config';
import { useState } from 'react';

/**
 *  What does it mean to be a turn?
 *  Stage 1: Typing - start typing the word, if its ok go further (name: typing)
 *  Stage 2: Everybody must accept the word, if ok go further     (name: judgeing)
 *  Stage 3: New turn!                                            (name: typing)
 */

export default function useTurnSystem() {
    const {debug} = config;
    let [turn, setTurn] = useState(0);
    let [turnStage, setTurnStage] = useState('typing');
    let [judgeingStatus, setJudgeingStatus] = useState([]);

    const changeTurn = () => {
        setTurn(++turn);

        debug && console.log(`useTurnSystem.jsx: This turn is done, next turn number is ${turn}`);
    }

    const changeTurnStage = (stage, playerGuessing, players) => {
        setTurnStage(stage);
        
        if (stage === 'judgeing') {
            const playerFreeArray = players.map(function(player) {
                if (player.id !== playerGuessing) {
                    return {id: player.id, didJudge: false}
                }
            }).filter(player => player !== undefined);
            
            setJudgeingStatus(playerFreeArray);
        }
    }



    return {
        turn,
        setNextTurn: changeTurn,
        
        turnStage,
        changeTurnStage,

        judgeingStatus
    }
}
