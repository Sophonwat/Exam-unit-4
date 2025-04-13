console.log("APP");

//importing the Game class from the models directory
import Game from './models/Game.mjs';

//function to save a single game to localStorage
function saveGameToLocalStorage(game) {
    localStorage.setItem(game.title, JSON.stringify(game));
}

function getAllGamesFromLocalStorage() {
    const games = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Get the key at index i
        const gameData = JSON.parse(localStorage.getItem(key)); //retrieve and parse the game data
        if (gameData && gameData.title) { // ensure it's a valid game object
            games.push(gameData);
        }
    }
    return games;
}

// Function to export all games as JSON
function exportGamesAsJSON() {
    const gamesObject = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const gameData = JSON.parse(localStorage.getItem(key));
        if (gameData && gameData.title) {
            gamesObject[key] = gameData;
        }
    }
    return JSON.stringify(gamesObject, null, 2);
}

// Function to import JSON and save all games to localStorage
function importGamesFromJSON(jsonString) {
    const gamesObject = JSON.parse(jsonString); // Parse the JSON string into an object
    for (const key in gamesObject) {
        if (gamesObject.hasOwnProperty(key)) {
            const game = gamesObject[key]; // Get each game object
            localStorage.setItem(key, JSON.stringify(game)); // Save each game to localStorage using its title as the key
        }
    }
}

// Fetch and process the games data
async function fetchGamesData() {
    const response = await fetch('./example.json');
    if (!response.ok) {
        throw new Error(`Failed to load JSON: ${response.statusText}`);
    }
    return await response.json();
}

//fetch and process the games data
fetchGamesData()
    .then(gamesData => {
        const games = gamesData.map(game => new Game(
            game.title,
            game.designer,
            game.artist,
            game.publisher,
            game.year,
            game.players,
            game.time,
            game.difficulty,
            game.url,
            game.playCount,
            game.personalRating
        ));

        // Save all games to localStorage using the saveGameToLocalStorage function
        games.forEach(game => {
            saveGameToLocalStorage(game);
        });

        // Retrieve all games from localStorage
        const retrievedGames = getAllGamesFromLocalStorage();
        console.log("Retrieved games:", retrievedGames);

        // Export all games as JSON
        const gamesJSON = exportGamesAsJSON();
        console.log("Exported Games as JSON:", gamesJSON);

        // Import the JSON back into localStorage
        importGamesFromJSON(gamesJSON);
        console.log("Games imported into localStorage.");
    })
    .catch(error => {
        console.error("Error fetching or processing games data:", error);
    });

/*
// Example of using the methods to update play count and rating
games[0].incrementPLayerCount();
console.log(`Updated Play Count for ${games[0].title}: ${games[0].playCount}`);

games [1].updaterating(10);
console.log(`Updated Rating for ${games[1].title}: ${games[1].personalRating}`);
*/