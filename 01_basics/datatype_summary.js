// datatypes

// 1. Primitive Data Types

// String, Number, boolean, null, undefined, Symbol, Bigint.

// String - Text data (e.g., "hello", 'world')
const name = "Hemant";
console.log(typeof name); // string
// Number - Whole or decimal numbers (e.g., 42, 3.14)
const age = 22;
console.log(typeof age); // number
// Boolean - True or false values
const isStudent = true;
console.log(typeof isStudent); // boolean

// Null - Intentionally empty/no value
const emptyValue = null;
console.log(typeof emptyValue); // object (this is a quirk in JavaScript)

// Undefined - Variable declared but not assigned a value
let uninitialized;
console.log(typeof uninitialized); // undefined

// Symbol - Unique identifier (rarely used)
const uniqueId = Symbol("id");
console.log(typeof uniqueId); // symbol

// BigInt - Very large numbers beyond normal limits
const bigNumber = BigInt("9007199254740991");
console.log(typeof bigNumber); // bigint



// 2. Reference Data Types (Non-primitive data types)

// Object - Key-value pairs (e.g., { name: "Alice", age: 30 })
const person ={
    name: "hemant",
    age: 22
};
console.log(typeof person); // object

// Array - Ordered list of values (e.g., [1, 2, 3])

const heros = [ "Superman", "Batman", "Wonder", "Flash" ];
console.log(typeof heros); // object

// Function - Reusable blocks of code (e.g., function greet() { ... })

let greet = function(){
    console.log("Hello, World!");
}
greet(); // Hello, World!
console.log(typeof greet); // function



// Summary: Data types are a fundamental concept in JavaScript that helps us understand how data is stored and manipulated. Primitive data types are immutable and stored directly in memory, while reference data types are mutable and stored as references to objects in memory. Understanding these differences is crucial for effective programming in JavaScript

// Note: JavaScript is a dynamically typed language, which means that variables can hold values of any type and can change types at runtime.

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// memories in JavaScript

// 1. Stack Memory - Used for storing primitive data types and function calls. It is a last-in-first-out (LIFO) structure where data is stored in a linear fashion. When a function is called, a new stack frame is created to hold the function's local variables and parameters. Once the function execution is complete, the stack frame is removed.

let myname = "Hemant"
let anotherName = myname;
anotherName = "Hemant koranga"; // anotherName now holds a new value "Hemant koranga", while myname still holds the original value "Hemant". This demonstrates that primitive data types are stored in stack memory, and each variable holds its own copy of the data.
console.log(myname); // Hemant
console.log(anotherName); // Hemant koranga


// 2. Heap Memory - Used for storing reference (Non-primitive) data types (objects, arrays, functions). It is a larger and more flexible memory area where objects are stored. When an object is created, it is allocated in the heap, and a reference to that object is stored in the stack. Multiple variables can reference the same object in the heap, which allows for shared data and dynamic memory allocation.

let person1 = {
    name: "Hemant",
    age: 22
};
let person2 = person1;
person2.name = "Rahul"; // Modifying person2's name property
console.log(person1.name); // Rahul (because person1 and person2 reference the same object in heap memory)
console.log(person2.name); // Rahul