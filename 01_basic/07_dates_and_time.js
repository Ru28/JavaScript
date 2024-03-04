// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023,0,12);
// let myCreatedDate = new Date(2023,0,12,5,3);

// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);
let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} time is for EventCounts`
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));

