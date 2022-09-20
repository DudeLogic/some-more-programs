/*
Reverse a number
input
321
output
123
*/

let num = 1001;

let reverseNum = 0;

while (num) {
  const value = num%10;
  reverseNum = reverseNum * 10 + value;
  num = Math.floor(num/10);
}

console.log(reverseNum);