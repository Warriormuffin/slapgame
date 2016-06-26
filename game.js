var health = 100;

function damagePlayer(amount, attackType){
   if(health <= 0){
         document.write('<img src="http://i0.wp.com/fusion.net/wp-content/uploads/2016/03/cannotunsee14.gif?resize=960%2C541&quality=80&strip=all">')
         

    }else{
        console.log(attackType + " player for " + amount + " damage")
        health = health - amount;
        update()
    
  }
}


  

function eyePoke(){
 damagePlayer(5, 'slap')
 
}

function punch(){
  damagePlayer(10, 'punch')
}  


function kick(){
  damagePlayer(15, 'kick')
}


function walldrop(){
  damagePlayer(30, 'hadouken')
}

function update(){
  document.getElementById('health').innerText = health;
}


function playAgain(){

  if(health <= 0){
    document.getElementById('health').innerText = health = 100;
  }
}