// //Fucntions in typescript
// function greet(name:string):void{
//     console.log(` ${name} world`);
// }

// greet("hello");


// function add(a:number,b:number):number{
//     return a+b;
// }

// const result = add(3,8);
// console.log(result);

// //Optional parameters
// function greet2(name:string,age?:number):void{
//     if(age){        
//         console.log(`Hello ${name}, you are ${age} years old.`);
//     }else{
//         console.log(`Hello ${name}`);
//     }
// }
// greet2("Alice",30);
// greet2("Bob");

// //Default parameters
// function greet3(name:string,age:number=25):void{
//     console.log(`Hello ${name}, you are ${age} years old.`);
// }
// greet3("Charlie",35);
// greet3("Dave");

// //Rest parameters
// function sum(...numbers:number[]):number{
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// const total = sum(1, 2, 3, 4, 5);
// console.log(total);


// //Function types
// type GreetFunction = (name: string) => void;
// const greet4: GreetFunction = (name) => {
//     console.log(`Hello ${name}`);
// }
// greet4("Eve");


//Annonymous functions
// function add(a: number, b: number): void {
//     console.log(a + b);
// }

// // 'vat' is defined as a function that takes two numbers
// function next(vat: (n1: number, n2: number) => void): void {
//     vat(1, 2); 
// }

// // Now we call it
// next(add);


function getChai(order:string):string |null{
    if(!order) return null;
    return order;
}

function returnChai(type?:string){

    console.log("chai is "+type || "chai is not available");
}

returnChai("Masala Chai");
returnChai();