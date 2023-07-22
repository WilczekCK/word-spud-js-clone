import './App.css'
import { useState } from 'react';

import Input from './components/input';
import __toolbar from './components/admin/adminbar';


import useSubmitValidator from './hooks/useSubmitValidator';
import usePlayerSystem from './hooks/usePlayerSystem';
import useTurnSystem  from './hooks/useTurnSystem';

function App() {
  const players = usePlayerSystem();
  const turns = useTurnSystem();

  const [words, setWords] = useState([]);
  const [yourPlayer, setYourPlayer] = useState(0); // id of player

  const setNextPlayer = () => {
    const playerArrayKey = players.getArrayKey(yourPlayer);

    if (playerArrayKey === players.list.length - 1) {
      setYourPlayer(players.list[0].id);
      turns.setNextTurn();
    } else {
      setYourPlayer(players.list[playerArrayKey + 1].id);
    }
  }

  const addNewPlayer = () => {
    players.add({name: `Player ${players.list.length}`});
  }

  // players.addPointTo(0);
  // players.addPointTo(0);
  // players.addPointTo(2);
  // players.addPointTo(2);
  // players.removePointFrom(0);

  // console.log(players.list);

  const changeWord = (v) => {
    const {lastLetter, wordCreated, isCorrect} = useSubmitValidator(v, words[words.length-1]);
    if (isCorrect) {
      setWords([...words, v]);
      
      players.list[players.getArrayKey(yourPlayer)].points++;
    }
    
    return isCorrect;
  }

  console.log(players.list);

  return (
    <>
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


      { /* Admin stuff */ }
      <__toolbar 
        nextTurn={turns.setNextTurn}
        nextPlayer={setNextPlayer} 
        addPlayer={addNewPlayer}
        removePlayer={players.remove}
        listPlayers={players.list}
      />
    </>
  )
}

export default App;
