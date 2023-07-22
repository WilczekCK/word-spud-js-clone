import config from '../config';
import { useState } from 'react';

export default function useTurnSystem() {
    const {debug} = config;
    let [turn, setTurn] = useState(0);

    const setNextTurn = () => {
        setTurn(++turn);

        debug && console.log(`useTurnSystem.jsx: This turn is done, next turn number is ${turn}`);
    }

    return {
        turn,
        setNextTurn
    }
}
