//Sort an array from smallest number to largest/////////////////////////////////////////////////////

function leastToGreatest(arr) {
    let it = 0;
    arr.sort((a, b ) => {
        //console.log (a, b);
        it++;
        return a - b;
    });
    return arr;// your code here
    }
    
console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

//Sort an array from largest number to smallest /////////////////////////////////////////////////////////
function greatestToLeast(arr) {
    let it = 0;
    arr.sort((a, b) => {
        //console.log (a.age, b.age);
        it++;
        return b - a;
    });
    return arr;
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

//Sort an array from shortest string to longest /////////////////////////////////////////////////////////
function lengthSort(arr) {
    let it = 0;
    arr.sort((a, b ) => {
        //console.log (a.length, b.length);
        it++;
        return a.length - b.length;
    });
    return arr;
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 

//Sort an array alphabetically/////////////////////////////////////////////////////////////////////////////
function alphabetical(arr) {
    arr.sort();
    return arr;
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 


//Sort the objects in the array by age//////////////////////////////////////////////////////////////////
function byAge(arr){
    let it = 0;
    arr.sort((a, b ) => {
        //console.log (a.age, b.age);
        it++;
        return a.age - b.age;
    });
    return arr;
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]

    