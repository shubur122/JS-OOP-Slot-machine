class Result {
    static moneyWon(result, bid){
        if(result === 1) return bid * 3
        else if(result === 2) return bid * 2
        else return 0;
    }
    static checkWinner(draw){
        if(draw[0]===draw[1] && draw[1]===draw[2]) return 1
        else if (draw[0] === draw[1] || draw[1] === draw[2]) return 2;
        else return 0;
    }
}