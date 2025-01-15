const map = new Map();
map.set('In', 'India')
map.set('us','usa')

for (const [key,value] of map) {
    console.log(key ,':-', value)
    
}

const myobj = {
    "game1" : "spiderman",
    "game2" : "koho"
}

for (const [key,value] of myobj) {
    console.log(key ,':-', value)
    
}