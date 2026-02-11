console.log("hello world");

let a;
console.log(a); // undefined
a = 10;
console.log(a); // 10


//null data type 
let b = null;
console.log(b); // null

//undefined vs null


//undefined means a variable has been declared but has not yet been assigned a value. It is the default value for uninitialized variables. For example:
let c;
console.log(c); // undefined    
//null, on the other hand, is an assignment value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value. For example:
let d = null;
console.log(d); // null

//non primitive data type
let person = {

    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    visa: true,
    hobbies: ["reading", "traveling", "cooking"]
};

//we can use array also here is an example of array in person object

//It is similar to a real-life person, which has properties like name, age, address, and visa. Each property has a value associated with it. The address property itself is an object that contains more properties (street, city, country).
//It is similar like json (JavaScript Object Notation), which is a common data format used for representing structured data. 
// JSON is often used for transmitting data between a server and a web application, as well as for storing data in files. The structure of the person object in the example is similar to how data would be represented in JSON format.
console.log(person.name); // "John"
console.log(person.age); // 30
console.log(person.address.street); // "123 Main St"
console.log(person.visa); // true   
console.log(person.hobbies[1]); // "reading"
//here person is an object, which is a non-primitive data type. It can hold multiple values in the form of key-value pairs.




//primitive data types
let name = "Alice";
let age = 25;
console.log(name); // "Alice"
console.log(age); // 25
//here name is a string and age is a number, both of which are primitive data types. Primitive data types represent single values and do not have properties or methods.


//array in javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana" 
console.log(fruits[2]); // "orange"

//add array value 
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "orange", "grape"]

//updating array
fruits[1] = "grape";
// console.log(fruits[1]); // "grape"  

//Iterate over array
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}

//function in javascript 
function greet(name) {
    return "Hello, " + name + "!";
}   

//call this function
console.log(greet("Alice")); // "Hello, Alice!"


//methos in javascript
let person1 = {
    name: "Bob",    
    greet: function() {
        return "Hello, " + this.name + "!";
    }   
};

//call this method
console.log(person1.greet()); // "Hello, Bob!"

//difference between function and method
//A function is a standalone block of code that performs a specific task and can be called independently. 
//It can take parameters and return a value. For example:

//a method is a function that is associated with an object and operates on that object's data. 
//It is defined within the context of an object and can access the object's properties using the this keyword. 
//For example:  
//set
let person2 =  new Set();
person2.add("Alice");
person2.add("Bob");
console.log(person2); // Set(2) {"Alice", "Bob"}    

//map key value store data
let person3 = new Map();
person3.set("name", "Alice");
person3.set("age", 25);
console.log(person3); // Map(2) {"name" => "Alice", "age" => 25}    


//next data type is symbol
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false
//Symbols are unique and immutable data types that can be used as identifiers for object properties. Each symbol is guaranteed to be unique, even if they have the same description.    




