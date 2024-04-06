// Function Statement aka Function Declaration
function a(){
    console.log("a called");
}

// Function Expression
const b = function (param1) {
    return function xyz(){

    }
}

console.log(b());

const c = function (param1) {
    console.log(param1);
}

c(function xyz(){
    console.log("hello")
});



// Anoymous Function
// function () {

// }

// Named Function Expression

// Difference between Parameters & Arguments?

// first class Functions - Ability to be used like values
// First Class Citizens

// Arrow Functions