Step one:
1. adding html code.
Reference used for html:
https://gist.github.com/crismo/453b20a75e1bd876db1006061b7dbbcf 
2. styling the general body and heading

Step two:
1. Import example.json to understand the data structure.

2. Created the Game class to represent the JSON data structure, including properties like title, designer, and playCount, along with methods such as incrementPlayCount, updateRating, and getDetails.

3. Placed it in a models subfolder (models/Game.mjs) and exported it as the default export for reuse.

4. Imported the class in app.mjs, used data from example.json to create Game instances, and demonstrated features like updating ratings and incrementing play counts.

Step three:
Following the tasks:
1. Create a save function that saves a game to localStorage.
2. Create a function that retrieves all games that are saved in localStorage.
3. Create a function that outputs all the games as JSON
4. Create a function that can import the mentioned JSON and save all the games to localStorage
