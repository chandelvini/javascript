 //singleton =>  
//object.create
//object LiteraLS => way to declare object

const mysum = Symbol("key1")
const Jsuser = {
    name: "vinita",
    age:22,
    [mysum] : "mykey1",
    location: "jaipur",
    email: "vinitachandel04@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["monday","saturday"] 
  

}
//two ways to access object element 
console.log(Jsuser.email)
console.log(Jsuser["email"]) 
//how to access symbol

console.log(Jsuser[mysum])

//how to change value of object
Jsuser.email = "vinita@gmail.com"

//how to lock object

//Object.freeze(Jsuser)
Jsuser.email = "vini@gmail.com"
console.log(Jsuser);

Jsuser.greeting =function()
{
   console.log("hello everyone")
}

console.log(Jsuser.greeting) // it give function reference
console.log(Jsuser.greeting()) // it give fuunction

//if we want to point reference of object value name 
//first we want to do string manipluation
Jsuser.greetingtwo = function()
{
    console.log(`hello everyone ${this.name}` ) 
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo()) 


