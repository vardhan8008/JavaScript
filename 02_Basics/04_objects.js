//singleton object declaration

// const myObject1=new Object()
// console.log(myObject1)

//non singleton object

// const myObject={}
// myObject.name="Vardhan"
// myObject.age="22"
// myObject.email="vardhan@123.com"
// console.log(myObject)

// const Object1={
//     id:8009,
//     empName:{
//         fullName:{
//             firstName:"Sri vardhan",
//             lastName:"Reddy",
//         }

//     }
// }

// console.log(Object1.empName.fullName.lastName)

//**************************************************************** */


//Spread in objects

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3={7:"g",8:"h",9:"i"}

const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)

// console.log(Object.keys(obj1)) //always return in arrays ==> which is used to run the loop


//*************************************************** */

//Destructuring

const course={
    Id:2034,
    Name:"MERN",
    instructure:"Hitesh",
    coursePrice:999
}
console.log(course.Name)
const {Id,Name,instructure,coursePrice:Price}=course  // : ==>alis naming
console.log(Id)
console.log(Price)




//

