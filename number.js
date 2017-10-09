// when do you use value attribute in button tag or input

var minNum = 1;
var maxNum = 100;
var randNum;

var userNum = document.getElementById('user-input');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');

window.onload = function() {
  genRandNum();
  document.getElementById('min-max').innerText = " " + minNum + " and " + maxNum;
};

// clean this put and put it into a disable and enable function? 

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
   //checkGuess();
 } else {
    changeLastGuess(event);
    compare();
  
 }
});

// will need to use this function for Reset button and will need to put in multiplier();
function genRandNum() {
  randNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);
  console.log(randNum);
};

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
  }
}

// don't want to change the last guess if doesn't meet conditions, also NaN part isn't working
// tried to put it all in 1 if statement, but NaN part isn't working
function checkGuess() {
  if(parseInt(userNum.value) == NaN) {
    alert('ERROR: Please enter a number!');
    return true;
  } 
  else if (parseInt(userNum.value) < minNum || parseInt(userNum.value) > maxNum) {
    console.log("checkGuess function is working");
    alert('ERROR: Please enter a valid number between ' + minNum + ' and ' + maxNum);
    return true;
  } 
}

function nextLevel() {
  minNum -= 10;
  maxNum +=10;
  console.log(minNum);
  console.log(maxNum);
  genRandNum();
  document.getElementById('min-max').innerText = " " + minNum + " and " + maxNum;

}





