/*
Find 3 most largest elements in an array.

input
[3, 4, 2, 3, 16, 3, 15, 16, 15, 15, 16, 2, 3]
output
[ 16, 15, 4 ]

input  [-16, -3, -15, -16, -15, -3, -2, -3, -15, -16, -2, -3, -4]
output 
[-2,-3,-4]
*/

const inputArray = [-16, -3, -15, -16, -15, -3, -2, -3, -15, -16, -2, -3, -4];


function findThreeLargestElements(array) {
  let l1 = l2 = l3 = array[0];
  for (index = 1; index < array.length; index++) {
    if (array[index] > l1) {
      l3 = l2;
      l2 = l1;
      l1 = array[index];
    } else if (array[index] > l2 && array[index] !== l1) {
      l3 = l2;
      l2 = array[index];
    } else if (array[index] > l3 && array[index] !== l1 && array[index] !== l2) {
      l3 = array[index];
    }
        
  }

  return [l1,l2,l3];
}



console.log(findThreeLargestElements(inputArray));