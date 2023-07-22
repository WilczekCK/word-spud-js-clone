import './App.css'
import { useState } from 'react';
import Input from './components/input';
import useSubmitValidator from './hooks/useSubmitValidator';
import usePlayerSystem from './hooks/usePlayerSystem';
import useTurnSystem from './hooks/useTurnSystem';

function App() {
  const [words, setWords] = useState([]);
  const players = usePlayerSystem();
  // const turns = useTurnSystem();

  players.add({name: 'Player'});
  players.add({id: '2', name: 'Player 2'});
  players.add({id: players.length, name: 'Player 3'});

  players.addPointTo(0);
  players.addPointTo(0);
  players.addPointTo(2);
  players.addPointTo(2);
  players.removePointFrom(0);

  players.remove(21);

  console.log(players.list);

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
