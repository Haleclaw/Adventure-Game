
// Made by Bram van ballegooijen // blood and wine // Made by Bram van ballegooijen //
// VAR // blood and wine // VAR // // VAR // blood and wine // VAR // // VAR // blood and wine // VAR // 



var getzwaard = 'nee'
var getsleutel = 'nee'
var coins = 'nee'
var aanval ='nee'
var helmet ='nee'
var armor ='nee '
var audio ='nee'
var getal = 1


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
// Only use for reset //
}
function dead(){
 audio = 'ja'

 startBackground();


 if (getzwaard == 'ja','upgrade'){ 

   var removeVar = document.getElementById('zwaard')
   removeVar.parentNode.removeChild(removeVar);

   document.getElementById('inventoryItem').style.display = 'none'

 	         if (getsleutel =='ja','nee'){
 	    	      document.getElementById('key').style.display = 'none'
                }
 	    	             if(armor == 'ja'){
 	    	      	          var removeVar = document.getElementById('armor')
                               removeVar.parentNode.removeChild(removeVar);

                               var removeVar = document.getElementById('helm')
                               removeVar.parentNode.removeChild(removeVar);
 	    	      }

     
 	             
 	getzwaard = "nee"
 	coins = 'nee'
 	getsleutel ="nee"
 	aanval ='nee'
 	armor ='nee'
 	audio = 'nee'
 	getal = 1
 }




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

  startBackground();

  
}
// music stop function // // music stop function // // music stop function // // music stop function // 
// music stop function // // music stop function // // music stop function // // music stop function //

function startBackground(){
if ( getal == 1){
if( audio == 'nee'){
  window.background_music = new Audio();
  background_music.src = " music/theme.mp3";
  background_music.play();
  getal ++
  }
}
  else if( audio =='ja'){
  	background_music.pause();
  	getal = 1
  	audio = 'nee'
  	menu();
  }
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

    var background_music = new Audio();
    background_music.src = " music/orc.mp3";
    background_music.play();
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

    var background_music = new Audio();
    background_music.src = " music/sword.mp3";
    background_music.play();



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
   
  

    document.getElementById("button1").setAttribute('onclick',"onderzoekCastle()")
    document.getElementById("button2").setAttribute('onclick',"deurCastle()")

    document.getElementById('button1').style.display =' inline-block'
    document.getElementById('button2').style.display =' inline-block'
    document.getElementById('button3').style.display =' none'


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

    document.getElementById('button2').style.display =' inline-block'
    document.getElementById('button3').style.display =' inline-block'

    document.getElementById("description").innerHTML = 'Je komt strijder <b> Ray van Evemor </b> tegen'

}
function aanvalGuy(){
	console.log("level 2 // gewonnen")

     if( getzwaard == 'upgrade'){
     	document.getElementById("description").innerHTML = 'Je hebt de machtige Ray verslagen in het gevecht!'

     	achtergrond = document.getElementById('game-container')
        achtergrond.style.backgroundImage = " url('img/castle.jpg') ";

        zwaard.src = "img/axebloody.png"


        document.getElementById("button1").innerHTML = "ga naar buiten <br> <b>(De bossen van Evemor)</b>"

        document.getElementById("button1").setAttribute('onclick',"buiten()")
        
        document.getElementById('button2').style.display =' none'
        document.getElementById('button3').style.display =' none'

        var background_music = new Audio();
        background_music.src = " music/sword.mp3";
        background_music.play();


	    
} 
               else{
               	  document.getElementById("description").innerHTML = 'Je zwaard is gebroken door de machtige <b>Ray</b>'

	              zwaard.src = "img/zwaardkapot.png"

	              var background_music = new Audio();
                  background_music.src = " music/swordbroken.mp3";
                  background_music.play();
               }
           }
