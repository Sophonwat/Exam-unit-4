console.log("APP");


//importing the Game class from the models directory
import Game from './models/Game.mjs';

import gamesData from './example.json';

//create instances of the Game class
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
    game.personalRating,
    game.notes
));

games.forEach(game => {
    console.log(game.getDetails());
});


// Example of using the methods to update play count and rating
games[0].incrementPLayerCount();
console.log(`Updated Play Count for ${games[0].title}: ${games[0].playCount}`);

games [1].updaterating(10);
console.log(`Updated Rating for ${games[1].title}: ${games[1].personalRating}`);