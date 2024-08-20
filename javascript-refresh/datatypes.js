// Single Line comment
/*
 This is a multiLine comment
 thk
 */

//String

const str = "Manav";
const backtick = `manav${str}`;
console.log(str, backtick);
console.log(typeof backtick);

//Untyped Numbers
const a = 0.5;
const b = 5;
console.log(a, b);

const c = "hello";
console.log(c / a); //NaN not a number
const res = c / a;
console.log(typeof res); //NaN == number

//Boolean
const flag = true;
console.log(flag, !flag);
if (flag) console.log("Yes");
else console.log("No");

//Null
const age = null;
// Special value that represents empty or None
console.log(age);
console.log(typeof age); // Type of Object
//Undefined
let x;
// or use x = undefined;
console.log(x);
console.log(typeof x); // Type of undefined
//Variable declared but not defined

//Objects [Non Primitive]
const obj = {
  name: "Manav",
  age: 25,
};

console.log(obj);
console.log(obj.name, obj.age); //Dot Notation
