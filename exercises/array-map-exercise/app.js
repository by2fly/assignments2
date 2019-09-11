// Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    const mappedArray =  arr.map(function(num) {
        return num * 2;
    });
    return mappedArray;
} 
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]



// Take an array of numbers and make them strings
function stringItUp(arr) {
    const strArray = arr.map(function(num) {
        return [num].toString();
    });
    return strArray; 
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]




// Capitalize each of an array of names
function capitalizeNames(arr){
    const arrCap = arr.map(function(name) {
       return (name.toUpperCase());  
    });
    return arrCap;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 



// Make an array of strings of the names
function namesOnly(arr){
    const nameList = arr.map(function(person) {
        return (person.name);

    });
    return nameList;
    }
    console.log(namesOnly([
        {
        name: "Angelina Jolie", age: 80
        },
        {
        name: "Eric Jones", age: 2
        },
        {
        name: "Paris Hilton", age: 5
        },
        {
        name: "Kayne West", age: 16
        },
        {
        name: "Bob Ziroll", age: 100
        }
        ]));
        // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Z



            
// Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    const nameMovie = arr.map(function(person) {
        let movie =  (person.age >= 18) ? " can go to the Matrix" : " is under age!!!";
        return person.name + movie;
   });
    return nameMovie;
}    
    console.log(makeStrings([
        {
        name: "Angelina Jolie", age: 80
        },
        {
        name: "Eric Jones", age: 2
        },
        {
        name: "Paris Hilton", age: 5
        },
        {
        name: "Kayne West", age: 16
        },
        {
        name: "Bob Ziroll", age: 100
        }
        ]));
        // ["Angelina Jolie can go to The Matrix",
        // "Eric Jones is under age!!",
        // "Paris Hilton is under age!!",
        // "Kayne West is under age!!",
        // "Bob Ziroll can go to The Matrix"]

        

// Make an array of the names in h1 s, and the ages in
 
function readyToPutInTheDOM(arr){
    const nameList = arr.map(function(person) {
        let domPick = (person.name.value);
        return "<h1>" + person.name + "</h1><h2>" + person.age + ",/h2>";
    });
    return nameList;
    }   
    console.log(readyToPutInTheDOM([
    {
    name: "Angelina Jolie", age: 80
    },
    {
    name: "Eric Jones", age: 2
    },
    {
    name: "Paris Hilton", age: 5
    },
    {
    name: "Kayne West", age: 16
    },
    {
    name: "Bob Ziroll", age: 100
    }
    ]));
    // ["<h1>Angelina Jolie</h1><h2>80</h2>",
    // "<h1>Eric Jones</h1><h2>2</h2>",
    // "<h1>Paris Hilton</h1><h2>5</h2>",
    // "<h1>Kayne West</h1><h2>16</h2>",
    // "<h1>Bob Ziroll</h1><h2>100</h2>"]



    
