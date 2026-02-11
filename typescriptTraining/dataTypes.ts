//primitive data types
//1. String 
let myName:string = "John";

//2. Number
let myAge:number = 30;

//3. Boolean
let isStudent:boolean = true;

console.log(`My name is ${myName}, I am ${myAge} years old, and I am a student: ${isStudent}`);

//4. null
let myvalue:null = null;
console.log(`The value of myvalue is: ${myvalue}`);

//5. undefined It represent a variable that has been declared but has not been assigned a value. 
let myUndefinedValue:undefined = undefined;
console.log(`The value of myUndefinedValue is: ${myUndefinedValue}`);

//6. Union Types. Union meaning that a varialbe can hold more than one type of value. 
let myUnionValue: string | number;
myUnionValue = "Hello";
console.log(`The value of myUnionValue is: ${myUnionValue}`);
myUnionValue = 42;
console.log(`The value of myUnionValue is: ${myUnionValue}`);


//7. any. Data type that will remove all type checking and allow you to assign any value to a value. 
let myAny:any = "yes1"
console.log(`value is ${myAny}`);


//Non primitive data types
//1. Object 

