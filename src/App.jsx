import './App.css'
import { useState } from 'react';

import Input from './components/input';
import Judging from './components/judging';
import PlayerList from './components/playerList';
import __toolbar from './components/admin/adminbar';


import useSubmitValidator from './hooks/useSubmitValidator';
import usePlayerSystem from './hooks/usePlayerSystem';
import useTurnSystem  from './hooks/useTurnSystem';

function App() {
  const players = usePlayerSystem();
  const turns = useTurnSystem(players);

  const [words, setWords] = useState([]);
  const [yourPlayer, setYourPlayer] = useState(0); // id of player
  const playerArrayKey = players.getArrayKey(yourPlayer);

  const changeWord = (v) => {
    const {lastLetter, wordCreated, isCorrect} = useSubmitValidator(v, words[words.length-1]);
    if (isCorrect) {
      setWords([...words, v]);
      
      // players.list[players.getArrayKey(yourPlayer)].points++;
      turns.changeTurnStage('judging', yourPlayer, players.list);
    }
    
    return isCorrect;
  }

  return (
    <>
      <PlayerList
        players={players}
        turns={turns}
      />

      <h1>Word spud</h1>
      <p>Logged as: {players.list[players.getArrayKey(yourPlayer)].name}, points amount: {players.list[players.getArrayKey(yourPlayer)].points}</p>

      <small>Turn: {turns.turn}</small>

      <ul>
        {words.map(word => (
          <li>{word}</li>
        ))}
      </ul>

      <Input 
        appendedWord={(v) => changeWord(v)}
      />

      <Judging 
        yourPlayer={yourPlayer}
        writingPlayer={turns.typingPlayer}
        turnStage={turns.stage}
        changeApproveStatus={turns.changePlayerJudgeStatus}
      />

      { /* Admin stuff */ }
      <__toolbar 
        nextTurn={turns.setNextTurn}
        addPlayer={players.add}
        removePlayer={players.remove}
        listPlayers={players.list}

        yourPlayer={yourPlayer}
        setYourPlayer={setYourPlayer}
        playerArrayKey={playerArrayKey}
      />
    </>
  )
}

export default App;
