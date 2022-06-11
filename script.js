'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event Listener For Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input number
  if (!guess) {
    displayMessage('⛔ No Number');

    // When Player Wins
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When Guess Number does not equal secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '😟 Number Too High. ' : '😟 Number Too Low . '
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎 You Lost.');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// When the Again Button is Clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
});
