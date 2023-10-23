//Stack and Heap memory

//primitive ==> Stack
//copy

//changes are made to the copy in Stack(lifo) memory


let score=100;
let player1=score;
console.log(player1)

player1=150
console.log(score)
console.log(player1)

//************************************************ *

//non-primitive ==> Heap

//Reference

//changes are made to the original in Heap memory

let EmpOne={
    EmpID : 199,
    Email : "user@gmail.com",
    Stream : "MERN"


}
console.log(EmpOne)
//console.table(EmpOne)

let EmpTwo=EmpOne
console.log(EmpTwo)
EmpTwo.Email="vardhan@gmail.com"
console.log(EmpOne.Email)
console.log(EmpTwo.Email)

