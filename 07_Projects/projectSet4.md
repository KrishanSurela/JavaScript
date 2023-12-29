Project 4 Solution code

```javascript 
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userField = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userField.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a Valid Number more than 1");
  } else if (guess > 100) {
    alert("Please Enter a   Number less than 100");
  } else {
    prevGuess.push(guess)
    if(numGuess==11){
      displayguess(guess)
      displayMessage(`Game Over . Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayguess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage(`You Guessed Right`)
    endGame()
  }else if(guess<randomNumber){
    displayMessage(`Number is too Low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is Too High`)
  }
}
function displayguess(guess) {
  userField.value =''
  guessSlot.innerHTML+=`${guess}, `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message) {
  lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame() {
  userField.value=''
  userField.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame =false;
  newGame();
}

function newGame() {
  const newGameButton =document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess =[];
    numGuess =1;
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userField.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true;
  })
}
```
