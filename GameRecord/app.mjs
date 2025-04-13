console.log("APP");

// Importing the Game class from the models directory
import Game from './models/Game.mjs';

// In-memory array to store all games
let games = [];

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

// Function to dynamically add a new game
function addNewGame(title, designer, artist, publisher, year, players, time, difficulty, url, playCount, personalRating) {
    const newGame = new Game(title, designer, artist, publisher, year, players, time, difficulty, url, playCount, personalRating);
    saveGameToLocalStorage(newGame);
    games = getAllGamesFromLocalStorage(); // Update the in-memory games array
    console.log(`New game "${title}" saved to localStorage:`, newGame);
    displayGames(); // Update the UI
}

// Function to delete a game from localStorage and the UI
function deleteGame(title) {
    localStorage.removeItem(title); // Remove from localStorage
    games = getAllGamesFromLocalStorage(); // Update in-memory array
    displayGames(); // Refresh UI
}

// Function to display all games in the UI
function displayGames() {
    const gamesContainer = document.getElementById("gamesContainer"); // Ensure this container exists in index.html
    gamesContainer.innerHTML = ""; // Clear any existing content

    games.forEach((game, index) => {
        // Create a container for the game
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        // Add game details
        gameCard.innerHTML = `
            <h3>${game.title}</h3>
            <p><strong>Designer:</strong> ${game.designer}</p>
            <p><strong>Artist:</strong> ${game.artist}</p>
            <p><strong>Publisher:</strong> ${game.publisher}</p>
            <p><strong>Year:</strong> ${game.year}</p>
            <p><strong>Players:</strong> ${game.players}</p>
            <p><strong>Play Time:</strong> ${game.time}</p>
            <p><strong>Difficulty:</strong> ${game.difficulty}</p>
            <p><strong>Play Count:</strong> <span id="playCount-${index}">${game.playCount}</span></p>
            <p><strong>Personal Rating:</strong> <span id="ratingValue-${index}">${game.personalRating}</span></p>
            <input type="range" min="1" max="10" value="${game.personalRating}" class="rating-slider" id="ratingSlider-${index}" />
            <button class="play-button" id="playButton-${index}">Play</button>
            <button class="delete-button" id="deleteButton-${index}">Delete</button>
        `;

        // Append the game card to the container
        gamesContainer.appendChild(gameCard);

        // Add event listener for the "Play" button
        const playButton = document.getElementById(`playButton-${index}`);
        playButton.addEventListener("click", () => {
            game.playCount += 1; // Increment play count
            document.getElementById(`playCount-${index}`).textContent = game.playCount; // Update UI
            saveGameToLocalStorage(game); // Update localStorage
        });

        // Add event listener for the rating slider
        const ratingSlider = document.getElementById(`ratingSlider-${index}`);
        ratingSlider.addEventListener("input", (event) => {
            game.personalRating = parseInt(event.target.value, 10); // Update rating
            document.getElementById(`ratingValue-${index}`).textContent = game.personalRating; // Update UI
            saveGameToLocalStorage(game); // Update localStorage
        });

        // Add event listener for the "Delete" button
        const deleteButton = document.getElementById(`deleteButton-${index}`);
        deleteButton.addEventListener("click", () => {
            deleteGame(game.title); // Delete the game
        });
    });
}

// Function to fetch games data from example.json
async function fetchGamesData() {
    const response = await fetch('./example.json');
    if (!response.ok) {
        throw new Error(`Failed to load JSON: ${response.statusText}`);
    }
    return await response.json();
}

// Fetch and process the games data
fetchGamesData()
    .then(gamesData => {
        games = gamesData.map(game => new Game(
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

        // Save each game to localStorage
        games.forEach(game => saveGameToLocalStorage(game));

        // Display games on page load
        displayGames();
    })
    .catch(error => {
        console.error("Error fetching games data:", error);
    });

/*
// Example of using the methods to update play count and rating
games[0].incrementPLayerCount();
console.log(`Updated Play Count for ${games[0].title}: ${games[0].playCount}`);

games[1].updaterating(10);
console.log(`Updated Rating for ${games[1].title}: ${games[1].personalRating}`);
*/