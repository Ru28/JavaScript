console.log("start");

function cb() {
    console.log("Callback func");
}
cb();

setTimeout(function cb(){
    console.log("callback setTimeout")
},0);

console.log("End");

// million

// let startDate = new Date().getTime();
// let endDate = startDate;
// while( endDate < startDate + 1000){
//     endDate = new Date().getTime();
// }

// console.log("while expired");