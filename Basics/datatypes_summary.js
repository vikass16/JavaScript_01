// primitive

// 7 types of data types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)



// Reference (Non Primitive) : Inka DataType Object hota h

// Array , Objects, Functions

// Array
const hero = ["iron Man", "Captain America", "Thor"]; 

// Object
let myObject = {
    name : "RDJ",
    age : 58,
}

// Function
const myFun = function(){
   console.log("Hello javaScript look at here!!");
   
}


// ============== Memory Management ===========

// Stack (Primitive) , heap (Non Primitive)
let myName = "Vikas Kumar"

let anotherName = myName // here only changes variables(in stack not in heap)
anotherName = "Virat"
console.log(myName);
console.log(anotherName);

let user ={
    email: "user@email.com",
    upi: "user@axl"
}

let user2 = user
user2.email ="vk@gmail.com"

console.log(user.email);
console.log(user2.email);

// Non primitive data types like array,
//  objects and functions Stored in heap memory and two or more varibles/objects 
// ans can reference the same address