const MyNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNumms = MyNumbers.map( (num) => num +10)

//console.log(newNumms); // it return object

//chaining => means two or more method used same time

const newNums = MyNumbers
                .map( (num) => num + 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 15)

console.log(newNums);