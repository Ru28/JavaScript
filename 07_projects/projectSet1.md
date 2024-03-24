# Projects related to DOM

## projects link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-pbwghv?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## project 1 solution

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});
```

## project 2 solution

```javascript
const form = document.querySelector('form');
// This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a Valid Height ${height}`;
  }
  if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a Valid Weight ${weight}`;
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    
    let weightRange="";
    if(bmi < 18.6){
      weightRange = "under weight";
    }
    else if(18.6 <= bmi && bmi<=24.9 ){
      weightRange = "normal range";
    }
    else {
      weightRange = "Overweight";
    }
    // show bmi
    results.innerHTML = `<span>${bmi}</span> in <span>${weightRange}</span> category`;
  }  
});

```

## project 3 solution
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000 );
```

## project 4 solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = []
let numGuess = 1;

let playGame = true;
if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess= parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter valid number');
  }
  else if(guess < 1){
    alert('please enter a number more than 1');
  }
  else if(guess > 100){
    alert('please enter a number less than 100');
  }
  else{
    preGuess.push(guess);
    if(numGuess >10){
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`you guessed it right`);
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage(`Number is too low`);
  }
  else{
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML= `${11-numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML =`<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> start Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML= `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  })
}
``` 

## project 5 solution
```javascript
const insert = document.querySelector('#insert');

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class= 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? "space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  </div>`;
}) 
```

## project 6 solution
```javascript
// generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDF";
  let color = '#';
  for(let i=0;i<6;i++){
     color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}

let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
  console.log("started");
}

const stopChangingColor = function(){ 
  clearInterval(intervalId);
  intervalId = null;
  console.log("stopped");
}

document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);
```