// function x(){
//     let a = 7;
//     return function y(){
//         console.log(a);
//     }
// }
// let z= x();
// console.log(z);

// z();

// //+++++++++++++++++++++++++++++++++

// Uses of Closures:
// - Module Design Pattern
// - Currying
// - Functions like once
// - maintaining state in async world
// - setTimeouts
// - Iterators
// - and many more...

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namaste JavaScript")
// }

// x();


function closures(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);
    }
    console.log("Namaste JavaScript")
}

closures();