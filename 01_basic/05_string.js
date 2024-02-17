const name = "Rupesh";
const repoCount = 50;

// console.log(name + repoCount + "Value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Vrstar-Ru-com');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));     // Vrstar => 0 -V 1- r 2- s
//output s

// console.log(gameName.indexOf('t'));     

// const newString = gameName.substring(0,4);
// console.log(newString);

// const anotherString = gameName.slice(-9,4);
// console.log(anotherString);

// const newStringOne = "   Rupesh   ";
// const answer= newStringOne.trim();
// console.log(newStringOne);
// console.log(answer);

const url ="https://rupesh.com/rupesh%20virani";
console.log(url.replace('%20','-'));

console.log(url.includes("rupesh"));

console.log(gameName.split('-'));