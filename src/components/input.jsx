import { useState } from 'react';
import config from '../config';
import styles from '../assets/animations.css'

function Input(props) {
    const [letter, setLetter]   = useState('');
    const [letters, setLetters] = useState(['d', 'u', 'p', 'a']);
    const [isValid, setIsValid] = useState(true);

   const onKeypress = (e) => {
        const keyPressed = e.code;
        const letterUsed = e.key;
        const {debug} = config;

        if (keyPressed === 'Backspace') {
            debug && console.log(`Input.jsx: Remove last letter, backspace used!`); 
            setLetters( letters.slice(0, -1) )

            console.log(letters.length);
            if (letters.length == 1) { // looks like a bug...
                setIsValid(true);
            }
        } else if (['Enter', ' ', 'Tab', 'Space'].indexOf(keyPressed) > -1) {
            debug && console.log(`Input.jsx: Special key: ${keyPressed} is used in script!`); 

            // Append the word and clear inputs!
            if (keyPressed === 'Enter') {
                const isWordValid = props.appendedWord(letters);
                setIsValid(isWordValid);
                
                if (isWordValid) {
                    setLetter('');
                    setLetters([]);    
                }
                
            }
        } else if (letterUsed.length > 1) {
            debug && console.log(`Input.jsx: Special key: ${keyPressed} is not used in script!`); 
        } else {
            debug && console.log(`Input.jsx: Key appended: ${keyPressed}`); 
            
            setLetters([...letters, letterUsed]);
            setLetter('');
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
        <div className={`player__container ${!isValid ? 'error--bounce' : ''}`}>
            {
                letters.map((letter, key) => (
                    <InputField key={key} letterCount={key} value={letter} validator={props.validator}/>
                ))

            }

            <input 
                type="text"
                style={{'width':'25px'}}
                onKeyDown={onKeypress}
                value={letter}
            />
        </div>
    )
}

export default Input;