// when do you use value attribute in button tag or input

var minNum = 1;
var maxNum = 100;
var randNum;

var userNum = document.getElementById('user-input');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');

var errorMsg = document.getElementById('error-msg');

window.onload = function() {
  genRandNum();
  document.getElementById('min-max').innerText = " " + minNum + " - " + maxNum;
};

userNum.addEventListener('keyup', function () {
  if(userNum.value === '') {
    guessButton.setAttribute('disabled', 'true');
    clearButton.setAttribute('disabled', 'true');
  } else {
    guessButton.removeAttribute('disabled');
    clearButton.removeAttribute('disabled');
  }
}); 

guessButton.addEventListener('click', function() {
  if(checkGuess()) {
   console.log('error present');
   errorMsg.innerText = 'ERROR: Please enter a valid number between ' + minNum + ' and ' + maxNum;
 } else {
    errorMsg.innerText = "";
    changeLastGuess(event);
    compare();
    resetButton.removeAttribute('disabled');
 }
 document.getElementById('guess-form').reset(); 
});

resetButton.addEventListener('click', function() {
  window.location.reload(true);
});

function genRandNum() {
  randNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);
  console.log(randNum);
};

function checkGuess() {
  if(isNaN(parseInt(userNum.value)) === true || parseInt(userNum.value) < minNum || parseInt(userNum.value) > maxNum) {
    console.log("checkGuess function is working");
    event.preventDefault();  
    return true;
  } 
}

function changeLastGuess(event) {
  var lastGuess = document.getElementById('user-last-guess');
  event.preventDefault();
  console.log("The changeLastGuess function is working")
  lastGuess.innerText = userNum.value;
}

function compare() {
  var msgToUser = document.getElementById('user-msg');
  if(parseInt(userNum.value) < randNum) {
    msgToUser.innerText = 'That is too low';
  } else if (parseInt(userNum.value) > randNum) {
    msgToUser.innerText = 'That is too high';
  } else {
    msgToUser.innerText = 'BOOM!';
    nextLevel();
    errorMsg.innerText = 'Your new range is from ' + minNum + ' to ' + maxNum;
  }
}

// don't want to change the last guess if doesn't meet conditions, also NaN part isn't working
// tried to put it all in 1 if statement, but NaN part isn't working


function nextLevel() {
  minNum -= 10;
  maxNum +=10;
  console.log(minNum);
  console.log(maxNum);
  genRandNum();
  document.getElementById('min-max').innerText = " " + minNum + " and " + maxNum;

}





