//how to declare object using constructor which is singleton
const tinderUser = new Object()//singleton object

// const tinderUser = {} //non singleton object

console.log(tinderUser)
tinderUser.id = "123456"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularuser = {
    email:  "some@gmail.com",
    //nested object
    fullname: {
        userfullname: { 
            firstname: "vinita",
            lastname: "chandel"
 
        }

    }
}
//we can access nested object in this way
console.log(regularuser.fullname.userfullname.firstname);

//how to combine two object
const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: "a",
    4: "b"
}

//const obj3 = {obj1, obj2} 
 //console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 // we have a method to combine obj
 const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
 
 //spread operator 
 const obj4 = {...obj1,...obj2}
 console.log(obj4);
 
 //in obj duplicate value are not allowed 

  // database se value aati hai in object form me

  const user = [

    {
        id : 1,
        email: "vini@gmail.com"
    },
    {
        id : 1,
        email: "vini@gmail.com"
    }
  ]
user[1].email 
//if we want keys of object 
console.log(Object.keys(tinderUser)) // return  keys in arrays form 
console.log(Object.values(tinderUser))//return values 
console.log(Object.entries(tinderUser));//return key value pair 
// [ [ 'id', '123456' ], [ 'name', 'sunny' ], [ 'isLoggedIn', false ] ]

//hasownproperty => method used to check whether property is present or not

console.log(tinderUser.hasOwnProperty("name"))


// destructuring of object

const course = {
    name : "javascript",
    price : 999,
    mode : "online"

}

//console.log(course.name); // this is a basic way to access a object value

const {name} = course // in this way we dont write to object name we directly access value by their key
console.log(name)


// we want to change the name then

const {name:Name} = course // in this way we dont write to object name we directly access value by their key
console.log(Name)


//JSON format
// {
//     "name" : "vinita",
//     "lastname" : "chandel"

// }
//differnce between object and json is :
// json: object has no name is known as json and key also written in "" 
// object: object has a name



