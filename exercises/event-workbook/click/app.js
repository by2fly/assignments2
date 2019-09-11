// make the box disapear when the user clicks it
var clickOnce = document.getElementById("button");   

clickOnce.addEventListener("click", function(e){
    e.target.style.visibility = "hidden";
    
});
