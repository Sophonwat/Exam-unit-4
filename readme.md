### **Step 1: Initial Setup**
1. Added basic HTML structure based on a reference from [this Gist](https://gist.github.com/crismo/453b20a75e1bd876db1006061b7dbbcf).  
2. Styled the general body and heading to improve appearance and layout.

---

### **Step 2: Game Class and Data Integration**
1. Imported `example.json` to understand the structure of the data.  
2. Created the `Game` class with properties like `title`, `designer`, and `playCount`, and methods like `incrementPlayCount()`, `updateRating()`, and `getDetails()`.  
3. Placed the class in `models/Game.mjs` and exported it as the default export for reusability.  
4. Imported the class into `app.mjs`, created instances using the JSON data, and tested features like updating ratings and incrementing play counts.

---

### **Step 3: Storage and Data Handling**
1. Created a function to save a game to `localStorage`.  
2. Added a function to retrieve all saved games from `localStorage`.  
3. Implemented a function to export all current games as JSON.  
4. Created a function to import JSON data and store the games in `localStorage`.

---

### **Step 4: File Input and Export Features**
1. Saved each game to `localStorage` using its title as the key.  
2. Loaded all saved games from `localStorage` into an in-memory list called `games`.  
3. Converted all stored games into JSON format for exporting.  
4. Added functionality to import games from a JSON file and store them in `localStorage`.  
5. Used the FileReader API to read and parse uploaded JSON files.  
6. Included a file input in the UI to enable file uploads.  
7. Maintained an in-memory list of games for display and app logic.  
8. Removed the hardcoded default example (like “Catan”) to allow dynamic game input.  
9. Added a download feature for exporting the games list as a JSON file.

---

### **Step 5: Displaying Games in the UI**
1. Created a `displayGames()` function to visually render each game as a card with details such as title, designer, year, play time, difficulty, play count, and rating.  
2. Included a rating slider and a "Play" button on each card.  
3. Ensured the UI updates automatically whenever the `games` array is modified.  
4. Required a `<div id="gamesContainer"></div>` in `index.html` to hold the game cards.  
5. Demonstrated functionality by adding a sample game (e.g., “Catan”) using `addNewGame()` and rendering it with `displayGames()`.

---

### **Step 6: Interactivity and Dynamic IDs**
1. Added event listeners for each card's "Play" button to increment play count and update `localStorage`.  
2. Added real-time event listeners on the rating slider to update personal ratings and sync changes with `localStorage`.  
3. Assigned dynamic IDs to each card element based on its index in the `games` array.  
4. Ensured `displayGames()` attaches the correct event listeners after rendering.

---

### **Step 7: Core Features Recap**
1. Implemented full support for saving, retrieving, exporting, and importing games using `localStorage` and JSON.  
2. Enabled dynamic UI updates reflecting changes to play count and personal rating.  
3. Allowed users to add new games through a form in the app.

---

### **Step 8: Feature Enhancements**
1. Enhanced game management through JSON import/export and persistent storage.  
2. Continued support for real-time UI updates and user interactions.  
3. Improved user input flexibility by allowing dynamic game additions via the interface.

---

### **Step 9: Game Deletion Feature**
1. Integrated a form in `index.html` for users to add new games.  
2. Added a "Delete" button to each game card to remove games from both the UI and `localStorage`.  
3. Ensured the UI reflects all additions and deletions dynamically.

---

### **Step 10: JSON Fetching and Error Handling**
1. Introduced `fetchGamesData()` to load and parse `example.json`.  
2. Mapped the fetched data to create `Game` instances and stored them in `localStorage`.  
3. Called `displayGames()` after loading data to show games in the UI.  
4. Included error handling to catch and log issues during data fetch or processing.

---