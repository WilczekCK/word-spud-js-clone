import { useState } from 'react';
import config from '../config';

function Input(props) {
    const [letter, setLetter]   = useState('');
    const [letters, setLetters] = useState(['d', 'u', 'p', 'a']);

   const onKeypress = (e) => {
        const keyPressed = e.code;
        const letterUsed = e.key;
        const {debug} = config;

        if (keyPressed === 'Backspace') {
            setLetters( letters.slice(0, -1) )
            // props.letterChange(letters);
        } else if (['Enter', ' ', 'Tab', 'Space'].indexOf(keyPressed) > -1) {
            debug && console.log(`Input.jsx: Special key: ${keyPressed} is used in script!`); 
        } else if (letterUsed.length > 1) {
            debug && console.log(`Input.jsx: Special key: ${keyPressed} is not used in script!`); 
        } else {
            debug && console.log(`Input.jsx: Key appended: ${keyPressed}`); 
            
            setLetters([...letters, letterUsed]);
            setLetter('');
            // props.letterChange(letters);
        }
    }

    const InputField = (props) => {
        {
            return (letters.length >= props.letterCount) && (
                <input 
                    type="text"
                    style={{'width':'25px'}}
                    disabled="disabled"
                    value={props.value}
                />
            )
        }
    }

    return (
        <>
            {
                letters.map((letter, key) => (
                    <InputField key={key} letterCount={key} value={letter}/>
                ))

            }

            <input 
                type="text"
                style={{'width':'25px'}}
                onKeyDown={onKeypress}
                value={letter}
            />
        </>
    )
}

export default Input;