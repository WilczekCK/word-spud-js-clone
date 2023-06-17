export default function useEndOfWord(word) {
    return {
        lastLetter: word[word.length-1],
        wordCreated: word.join('')
    }
}