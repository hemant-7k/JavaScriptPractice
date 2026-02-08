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