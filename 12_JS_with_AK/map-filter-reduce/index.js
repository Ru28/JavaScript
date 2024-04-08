const arr = [5, 1, 3, 2, 6]

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "10", "110"];

// function double(x){
//     return x * 2;
// }

// function triple(x){
//     return x * 3;
// }

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(function binary(x){
//     return x.toString(2);
// });

// console.log(output);

// function isOdd(x){
//     return x % 2;
// }

// function greater4(x){
//     return x > 4;
// }

// const output = arr.filter(greater4);
// console.log(output);

const output = arr.reduce((acc,curr)=>{
    acc = acc + curr;
    return acc;
},0)

const maxValue = arr.reduce((max,curr)=>{
    if(curr>max){
        max = curr;
    }
    return max;
},0);

console.log(maxValue);

const users = [
    { firstName:"akshay", lastName: "saini", age: 26},
    { firstName:"donald", lastName: "trump", age: 75},
    { firstName:"elon", lastName: "musk", age: 50},
    { firstName:"Pranali", lastName: "rathod", age: 26}
];

// list of full names

const fullName = users.map((user)=>{
    return user.firstName +" "+ user.lastName;
});

console.log(fullName);

// acc= { 26:2 , 75:1, 50:1 }

const sameAge = users.reduce((acc,curr)=>{
     if(acc[curr.age]){
        acc[curr.age]++;
     }
     else{
        acc[curr.age]=1;
     }
     return acc;
},{});

console.log(sameAge);

const ageLessThan30= users.filter((x)=> x.age<30).map((x)=>{
    return x.firstName;
})
console.log(ageLessThan30);

const anotherWay = users.reduce((acc,curr)=>{
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);

console.log(anotherWay);

// Things learned:
// 1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the arrar to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.