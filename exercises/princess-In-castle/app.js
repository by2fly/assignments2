function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  
}
console.log (getRandomInt(3));  //works  0,1,2


class Player {
    constructor(args) {
        this.name = args.name
        this.totalCoins = args.totalCoins
        this.status = args.status
        this.hasStar = args.hasStar
        this.setName = args.setName
        this.gotHit = args.gotHit
        this.gotPowerup = args.gotPowerup
        this.gameActive = args.gameActive
    }
    setName (namepicked)  {
    
        this.name = namepicked
    }
}
data = {
    name: "",
    totalCoins: 0,
    status: "Powered Up" || "Big" || "Small" || "Dead",
    hasStar: false,


    namePicked
    // gotHit: ,
    // gotPowerup: ,
    gameActive: true
}

const player = new Player
// function setRandom ()
    