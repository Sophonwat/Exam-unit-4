console.log("APP");

//importing the Game class from the models directory
import Game from './models/Game.mjs';

// In-memory array to store all games
let games = [];

// Populate the in-memory games array when the application loads
games = getAllGamesFromLocalStorage();
console.log("Games loaded from localStorage:", games);

// Function to save a single game to localStorage
function saveGameToLocalStorage(game) {
    localStorage.setItem(game.title, JSON.stringify(game));
}

// Function to retrieve all games from localStorage
function getAllGamesFromLocalStorage() {
    const games = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const gameData = JSON.parse(localStorage.getItem(key));
        if (gameData && gameData.title) {
            games.push(new Game(
                gameData.title,
                gameData.designer,
                gameData.artist,
                gameData.publisher,
                gameData.year,
                gameData.players,
                gameData.time,
                gameData.difficulty,
                gameData.url,
                gameData.playCount,
                gameData.personalRating
            ));
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
    // Update the in-memory games array
    games = getAllGamesFromLocalStorage();
}

// Function to handle file input and import JSON
function handleFileImport(event) {
    const file = event.target.files[0]; // Get the selected file
    if (!file) {
        console.error("No file selected.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const fileContent = e.target.result; // Read the file content
        try {
            importGamesFromJSON(fileContent); // Import the JSON data into localStorage
            console.log("Games imported successfully:", games);
        } catch (error) {
            console.error("Error importing games:", error);
        }
    };
    reader.readAsText(file); // Read the file as text
}

// Function to dynamically add a new game
function addNewGame(title, designer, artist, publisher, year, players, time, difficulty, url, playCount, personalRating) {
    const newGame = new Game(title, designer, artist, publisher, year, players, time, difficulty, url, playCount, personalRating);
    saveGameToLocalStorage(newGame);
    games = getAllGamesFromLocalStorage(); // Update the in-memory games array
    console.log(`New game "${title}" saved to localStorage:`, newGame);
}

// Function to download exported games as a JSON file
function downloadGamesAsJSON() {
    const gamesJSON = exportGamesAsJSON();
    const blob = new Blob([gamesJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "games.json";
    a.click();
    URL.revokeObjectURL(url);
}

// Example usage of adding a new game
addNewGame("Catan", "Klaus Teuber", "Volkan Baga", "Kosmos", 1995, "3-4", "90 mins", "Medium", "https://example.com", 10, 8);

// Example usage of exporting games
downloadGamesAsJSON();

// Add event listener to the file input element
document.getElementById("importSource").addEventListener("change", handleFileImport);

/*
// Fetch and process the games data
async function fetchGamesData() {
    const response = await fetch('./example.json');
    if (!response.ok) {
        throw new Error(`Failed to load JSON: ${response.statusText}`);
    }
    return await response.json();
}

/*
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
*/

/*
// Example of using the methods to update play count and rating
games[0].incrementPLayerCount();
console.log(`Updated Play Count for ${games[0].title}: ${games[0].playCount}`);

games[1].updaterating(10);
console.log(`Updated Rating for ${games[1].title}: ${games[1].personalRating}`);
*/