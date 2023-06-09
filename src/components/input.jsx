import { useState } from 'react';
import config from '../config';

function Input(props) {
    const [letters, setLetters] = useState('');

    const onKeypress = (e) => {
        const keyPressed = e.code;
        const letterUsed = e.key;
        const {debug} = config;

        if (keyPressed === 'Backspace') {
            let actualStr = letters;
            actualStr = actualStr.slice(0, -1);

            setLetters(actualStr);
            props.letterChange(actualStr);
        } else if (['Enter', ' ', 'Tab', 'Space'].indexOf(keyPressed) > -1) {
            if (debug) console.log(`Input.jsx: Special key: ${keyPressed} is used in script!`); 
        } else if (letterUsed.length > 1) {
            if (debug) console.log(`Input.jsx: Special key: ${keyPressed} is not used in script!`); 
        } else {
            if (debug) console.log(`Input.jsx: Key appended: ${keyPressed}`); 
            
            setLetters(letters + letterUsed);
            props.letterChange(letters + letterUsed);
        }
    }

    return (
        <>
            {letters}
            <input type="text" name="wordInput" onKeyDown={(e) => onKeypress(e)} value={letters} />
        </>
    )
}

export default Input;