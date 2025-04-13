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

Step five:
1. Added a Function to Display Games (displayGames)
A function was created to dynamically generate and display each game in the games array. Each game is shown as a visual card containing details such as title, designer, artist, publisher, year, number of players, play time, difficulty, play count, and personal rating.
Each card also includes a range input for adjusting the rating and a "Play" button to increase the play count.

2. Updated the UI After Changes
The displayGames function is called whenever the games array is modified, such as after adding a new game or importing games from a JSON file. This keeps the user interface in sync with the current data.

3. Ensured Compatibility with index.html
The displayGames function relies on a <div id="gamesContainer"></div> being present in the index.html file. This container is required for rendering the game cards on the page.

4. Example Usage
A sample game (e.g., "Catan") is added dynamically using the addNewGame function. The displayGames function is then called to render the game visually in the browser.

Step six
1. Added Event Listeners for Play Button and Rating Slider
The "Play" button increases the play count, updates the UI, and saves the change to localStorage.
The rating slider updates the personal rating in real time and stores the new value in localStorage.

2. Used Dynamic IDs for Elements
Each game card element, such as the play count display and rating slider, is assigned a unique ID based on the game’s index in the games array.
This allows event listeners to correctly target and update the specific elements for each game.

3. UI Updates with displayGames
The displayGames function not only renders the game cards but also attaches all necessary event listeners for interactivity.
nsures that all game data and user actions are reflected in both the interface and localStorage.


Step seven
1. Save, Retrieve, Export, and Import Games:
Games are saved to and retrieved from localStorage.

2. Games can be exported as JSON or imported from a JSON file.
Dynamic UI Updates:
Games are displayed dynamically in the UI.

3. Play count and personal rating can be updated interactively.
Add New Games:
Users can add new games dynamically, and the UI updates accordingly.

Step eight
1. Save, Retrieve, Export, and Import Games:
Games are saved to and retrieved from localStorage.
Games can be exported as JSON or imported from a JSON file.

2. Dynamic UI Updates:
Games are displayed dynamically in the UI.
Play count and personal rating can be updated interactively.

3. Add New Games:
Users can add new games dynamically using the form in index.html.
