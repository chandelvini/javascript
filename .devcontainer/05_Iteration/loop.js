//for each loop does not return any value

const coding = ['js','java','c++','cprogramming']

const val = coding.forEach( (item)=>{
console.log(item);
return item;
})

console.log(val); //this not returning any value

const myNums = [1,2,3,4,5,6,7,8]


// const newNums = myNums.filter( (num) => num > 4)

// console.log(newNums);// return but one problem in that 


// const newNums = myNums.filter( (num) => {
//    return num > 4
// })

// console.log(newNums);  //output = > [] because if we write in scope then it will give [] so we have to write return keyword

// using for each  how we get return value

const newNums = []

myNums.forEach( (num) => {
    if(num > 4)
    {
        newNums.push(num)
    }
})
console.log(newNums)  





