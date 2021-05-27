/* var let const
var is function scope and let, const block scope
var variables can be re-declared and updated
const  can't be re-declared and updated
let can be updated but  not redeclare
*/

// var
var myName = "Akilan";
var myName = "Inba";

function sayHello() {
  var myName = "Iniya";

  for (var i = 0; i < 5; i++) {
    console.log(i + 1);
  }
  console.log("My name is " + myName);
}

sayHello();
console.log("My name is " + myName);

// Let
let myLocation = "Bangalore";
// let myLocation = "London" // throws an error
myLocation = "London"; // can be updated

const myBirthPlace = "Tamilnadu";
//myBirthPlace = "Karnataka" // throws an error, can't be redeclar and updated
