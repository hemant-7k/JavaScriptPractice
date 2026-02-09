// const score = 100;
// // console.log(score);

// const balance = new Number(100);
// // console.log(balance.toString()); // convert number to string

// // console.log(balance.toString().length); // get the length of the string representation

// // console.log(balance.toFixed(2)); // format number to 2 decimal places   

// const otherBalance = 200.56789;
// console.log(otherBalance.toFixed(2)); // format number to 2 decimal places
// console.log(otherBalance.toPrecision(3)); // format number to 3 significant digits

// const num1 = 1000000000;
// console.log(num1.toLocaleString('en-IN')); // format number according to Indian locale (1,00,00,00,000)
// console.log(num1.toLocaleString('en-US')); // format number according to US locale (1,000,000,000)

// //+++++++++++++++maths++++++++++++++++++++

// console.log(Math.PI.toFixed(2)); // get the value of PI with 2 decimal places

// console.log(Math.E); // get the value of Euler's number

// console.log(Math.sqrt(16)); // get the square root of 16

// console.log(Math.pow(2, 3)); // get 2 raised to the power of 3

// console.log(Math.abs(-5)); // get the absolute value of -5

// console.log(Math.round(4.7)); // round 4.7 to the nearest integer
// console.log(Math.round(4.4)); // round 4.4 to the nearest integer

// console.log(Math.ceil(4.1)); // round 4.1 up to the nearest integer
// console.log(Math.floor(4.9)); // round 4.9 down to the nearest integer

console.log(Math.random()); // get a random number between 0 and 1
console.log(Math.random()*10); // get a random number between 0 and 10
console.log(Math.floor(Math.random()*10)+1); // get a random number between 1 and 10

const min = 5;
const max = 15;

console.log(Math.floor(Math.random()*(max-min+1))+min); // get a random number between min and max (inclusive)