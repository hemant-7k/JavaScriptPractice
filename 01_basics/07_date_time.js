//  Dates

let myDate = new Date(); // create a new date object with the current date and time
// console.log(myDate); // output the date object


// console.log(myDate.toString()); // convert the date object to a string
// console.log(myDate.toDateString()); // get the date part of the date object as a string
// console.log(myDate.toTimeString()); // get the time part of the date object as a string
// console.log(myDate.toLocaleString()); // get the date and time in a locale-specific format

console.log(typeof myDate); // get the type of the date object

let myDate2 = new Date(2023, 0, 23);
console.log(myDate2.toDateString()); // output: 'Mon Jan 23 2023' (months are zero-indexed)

let myDate3 = new Date('2023-01-23');
console.log(myDate3.toLocaleString()); // output: '1/23/2023, 12:00:00 AM' (format may vary based on locale)

let myTimestamp = Date.now(); // get the current timestamp in milliseconds
console.log(myTimestamp); // output the timestamp

let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth() + 1); // get the month (0-11) of the new date object and add 1 to make it 1-12
console.log(`${newdate.getDate()}`);


console.log('Formatted Date:', newdate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));