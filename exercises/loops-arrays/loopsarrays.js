var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

let counter = 0;
for (let i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        counter ++;
    } 
}    
console.log(counter);   // 4




var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      // age: 4,
      gender: "female"
    }
  ];     

  return peopleWhoWantToSeeMadMaxFuryRoad.forEach(function(element){
      if (element.age >=18 ) {
        console.log(element.name + " is old enough to go see Mad Max Fury Road");
      } else if
      ((element.age < 18) && (element.gender = "female")) {
        console.log(element.name + " is not old enough to see Mad Max Fury Roadf, don't let her in.");
      } else {
        console.log(element.name + " is not old enough to see Mad Max.");
  }
  });
  console.log([peopleWhoWantToSeeMadMaxFuryRoad]);

//   Mike is not old enough to see Mad Max Fury Roadf, don't let her in.
// Madeline is old enough to go see Mad Max Fury Road
// Cheryl is old enough to go see Mad Max Fury Road
// Sam is old enough to go see Mad Max Fury Road
\
// Suzy is not old enough to see Mad Max.