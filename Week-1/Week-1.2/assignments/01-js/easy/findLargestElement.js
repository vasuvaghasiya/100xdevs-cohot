/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    let max = numbers[0];
    for(let i = 1 ; i < numbers.length; i++)
    {
        if(max<numbers[i])
        {
            max=numbers[i];
        }
    }
    return max;
    
}

module.exports = findLargestElement;



let arr = [1,7,4,9,12,18];
let max = findLargestElement(arr);
console.log(max);