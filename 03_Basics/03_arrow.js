const user={
    username:"Vardhan",
    location:"hyderabad",
    greet:function (){
        console.log(`welcome ${this.username} !`)
    }
}
user.greet()

//arrow functions
let arrow1=(number1,number2)=>{
    return number1+number2
}
console.log(arrow1(10,20))

//advance arrow functions
let arrow2 = (number3,number4) => (number3*number4)
console.log(arrow2(3,20))