/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var dice, scores, roundscores, activeplayer;
var previousdice;
int();

//document.querySelector('#current-' + activeplayer).textContent= dice;
//document.querySelector('#current-' + activeplayer).innerHTML="<em>"+ dice + "</em>";
//var x = document.querySelector('#score-0').textContent;

document.querySelector('.btn-roll').addEventListener('click', function() {
    //create random numbe
    dice= Math.floor( Math.random() * 6 ) + 1;
     //display the results
     var diceDom=document.querySelector('.dice');
     diceDom.style.display='block';
     diceDom.src='dice-' + dice + '.png';
     //scoring

      if(previousdice===6 && dice===6){
          scores[activeplayer]=0;
          document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
          nextplayer();
          
       }else if(dice !== 1){
            roundscores += dice; 
            document.querySelector('#current-' + activeplayer).textContent=roundscores;
       }else{
          nextplayer();
       }
      
      
      if(previousdice==='12'){
        document.getElementById('score-'+activeplayer).textContent='0';
        nextplayer();

      }
      previousdice=dice;                                                                  
});                        


document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[activeplayer] += roundscores;

    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    
    
    
    if(scores[activeplayer] >='100'){
        document.querySelector('#name-'+activeplayer).textContent='winner';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active')
        
        
    
    }else{  nextplayer();
    };
    
   

})

document.querySelector('.btn-new').addEventListener('click', int);


function int(){

    scores=[0,0];
    activeplayer=0;
    roundscores=0;
   
    document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='player 1';
document.getElementById('name-1').textContent='player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
};


function nextplayer(){
     activeplayer ===0 ? activeplayer=1: activeplayer=0;
    roundscores=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none'; };