class Statistics{
    constructor(){
        this.gameResults = [];
    }

    addGameToStats(win, bid){
        let gameResults = {
            win,
            bid,
        }
        this.gameResults.push(gameResults);
    }

    showStats(){
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = games - wins;
        return [games, wins, losses];
    }
}
