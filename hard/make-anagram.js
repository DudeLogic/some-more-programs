/*
   Given two strings, a and b , that may or may not be of the same length, 
   determine the minimum number of character deletions required to 
   make a and b anagrams. Any characters can be deleted from either of the strings.
  
input
 cde
 abc
output
 4

*/

const inputStr1 = "cde";
const inputStr2 = "abc";

function returnCount(str, mapping) {
  let count = 0;
  for (const char of str) {
    if (mapping[char]) {
      count +=2;
      mapping[char] = --mapping[char];
    }
  }

  return count;
}

function makeAnagram(str1, str2) {
  let count = 0;
  let size1 = str1.length;
  let size2 = str2.length;
  let total = size1 + size2;

  let mapping = {};

  if (size1 > size2) {
    for (const char of str2) {
      if (mapping[char]) {
        mapping[char]++;
      } else {
        mapping[char] = 1;
      }
    }
    count = returnCount(str1,mapping);
  } else {
    for (const char of str1) {
      if (mapping[char]) {
        mapping[char]++;
      } else {
        mapping[char] = 1;
      }
    }
    count = returnCount(str2,mapping);    
  }

  return total - count;
}

console.log(makeAnagram(inputStr1, inputStr2));