import './App.css'
import { useState } from 'react';
import Input from './components/input';

function App() {
  const [word, setWord] = useState('');

  const changeWord = (v) => {
    setWord(v);
  }

  return (
    <>
      <h1>Word spud</h1>
      <Input letterChange={(v) => changeWord(v)}/>
    </>
  )
}

export default App;