function terugGuy(){

	castle()
}
function overGuy(){
	console.log("level 2 // vermoord")

	document.getElementById("description").innerHTML = 'Ray heeft je een pijnlijke dood gegeven'

	document.getElementById("button1").innerHTML = "ga terug <br> <b>( naar het hoofdmenu)<b> "
    document.getElementById('button2').style.display =' none'
    document.getElementById('button3').style.display =' none'

    var background_music = new Audio();
    background_music.src = " music/sword.mp3";
    background_music.play();


    document.getElementById("button1").setAttribute('onclick',"dead()")


}
// level 3 // blood and wine // level 3 // // level 3 // blood and wine // level 3 // // level 3 // blood and wine // level 3 //
// level 3 // blood and wine // level 3 // // level 3 // blood and wine // level 3 // // level 3 // blood and wine // level 3 //

function buiten(){
	console.log("level 3 // de bossen")
    
    achtergrond = document.getElementById('game-container')
    achtergrond.style.backgroundImage = " url('img/forrest.jpg') ";

    document.getElementById("description").innerHTML = 'je bent momenteel in de bossen van <b> Evemor </br>'

    document.getElementById('button1').style.display =' inline-block'
    document.getElementById('button2').style.display =' inline-block'
    document.getElementById('button3').style.display =' none'

    document.getElementById("button1").innerHTML = "je loopt het pad af <br> <b> (een oud huis in de verte) </b>"
    document.getElementById("button2").innerHTML = "je gaat van het pad af <br> <b> (je hoort een oude man) </b>"
    
  

    document.getElementById("button1").setAttribute('onclick',"bossenPad()")
    document.getElementById("button2").setAttribute('onclick',"bossenWizzard()")

}
function bossenWizzard(){
	console.log("level 3 // de wizzard")

	document.getElementById("description").innerHTML = 'je bent een koppige tovenaar tegen gekomem genaamt <b> Bramius </b> <br> hij wilt graag jou gebroken sleutel voor armor ruilen!'

	document.getElementById("button1").innerHTML = "je ruilt de sleutel <br> <b> (Ruilen) </b>"
    document.getElementById("button2").innerHTML = "je gaat terug <br> <b> (terug naar het pad) </b>"

    document.getElementById("button1").setAttribute('onclick',"Wizzard()")
    document.getElementById("button2").setAttribute('onclick',"buiten()")

	achtergrond = document.getElementById('game-container')
    achtergrond.style.backgroundImage = " url('img/forrestwizard.jpg') ";

// wizzard // ARMOR // wizzard // ARMOR // // wizzard // ARMOR // wizzard // ARMOR // // wizzard // ARMOR // wizzard // ARMOR //
// wizzard // ARMOR // wizzard // ARMOR // // wizzard // ARMOR // wizzard // ARMOR // // wizzard // ARMOR // wizzard // ARMOR //
}
function Wizzard(){
	console.log("level 3 // de sleutel")
	if ( getsleutel == 'ja'){

    var gethelmet = document.createElement('img');
    inventory.appendChild(gethelmet);
    gethelmet.setAttribute('id','helm')
    gethelmet.src = "img/Helmet.png"

	var getarmor = document.createElement('img');
    inventory.appendChild(getarmor);
    getarmor.setAttribute('id','armor')
    getarmor.src = "img/Armor.png"

    getsleutel = 'nee'
    armor ='ja'

     document.getElementById('key').style.display =' none'
                 
     }
                 else{
                 	document.getElementById("description").innerHTML = 'je hebt geen sleutel'
                 }

    
}
// SPINNEN AANVAL // // SPINNEN AANVAL // // SPINNEN AANVAL // // SPINNEN AANVAL // // SPINNEN AANVAL //
// SPINNEN AANVAL // // SPINNEN AANVAL // // SPINNEN AANVAL // // SPINNEN AANVAL // // SPINNEN AANVAL //

function bossenPad(){
	console.log("level 3 // de spider")

	document.getElementById("description").innerHTML = 'je komt een mutant spin tegen genaamt <b> BESSIE DE GROTE </b>'

	achtergrond = document.getElementById('game-container')
    achtergrond.style.backgroundImage = " url('img/forrestspider.jpg') ";

    document.getElementById("button1").innerHTML = "val hem aan <br> <b> (aanvallen) </b>"
    document.getElementById("button2").innerHTML = "ren weg <br> <b> (de spin is sneller) </b>"

    document.getElementById("button1").setAttribute('onclick',"bossenAanval()")
    document.getElementById("button2").setAttribute('onclick',"bossenRennen()")
}

