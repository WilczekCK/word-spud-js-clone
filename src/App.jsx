import './App.css'
import { useState } from 'react';
import Input from './components/input';
import useEndOfWord from './hooks/useEndOfWord';

function App() {
  const [words, setWords] = useState([]);

  const changeWord = (v) => {
    setWords([...words, v]);
    console.log( useEndOfWord(v) );
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
