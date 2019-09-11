// The "submit" event refreshes your brower by default
// use "e.preventDefault" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
let formResult = document.getElementById("submit-me")

formResult.addeventlistener("submit, function(){
    e.preventDefault();
    const firstName = document.getElementById('name')
    const age = document.getElementById("age").value;
    alert(firstName + " is "+ age + " years old.")
    






})