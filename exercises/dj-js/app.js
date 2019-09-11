var Box = document.getElementById("Box");
console.dir(Box);

window.addEventListener("keydown", function(event) {
    if(event.which === 82){
        Box.style.backgroundColor = "red";
    } else if (event.which === 66){
        Box.style.backgroundColor = "blue";
    } else if (event.which === 71){
        Box.style.backgroundColor = "green";
    } else if (event.which === 89) {
        Box.style.backgroundColor = "yellow";
    } else if (event.which ===79) {
        Box.style.backgroundColor = "orange";
    }
});

Box.addEventListener("mouseover", function(event){
    Box.style.backgroundColor = 'blue';
});
Box.addEventListener("mousedown", function(event){
    Box.style.backgroundColor = 'red';
});
Box.addEventListener("mouseup", function(event){
    Box.style.backgroundColor = 'yellow';
});
Box.addEventListener("dblclick", function(event){
    Box.style.backgroundColor = 'green';
});
window.addEventListener("wheel", function(event){
    Box.style.backgroundColor = 'orange';
});