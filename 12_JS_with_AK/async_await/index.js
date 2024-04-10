/**
 * What is async ?
 * what is await ?
 * How async wait works behind the scenes?
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 */

// const p= new Promise((resolve,reject)=>{
//     resolve("Promise Resolved Value");
// })

// // always returns a promise
// async function getData() {
//     return p;
// }

// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then(res => console.log(res));


const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },5000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },10000);
});

// // await is keyword that can be used inside async function 

// async function handlePromise(){
//     console.log("Hello World!");
//     // JS Engine was waiting for promise to resolved
//     const val = await p1;
//     console.log("Namaste JavaScript");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Namaste JavaScript 2");
//     console.log(val2);
// }
// handlePromise();

const API_URL = "https://api.github.com/users/ru28";

async function handlePromise(){
    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (error) {
        console.log(error);
    }
}
handlePromise();

// fetch() => Response.json() => jsonValue

// fetch(API_URL).then(res=> res.json()).then(res=>console.log(res));


// function getData(){
//     // JS Engine will not wait for promise to be resolved
//     p.then((res)=> console.log(res));
//     console.log("Namaste JavaScript");
// }

// getData();