//operators in typescript
//arithmetic operators
let a: number = 10;
let b: number = 5;
console.log("Addition: " + (a + b)); //15
console.log("Subtraction: " + (a - b)); //5
console.log("Multiplication: " + (a * b)); //50
console.log("Division: " + (a / b));
//5
console.log("Modulus: " + (a % b)); //0

//comparison operators
console.log("Equal to: " + (a == b)); //false
console.log("Not equal to: " + (a != b)); //true
console.log("Greater than: " + (a > b)); //true
console.log("Less than: " + (a < b)); //false
console.log("Greater than or equal to: " + (a >= b)); //true
console.log("Less than or equal to: " + (a <= b)); //false

//3. logical operators
let x: boolean = true;
let y: boolean = false;
console.log("Logical AND: " + (x && y)); //false
console.log("Logical OR: " + (x || y)); //true
console.log("Logical NOT: " + (!x)); //false

//4. assignment operators
let c: number = 10;
c += 5; // c = c + 5
console.log("Addition assignment: " + c); //15
c -= 3; // c = c - 3
console.log("Subtraction assignment: " + c); //12
c *= 2; // c = c * 2
console.log("Multiplication assignment: " + c); //24
c /= 4; // c = c / 4
console.log("Division assignment: " + c); //6
c %= 5; // c = c % 5
console.log("Modulus assignment: " + c); //1

//5. ternary operator
let age: number = 18;
let isAdult: string = age >= 18 ? "Yes" : "No";
console.log("Is adult: " + isAdult); //Yes


let e:number = 10;
let d:number = 5;

console.log(`addition is : ${e++ + ++d}`); //16


let shahrukh: boolean = true;
let salman: boolean = true;
let amir: boolean = false;

if(shahrukh)
{
console.log("Shahrukh is the king of bollywood");
}

else if(salman)
{
console.log("Salman is the king of bollywood");
}

else if(amir)
{ 
    console.log("Amir is the king of bollywood"); 
} 
else { 
    console.log("No one is the king of bollywood"); 
}
