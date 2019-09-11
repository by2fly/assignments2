// var new_value =  parseInt(localStorage.getItem('num')) + 1

// var i = +localStorage.getItem('Counter'); // or +localStorage.Counter;

// var keyname = 'Value' + localStorage.length;
// localstorage.setItem(keyname, value);


/////////////////////////////////////////////////////////////////////////

// let n = localStorage.getItem("clickCounter");
// const btn = document.getElementById("count-btn");
// if (n === null) {
//     n = 0;
// }
 
// n++;
 
// localStorage.setItem("clickCounter", n);

// btn.addEventListener("click", incrementClick); 

// function incrementClick(){
//     localStorage.setItem("clickCounter", n);
// }

// document.getElementById('display').innerHTML = n;
////////////////////////////////////////////////////////////////////////


// // const display = document.getElementById("counter");
// // const btn = document.getElementById("count-btn");

// // let count = 0;
// // display.textContent = count;

 







// // n++;
//     // display.textContent = count;

// // })
// // // localStorage.setItem("count");
// // // const  = localStorage.getItem("count");



// localStorage.setItem("clickcount", 0);

function clickCounter() {
    let n = localStorage.getItem("clickcount");
    if (localStorage.clickcount) {
        localStorage.clickcount = n + 1;
    }else{
        localStorage.clickcount = 1;


document.getElementById("display").innerHTML = "You have clicked 'Increment' " + localStorage.clickcount + " time(s).";
    }
}
localStorage.clear();