var form = document.getElementById("airlineForm");
var submit = document.getElementById("submit");
console.log('test')
// var query = document.querySelector;



function formAlert() {
    // 
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    if (form.vegan.checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.gluten.checked) {
        diet.push(document.getElementById("gluten").value);
    }
    if (form.paleo.checked) {
        diet.push(document.getElementById("paleo").value);
    }

let formA = `First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nTravel Location: " + ${location} + "\nDiet: " + ${diet} + "\n"Awesome, now if you die, it won't be an accident.."`;

alert (formA);
}
console.dir(form)

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log('test');
    formAlert();
});

