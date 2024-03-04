// singleton
// Object.create , constructor method

// object literals

const mySym = Symbol("key1");

const Jsuser = {
  name: "Rupesh",
  "full name": "Rupesh Virani",
  [mySym]: "mykey1",
  age: 18,
  location: "Surat",
  email: "rupeshvirani01@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday","Saturday"],
}

// console.log(Jsuser.email);
// console.log(Jsuser['email']);

// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "rupeshvirani@chatgpt";
// Object.freeze(Jsuser)
Jsuser.email = "microsoft@gmail.com";
// console.log(Jsuser);

Jsuser.greeting = function(){
  console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
  console.log(`Hello Js user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());