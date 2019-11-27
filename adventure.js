
// Made by Bram van ballegooijen // blood and wine // Made by Bram van ballegooijen //
// VAR // blood and wine // VAR //

var getzwaard = 'nee'
var getsleutel = 'nee'
var coins = 'nee'
var aanval ='nee'


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

document.getElementById('button1').style.display =' inline-block'
document.getElementById('button2').style.display =' inline-block'
document.getElementById('button3').style.display =' inline-block'

achtergrond = document.getElementById('game-container')
achtergrond.style.backgroundImage = " url('img/zwaard.jpg') ";


document.getElementById("title").innerHTML = "Blood and Wine"
document.getElementById("description").innerHTML = "Welkom bij Blood and wine. Dit is een game waar je via belangrijke keuzes invloed op het verhaal kan hebben "

button1.onclick = play;
button2.onclick = help;
button3.onclick = Credits;

}

// introductie level // blood and wine // introductie level //

function play(){
  document.getElementById("button1").innerHTML = "je kijkt rond in kisten"
  document.getElementById("button2").innerHTML = "je gaat door de deur"
  document.getElementById("button3").innerHTML ='je doorzoekt de dungeon '
  document.getElementById("description").innerHTML = "je word wakker in de kerkers van Evemor"
  
  var achtergrond = document.getElementById('game-container')
  achtergrond.style.backgroundImage = " url('img/dungeon.jpg') ";

  document.getElementById('inventoryItem').src ='img/coin.png'
  document.getElementById('inventoryItem').style.display = "block"
  
  document.getElementById("button1").setAttribute('onclick',"kisten()")
  document.getElementById("button2").setAttribute('onclick',"deur()")
  document.getElementById("button3").setAttribute('onclick',"goblin()")

  document.getElementById('button1').style.display =' inline-block'
  document.getElementById('button2').style.display =' inline-block'
  document.getElementById('button3').style.display =' inline-block'


  

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
// goblin attack // goblin attack //

function goblin(){
  if(aanval == 'nee'){
  document.getElementById("description").innerHTML = "een goblin genaamt <b>ARCO DE GENIEPIGE</b> komt achter de boekenkasten vandaan  en steelt al je geld! HIIIHAAAA.... <br>"
  
  document.getElementById("button1").innerHTML = "ren weg van de Goblin"
  document.getElementById("button2").innerHTML = "Val de goblin aan"
  document.getElementById('button3').style.display =' none'
  document.getElementById('inventoryItem').style.display = 'none'

  

  document.getElementById("button1").setAttribute('onclick',"goblinterug()")
  document.getElementById("button2").setAttribute('onclick',"goblinAanval()")

  var achtergrond = document.getElementById('game-container')
  achtergrond.style.backgroundImage = " url('img/dungeonGoblin.jpg') ";
}
            else{
            document.getElementById("description").innerHTML = " er is verder niks meer in de kamer"
            }

}

function goblinAanval(){
if ( getzwaard == 'ja'){
    document.getElementById("description").innerHTML = "je hebt de goblin verslaan! je hebt je geld terug en een sleutel gekregen"
    document.getElementById('inventoryItem').style.display = 'block'


    document.getElementById("button1").innerHTML = "loop terug "
    document.getElementById('button2').style.display =' none'

    document.getElementById("button1").setAttribute('onclick',"play()")

    var key = document.createElement('img');
    inventory.appendChild(key);
    key.setAttribute('id','key')
    key.src = "img/sleutel.png"

    achtergrond = document.getElementById('game-container')
    achtergrond.style.backgroundImage = " url('img/dungeon.jpg') ";


    getsleutel = 'ja'
    coins = "ja"
    aanval ='ja'


}
           else{
             document.getElementById("description").innerHTML = "De goblin heeft je op een pijnlijke manier vermoord <br> <b>probeer het opnieuw!</b>"

             document.getElementById("button1").innerHTML = "ga terug "
             document.getElementById('button2').style.display =' none'

             document.getElementById("button1").setAttribute('onclick',"menu()")
     }
}
function goblinterug(){
	document.getElementById("description").innerHTML = "De goblin heeft je op een pijnlijke manier vermoord <br> <b>probeer het opnieuw!</b>"

    document.getElementById("button1").innerHTML = "ga terug "
    document.getElementById('button2').style.display =' none'

    document.getElementById("button1").setAttribute('onclick',"menu()")
 
}

// kisten // zwaard // kisten //
// kisten // zwaard // kisten //

function kisten(){
if ( getzwaard == 'nee'){
	document.getElementById("description").innerHTML = "je hebt een oud zwaard gevonden in een van de kisten"
    var zwaard = document.createElement('img');
    inventory.appendChild(zwaard);
    zwaard.setAttribute('id','zwaard')
    zwaard.src = "img/zwaard.png"
    getzwaard = 'ja'
    }
           else{
      	     document.getElementById("description").innerHTML = "er zit verder niks meer in de kisten"
      }
}
function deur(){
 if ( getsleutel == 'ja'){
 	 castle()

 }
 	        else{
	          document.getElementById("description").innerHTML = "je hebt een sleutel nodig voor deze deur"
}
}

// level 2 // blood and wine // level 2 //
// level 2 // blood and wine // level 2 //
function castle(){

    achtergrond = document.getElementById('game-container')
    achtergrond.style.backgroundImage = " url('img/castle.jpg') ";

    document.getElementById("description").innerHTML = 'Je bent nu in het kasteel wat boven de dungeon staat'

    document.getElementById("button1").innerHTML = "Ga terug"
    document.getElementById("button2").innerHTML = "Ga terug"
    document.getElementById("button3").innerHTML = "Ga terug"
  

    document.getElementById("button1").setAttribute('onclick',"keuze()")
    document.getElementById("button2").setAttribute('onclick',"keuze()")
    document.getElementById("button3").setAttribute('onclick',"keuze()")

}


























