// immediately invoked function expression

(function chai() // named iif
{
    console.log(`DB CONNECTION`)
})(); // invoked function did't know where function end so  we end with ;
//function which immediately invoked and iif used to control global space variable pollution


( (name) => // unnamed iif
{
    console.log(`DB CONNECTION ${name}`)
})("vinita");