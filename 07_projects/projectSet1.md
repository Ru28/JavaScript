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