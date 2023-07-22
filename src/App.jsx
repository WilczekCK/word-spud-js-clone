import './App.css'
import { useState } from 'react';

import Input from './components/input';
import __turns from './components/admin/turns';

import useSubmitValidator from './hooks/useSubmitValidator';
import usePlayerSystem from './hooks/usePlayerSystem';
import useTurnSystem  from './hooks/useTurnSystem';

function App() {
  const players = usePlayerSystem();
  const turns = useTurnSystem();

  const [words, setWords] = useState([]);
  const [yourPlayer, setYourPlayer] = useState(1); // id of player

  const setNextPlayer = () => {
    const playerArrayKey = players.getArrayKey(yourPlayer);

    if (playerArrayKey === players.list.length - 1) {
      setYourPlayer(players.list[0].id);
    } else {
      setYourPlayer(players.list[playerArrayKey + 1].id);
    }
  }


  // players.add({name: 'Player'});
  // players.add({id: '2', name: 'Player 2'});
  // players.add({id: players.length, name: 'Player 3'});

  // players.addPointTo(0);
  // players.addPointTo(0);
  // players.addPointTo(2);
  // players.addPointTo(2);
  // players.removePointFrom(0);

  // players.remove(21);

  // console.log(players.list);

  const changeWord = (v) => {
    const {lastLetter, wordCreated, isCorrect} = useSubmitValidator(v, words[words.length-1]);
    if (isCorrect) {
      setWords([...words, v]);
    }
    
    return isCorrect;
  }

  return (
    <>
      <h1>Word spud</h1>
      <p>Logged as: {players.list[players.getArrayKey(yourPlayer)].name}</p>
      <small>Turn: {turns.turn}</small>

      <ul>
        {words.map(word => (
          <li>{word}</li>
        ))}
      </ul>

      <Input 
        appendedWord={(v) => changeWord(v)}
      />

      <__turns nextTurn={turns.setNextTurn} nextPlayer={setNextPlayer}/>
    </>
  )
}

export default App;
