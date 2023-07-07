import config from '../config';


export default function usePlayerSystem() {
    const {debug} = config;
    const players = [];

    function addPlayer(playerInfo) {
        debug && console.log(`usePlayerSystem.js: Adding player to game with ID: ${playerInfo.id}`); 
        players.push({...playerInfo, points:0, isPlayerTurn: false});
    }

    function removePlayer(playerIdToRemove) {
        debug && console.log(`usePlayerSystem.js: Removing player from game with ID: ${playerIdToRemove}`); 
        const getPlayerById = Object.values(players).find(player => parseInt(player.id) === parseInt(playerIdToRemove));
        const getPlayerKey = players.indexOf(getPlayerById);

        players.splice(1, getPlayerKey);
        debug && console.log(`usePlayerSystem.js: Removed player from game with ID: ${playerIdToRemove}, found in array with key: ${getPlayerKey}`); 
    }

    return {
        players,
        addPlayer,
        removePlayer
    }
}