import './App.css'
import { useState } from 'react';
import Input from './components/input';
import useSubmitValidator from './hooks/useSubmitValidator';

function App() {
  const [words, setWords] = useState([]);

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
