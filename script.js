
var userNum = document.getElementById('user-guess').value;
var guessButton = document.querySelector('guess-num');

guessButton.addEventListener('click', changemsg);
function changemsg() {
  p.innerText = userNum;
};

var minNum = 1;
var maxNum = 100;
var randNum;



var multiplier = function() {
  if (minNum >= 0) {
    return maxNum - minNum + 2;
  } else if (minNum < 0) {
    return maxNum - minNum + 1;
  }
};

function genRandNum() {
  randNum = Math.floor(Math.random() * multiplier());
};

// button.addEventListener('click', genRandNum());

var msgToUser = document.querySelector('msgToUser');

msgToUser.innerText = 


function genMsg () {
  if (userNum === randNum) {
    msgToUser.innerText = 'BOOM!';
  } else if(userNum > randNum) {
    msgToUser.innerText = 'That is too high';
  } else if (userNum < randNum) {
    msgToUser.innerText = 'That is too low';
  }
}

function changeMaxMin() {
  if(userNum === randNum) {
    minNum -= 10;
    maxNum += 10;
  }
  alert('Guess a number between ' + minNum + ' and ' + maxNum); 
}

function checkNum() {
  if(parseInt(userNum) === NaN && userNum >= minNum && userNum <= maxNum) {
      // run the rest of the functions
  } else {
    alert('Please enter a valid number');
  }
}

