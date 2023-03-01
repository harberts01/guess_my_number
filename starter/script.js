'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);

let score = 20;

let highscore = 0;

document.querySelector('.number').value = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input or
  if (!guess || guess < 0 || guess > 20) {
    document.querySelector('.message').textContent = 'Enter a valid Number!';

    //When player guesses the right number
  } else if (guess === number) {
    document.querySelector('.message').textContent = '**** WINNER! ****';
    document.querySelector('.number').textContent = number; //reveals number in place of the question mark.
    document.querySelector('body').style.backgroundColor = '#60b347'; //changes background color when game is won.
    document.querySelector('.number').style.width = '30rem'; //changes width of box around the secret number when game is won.
    if (score > 0 && score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
      document.querySelector('.newhighscore').textContent = 'NEW HIGH SCORE!';
    }
    console.log(highscore);
    //When guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Again! button function reloads page.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.newhighscore').textContent = '';
  console.log(highscore);
});
