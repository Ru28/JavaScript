const cart = ["shoes","pants","kurta"];

api.createOrder(cart,function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(

           function(){
            updateWallet()
           }

        );

    })
    
})













// JavaScript is synchronous single threaded language, just do one thing at a time. 
// The callback function do the asynchronous code in js. 

// 1. Callback hell - Callback passed into another function as an argument and
//  another function passed into the callback function as nested callback.
// So code go horizontally inside vertically. So the callback code as unmaintainable ans unreadable. It's also known as pyramid doom

// 2. Inversion of control - The callback function is passing to another function as an argument. So our callback function blindly trust the other function.
// Whether this will execute or not. 

// Thank you so much for your brief and clear explanation 