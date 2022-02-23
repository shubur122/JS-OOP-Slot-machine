class Draw {
    constructor(){
        this.options = ["red", "green", "blue"]
        let _result = this.getDrawResult(3);
        this.getResult = () => _result;
    }

    getDrawResult(howMuch){
        let colors = [];
        let draws = howMuch;
        for(let i = 0; i<draws; i++){
            colors.push(this.options[Math.trunc(Math.random()*this.options.length)]);
        }
        return colors;
    }
}


