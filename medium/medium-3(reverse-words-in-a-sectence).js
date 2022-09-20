/*
Reverse the words in a sentance

CONDITION
 Should not use String.split(), Array.join() and Array.reverse() in javascript

input
"Hello world"
output
"olleH dlrow"

input 
"  abcd    dcba   a"
output
"  dcba    abcd   a"
*/


const input = "  abcd    dcba   a";

function reverse(str) {
  let strReversed = ''
  for (let index = str.length - 1; index >= 0; index--) {
    strReversed += str[index];
  }

  return strReversed;
}

function reverseSentence(str) {
  let reversed = "";
  let startIndex = index = 0;
  for (; index < str.length; index++) {
    if (str[index] === " " && startIndex !== index) {            
      reversed = reversed + reverse(str.substr(startIndex, (index - startIndex))) + " ";
      startIndex = index + 1;
    } else if (str[index] === " " && startIndex === index) {
      reversed += " ";
      startIndex++;
    }
  }

  return reversed + reverse(str.substr(startIndex, (index - startIndex )));
}

console.log(reverseSentence(input));