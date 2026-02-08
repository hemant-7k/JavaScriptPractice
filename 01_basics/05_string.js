const name = "hemantkorangaa"// this is a string literal
const repocount = 30 // string interpolation

console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repocount}`);// this is a template literal

const gameName = new String('hemantkoranga') // this is a string object
console.log(gameName);  

// String methods
console.log(gameName.length); // length of the string
console.log(gameName.toUpperCase()); // convert to uppercase
console.log(gameName.toLowerCase()); // convert to lowercase
console.log(gameName.includes('koranga')); // check if string includes a substring
console.log(gameName.startsWith('hemant')); // check if string starts with a substring
console.log(gameName.endsWith('koranga')); // check if string ends with a substring
console.log(gameName.indexOf('koranga')); // get the index of a substring

const newString = gameName.substring(0, 6); // get a substring from index 0 to 6
console.log(newString); // output: 'hemant'

const anotherString = gameName.slice(-5, 6); // get a substring from index -8 to 6
console.log(anotherString);

console.log(gameName.replace('hemant', 'hemantkoranga')); // replace a substring with another string
console.log(gameName);// original string remains unchanged because strings are immutable

console.log(gameName.split('')); // split the string into an array of characters
console.log(gameName.split('a')); // split the string into an array using 'a' as the separator

console.log(gameName.trim()); // remove whitespace from both ends of the string
console.log(gameName.trimStart()); // remove whitespace from the start of the string
console.log(gameName.trimEnd()); // remove whitespace from the end of the string

console.log(gameName.repeat(3)); // repeat the string 3 times

console.log(gameName.charAt(0)); // get the character at index 0
console.log(gameName.charCodeAt(0)); // get the Unicode value of the character at index 0
