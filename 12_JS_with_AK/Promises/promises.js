const cart = ["shoes", "pants","kurta"];

createOrder(cart, function() {
    proceedToPayment(orderId,function (){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance()
        });
    });
}); // ordered

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo);
})




const promise = createOrder(cart);

// { data: orderDetails }

promise.then(function(ordered){
    proceedToPayment(ordered);
});

// const GITHUB_API = "https://api.github.com/users/ru28";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function(data){
//    console.log(data);
// })




