import './App.css'
import { useState } from 'react';
import Input from './components/input';
import useEndOfWord from './hooks/useEndOfWord';

function App() {
  const [word, setWord] = useState('');

  const changeWord = (v) => {
    setWord(v);
    console.log( useEndOfWord(v) );
  }

  return (
    <>
      <h1>Word spud</h1>
      {word}
      <Input appendedWord={(v) => changeWord(v)}/>
    </>
  )
}

export default App;
