import './App.css'
import { useState } from 'react';
import Input from './components/input';
import useSubmitValidator from './hooks/useSubmitValidator';
import usePlayerSystem from './hooks/usePlayerSystem';

function App() {
  const turns = usePlayerSystem();
  const [words, setWords] = useState([]);

  turns.addPlayer({id: parseInt(turns.players.length), name: 'Player'});
  turns.addPlayer({id: parseInt(21), name: 'Player 2'});
  turns.addPlayer({id: parseInt(turns.players.length), name: 'Player 3'});

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
