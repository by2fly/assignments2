let readline = require("readline-sync");

const name = readline.question("What is your Name, player ");
console.log( "Thank you " + name + "!");

let gameOver = false;
let options = ["Put hand in hole", "Find the Key", "Open the Door"];

while(!gameOver){
    const playerAnswer = readline.keyInSelect(options, " What would you like to try?: ");

    if(playerAnswer === 0) {
        console.log("You put your hand in the Hole. What were you thinking? You are now dead.");
        gameOver = true;
    } else if (playerAnswer === 1) {
        console.log("You want to find the Key. Good choice. Need a Key to unlock the Door.");
    } else if (playerAnswer === 2) {
        console.log("You want to open the Door. The Door is locked. Got any other ideas?");
    } else if (playerAnswer === -1) {
        console.log("Really??? You quit so easily. Go back to your violent video game.");
        gameOver = true;
    }    
}



const userOptions = ["Put hand in hole", "Open the door", "find the key"]


    ask.keyInSelect(userOptions, "what would you like to do?")