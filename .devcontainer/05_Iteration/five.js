//for each loop


const coding = ["js", 'ruby',"java","python"]

coding.forEach( function name(item) {
  console.log(item)
}
)
//arrow function
coding.forEach( (val) => {
    console.log(val);
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)


coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr);
})


const mycoding = [

    {
        languageName : "javascript",
        languageFileName: "js"

    },
    {
        languageName : "java",
        languageFileName: "java"

    },
    {
        languageName : "python",
        languageFileName: "py"

    }
]

mycoding.forEach( (item)=>{
   console.log(item.languageFileName)
})
