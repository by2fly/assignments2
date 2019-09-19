// let axios = require("axios");  //this what was needed after npm init - y & npm i axios


const getBtn = document.getElementById('get-btn');  //from Button to Const  
getBtn.addEventListener('click', getTodos);   //waiting for Click, then runs getTodos. getTodos() would run it w\out clicks

function getTodos() {
axios.get("https://api.vschool.io/brian/todo")   //a pending request
    .then(response => {                         //either get data 'then' or error 'catch'
        const todos = response.data;  //axios PARSES the data  data is Object that title etc is in  ALWAYS 'response.data'
        listToDosOnTheDom(todos);     //data gets handed off to this function
       
        })
    .catch(() => console.log(error));
}




    function listToDosOnTheDom(todos) {
        for(let i = 0; i < todos,length; i++){
            const todoContainer = document.createElement("div");  //Create the Element  produces a container for each element
            const title = document.createElement("h1");
            const description = document.createElement("p");
            const img = document.createElement("img");
            title.textContent = todos[i].title;                 //Edit the Element
            description.textContent = todos[i].description;
            if(todos[i].completed){                             //testing for Completed  = line-through
            // title.style.textDecoration = 'line-through';     one method
                title.classList.add("completed");
                checkBox.checked = true;               //adding class [preferred method]  added .completed to css
                }
            img.src = todos[i].imgUrl;                          //edit images
            //img.setAttribute("src", todos[i].imgUrl);           //alternate method
            img.classList.add("img-styles");                     //adding styling to images  see CSS
            delBtn.textContent = "Delete";
            checkBox.type = "checkbox";

            delBtn.addEventListener("click", () => {
                    deleteTodo(todo._id);
                    const container = e.target.parentNode;
                    document.getElementById("todo-list").removeChild(container);
                     
            });
            
            checkBox.addEventListener("change", () => {
                const id = todo._id;                  //grabs unique ID from data 
                if(checkBox.checked){
                    title.classList.add("completed");
                    editTodo(id, {completed: true});
                } else {
                    title.classList.remove("completed");
                    editTodo(id, {completed: false}); 
                }
                }   
            })
            
            function editTodo(id, objToEdit) {
                axios.put("https://api.vschool.io/brian/todo/" + id, objToEdit).then((response)=>{
                    console.log(response.data);
                }).catch((error)=>{
                    console.log(error);
                });
            }
            

            function deleteTodo(id){
                axios.delete("https://api.vschool.io/brian/todo/" + id).then((response)=>{
                    console.log(response.data);
                }).catch((error)=>{
                    console.log(error);
                });

            }
            
            
            
            todoContainer.classList.add("todo-container")
            todoContainer.appendChild(title);                   //Append the Elements
            todoContainer.appendChild(description);
            document.getElementById("todo-list").appendChild(todoContainer); //put container in div box
            todoContainer.appendChild(img);
        }
    }

const addToDoForm = document["add-todo-form"]; // [" "] allows the hyphenated labels to be read  no document.(dot)
addToDoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const todoTitle = addToDoForm.title.value;   //add the titles value
    addToDoForm.title.value = "";   //clears the input box
    const newTodo = {
        title: todoTitle
    };

    axios.post("https://api.vschool.io/brian/todo", newTodo)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
    });

