//Write a function that gets the JSON and parses the JSON to create an array of objects
//https://api.vschool.io/pokemon
// //{
//     name: 'Charmander',
//     resource_uri: 'api/v1/pokemon/8/'
// },
// {(Another pokemon object)},
// {(Another pokemon object)},
// {(Another pokemon object)},
// //
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {  //things are Good

        const jsonData = xhr.responseText;    //The read-only XMLHttpRequest property Comes in JSON Format. responseText returns the text received from a server following a request being sent.
        const data = JSON.parse(jsonData);  //parse it to make readable
        const pokemon = data.objects[0].pokemon;  //create the element
        listOutPokemonToDOM(pokemon);  //handles the display 
    } else if(xhr.readyState == 4 && xhr.status !== 200){
        console.log(xhr);    //see what is wrong
    }

};
function listOutPokemonToDOM(arr){
    console.log(arr);
    for(let i = 0; i < arr.length; i++){          //loop thru the arr
        const h3 = document.createElement("h3");  //create the element
        h3.textContent = arr[i].name;             //edit the element
        document.body.appendChild(h3);            //display the element
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

