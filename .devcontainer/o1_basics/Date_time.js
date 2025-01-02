let myDate = new Date()

console.log(myDate.toString());//Thu Jan 02 2025 17:03:37 GMT+0000 (Coordinated Universal Time) 
console.log(myDate.toDateString());// Thu Jan 02 2025
console.log(myDate.toLocaleString());//1/2/2025, 5:03:37 PM
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0 , 23); // in javascript month start from 0 
console.log(myCreatedDate.toDateString());

 myCreatedDate = new Date("2023-01-2");
 console.log(myCreatedDate.toLocaleString());


 let TimeStamp = Date.now();

 console.log(TimeStamp);
 console.log(myCreatedDate.getTime());

 console.log(Date.now()) // it give in milisecond
 console.log(Math.floor(Date.now()/1000))//it give in second


 let newDate = new Date();

 console.log(newDate.getFullYear());

console.log(` ${newDate.getFullYear()} and the time is${myCreatedDate.getTime()} `)
   