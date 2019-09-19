const readline = require("readline-sync");


let isRunning = true;

const options = ["Insert Word and Definition", "Look Up Word"];

const dictionary = () => {

}


const whatToDo = () => {
    const whatAreOptions = readline.keyInSelect(options, "what do you want to do?");

    if (whatAreOptions === 0 ) {
console.log("Option One");
        addWord();
    } else if (whatAreOptions === 1) {
        console.log("Option Two");
        findWord();
    } else {
        console.log("Cancel");
        return isRunning = false;
    }
};

const addWord = () => {
    //ask a question, input as key in object
    //ask a definition, input as value
    const currentWord = readline.question("Enter new word: ");
    const currentDefinition = readline.question("Enter new definition: ");
    console.log(`${currentWord}, ${currentWord}`);

    dictionary[currentWord] = currentDefinition;
    //console.log(`${currentWord}: ${currentDefinition}`)
    console.log(dictionary);

//check and see if key.value is there


};


const findWord = () => {

    const searchWord = readline.question("what word do you want to find?);

    if (dictionary[searchWord]) {
        //if the word is there 
        console.log (dictionary[searchWord]);  //works = gives the definition
        // console.log('dictionary word')
    } else {
        //if word is not there
    }   console.log ("That word is not in the dictionary");




}




while (isRunning){
    whatToDo()
}