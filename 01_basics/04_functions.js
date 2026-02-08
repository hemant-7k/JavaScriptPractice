// ========================================
// FUNCTIONS IN JAVASCRIPT
// ========================================

// 1. FUNCTION DECLARATION
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Hemant")); // Hello, Hemant

// 2. FUNCTION EXPRESSION
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // 8

// 3. ARROW FUNCTION (Modern ES6)
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(4, 2)); // 8

// Shorter arrow function (single statement)
const square = (x) => x * x;
console.log(square(5)); // 25

// Arrow function with one parameter (parentheses optional)
const double = x => x * 2;
console.log(double(7)); // 14

// Arrow function with no parameters
const randomNumber = () => Math.random();
console.log(randomNumber());

// 4. FUNCTION HOISTING
console.log(hoistedFunc()); // Works! Returns "I am hoisted"
function hoistedFunc() {
  return "I am hoisted";
}

// 5. PARAMETERS & DEFAULT VALUES
const introduce = (name = "Guest", age = 18) => {
  return `${name} is ${age} years old`;
};
console.log(introduce("Hemant", 22)); // Hemant is 22 years old
console.log(introduce()); // Guest is 18 years old

// 6. REST PARAMETERS (...)
const sum = (...numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); // 30

// 7. CALLBACKS
const calculateAndLog = (a, b, callback) => {
  const result = callback(a, b);
  console.log(`Result: ${result}`);
};
calculateAndLog(5, 3, (x, y) => x + y); // Result: 8
calculateAndLog(10, 2, (x, y) => x * y); // Result: 20

// 8. RETURN FUNCTIONS (Closures)
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

// ========================================
// PRACTICE EXERCISES
// ========================================

// Exercise 1: Create a function that calculates area of a circle
const calculateArea = (radius) => Math.PI * radius * radius;
console.log("Circle Area:", calculateArea(5));

// Exercise 2: Create a function that checks if a number is even
const isEven = num => num % 2 === 0;
console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false

// Exercise 3: Create a function that returns the largest of 3 numbers
const findLargest = (a, b, c) => Math.max(a, b, c);
console.log("Largest:", findLargest(10, 25, 15)); // 25
