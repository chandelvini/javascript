const myobj = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"

}
//forof loop is not working for object

for (const key in myobj) {
    console.log(`${[key]} : ${myobj[key]}`);
    
}

const myarr = [10,20,30,40]

for (const key in myarr) {
    console.log(myarr[key])
}