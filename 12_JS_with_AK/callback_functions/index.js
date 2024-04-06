// what is a Callback Function in JavaScript

// setTimeout(function(){
//    console.log("timer");
// }, 5000);

// function x(y){
//   console.log("x");
//   y();
// }

// x(function y(){
//   console.log("y");
// })


// JavaScript is synchronous and single-thread

// Blocking the main thread

// Power of Callbacks?

// Deep about Event listeners

// Closures Demo with Event Listners

// Scope Demo with Event  listerners

// Garbage Collection & removeEventListener

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked",++count);
    });
}
attachEventListeners();
