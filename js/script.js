// Create variable for the buttons
var inc= document.getElementById("increase");
var dec= document.getElementById("decrease");
// Assign variable to count id for the element to be displayed
var number = document.getElementById("count");
// State the variable holding the coutn ID to hold the number 0
number=0;
// Create event listener for button click to execute increaseCount function 
inc.addEventListener("click", increaseCount);
// Create event listener for decrease counter button click
dec.addEventListener("click",decreaseCount);
/* Function to increase number variable holding 0 when it activates 
   and to have the element ID to write the number and display*/
function increaseCount(){
        number++
        document.getElementById("count").innerHTML=number;
// if statement , less than 0 style is red and else it is teal
        if (number < 0){
        document.getElementById("count").style.color="red"; 
        }else {
         document.getElementById("count").style.color="teal";
};
    };
/* Function to decrease number variable holding 0 when it activates 
   and to have the element ID to write the number and display*/
function decreaseCount(){
    number--
    document.getElementById("count").innerHTML=number;
// if statement , less than 0 style is red and else it is teal  
    if (number < 0){
    document.getElementById("count").style.color="red"; 
    }else {
    document.getElementById("count").style.color="teal";
    };
};