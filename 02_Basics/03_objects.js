//Singleton
//object.create

//object literals
const Details={
    name:"Vardhan Reddy",
    age:22,
    email:"Vardhan@gmail.com",
    location:"Hyderabad",
    isLoggedin:false,
    loginDays:["Mon","Wed","Fri"],
}

// console.log(Details.name)
// console.log(Details["name"])
// console.log(Details["age"])
// console.log(Details["loginDays"])
// console.log(typeof(Details["isLoggedin"]))
// Details.email="vardhan@accenture.com"
// console.log(Details)
// Object.freeze(Details)
// Details.age=23
// console.log(Details)

//functions in objects
Details.greetings=function(){
    console.log("Hello user Welcome")
}
console.log(Details.greetings())
Details.greeting1=function(){
    //backtiks is present under esc button ````
    console.log(`Hello ${this.name} Welcome`)

    //this ==> accessing the variable outside the object which is declared inside the variables in a object
}
console.log(Details.greeting1())






