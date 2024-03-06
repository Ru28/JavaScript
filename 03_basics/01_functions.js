
function sayMyName(){
    console.log("Rupesh");
    console.log("+");
}

// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
  // let result = number1 +number2;
  // return result;

  return number1 + number2;
}

// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)
const result= addTwoNumbers(3,5);
// console.log(result);

function loginUserMessage(username="Sem"){
  if(!username){
    console.log("please enter a username");
    return;
  }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rupesh"));

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
  username: "Rupesh",
  price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200,400,100,600];
function returnSecondValue(getArray){
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));