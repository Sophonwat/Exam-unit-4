export default class game {
    constructor(title, designer, artist, publisher, year, players, time, difficulty, url, playCount, personalRating, notes) {
        this.title = title;
        this.designer = designer;
        this.artist = artist;
        this.publisher = publisher;
        this.year = year;
        this.players = players;
        this.time = time;
        this.difficulty = difficulty;
        this.url = url;
        this.playCount = playCount;
        this.personalRating = personalRating;
        this.notes = notes;
    }

    //methods to increment play count, update rating, and get details
    incrementPLayerCount() {
        this.playCount += 1;
    }

    updaterating(newRating) {
        if (newRating >= 1 && newRating <= 10) {
            this.personalRating = newRating;
        } else {
            console.log("Rating must be between 1 and 10.");
        }
    }


    getDetails() {
        return `
            Title: ${this.title}
            Designer: ${this.designer}
            Artist: ${this.artist}
            Publisher: ${this.publisher}
            Year: ${this.year}
            Players: ${this.players}
            Time: ${this.time}
            Difficulty: ${this.difficulty}
            URL: ${this.url}
            Play Count: ${this.playCount}
            Personal Rating: ${this.personalRating}
        `;
    }

}