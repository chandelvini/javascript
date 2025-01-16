//reduce function 

const myNum = [1,2,3,4,5]

// const myTotal = myNum.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return  acc + currval
// },0)

//using arrow function

const myTotal = myNum.reduce( (acc,curr) => acc+curr,0)

console.log(myTotal);


const ShoppingCart = [
    {
       course: 'js',
       price: 29999
    },
    {
        course: 'data science',
        price: 3999
     },
     {
        course: 'python',
        price: 3000
     },
     {
        course: 'c++',
        price: 4000
     },
]

const priceToPay = ShoppingCart.reduce( (acc,item) => acc + item.price , 0)

console.log(priceToPay)