 function saymyname() {
    console.log("vinita")
 }

 //saymyname()

//  function addTwoNumbers(number1,number2) //parameter
//  {
//     if(typeof number1 == "number" && typeof number2 == "number")
//     console.log(number1 + number2)
//      else
//      {
//         console.log("Both inputs must be numbers");
//      }

//  }
//second type
 function addTwoNumbers(number1,number2) 
 {
   const result =  number1 + number2
   return result;
   console.log("hitesh")//does not execute beacuse after return statement function doesnot perform anything 
 }

 const result = addTwoNumbers(3, 6) //argument
// console.log(result)

// with default values
function loginUserMessage(username = "sam")//default value
{
    if(username == undefined)
    {
        return
    }
    return `${username} just logged in`
}

const login = loginUserMessage("vinita")
console.log(login)

console.log(loginUserMessage()) // undefined

//rest operator used when we dont know how many agrument are there

function calculateCartPrice(val1,val2,...num1) {//rest operator
  return num1
}

console.log(calculateCartPrice(200,400,500,2)) //val1 = 200 and val2 = 400

// we can pass object to function
const user = {
  username : "hitesh",
  price : 900
}

function handleobject(anyobject) {
   console.log(`welcome user ${anyobject.username} and price is ${900}`)
}

//handleobject(user)//1 way
handleobject({
  username: "sam",
  price: 399
})

// how to pass ARRAY in function

const myNewArray = [200,300,400,500]

function Arr(myarr) {

  console.log(myarr[0])
}

//Arr(myNewArray)

Arr([300,200,400,500])