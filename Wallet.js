class Wallet {
    constructor(money){
        let _money = money;

        this.getBalance = () => _money;

        this.checkCanPlay = (value) => _money>=value;

        this.changeBalance = (value, type="+") => {
            if((typeof value) === "number" && !isNaN(value) && isFinite(value)){
                if(type === "+"){
                    return _money += value;
                } else if (type === "-"){
                    return _money -= value;
                } else {
                    throw new Error("Invalid operation type")
                }
            } else {
                throw new Error(`${typeof value} instead of number.`)
            }
        }
    }
}