function bossenRennen(){
	console.log("level 3 // verslagen")

	document.getElementById("description").innerHTML = 'je heb verslagen door <b> BESSIE DE GROTE </b>'

	document.getElementById("button1").innerHTML = "ga terug <br> <b> (naar hoofdmenu) </b>"
	
	document.getElementById("button1").setAttribute('onclick',"dead()")

	document.getElementById('button2').style.display =' none'
}
function bossenAanval(){
	console.log("level 3 // gewonnen")
	if( armor == 'ja'){

	   document.getElementById("description").innerHTML = 'je heb <b> BESSIE DE GROTE </b> verslagen en vervolg je reis'

	   document.getElementById("button1").innerHTML = "je gaat verder op je reis <br> <b> (je volgt het pad) </b>"
	   document.getElementById('button2').style.display =' none'

	   document.getElementById("button1").setAttribute('onclick',"volcano()")
	}
               else{
               	  bossenRennen()
               }
}
// level 4 // volcano // level 4 // // level 4 // volcano // level 4 // // level 4 // volcano // level 4 //
// level 4 // volcano // level 4 // // level 4 // volcano // level 4 // // level 4 // volcano // level 4 //

function volcano(){
	console.log("level 4 // het lava rijk")

	   document.getElementById("description").innerHTML = 'je bent nu in het vervloekte landscap van Evemor'

	   achtergrond = document.getElementById('game-container')
       achtergrond.style.backgroundImage = " url('img/vulcano.jpg') ";

       document.getElementById("button1").setAttribute('onclick',"volcanoGrot()")
       document.getElementById("button2").setAttribute('onclick',"volcanoPad()")

       document.getElementById("button1").innerHTML = "je onderzoekt de plek <br> <b> (doorzoekt grotten) </b>"
       document.getElementById("button2").innerHTML = "je volgt verder het pad <br> <b> (volg het pad) </b>"

       document.getElementById('button1').style.display =' inline-block'
       document.getElementById('button2').style.display =' inline-block'
       document.getElementById('button3').style.display =' none'
}
// IMP GEVECHT // LEVEL 4 //  // IMP GEVECHT // LEVEL 4 //  // IMP GEVECHT // LEVEL 4 // // IMP GEVECHT // LEVEL 4 // 
// IMP GEVECHT // LEVEL 4 //  // IMP GEVECHT // LEVEL 4 //  // IMP GEVECHT // LEVEL 4 // // IMP GEVECHT // LEVEL 4 // 
function volcanoGrot(){
	console.log("level 3 // de imp")

	   document.getElementById("description").innerHTML = 'je komt een IMP tegen genaamt Yirendor de zwarte'

	   document.getElementById("button1").innerHTML = "val hem aan <br> <b> (je valt hem aan) </b>"
       document.getElementById("button2").innerHTML = "ren weg <br> <b> (ga terug) </b>"

       document.getElementById("button1").setAttribute('onclick',"volcanoAanval()")
       document.getElementById("button2").setAttribute('onclick',"volcano()")

	   achtergrond = document.getElementById('game-container')
       achtergrond.style.backgroundImage = " url('img/vulcanoguy.jpg') ";
}
function volcanoAanval(){
	 console.log("level 3 // de imp heeft je verslagen")

	  document.getElementById("description").innerHTML = 'De imp heeft je wapen vernietigd'

	  document.getElementById("button1").innerHTML = "geef je zelf over <br> <b> (verloren) </b>"
      document.getElementById("button2").innerHTML = "ren weg <br> <b> (ga terug) </b"

      document.getElementById("button1").setAttribute('onclick',"volcanoVerslagen()")
       document.getElementById("button2").setAttribute('onclick',"volcano()")

}
function volcanoVerslagen(){

	console.log('level 3 // de imp heeft je verslagen')

	document.getElementById("description").innerHTML = 'De imp heeft je verslagen in een gevecht'

}

























