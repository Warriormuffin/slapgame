var health = 100;

function damagePlayer(amount, attackType){
   if(health <= 0){
      document.getElementById("donald").innerHTML ="You beat the shit out of Donald"


    }else{
        document.getElementById("dmgdone").innerHTML = (attackType + " Donald for " + amount + " damage")
        health = health - amount;
        update()

  }
}




function eyePoke(){
 damagePlayer(5, 'Gouged')

}

function punch(){
  damagePlayer(10, 'Punched')
}


function kick(){
  damagePlayer(15, 'Kicked')
}


function walldrop(){
   document.getElementById('donald').innerHTML = ('<img src="https://joshandkylie.files.wordpress.com/2015/05/dscn1069.jpg">')

}

function update(){
  document.getElementById('health').innerText = health;
}


function playAgain(){

  if(health <= 0){
    document.getElementById('health').innerText = health = 100;
    document.getElementById('donald').innerHTML = ('<img src = "https://lh3.googleusercontent.com/7bfuP8TFK2E_8tePWaSxo9NHrjHibCgeY8gFoYCKKdJQRFI6v-_GQDk4r_GWxANlhKI=w300">')

  }
}