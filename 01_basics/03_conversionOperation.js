let score = "false";

console.log( typeof score ); // number

// conversion operation

let valueInNumber = Number(score);

console.log( typeof valueInNumber ); // number
console.log( valueInNumber ); // NaN

// NaN - not a number
// NaN is a special number which shows that the value is not a valid number


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hemant"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);