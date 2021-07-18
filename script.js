'use strict' /* 
document.querySelector('.message').textContent = 'Correct Answer';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 13; */;
console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '😋 No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🤑 Correct Answer';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess < secretNumber || guess > secretNumber) {
    guess < secretNumber
      ? (document.querySelector('.message').textContent = '😥 Too Low')
      : (document.querySelector('.message').textContent = '😥 Too High');
    if (score != 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else
      document.querySelector('.message').textContent = '😥 You Lost The Game';
  }
});
//console.log(typeof document.querySelector('.between'));
//restoring all the functionality with again button

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = ' ';
});
