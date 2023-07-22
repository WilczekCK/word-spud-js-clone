import './App.css'
import { useState } from 'react';
import Input from './components/input';
import useSubmitValidator from './hooks/useSubmitValidator';
import usePlayerSystem from './hooks/usePlayerSystem';

function App() {
  const turns = usePlayerSystem();
  const [words, setWords] = useState([]);

  turns.addPlayer({name: 'Player'});
  turns.addPlayer({id: '2', name: 'Player 2'});
  turns.addPlayer({id: turns.players.length, name: 'Player 3'});

  turns.addPointToPlayer(0);
  turns.addPointToPlayer(0);
  turns.addPointToPlayer(2);
  turns.removePointToPlayer(0);

  turns.removePlayer(21);

  console.log(turns.players);


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
      <ul>
        {words.map(word => (
          <li>{word}</li>
        ))}
      </ul>

      <Input 
        appendedWord={(v) => changeWord(v)}
      />
    </>
  )
}

export default App;
