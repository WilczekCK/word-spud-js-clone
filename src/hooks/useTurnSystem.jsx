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
    let [typingPlayer, setTypingPlayer] = useState(0);
    let [turnStage, setTurnStage] = useState('guessing');
    let [judgeingStatus, setJudgeingStatus] = useState([]);

    const changeTurn = () => {
        setTurn(++turn);

        debug && console.log(`useTurnSystem.jsx: This turn is done, next turn number is ${turn}`);
    }

    const changeTurnStage = (stage, playerGuessing, players) => {
        setTurnStage(stage);
        
        if (stage === 'judging') {
            const playerFreeArray = players.map(function(player) {
                if (player.id !== playerGuessing) {
                    return {id: player.id, didJudge: false, judge: null}
                }
            }).filter(player => player !== undefined);
            
            setJudgeingStatus(playerFreeArray);
        }
    }

    const changeTypingPlayer = (playerId) => {
        setTypingPlayer(playerId);
    }

    const changePlayerJudgeStatus = ({target}) => {
        const judgePlayersArray = judgeingStatus.map(function(judgePlayer) {
            if (parseInt(target.dataset.playerid) === judgePlayer.id) {
                judgePlayer.didJudge = true;

                if (['approve', 'disapprove'].indexOf(target.dataset.judge) === -1) {
                    debug && console.log(`useTurnSystem.jsx: Violation, wrong judge, skip player ${judgePlayer.id}`);
                } else {
                    judgePlayer.judge = target.dataset.judge;
                }
            }

            return judgePlayer;
        })

        setJudgeingStatus(judgePlayersArray);
    }

    return {
        typingPlayer,
        changeTypingPlayer,

        turn,
        setNextTurn: changeTurn,
        
        stage: turnStage,
        changeTurnStage,

        judgeingStatus,
        changePlayerJudgeStatus
    }
}
