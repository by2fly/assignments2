// const axios = require('axios')
// console.log(axios)

// axios.get('https://api.vschool.io/brian/todo/').then((res) => {console.log(res.data, 'there is the end')}
// )

const clear = document.querySelector(".clear");                 //class=clear in header
let dateElement = document.getElementById("date");              //date in header
const list = document.getElementById("list");                   //list = ul
const input = document.getElementById("input");                 //Add To Do
///////////////////////////////////////////////////////////////
const CHECK = "fa-check-circle";                                //Font-Awesome Check Circle
const UNCHECK = "fa-circle-thin";                               //FA Circle Thin
const LINE_THROUGH = "lineThrough";                             //FA linethrough
//////////////////////////////////////////////////////////////
let LIST, id;                                                   //LIST && id variables
LIST = [{} , {}, ];                                             //LIST is array
id = 0;
///////////////////////////////////////////////////////////////////////////
let options = { weekday:'long', month: 'short',day: 'numeric'};             //Date setup
const today = new Date();
console.log(today);
dateElement.textContent = today.toLocaleDateString("en-us", options);
////////////////////////////////////////////////////////////////////////////
function addToDo(toDo, id, done, trash) {                                   //Add A TO-DO
    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;                                    //If Done = CHECK
    const LINE = done ? LINE_THROUGH : "";                                  //If Done = LineThrough
    
    const item = `<li class = "item">                                       //TO DO Item
                    <i class = "fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class = "text ${LINE}">${toDo}</p>
                    <i class = "fa fa-trash-o de" job="delete"  id="${id}"></i> 
                </li>
                `

    const position = "beforeend";                                           //Adding TODO to end of List
    list.insertAdjacentHTML(position, item);
    // addToDo("drink Coffee");
}
 /////////////////////////////////////////////////////////////////////////////////////////////////////  
 document.addEventListener("keyup",function(event){
        if(event.keyCode == 13){                                            //Enter Key
            const toDo = input.value;                                       //"toDo" = input.values
            if(toDo) {
                    addToDo(toDo, id, false, false);
                    LIST.push(
                        {
                        name : toDo,
                        id: id,
                        done: false,
                        trash: false
                    });
                    id++;
            }
            input.value = "";                                               //clears the input values
            }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////
let data = localStorage.getItem("TODO");                                    //localStorage

if(data) {
        LIST = JSON.parse(data);                                            //turns JSON into JS
        id = LIST.length;
        loadToDo(LIST);                                                     //line 72-76
}else{
        LIST = [];
        id = 0;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadToDo(LIST){
    LIST.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// addToDo("Coffee", 1, false, false)

function completeToDo(element) {
    element.classList.toggle(CHECK);  //DOMTokenList- add, remove and toggle CSS classes on an element.
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}


function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

        LIST[element.id].trash = true;
}


list.addEventListener("click", function(e) {
    const element = e.target;
    const elementJob = element.attributes.job.value;        //error

        if(elementJob == "complete") {
                completeToDo(element);                      //line 81
        } else if (elementJob == "delete") {
            removeToDo(element);                            //line 90
        }
    
        localStorage.setItem("TODO", JSON.stringify(LIST));
    
     
clear.addEventListener("click", function() {
    localStorage.clear();                                   //clears storage
    location.reload();                                      //
})
})