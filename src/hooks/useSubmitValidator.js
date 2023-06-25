import config from '../config';

export default function useEndOfWord(word, previousWord) {
    const {debug} = config;

    function isPreviousLastLetterTheSame(word, previousWord) {
        let result = false;

        if (!previousWord || previousWord[previousWord.length - 1] == word[0]) {
            result = true; 
        }

        debug && console.log(`useSubmitValidator.js: Function used, checked the first and last letter with result: ${result}`); 
        return result;
    }

    return {
        lastLetter: word[word.length-1],
        wordCreated: word.join(''),
        isCorrect: isPreviousLastLetterTheSame(word, previousWord)
    }
}