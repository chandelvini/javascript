console.log("2" > 1); // true
console.log("02" > 1); //true

console.log(null > 0);
console.log(null == 0);
/* The == operator checks for equality but allows type coercion.
According to JavaScript's rules, null is only loosely equal to undefined.
null is not loosely equal to 0 or any other number.
Result: false. */
console.log(null >=0); // it showing true because it convert into 0

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);


console.log("2" === 2);


