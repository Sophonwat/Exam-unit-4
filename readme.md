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

Step four:
1. Saved Games to Local Storage
A function was created to store each game in the browser's localStorage, using the game's title as the key for easy retrieval.

2. Loaded Games from Local Storage
A function was implemented to load all saved games from localStorage into an in-memory list called games, making them available for use in the app.

3. Exported Games as JSON
A function was added to convert all saved games into JSON format, making it easy to share or store the data externally.

4. Imported Games from JSON
Functionality was added to read a JSON file and store its game data into localStorage.

5. Used a File Reader
The FileReader API was used to read uploaded JSON files and extract game data to be added to the app.

6. Added a File Input
A file input element was added to the app interface, allowing users to upload JSON files containing game data.

7. Kept a List of Games in Memory
The app was designed to maintain an in-memory list of all current games for easy access and display.

8. Removed Hardcoded Example
The default hardcoded example game (e.g., "Catan") was removed, allowing users to add any game dynamically.

9. Made Exporting Easy
A download feature was added to export all current games as a JSON file, enabling users to save them to their device.

