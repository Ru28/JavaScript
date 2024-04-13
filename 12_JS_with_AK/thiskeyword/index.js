"use strict"
// this in global space

console.log(this);  // global Object Window, Global

// this inside a function

function x() {
    // the value depend on strict / non strict mode
    console.log(this);
}

// this keyword behave differently inside strict mode and non-strict mode

// this inside non-strict mode - (this substitution)
// if the value of this keyword is undefined or null
// this keyword will be replaced with global object only in non strict mode


// this keyword value depend on how function is called (window)

x();  // undefined
window.x() // window

// this inside a object's method

const student = {
    name: "Akshay",
    printName: function(){
        console.log(this.name); // value of this is object
    },
};
student.printName();

const student2 ={
   name: "pranali",
};

// call apply bind methods (sharing methods)

student.printName.call(student2); // value of this = student2

// this inside arrows function
const obj = {
    a: 10,
    x: ()=> {
        console.log(this);
    },
};
obj.x();

// this inside nested arrow function

const obj2 = {
    a: 10,
    x: function () {
        // enclosing lexical context
        const y = () => {
            console.log(this);
        }
        y()
    },
};
obj2.x();
// this inside DOM elements => refence to HTMLelement

// this inside class, constructor