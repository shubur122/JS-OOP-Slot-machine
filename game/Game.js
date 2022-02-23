class Game {
    constructor(startMoney){
        this.stats = new Statistics();
        this.wallet = new Wallet(startMoney);
        this.spanWallet = document.querySelector(".panel span.wallet")
        this.boards = document.querySelectorAll("div.color");
        this.inputBid = document.getElementById("bid");
        this.spanResult = document.querySelector(".play span.result");
        this.spanGames = document.querySelector(".score span.number");
        this.spanWins = document.querySelector(".score span.wins");
        this.spanLosses = document.querySelector(".score span.losses");
        document.getElementById("start").addEventListener("click", this.startGame.bind(this));
        this.render();
    }
    render(colors = ["black", "black", "black"], money = this.wallet.getBalance(), result = "", stats = [0, 0, 0], bid = 0, winning = 0){
        this.spanWallet.textContent = money;
        if(result>=1) {
            this.spanResult.style.color = "green";
            result = `Won ${winning}`
        } else if (result === 0) {
            this.spanResult.style.color = "red";
            result = `Lost ${bid}`
        } 
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.boards.forEach((board, index)=>{
            board.style.backgroundColor = colors[index];
        })
    }
    startGame(){
        if(this.inputBid.value < 2) return alert('Minimal stake is 2.')
        const bid = 1*this.inputBid.value;
        if(!this.wallet.checkCanPlay(bid)) return alert("Your balance is too low.")
        this.wallet.changeBalance(bid, "-");
        this.draw = new Draw();
        const colors = this.draw.getResult();
        const win = Result.checkWinner(colors);
        const winning = Result.moneyWon(win, bid);
        this.wallet.changeBalance(winning);
        this.stats.addGameToStats(win, bid);
        this.render(colors, this.wallet.getBalance(), win, this.stats.showStats(), bid, winning);
    }
}

