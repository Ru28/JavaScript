// Summary(As I understood) :
// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
// We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
// We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.
const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key,":- ", myObject[key]);
    // console.log(`${key} :- ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
  //  console.log(programming[key]);
}

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for(const key in map){
//   console.log(key);
// }