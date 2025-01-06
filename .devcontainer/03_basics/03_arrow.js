// in global space this is refer to empty context or scope in node environment

const user = {
    username: "vinita",
    price : 999,
    welcomeMessage: function()
    {
        // this is reference to current context
        console.log(`welcome ${this.username} and price is ${this.price}`) 
    }
}

user.welcomeMessage() 
console.log(this) //{}
//in global space this is refer to empty context or scope in node environment
// in browser global object is window object

// function chai()
// {
//     let username = "vinita"
//     console.log(this.username) //undefined  this only work in object not in function

// }
// chai()

const  chai = () =>
{
     let username = "vinita"
     console.log(this.username) //undefined  this only work in object not in function
 }
 chai()

 /***************arrow function************ */
 //basic arrow function
// const addtwo = (num1 , num2) => {
//     return num1+num2
// }

// console.log(addtwo(3,4))


//implicitly return 
//const addtwo = (num1, num2) => num1 + num2

//const addtwo = (num1, num2) => (num1 + num2)

//{} ke saath return keyword likhna padta hai () ke sath return mhi likhna rehta 

//how to return object

const addtwo = (num1,num2) => ({username: "vinita"}) // object ko paraentheses ko lagana padta hai

console.log(addtwo(3,4))