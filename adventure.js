
// Made by Bram van ballegooijen // blood and wine // Made by Bram van ballegooijen //
// VAR // blood and wine // VAR // // VAR // blood and wine // VAR // // VAR // blood and wine // VAR // 

var getzwaard = 'nee'
var getsleutel = 'nee'
var coins = 'nee'
var aanval ='nee'


// inventory // blood and wine // inventory // // inventory // blood and wine // inventory // 
// inventory // blood and wine // inventory // // inventory // blood and wine // inventory //


var inventory = document.createElement('div');
document.body.appendChild(inventory);
inventory.appendChild(document.getElementById("inventoryItem"))
inventory.setAttribute('id','inventory')


// Main menu // blood and wine // Main menu //
// Main menu // blood and wine // Main menu //

menu()


function menu(){
console.log("main menu")

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

// RESET // DEAD FUNCTION // RESET // // RESET // DEAD FUNCTION // RESET // // RESET // DEAD FUNCTION // RESET //
// RESET // DEAD FUNCTION // RESET // // RESET // DEAD FUNCTION // RESET // // RESET // DEAD FUNCTION // RESET //
}
function dead(){
 if (getzwaard == 'ja','nee','upgrade'){ 
 	document.getElementById('zwaard').style.display = 'none'

   var removeVar = document.getElementById('zwaard')
   removeVar.parentNode.removeChild(removeVar);

 	document.getElementById('inventoryItem').style.display = 'none'
 	    if (getsleutel =='ja'){
 	    	 document.getElementById('key').style.display = 'none'
 	    }
 	             
 	getzwaard = "nee"
 	coins = 'nee'
 	getsleutel =" nee"
 	aanval ='nee'
 }

menu()

}

// introductie level // blood and wine // introductie level //
// introductie level // blood and wine // introductie level //

