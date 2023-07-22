import config from '../config';
import { useState } from 'react';

/**
 *  What does it mean to be a turn?
 *  Stage 1: Typing - start typing the word, if its ok go further (name: typing)
 *  Stage 2: Everybody must accept the word, if ok go further     (name: judgeing)
 *  Stage 3: New turn!                                            (name: typing)
 */

export default function useTurnSystem(players) {
    const {debug} = config;

    let [turn, setTurn] = useState(0);
    let [typingPlayer, setTypingPlayer] = useState(0);
    let [turnStage, setTurnStage] = useState('guessing');
    let [judgeingStatus, setJudgeingStatus] = useState([]);

    const changeTurn = () => {
        setTurn(++turn);

        debug && console.log(`useTurnSystem.jsx: This turn is done, next turn number is ${turn}`);
    }

    const changeTurnStage = (stage) => {
        setTurnStage(stage);
        
        if (stage === 'judging') {
            debug && console.log(`useTurnSystem.jsx: Player wrote the word, start to judging stage!`);

            const playerFreeArray = players.list.map(function(player) {
                if (player.id !== typingPlayer) {
                    return {id: player.id, didJudge: false, judge: null}
                }
            }).filter(player => player !== undefined);
            
            setJudgeingStatus(playerFreeArray);
        }
        
        if (stage === 'guessing') {
            debug && console.log(`useTurnSystem.jsx: All guessing were done, next player is: ${players.getNextPlayer(typingPlayer).id}`);

            setTypingPlayer( players.getNextPlayer(typingPlayer).id );
        }
    }

    const changeTypingPlayer = (playerId) => {
        setTypingPlayer(playerId);
    }

    const changePlayerJudgeStatus = ({target}) => {
        const judgePlayersArray = judgeingStatus.map(function(judgePlayer) {
            if (parseInt(target.dataset.playerid) === judgePlayer.id) {
                const judge = target.dataset.judge;
                judgePlayer.didJudge = true;
                

                if (['approve', 'disapprove'].indexOf(judge) === -1) {
                    debug && console.log(`useTurnSystem.jsx: Violation, wrong judge, skip player ${judgePlayer.id}`);
                } else {
                    debug && console.log(`useTurnSystem.jsx: Player with ID ${judgePlayer.id} judged with ${judge}`);
                    judgePlayer.judge = judge;

                    if (judge === 'approve') {
                        players.addPointTo(typingPlayer);
                    } else {
                        players.removePointFrom(typingPlayer);
                    }
                }
            }

            return judgePlayer;
        })

        setJudgeingStatus(judgePlayersArray);
        if (areAllJudgesMade()) {
            setJudgeingStatus([]);
            changeTurn();
            changeTurnStage('guessing');
        }
    }

    const areAllJudgesMade = () => {
        return judgeingStatus.every((judge) => {
            return judge.didJudge === true;
        })
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
