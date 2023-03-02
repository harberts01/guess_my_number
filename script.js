'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);

let score = 20;

let highscore = 0;

document.querySelector('.number').value = number;

const gameMessage = function(message){
  document.querySelector('.message').textContent = message;
};

const numText = function(number){
  document.querySelector('.number').textContent = number;
};

const bgColor = function(color){
  document.querySelector('body').style.backgroundColor = color;
};

const numWidth = function(width){
  document.querySelector('.number').style.width = width;
}

const newHiScore = function(x){
  document.querySelector('.newhighscore').textContent = x;
}

const liveScore = function(score){
  document.querySelector('.score').textContent = score;
}

const hiScoreNum = function (score){
  document.querySelector('.highscore').textContent =  score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  
  if (!guess || guess < 0 || guess > 20) {
    gameMessage('Enter a valid Number!') ;
  } else if (guess === number) {
    gameMessage('**** WINNER! ****');
    numText(number);                                        
    bgColor('#60b347');                                      
    numWidth('30rem') ;                                      
    if (score > highscore) {
      highscore = score;
      hiScoreNum(score);
      newHiScore('NEW HIGH SCORE!');
    }
    console.log(highscore);
  }else if (guess !== number){ 
    if(score > 1){
      guess > number ? gameMessage('Too High!') : gameMessage('Too Low!');
      score--; 
      liveScore(score);
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  liveScore(score);
  gameMessage('Start guessing...');
  numText('?');
  document.querySelector('.guess').value = '';
  numWidth('15rem');
  bgColor('#222');
  newHiScore();
  console.log(highscore);
});
