// var c = 300;
let a = 300;

// if(true){
//   let a = 10
//   const b = 20
//   console.log("INNER: ", a);
// }
let array=[];
for( let i=0;i< array.length;i++){
  const element = array[i];
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "hitesh"
  
  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);

  two()

}

// one()

// if(true){
//   const username = "Rupesh"
//   if(username === "Rupesh"){
//     const website = " youtube";
//     console.log(username + website)
//   }
//   // console.log(website);
// }

// console.log(username);

// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));
function addone(num){
  return num+1;
}


addTwo(5);
const addTwo =function(num){
  return num + 2
}
