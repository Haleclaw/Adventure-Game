
// Made by Bram van ballegooijen // blood and wine // Made by Bram van ballegooijen //
// inventory // blood and wine // inventory //


var inventory = document.createElement('div');
document.body.appendChild(inventory);
inventory.appendChild(document.getElementById("inventoryItem"))
inventory.setAttribute('id','inventory')


// Main menu // blood and wine // Main menu //
menu()


function menu(){
document.getElementById("button1").innerHTML = "Play"
document.getElementById("button2").innerHTML = "Help"
document.getElementById("button3").innerHTML = "Credits"


document.getElementById("title").innerHTML = "Blood and Wine"
document.getElementById("description").innerHTML = "Welkom bij Blood and wine. Dit is een game waar je via belangrijke keuzes invloed op het verhaal kan hebben "

button1.onclick = play;
button2.onclick = help;
button3.onclick = Credits;
}

// introductie level // blood and wine // introductie level //

function play(){
  document.getElementById("button1").innerHTML = "je pakt de trap"
  document.getElementById("button2").innerHTML = "je gaat door de deur"
  document.getElementById("button3").innerHTML ='je doorzoekt de dungeon'
  document.getElementById("description").innerHTML = "je word wakker in de kerkers van Evemor"
  
  var achtergrond = document.getElementById('game-container')
  achtergrond.style.backgroundImage = " url('img/dungeon.jpg') ";

  document.getElementById('inventoryItem').src ='img/coin.png'
  document.getElementById('inventoryItem').style.display = "block"
  
  document.getElementById("button1").setAttribute('onclick',"keuze()")
  document.getElementById("button2").setAttribute('onclick',"keuze()")
  document.getElementById("button3").setAttribute('onclick',"goblin()")
  

}

// help pagina // blood and wine // help pagina //

function help(){
  document.getElementById("button1").innerHTML = "Ga terug"
  document.getElementById("button2").innerHTML = "Ga terug"
  document.getElementById("button3").innerHTML = "Ga terug"
  document.getElementById("description").innerHTML = 'Bij blood and wine heb je invloed op het verhaal doordat je keuzes maakt <br> je maakt keuzes door op buttons te klikken'

  document.getElementById("button1").setAttribute('onclick',"menu()")
  document.getElementById("button2").setAttribute('onclick',"menu()")
  document.getElementById("button3").setAttribute('onclick',"menu()")
}

// credits // blood and wine // credits //
function Credits(){
  document.getElementById("button1").innerHTML = "Ga terug"
  document.getElementById("button2").innerHTML = "Ga terug"
  document.getElementById("button3").innerHTML = "Ga terug"

  document.getElementById("description").innerHTML = 'Deze game is gemaakt door: <br> Bram van ballegooijen '

  document.getElementById("button1").setAttribute('onclick',"menu()")
  document.getElementById("button2").setAttribute('onclick',"menu()")
  document.getElementById("button3").setAttribute('onclick',"menu()")

}

// level 1 // Keuze goblin // level 1 //
// level 1 // keuze goblin // level 1 //

function goblin(){

  document.getElementById("description").innerHTML = "een goblin genaamt <b>ARCO DE GENIEPIGE</b> komt uit het niets en steelt al je geld! HIIIHAAAA...."
  
  document.getElementById("button1").innerHTML = "ren weg van de Goblin"
  document.getElementById("button2").innerHTML = "Val de goblin aan"
  document.getElementById('button3').style.display =' none'
  document.getElementById('inventoryItem').style.display = 'none'

  

  document.getElementById("button1").setAttribute('onclick',"keuze()")
  document.getElementById("button2").setAttribute('onclick',"keuze()")
  document.getElementById("button3").setAttribute('onclick',"keuze()")

  var achtergrond = document.getElementById('game-container')
  achtergrond.style.backgroundImage = " url('img/dungeonGoblin.png') ";

}