const score = 400;//js auto detect it as a number
console.log(typeof score);

const Balance = new Number(100);//using Number Function to explicitly define number in js
console.log(Balance);

//method of number

console.log(Balance.toString());
console.log(typeof Balance);//object because number is a function and in js every function is object
//The correct reason is that new Number(100) 
// //creates an instance of the Number object, and all such instances are treated as objects in JavaScript.

const otherNumber = 23.8657

console.log(otherNumber.toString());
console.log(typeof otherNumber);//it temporary wraps into number object to call the method then
//  when method is completed object is discarded and otherNumber remains a primitive value.


console.log(otherNumber.toPrecision(5));//it take a number between the 1-21 range and return a string upto the number

const hundreds = 1000000;
console.log(hundreds.toLocaleString());//it help to make representable a number and it by default used US standard 
console.log(hundreds.toLocaleString('en-IN')); // it give a number in indian standard

/*************************************************************************** Maths**********************************/

//Maths library come along with javascript



console.log(Math); //object

console.log(Math.abs(-4));//this convert -ve value into positive values //absolute property

console.log(Math.round(4.3)); // roundoff

console.log(Math.ceil(4.2))// roundoff to upper 
console.log(Math.floor(4.9))//roundoff to lower

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); //its value comes from 0 to 1;

// if we want to restrict the range
const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
