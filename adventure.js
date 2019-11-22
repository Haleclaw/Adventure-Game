
// Main menu // blood and wine // Main menu

document.getElementById("button1").innerHTML = "Play"
document.getElementById("button2").innerHTML = "Help"
document.getElementById("button3").innerHTML = "Credits"

document.getElementById("title").innerHTML = "Blood and Wine"
document.getElementById("description").innerHTML = "Welkom bij Blood and wine. Dit is een game waar je via belangrijke keuzes de invloed op het verhaal kan hebben "

button1.onclick = play;
button2.onclick = help;
button3.onclick = Credits;

function play(){
  document.getElementById("button1").innerHTML = "Het werkt"
}

