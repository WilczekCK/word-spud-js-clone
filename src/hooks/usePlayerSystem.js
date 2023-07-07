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
        const getPlayerKey = getPlayerArrayKey(playerIdToRemove);

        players.splice(1, getPlayerKey);
        debug && console.log(`usePlayerSystem.js: Removed player from game with ID: ${playerIdToRemove}, found in array with key: ${getPlayerKey}`); 
    }

    function getPlayerArrayKey(playerId) {
        debug && console.log(`usePlayerSystem.js: Looking for array key for player with ID: ${playerId}`); 
        const getPlayerById = Object.values(players).find(player => parseInt(player.id) === parseInt(playerId));

        return players.indexOf(getPlayerById);
    }

    function addPointToPlayer(playerId) {
        const getPlayerKey = getPlayerArrayKey(playerId);
        players[playerId].points++;

        debug && console.log(`usePlayerSystem.js: Added a point for player with array key: ${getPlayerKey}`); 
    }

    return {
        players,
        addPlayer,
        removePlayer,
        addPointToPlayer
    }
}