function play(){
  console.log("level 1 // main kamer")
  
  document.getElementById("button1").innerHTML = "je kijkt rond  <br> <b>(je ziet kisten)</br>"
  document.getElementById("button2").innerHTML = "je gaat door de deur <br> <b>(de deur heeft een slot)</b>"
  document.getElementById("button3").innerHTML ='je doorzoekt de dungeon <br> <b>(een koude rilling...)</b> '
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
// help pagina // blood and wine // help pagina //

function help(){
  console.log("Help pagina")

  document.getElementById("button1").innerHTML = "Ga terug"
  document.getElementById("button2").innerHTML = "Ga terug"
  document.getElementById("button3").innerHTML = "Ga terug"
  document.getElementById("description").innerHTML = 'Bij blood and wine heb je invloed op het verhaal doordat je keuzes maakt <br> je maakt keuzes door op buttons te klikken'

  document.getElementById("button1").setAttribute('onclick',"menu()")
  document.getElementById("button2").setAttribute('onclick',"menu()")
  document.getElementById("button3").setAttribute('onclick',"menu()")
}

// credits // blood and wine // credits //
// credits // blood and wine // credits //

function Credits(){
  console.log("Credits pagina")

  document.getElementById("button1").innerHTML = "Ga terug"
  document.getElementById("button2").innerHTML = "Ga terug"
  document.getElementById("button3").innerHTML = "Ga terug"

  document.getElementById("description").innerHTML = 'Deze game is gemaakt door: <br> Bram van ballegooijen '

  document.getElementById("button1").setAttribute('onclick',"menu()")
  document.getElementById("button2").setAttribute('onclick',"menu()")
  document.getElementById("button3").setAttribute('onclick',"menu()")

}

// level 1 // Keuze goblin // level 1 // // level 1 // Keuze goblin // level 1 // // level 1 // Keuze goblin // level 1 // 
// level 1 // keuze goblin // level 1 // // level 1 // Keuze goblin // level 1 // // level 1 // Keuze goblin // level 1 //
// goblin attack // goblin attack //

function goblin(){
  console.log("level 1 // de goblin")

  if(aanval == 'nee'){
  document.getElementById("description").innerHTML = "een goblin genaamt <b>ARCO DE GENIEPIGE</b> komt achter de boekenkasten vandaan  en steelt al je geld! HIIIHAAAA.... <br>"
  
  document.getElementById("button1").innerHTML = "ren weg van de Goblin <br> <b>(je hebt niks om naartoe te rennen)</b>"
  document.getElementById("button2").innerHTML = "Val de goblin aan <br> <b>(de goblin is zeer sterk)</b>"
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
	console.log("level 1 // verslagen")

if ( getzwaard == 'ja'){
    document.getElementById("description").innerHTML = "je hebt de goblin verslaan! <br> <b>(je hebt je geld terug en een sleutel gekregen)</b>"
    document.getElementById('inventoryItem').style.display = 'block'


    document.getElementById("button1").innerHTML = "loop terug <br> <b>(naar de hoofdkamer)</b> "
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

             document.getElementById("button1").innerHTML = "ga terug <br> <b>( naar het hoofdmenu)<b> "
             document.getElementById('button2').style.display =' none'

             document.getElementById("button1").setAttribute('onclick',"dead()")
     }
}
function goblinterug(){
    console.log("level 1 // vermoord")

	document.getElementById("description").innerHTML = "De goblin heeft je op een pijnlijke manier vermoord <br> <b>probeer het opnieuw!</b>"

    document.getElementById("button1").innerHTML = "ga terug <br> <b>( naar het hoofdmenu)<b> "
    document.getElementById('button2').style.display =' none'


    document.getElementById("button1").setAttribute('onclick',"dead()")
 
}

// kisten // zwaard // kisten // // kisten // zwaard // kisten // // kisten // zwaard // kisten // // kisten // zwaard // kisten //
// kisten // zwaard // kisten // // kisten // zwaard // kisten // // kisten // zwaard // kisten // // kisten // zwaard // kisten //

function kisten(){
	console.log("level 1 // kisten doorzoeken")

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
	console.log("level 1 // de deur")

 if ( getsleutel == 'ja'){

 	key.src = "img/sleutelkapot.png"

 	 castle()

 }
 	        else{
	          document.getElementById("description").innerHTML = "je hebt een sleutel nodig voor deze deur"
}
}

// level 2 // blood and wine // level 2 // // level 2 // blood and wine // level 2 // // level 2 // blood and wine // level 2 //
// level 2 // blood and wine // level 2 // // level 2 // blood and wine // level 2 // // level 2 // blood and wine // level 2 //
function castle(){
	console.log("level 2 // het kasteel")

    achtergrond = document.getElementById('game-container')
    achtergrond.style.backgroundImage = " url('img/castle.jpg') ";

    document.getElementById("description").innerHTML = 'Je bent nu in het kasteel wat boven de dungeon staat <br> <b> Welkom in kasteel blackwater</br>'

    document.getElementById("button1").innerHTML = "onderzoek het kasteel <br> <b>(een koude rilling)</b>"
    document.getElementById("button2").innerHTML = "je gaat naar de deur <br> <b>(een grote deur...)</b>"
    document.getElementById("button3").innerHTML = "je kijkt rond voor spullen <br> <b>(je ziet een paar kisten)</b>"
  

    document.getElementById("button1").setAttribute('onclick',"onderzoekCastle()")
    document.getElementById("button2").setAttribute('onclick',"deurCastle()")
    document.getElementById("button3").setAttribute('onclick',"kistenCastle()")

    document.getElementById('button1').style.display =' inline-block'
    document.getElementById('button2').style.display =' inline-block'
    document.getElementById('button3').style.display =' inline-block'


}
// dwerg upgrade // blood and wine // dwerg upgrade // // dwerg upgrade // blood and wine // dwerg upgrade //
// dwerg upgrade // blood and wine // dwerg upgrade // // dwerg upgrade // blood and wine // dwerg upgrade //

function onderzoekCastle(){
	console.log("level 2 // de dwerg")

	document.getElementById("description").innerHTML = 'Je komt een dwerg genaamt <b>Dennis van oakenshild</b> tegen'

	achtergrond = document.getElementById('game-container')
    achtergrond.style.backgroundImage = " url('img/castleDwarf.jpg') ";

    document.getElementById("button1").innerHTML = "je verbeterd je zwaard <br> <b>(voor coins)<b>"
    document.getElementById("button2").innerHTML = "je gaat terug <br> <b>( terug naar kasteel hall)</b>"

    document.getElementById("button1").setAttribute('onclick',"castleUpgrade()")
    document.getElementById("button2").setAttribute('onclick',"castle()")
    
    document.getElementById('button3').style.display =' none'
}
function castleUpgrade(){
	if (coins == 'ja'){
		zwaard.src = "img/axe.png"
		getzwaard = 'upgrade'
		coins = 'nee'

		document.getElementById('inventoryItem').style.display = 'none'
	}
	   else{
	   	 document.getElementById("description").innerHTML = 'Je hebt niet genoeg'
	   }
}
function kistenCastle(){
	document.getElementById("description").innerHTML = 'er zit niks in de kisten'

}

// gevecht deur // poort // gevecht deur // // gevecht deur // poort // gevecht deur // // gevecht deur // poort // gevecht deur //
// gevecht deur // poort // gevecht deur // // gevecht deur // poort // gevecht deur // // gevecht deur // poort // gevecht deur //

function deurCastle(){
	console.log("level 2 // de gladiator")

	achtergrond = document.getElementById('game-container')
    achtergrond.style.backgroundImage = " url('img/castleguy.jpg') ";

    document.getElementById("button1").innerHTML = "val hem aan <br> <b>(een skilled warrior)</b>"
    document.getElementById("button2").innerHTML = "ren weg <br> <b>(ren naar het kasteel)</b>"
    document.getElementById("button3").innerHTML = "geef jezelf over <br><b>(laat je wapens vallen)</b>"

    document.getElementById("button1").setAttribute('onclick',"aanvalGuy()")
    document.getElementById("button2").setAttribute('onclick',"terugGuy()")
    document.getElementById("button3").setAttribute('onclick',"overGuy()")

    document.getElementById("description").innerHTML = 'Je komt strijder <b> Ray van Evemor </b> tegen'

}
function aanvalGuy(){
     if( getzwaard == 'upgrade'){
     	document.getElementById("description").innerHTML = 'Je hebt de machtige Ray verslagen in het gevecht!'

     	achtergrond = document.getElementById('game-container')
        achtergrond.style.backgroundImage = " url('img/castle.jpg') ";

        zwaard.src = "img/axebloody.png"


        document.getElementById("button1").innerHTML = "ga naar buiten <br> <b>(De bossen van Evemor)</b>"

        document.getElementById("button1").setAttribute('onclick',"buiten()")
        
        document.getElementById('button2').style.display =' none'
        document.getElementById('button3').style.display =' none'


	    
} 
               else{
               	  document.getElementById("description").innerHTML = 'Je zwaard is gebroken door de machtige <b>Ray</b>'

	              zwaard.src = "img/zwaardkapot.png"
               }
           }
function terugGuy(){

	castle()
}
function overGuy(){

	document.getElementById("description").innerHTML = 'Ray heeft je een pijnlijke dood gegeven'

	document.getElementById("button1").innerHTML = "ga terug <br> <b>( naar het hoofdmenu)<b> "
    document.getElementById('button2').style.display =' none'
    document.getElementById('button3').style.display =' none'


    document.getElementById("button1").setAttribute('onclick',"dead()")


}
// level 3 // blood and wine // level 3 // // level 3 // blood and wine // level 3 // // level 3 // blood and wine // level 3 //
// level 3 // blood and wine // level 3 // // level 3 // blood and wine // level 3 // // level 3 // blood and wine // level 3 //

function buiten(){
    
    achtergrond = document.getElementById('game-container')
    achtergrond.style.backgroundImage = " url('img/forrest.jpg') ";

    document.getElementById('button1').style.display =' inline-block'
    document.getElementById('button2').style.display =' inline-block'
    document.getElementById('button3').style.display =' inline-block'

    document.getElementById("button1").innerHTML = "test"
    document.getElementById("button2").innerHTML = "test"
    document.getElementById("button3").innerHTML = "test"
  

    document.getElementById("button1").setAttribute('onclick',"test()")
    document.getElementById("button2").setAttribute('onclick',"test()")
    document.getElementById("button3").setAttribute('onclick',"test()")

}


























