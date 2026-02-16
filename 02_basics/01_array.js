//_____array

const myarray = [1, 2, 3, 4, 5];
const myheros = ['superman', 'batman', 'spiderman'];

const myarray2 = new Array(6, 7, 8, 9, 10); // create a new array using the Array constructor
// console.log(myarray2); // output the new array

console.log(myarray[0]); // access the first element of the array (1)
// console.log(myarray.length); // get the length of the array (5)

// -------------array methods

myarray.push(6); // add an element to the end of the array
console.log(myarray); // output the updated array

myarray.pop(); // remove the last element of the array
console.log(myarray); // output the updated array

myarray.unshift(0); // add an element to the beginning of the array
console.log(myarray); // output the updated array

myarray.shift(); // remove the first element of the array
console.log(myarray); // output the updated array

console.log(myarray.includes(3)); // check if the array includes the element 3 (true)

console.log(myarray.indexOf(4)); // get the index of the element 4 in the array (3)

// const newarray = myarray.join(); // join the elements of the array into a string
// console.log(newarray); // output the joined string

// slice, splice, concat, map, filter, reduce, forEach, etc. are other array methods that can be used to manipulate arrays in various ways.

console.log("A", myarray.slice(1, 3)); // create a new array by slicing the original array from index 1 to index 3 (not inclusive)
console.log(myarray); // output the original array (unchanged)

const newarry1= myarray.splice(1, 3); // create a new array by splicing the original array from index 1 and removing 2 elements
console.log("B", newarry1); // output the new array created by splice

//
