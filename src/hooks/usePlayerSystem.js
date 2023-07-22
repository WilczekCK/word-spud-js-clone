import config from '../config';


export default function usePlayerSystem() {
    const {debug} = config;
    const players = [];

    function addPlayer(playerInfo) {
        debug && console.log(`usePlayerSystem.js: New player joined!`); 

        if (!playerInfo.id) {
            playerInfo.id = parseInt(players.length);
        } else {
            if (isNaN(parseInt(playerInfo.id))) {
                debug && console.log(`usePlayerSystem.js: New player was trying to set non-int value as ID, setting new ID: ${parseInt(players.length)}`); 
                playerInfo.id = parseInt(players.length);
            }

            playerInfo.id = parseInt(playerInfo.id); 
        }

        if (isPlayerIdInUse(playerInfo.id)) {
            debug && console.log(`usePlayerSystem.js: This player ID (${playerInfo.id}) is used, set the new one!`); 
            playerInfo.id = parseInt(players.length);
        }

        debug && console.log(`usePlayerSystem.js: New player ID set as: ${playerInfo.id}`); 

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

    function removePointToPlayer(playerId) {
        const getPlayerKey = getPlayerArrayKey(playerId);
        players[playerId].points--;

        debug && console.log(`usePlayerSystem.js: Removed a point for player with array key: ${getPlayerKey}`); 
    }

    function isPlayerIdInUse(newId){
        return players.map(({id}) => id === newId );
    }

    return {
        list: players,
        add: addPlayer,
        remove: removePlayer,
        addPointTo: addPointToPlayer,
        removePointFrom: removePointToPlayer,
    }
}