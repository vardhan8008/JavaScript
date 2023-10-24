const Array1=["Vardhan","Raju","Srinivas"]
const Array2=["Naveen","Harsha","Koushik"]
// Array1.push(Array2)
// console.log(Array1)
// console.log(Array1[3][1])

// const Array3=Array1.concat(Array2)
// console.log(Array3)
//********************************* */

//Spread
//most of us use the spread

// const Array5=[...Array1,...Array2]
// console.log(Array5)


//Flat

const Array6=[1,2,3,4,[5,6,7],8,9,[10,11]]
const Array7=Array6.flat()
console.log(Array7)


//is ,of and From


console.log(Array.isArray("Vardhan"))
console.log(Array.from("Vardhan"))

let score1=100
let score2 =150
let score3=200
let score4=250
console.log(Array.of(score1,score2,score3))