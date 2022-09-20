/*
Reverse the words in a sentance
input
"Hello world"
output
"olleH dlrow"
*/

const str = "Hello world";

console.log( str.split(' ').map(str => str.split('').reverse().join('')).join(' ') );