'use strict';


const number = Math.trunc(Math.random() * 20 + 1)
console.log(number);

let score = 20;

let highscore = 0;

document.querySelector('.number').value = number

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!'   
     } else if (guess === number) {
        document.querySelector('.message').textContent = '**** WINNER! ****';
     } else if(guess > number) {
        document.querySelector('.message').textContent = "Too High!";
        score--;
        document.querySelector('.score').textContent = score;
     } else if(guess < number) {
        document.querySelector('.message').textContent = "Too Low!"
        score--;
        document.querySelector('.score').textContent = score;
     };
});

document.querySelector('.again').addEventListener('click', function() {
    location.reload(true);
});





