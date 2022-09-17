'use strict';
//Selecting Elements
const player0El = document.querySelector(`.player--0`);
console.log(player0El);
const player1El = document.querySelector(`.player--1`);
console.log(player1El);
const score0El  =document.querySelector(`#score--0`);
console.log(score0El);
const score1El = document.getElementById(`score--1`);
console.log(score1El);
const dice0El =document.querySelector(`.dice`);
console.log(dice0El);
const newDice = document.querySelector(`.btn--new`);
console.log(newDice);
const rollDice = document.querySelector(`.btn--roll`);
console.log(rollDice);
const HoldDice =document.querySelector(`.btn--hold`);
console.log(HoldDice);
const current0El = document.getElementById(`current--0`);
console.log(current0El);
const current1El = document.getElementById(`current--1`);
console.log(current1El);

let score,currentScore,activePlayer,Playing
// Starting Condition
const init = function(){
    currentScore =0;
    activePlayer =0;
    score =[0,0]
    Playing = true;

    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    dice0El.style.display=`none`;
    player0El.classList.remove(`player--winner`);
    player1El.classList.remove(`player--winner`);
    player0El.classList.add(`player--active`);
    player1El.classList.remove(`player--active`);
}
init();
//We want to change the text content

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
   currentScore=0;
   activePlayer = activePlayer === 0 ? 1 :0;
   player0El.classList.toggle(`player--active`);
   player1El.classList.toggle(`player--active`);

}
//We want to hide the dice

//We want to add the user roll dice by adding the addEventListener
rollDice.addEventListener(`click`,function(){
    if (Playing){
    //Generate roll dice
   const dice =Math.trunc (Math.random() *6) +1;
   console.log(dice);
   //Display the dice roll
   dice0El.style.display='block';
   dice0El.src= `dice-${dice}.png`
   if (dice !== 1){
    // Add dice to current Score
    currentScore =currentScore+dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }else {
   // switch player
   switchPlayer();
   }
};
});
HoldDice.addEventListener(`click`,function(){
    if (Playing){
    //1. Add currentScore to the total score
    score[activePlayer] = score[activePlayer] + currentScore
    // score [1] = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =score[activePlayer];

    //2.If the player score is greater than 100
    if (score[activePlayer] >=100){
        //Finish the game
        Playing = false;
        dice0El.style.display=`none`;
        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`)
        document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
    }else{
        switchPlayer()
    }
}
});

newDice.addEventListener('click',init);