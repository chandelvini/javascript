 //global scope
let a = 300
 

if(true){
    let a = 10
    const b = 20 // block scope
    
    var c = 30//  'var' is function-scoped, not block-scoped, so it is accessible outside this block. It's better to use 'let' or 'const' for predictable block-scoping.
}


 console.log(a);// 300 beacuse outside the scope by default global scope value is consider
//  console.log(b);
 console.log(c);



 function one(){
    const username = "vinita"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // not accessible
    two()
 }
// child function is access the parent variable
 one()

 //if scope

 if(true) {
    const username = "vinita"
    if(username === "vinita")
    {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website); // not accessed outside it scope

 }
 //console.log(username);//not access outside the scope



 //+++++++++++++++++ interesting ++++++++++++++

 addone(5) // this is accessable   due to function hoisting.

//Function declarations are hoisted, meaning they can be called before their definition in the code.
 function  addone(num){
    return num + 1
 } 

 //addone(5)

 addTwo(5) // not accessable without initailization because we hold function into variable
 const addTwo = function(num){
    return num + 2
 } // it also called expression

 //addTwo(5) 
// Function expressions are not hoisted like function declarations.
// You must define the function before you call it.
