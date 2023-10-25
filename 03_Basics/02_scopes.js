var c=200

//blocs ==> {}
if (true){
    let a=10
    const b=20
    var c=30

}
// console.log(a)
// console.log(b)
console.log(c)


//nested functions

function One(){
    let username="Vardhan"
    function Two(){
        let age=23
        console.log(username)
    }
    // console.log(age)
    console.log("one")
     Two()
    console.log("two")
}
One()
console.log("three")


//nested scopes through conditional statements
if(true){
    let user="Vardhan"
    if(user==="Vardhan"){
        let greet="hii"
        console.log(`${greet} ${user} !Welcome`)
    }
    // console.log(greet)
}


//********************************************** */x
//Flag hoisting ==> bringing variables on top
greeting()
function greeting(){
    console.log("Welcome")
}

// addTwo(3)
let addTwo=function(num6){
    console.log(num6+num6)
    
}
addTwo(3)


//arrow functions


