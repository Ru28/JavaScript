// if
let isUserLoggedIn = true;

let temperature =41;
// if( 2 === "2" ){
//   console.log("executed");
// }

// if ( temperature === 41){
//   console.log("less than 50");
// }
// else{
//   console.log("temperature is greater than 50");
// }

// <, >, <=, >=, == , !=, ===

// const score = 200;

// if(score > 100){
//   const power = 'fly'
//   console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 1000;

// if(balance > 500) console.log('test');

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
  console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("User logged in");
}