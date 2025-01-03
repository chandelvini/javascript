// we can merge the arrays using different method and operator

/*1.push -> it will modify in the existing array
2.concat -> return a new array by combing two arrays
3.spread operator -> using spread we can combining many array
4) flat(give depth till where you want to concat we can also give infinity instead of number) -> it used to concat the sub array into a single array
5) isArray(give array which you want to check) => check whether the given array is present or not
6) from() => to convert into array
7) of()=> is used to combine variables into array

*/
const marvel_heros = ["thor", "IronMan","spiderman"]
const dc_heros = ["superman", "flash","batman"]
//console.log(marvel_heros.push(dc_heros));// 4 beacuse push return length of array

//console.log(marvel_heros);
//console.log(dc_heros);

const new_arr = marvel_heros.concat(dc_heros)
console.log(new_arr)

const all_new_heros = [...marvel_heros,...dc_heros,...new_arr]
console.log(all_new_heros);
//nested array
const Arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another_arr = Arr.flat(Infinity)
console.log(another_arr)

console.log(Array.isArray(Arr))

console.log(Array.from("vinita"))

const score1 = 100;
const score2 = 200;

console.log(Array.of(score1,score2))