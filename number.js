// when do you use value attribute in button tag or input

var minNum = 1;
var maxNum = 100;
var randNum;

var userNum = document.getElementById('user-input');
var userMin = document.getElementById('min-num'); 
var userMax =  document.getElementById('max-num')

var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var minMaxButton = document.getElementById('send-min-max');
var defaultButton = document.getElementById('default-button');

var guessSection = document.getElementById('guess-section');
var minMaxSection = document.getElementById('min-max-section');

var errorMsg = document.getElementById('error-msg');
var minMaxErrorMsg = document.getElementById('min-max-error');

window.onload = function() {
  guessSection.classList.add('hide');
};

userMin.addEventListener('keyup', function(){
  if(userMin.value === '') {
    disableButton(userMin, minMaxButton);
  } else {
    enableButton(userMin, minMaxButton);
  }
});

userMax.addEventListener('keyup', function(){
  if(userMax.value === '') {
    disableButton(userMax, minMaxButton);
  } else {
    enableButton(userMax, minMaxButton);
  }
});

function disableButton (inputName, buttonName) {
  buttonName['setAttribute']('disabled', 'true');
};

function enableButton (inputName, buttonName) {
  buttonName['removeAttribute']('disabled');
}

minMaxButton.addEventListener('click', function() {
  event.preventDefault();
  changeMinMax(parseInt(userMin.value), parseInt(userMax.value));
  if (checkMinMax()) {
    console.log('error present');
    return;
  } else {
    genRandNum();
    writeMinMax();
    minMaxSection.classList.add('hide');
    guessSection.classList.remove('hide');   
  }
});


defaultButton.addEventListener('click', function() {
  event.preventDefault();
  changeMinMax(1, 100);
  genRandNum();
  writeMinMax();
  minMaxSection.classList.add('hide');
  guessSection.classList.remove('hide');
});

userNum.addEventListener('keyup', function () {
  if(userNum.value === '') {
    disableButton(userNum, guessButton);
    disableButton(userNum, clearButton);
    // guessButton.setAttribute('disabled', 'true');
    // clearButton.setAttribute('disabled', 'true');
  } else {
    enableButton(userNum, guessButton);
    enableButton(userNum, clearButton);
    // guessButton.removeAttribute('disabled');
    // clearButton.removeAttribute('disabled');
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
 console.log(userNum);
 userNum.value = "";
});

resetButton.addEventListener('click', function() {
  window.location.reload(true);
});

function writeMinMax () {
  document.getElementById('min-max').innerText = " " + minNum + " - " + maxNum;
}

function changeMinMax(min, max) {
  minNum = parseInt(min);
  maxNum = parseInt(max);
  console.log('changeMinMax function is working' + minNum + 'and' + maxNum);
}

function checkMinMax() {
  if(isNaN(minNum) === true || isNaN(maxNum) === true) {
    console.log('checkMinMax function is working');
    minMaxErrorMsg.innerText = 'Please enter numbers!';
    event.preventDefault();  
    return true;
  } else if(maxNum <= minNum) {
    console.log('checkMinMax function is working');
    minMaxErrorMsg.innerText = 'Make your max number bigger than your minimum!';
    event.preventDefault();  
    return true;
  } else if ((maxNum - minNum) < 10) {
    console.log('checkMinMax function is working');
    minMaxErrorMsg.innerText = 'Let\'s do a range of at least 10 numbers :)';
    event.preventDefault();  
    return true;
  }
}

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
  maxNum += 10;
  console.log(minNum);
  console.log(maxNum);
  genRandNum();
  document.getElementById('min-max').innerText = " " + minNum + " and " + maxNum;

}





