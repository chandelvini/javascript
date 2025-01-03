/*SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

*/

const myArr = [0,1,2,3,4,5]
console.log(myArr)

const MyArr2 = ["apple", "Mango"]

console.log(MyArr2[1])


//**********************************Arrays Method****************************************************

myArr.push(6);
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(8);
console.log(myArr)

myArr.shift();
console.log(myArr)

myArr.includes(5);
console.log(myArr.includes(5))

console.log(myArr.indexOf(2))

console.log(myArr.join());


console.log("A",myArr);

const op = myArr.slice(1,3)

console.log(op)//it only give portion of array does not modify the original array
console.log("B",myArr);

const op2 = myArr.splice(1,3);//it delete the portion of the array
console.log(op2);

console.log("c",myArr);


